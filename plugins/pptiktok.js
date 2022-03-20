import fetch from 'node-fetch'

let handler = async (m, { conn, args, text }) => {

   if (!text) throw 'masukkan username tiktok'
   m.reply('*Wait Ngab*\nProses...')
  let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=rey2k22`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.command = /^(pptt)$/i

export default handler
