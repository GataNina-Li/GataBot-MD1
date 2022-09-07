/*let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
   }
   
export default handler */


/*export async function before(m, { conn, isAdmin, isBotAdmin }) {
let user = global.db.data.users[m.sender]
   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
conn.reply(htki + ' Número prohibido ' + htka)
conn.reply(htki + ' Expulsar al usuario ' + htka)
conn.groupParticipantsUpdate(m.chat, [user], "remove")
}}*/

import db from '../lib/database.js'
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin) {
		
if (m.sender.startsWith('504' || '504')) {
global.db.data.users[m.sender].banned = true
await m.reply(' Número prohibido ')
await m.reply(' Expulsar al usuario ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
}
export default handler
