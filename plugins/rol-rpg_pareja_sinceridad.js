let handler = async (m, { conn }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let persona = global.db.data.users[m.sender].pasangan

  if (global.db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `HAS RECHAZADO SER SU PAREJA`, m)
  
  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `has estado saliendo @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  conn.reply(m.chat, `PARECE QUE ${await conn.getName(persona)} NO HA ACEPTADO NI RECHAZADO TU PROPUESTA DE ESTAR AMBOS EN UNA RELACION`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(cancelar|sinceridad|rechazar|mipareja)$/i
handler.group = true
export default handler
