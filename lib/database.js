import Helper from './helper.js'
import { Low, JSONFile } from 'lowdb'
import { cloudDBAdapter, mongoDB, mongoDBV2 } from './DB_Adapters/index.js'
import lodash from 'lodash'

const databaseUrl = Helper.opts['db'] || ''
const databaseAdapter = /https?:\/\//.test(databaseUrl) ?
  new cloudDBAdapter(databaseUrl) : /mongodb(\+srv)?:\/\//i.test(databaseUrl) ?
    (Helper.opts['mongodbv2'] ? new mongoDBV2(databaseUrl) :
      new mongoDB(databaseUrl)) :
    new JSONFile(`${Helper.opts._[0] ? Helper.opts._[0] + '_' : ''}database.json`)
let database = new Low(databaseAdapter)

loadDatabase()

async function loadDatabase() {
  if (database.READ) return new Promise((resolve) => setInterval(function () {
    if (!database.READ) {
      clearInterval(this)
      resolve(database.data == null ? loadDatabase(arguments) : database.data)
    }
  }, 1 * 1000))
  if (database.data !== null) return
  database.READ = true
  await database.read().catch(console.error)
  database.READ = false
  database.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(database.data || {})
  }
  database.chain = lodash.chain(database.data)

  return database.data
}


export {
  databaseUrl,
  databaseAdapter,
  database,
  loadDatabase
}
/** @type {typeof database & { chain: ReturnType<lodash.chain>, READ: boolean }} */
export default database

