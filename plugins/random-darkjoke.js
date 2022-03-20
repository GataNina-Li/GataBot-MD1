import fetch from 'node-fetch'

let handler = async (m, { conn, args, text }) => {

  let res = `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=rey2k22`
  conn.sendButton(m.chat, 'nih', wm, res, ['Next', '.darkjoke'], m, false)
}
handler.help = ['darkjoke']
handler.tags = ['random']
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = false

export default handler
