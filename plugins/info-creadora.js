function handler(m) {
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *el número de mi owner es wa.me/56977774748* *Eso son los contactos para ti,😸*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k', 'grupos', null, null, [
['𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣', '.infobot'],
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
