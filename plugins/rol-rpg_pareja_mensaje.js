import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, text, participants, groupMetadata}) => {
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    
    //m.reply(`*Ciee...* ${toM(a)} ❤️ ${toM(b)}`, null, {
        //mentions: [a, b]
    //})
    
    let caption = `*Mensaje de amor...* ${toM(a)} ❤️ ${toM(b)}\n${await ktnmbk.getRandom()}`
    await conn.sendButton(m.chat, caption, wm, null, [['jodohnya', `${usedPrefix}jodohnya`],['jodohku', `${usedPrefix}jodohku`]], m, { mentions: conn.parseMention(caption) })
    }
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `ingrese el número, la etiqueta de destino o responda al mensaje de destino`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `_*Número invalido.*_`, m)
  if(number.length > 15) return conn.reply(m.chat, `*_Formato inválido.*_`, m)
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
    if(!users) return conn.reply(m.chat, `*_Objetivo o Número no encontrado, puede haber dejado o no ser miembro de este grupo.*_`, m)
    if(user === m.sender) return conn.reply(m.chat, `_*no puedo salir conmigo mismo.*_`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `_*no puedo salir conmigo. :')*_`, m)

    if (typeof global.db.data.users[user] == "undefined") return m.reply("_*La persona que etiquetaste no está registrada en la base de datos.*_")
    var pacar = global.db.data.users[user].pasangan
    var spac = global.db.data.users[m.sender].pasangan
    if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
      conn.reply(m.chat, `Ya estas saliendo @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\npor favor rompe (escriba .disconnect para desconectar) para disparar @${user.split('@')[0]}\n\nPor cierto que son muy leales!`, m , { contextInfo: { mentionedJid: [user, global.db.data.users[m.sender].pasangan]}})
    }else if(global.db.data.users[user].pasangan != ""){
      if (pacar){
        if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
        conn.reply(m.chat, `Lo siento, @${user.split('@')[0]} ya saliendo @${pacar.split('@')[0]}\nPor favor busque otro socio!`, m , { contextInfo: { mentionedJid: [user, pacar]}})
      }else{
        global.db.data.users[m.sender].pasangan = user
        conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nacabas de invitar @${user.split('@')[0]} Fechado\n\nPor favor espere su respuesta!\n\nEscribe *${usedPrefix}terima @user* por aceptar\n*${usedPrefix}tolak @user Rechazar*`, m , { contextInfo: { mentionedJid: [user]}})
      }
    }else if (global.db.data.users[user].pasangan == m.sender){
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Felicitaciones, oficialmente están saliendo. @${user.split('@')[0]}\n\nQue dure para siempre y siempre sea feliz 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
    }else {
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nacabas de invitar @${user.split('@')[0]} Fechado\n\nPor favor espere su respuesta!\n\nEscriba *${usedPrefix}terima @user* untuk menerima\n*${usedPrefix}tolak @user untuk menolak*`, m , { contextInfo: { mentionedJid: [user]}})
    }
	}	
}
handler.command = /^(mensaje)$/i
handler.group = true

export default handler


