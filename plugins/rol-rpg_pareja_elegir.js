let handler = async (m, { conn, usedPrefix, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Lo siento, el número que ingresaste es incorrecto!`, m)

  if (!text && !m.quoted){
    var user = m.sender
    var orang = "Tú"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    var orang = "La persona que etiquetaste"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    var orang = "La persona a la que estás respondiendo"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    var orang = "La persona que etiquetaste"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("¡El objetivo no está registrado en la base de datos!")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return m.reply("¡El objetivo no está registrado en la base de datos!")
  }

  if (global.db.data.users[user].pasangan == "") {
    conn.reply(m.chat, `${orang} sin pareja y sin dispararle a nadie\n\n*Ketik .jadian @user dispararle a alguien*`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    conn.reply(m.chat, `${orang} esperando una respuesta de @${global.db.data.users[user].pasangan.split('@')[0]} porque no es aceptado o rechazado\n\nEscribe *${usedPrefix}ikhlasin* dejar ir`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }else {
    conn.reply(m.chat, `${orang} esta en una relacion con @${global.db.data.users[user].pasangan.split('@')[0]} 💓💓💓`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }
}
handler.command = /^(elegir)$/i

export default handler
