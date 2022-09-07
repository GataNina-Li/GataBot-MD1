let media = './media/menus/telegramfutabuclub.jpg'
let handler = async (m, { conn, command }) => {
let str = `
Nuestro grupo de Telegram
Link:https://t.me/FutabuClub
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/ColapsusHD/FutabuBot-MD', '𝙵𝚞𝚝𝚊𝚋𝚞𝙱𝚘𝚝-𝙼𝙳', null, null, [
['ENTRAR | JOIN 🤠', 'https://t.me/+8jpGLLS7_3A5YTIx']
], m,)}

handler.command = /^telegram|grupodetelegram|linktelegram$/i
handler.exp = 35
export default handler
