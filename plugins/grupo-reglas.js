let media = './media/menus/telegramfutabuclub.jpg'
let handler = async (m, { conn, command }) => {
let str = `
_📝| Reglas: *No Spam Al Menos Que Pediste Permiso A Un Admin, No Binarios, No Gore, Se Permite Futanari y Traps De Todo Tipo, Menos de Earfuck Y Scat, No CP, No Acoso,No Mandar Packs,etc*_
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/ColapsusHD/FutabuBot-MD', '𝙵𝚞𝚝𝚊𝚋𝚞𝙱𝚘𝚝-𝙼𝙳', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^reglas|rules|reglasgrupo|rulesgrupo|rulesgroup$/i
handler.exp = 35
export default handler
