import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Proporcione un número, una etiqueta o responda al mensaje de destino.`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `¡El número que ingresaste está mal!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Formato incorrecto!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `Destino o Número no encontrado, puede haber dejado o no ser miembro de este grupo.`, m)
    if(user === m.sender) return conn.reply(m.chat, `¡No puedo salir conmigo mismo!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `No puedes salir conmigo t_t`, m)
    let me = m.sender

    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat, `Maaf @${user.split('@')[0]} no dispararte`, m, { contextInfo: { mentionedJid: [user]}})
    }else{
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Felicitaciones, oficialmente están saliendo. @${user.split('@')[0]}\n\nQue dure para siempre y siempre sea feliz @${user.split('@')[0]} 💓 @${me.split('@')[0]} 🥳🥳🥳`,m, { contextInfo: { mentionedJid: [user, me]}})
    }
	}	
}
handler.command = /^(aceptar|acepto)$/i
handler.group = true
handler.fail = null
export default handler
