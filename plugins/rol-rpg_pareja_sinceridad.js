let handler = async (m, { conn }) => {
  if (global.db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `No vas a dispararle a nadie!`, m)
  
  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `has estado saliendo @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  conn.reply(m.chat, `PARECE QUE @${global.db.data.users[m.sender].pasangan.split('@')[0]} NO HA ACEPTADO NI RECHAZADO TU PROPUESTA DE ESTAR AMBOS EN UNA RELACION`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(cancelar|sinceridad|rechazar)$/i
handler.group = true
export default handler
