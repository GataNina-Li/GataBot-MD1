import fetch from 'node-fetch'

let handler = async (m, { conn, args, text }) => {

  let res = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=rey2k22`
  conn.sendButton(m.chat, 'nih', wm, res, ['Next', '.meme'], m, false)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
handler.limit = false

export default handler