let ktnmbk = [
"Hay momentos en los que no me gusta estar solo. Pero tampoco quiero que todos me acompañen, solo te quiero a ti",
"¡Me acabo de dar cuenta de que has sido rico todo este tiempo! Como lo que he estado buscando todo este tiempo. ¿Quieres ser mi novia?",
"Agradezco a mis ojos, porque estos ojos me llevaron a encontrarte",
"¿Puedo enviarte un CV o no? Porque quiero postularme para ser novia".,
"No soy el más grande, pero estoy seguro que si puedo hacerte feliz con amor y cariño, ¿me quieres verdad?",
"Solo soy una persona común que tiene muchos defectos y puede que no merezca tu amor, pero si estás dispuesto a aceptarme como amante, prometo hacer lo que sea mejor para ti. ¿Aceptarás mi amor?",
"Quiero decir algo. Me gusta desde hace mucho tiempo, pero no me atrevo a decirlo. Entonces, decidí solo WA. Quiero que seas mi novia",
"Quiero decir algo que no puedo contener más. Te amo, ¿serás mi novia?",
"Quiero ser una persona que pueda hacerte reír y sonreír todos los días. ¿Serás mi novia?",
"Quiero tener una charla seria contigo. Todo este tiempo he albergado sentimientos por ti y siempre he estado pendiente de ti. Si no te importa, ¿quieres ser mi novia?",
"Te miro y veo el resto de mi vida ante mis ojos.",
"No tengo todo, pero al menos tengo suficiente amor para ti",
"Me gustaste desde el principio. Eres tan simple, pero la sencillez es muy especial a mis ojos. Será perfecto si eres especial en mi corazón",
"Realmente estoy enamorado de ti. ¿Serás mía?",
"No te dije que no porque no tengo cupo ni crédito, pero estoy disfrutando de este anhelo por ti. Tal vez te sorprendas al escuchar eso. Siempre me has gustado",
"No quiero que seas el sol de mi vida, porque aunque hace calor estás muy lejos. Tampoco quiero que seas aire, porque aunque te necesito y estás muy cerca, pero todos pueden respirarte también. Solo quiero que seas sangre que pueda estar muy cerca de mí",
"No sé hasta cuándo terminará mi edad. Todo lo que sé es que mi amor es para siempre solo para ti",
"Realmente disfruté el tiempo que pasamos juntos hoy. También nos conocemos desde hace mucho tiempo. En este día soleado, quiero expresarte que te amo",
"Siempre imaginé lo hermoso que sería si algún día pudiéramos construir un arca de una casa y vivir juntos hasta el final de la vida. Sin embargo, todo eso no habría sucedido si los dos no hubiéramos estado juntos hasta ahora. ¿Serás mi amante?",
"Me preparo mentalmente para hoy. Tienes que ser mi novia para tratar este amor incontrolable",
"Sé que no tenemos la misma edad, pero ¿puedo vivir contigo por el resto de mi vida?",
"Sé que hemos sido amigos durante mucho tiempo. ¿Pero no está mal si me gustas? Cualquiera que sea tu respuesta, acepto. Lo más importante es ser honesto desde el fondo de mi corazón",
"No puedo empezar esto primero, pero te daré un código que me gustas. Si entiendes este código, estaremos juntos",
"Soy demasiado estúpido o eres demasiado egoísta para hacer que me enamore de ti",
"Cualquier cosa sobre ti, nunca he encontrado aburrimiento en ello. Porque estar a tu lado, el regalo más hermoso para mí. Sé mi amante, hey tú",
"Con el permiso de Alá y la bendición de mamá papá, ¿quieres ser mi novio o no?",
"¿Y si nos convertimos en una banda de ladrones? Yo robé tu corazón y tú me robaste el mío",
"Feliz es que tú y yo nos hemos convertido en nosotros",
"Mañana, si no funciona, puedo registrarme para ser tu novia. Déjame tener trabajo para pensar siempre en ti",
"Déjame hacerte feliz para siempre. Solo tienes que hacer una cosa: Enamórate de mí",
"Que toda mi alegría sea tuya, toda tu tristeza sea mía. ¡Que el mundo entero sea tuyo, solo tú seas mía!",
"Que el pasado sea mi pasado, pero por el presente, ¿serás tú mi futuro?",
"¿Puedes darme una dirección a tu corazón? Parece que me he perdido en tus ojos",
"No es el trono o el tesoro lo que busco, sino el retorno de mi amor lo que espero de ti. La respuesta es sí",
"La forma en que puedes hacerme reír incluso en los días más oscuros me hace sentir más ligero que cualquier otra cosa. Quiero que seas mía",
"Mi amor por ti es incuestionable porque este amor es sincero desde el fondo de mi corazón",
"Mi amor por ti es como un número del 5 al 10. No hay segundo. Quiero que seas la única mujer en mi corazón",
"Qué chico se atreve a lastimarte. Aquí te trataré, mientras quieras ser mi novia",
"Oye, ¿qué estás haciendo? Sal de la casa y mira la luna esta noche. La luz es hermosa y encantadora, pero sería aún más hermosa si yo estuviera a tu lado. ¿Qué tal si estamos juntos?"
]
