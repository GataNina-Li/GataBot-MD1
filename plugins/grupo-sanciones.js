//let media = './media/menus/telegramfutabuclub.jpg'
let handler = async (m, { conn, command }) => {
let str = `
----------Futabu Club----------

🔨| Sanciones:

• *No Respetar*
  ° *1 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Peleas o Discusiones*
  ° *2 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Pedofilia*
  ° *BAN PERMANENTE*

• *Doxear*
  ° *BAN PERMANENTE*

• *Ser toxico*
  ° *2 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Usar comandos RPG*
  ° *1 Warns (Advertencias), Si continúa después de los warns o avisos *4 Warns o Ban Temporal*

• *Spamear*
  ° *1 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Mandar Binarios o Inmune*
  ° *BAN PERMANENTE*

• *Mandar Gore*
  ° *4 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal o Permanente*

• *Mandar CP*
  ° *BAN PERMANENTE*

• *Acosar*
  ° *4 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal o Permanente*

• *Mandar Packs*
  ° *5 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Permanente*

• *Uso mal de comandos +18 del bot o romper limites*
  ° *3 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Mandar Scat*
  ° *4 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Mandar Earfuck*
  ° *2 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Floodear*
  ° *3 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal o Permanente*

-------------------------------

¿Como puedo sacar mis Warns? Si después de 1 meses no obtuviste algún warn se irá eliminando de apoco.

¿Que pasa si llego a las 15 Warns? Quedaras baneado permanente del grupo.

¿Hay forma de apelar? Si, pero eso dependera del admin y las cuestiónes que se tomen con los admins supremos y los otros admins.
`.trim()
  
conn.sendHydrated(m.chat, str, wm, null, 'https://github.com/ColapsusHD/FutabuBot-MD', '𝙵𝚞𝚝𝚊𝚋𝚞𝙱𝚘𝚝-𝙼𝙳', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^sanciones|sanctions|sancionesgrupo|sanctionsgroup$/i
handler.exp = 35
export default handler
