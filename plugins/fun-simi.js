import fetch from 'node-fetch'
let handler = async (m, {text}) => {
  let api = await fetch(`https://simsimi.info/api/?text=${text}&lc=id`)
  let res = await api.json()
  m.reply(res.success)
}
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler