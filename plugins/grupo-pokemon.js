let media = './media/menus/pokefuta.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
❤‍🔥| Grupo de solo tematica de POKÉMON FUTANARI
Link: https://chat.whatsapp.com/Bcj1KXg4xJc9L34RMqrIS6
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://chat.whatsapp.com/Bcj1KXg4xJc9L34RMqrIS6', 'ENTRAR | JOIN 🤠', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^pokemon|grupodepokemon|pokefuta$/i
handler.exp = 35
export default handler
