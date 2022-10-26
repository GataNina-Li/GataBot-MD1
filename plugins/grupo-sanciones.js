//let media = './media/menus/telegramfutabuclub.jpg'
let handler = async (m, { conn, command }) => {
let str = `
----------Futabu Club----------

🔨| Sanciones:

• *No Respetar*
  ° *2 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Peleas o Discusiones*
  ° *4 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Doxear*
  ° *5 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Permanente*

• *Ser toxico*
  ° *3 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Usar comandos RPG*
  ° *2 Warns (Advertencias), Si continúa después de los warns o avisos *4 Warns o Ban Temporal*

• *Spamear*
  ° *2 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Mandar Binarios o Inmune*
  ° *8 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Permanente*

• *Mandar Gore*
  ° *6 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal o Permanente*

• *Mandar CP*
  ° *Ban Permanente*

• *Acosar*
  ° *4 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal o Permanente*

• *Mandar Packs*
  ° *3 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Permanente*

• *Uso mal de comandos +18 del bot o romper limites*
  ° *5 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Mandar Scat*
  ° *5 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Mandar Earfuck*
  ° *3 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal*

• *Floodear*
  ° *6 Warns (Advertencias)*, Si continúa después de los warns o avisos *Ban Temporal o Permanente*

-------------------------------

¿Como puedo sacar mis Warns? Si después de 5 meses no obtuviste algún warn se irá eliminando de apoco.

¿Que pasa si llego a las 10 Warns? Quedaras baneado permanente del grupo.

¿Hay forma de apelar? Si, pero eso dependera del admin y las cuestiónes que se tomen con los admins supremos y los otros admins.
`.trim()
  
conn.sendHydrated(m.chat, str, wm, null, 'https://github.com/ColapsusHD/FutabuBot-MD', '𝙵𝚞𝚝𝚊𝚋𝚞𝙱𝚘𝚝-𝙼𝙳', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^sanciones|sanctions|sancionesgrupo|sanctionsgroup$/i
handler.exp = 35
export default handler
