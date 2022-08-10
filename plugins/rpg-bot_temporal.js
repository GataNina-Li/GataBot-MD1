let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
  if (!global.db.data.settings[conn.user.jid].temporal) throw `${ag}𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼 𝙃𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘿𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝘼 𝙂𝙍𝙐𝙋𝙊𝙎 𝙑𝙐𝙀𝙇𝙑𝘼 𝙈Á𝙎 𝙏𝘼𝙍𝘿𝙀 𝙊 𝙎𝙄 𝙀𝙎 𝙊𝙒𝙉𝙀𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏 𝙐𝙎𝙀 *#on temporal* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙈𝙔 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 𝙃𝘼𝙎 𝙍𝙀𝙎𝙏𝙍𝙄𝘾𝙏𝙀𝘿 𝙏𝙃𝙄𝙎 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝙊𝙁 𝙀𝙉𝙏𝙀𝙍𝙄𝙉𝙂 𝙏𝙃𝙀 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙍𝙄𝙇𝙔 𝙏𝙊 𝙂𝙍𝙊𝙐𝙋𝙎 𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙇𝘼𝙏𝙀𝙍 𝙊𝙍 𝙄𝙁 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙏𝙃𝙀 𝙊𝙒𝙉𝙀𝙍 𝙊𝙁 𝙏𝙃𝙀 𝘽𝙊𝙏 𝙐𝙎𝙀 *#on temporal* 𝙁𝙊𝙍 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀`
  
  if (!args[0]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN 🪙 = 30 MINUTOS*`
let [_, code] = args[0].match(linkRegex) || [] 
if (!linkRegex.test(args[0])) throw `${fg}𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊.` //Aquí 

    
  //if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
let user = db.data.users[m.sender]

  if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let img = 'https://i.imgur.com/8fK4h6F.jpg'
if (user.joincount < 1) throw `${ag}*¡YA NO TIENES TOKENS! 🪙*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TÚ GRUPO CON EL COMANDO ${usedPrefix}buy3 o ${usedPrefix}buyall3* *cantidad*`
 //if (user.joincount === 0 ) throw `${ag}*¡YA NO TIENES TOKENS! 🪙*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TÚ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`  
 if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN 🪙 = 30 MINUTOS*`
 if (!linkRegex.test(args[0])) throw `${fg}𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊.` //Aquí 
 if (isNaN(args[1])) throw `${mg}*SOLO INGRESE EL NÚMERO DE TOKEN(S)*`
 if (args[1] < 3) throw `${fg}*MÁXIMO 3 TOKEN(S) PARA PODER INVITAR A GATABOT*`
 if (args[1] > 3) throw `${fg}*MÍNIMO 3 TOKEN(S) PARA PODER INVITAR A GATABOT*` //Solo ingresará si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}😻 *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => { 
  user.joincount -= args[1] 
 var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
 var now = new Date() * 1
//let res = await conn.groupAcceptInvite(code) 
//conn.reply(m.chat, `${eg}😻 *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => {
 //var jumlahHari = 600000 * 1 // 10 minutos | Usuarios
// var now = new Date() * 1 
 
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `✅ SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES ⏳ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENÚ*\n\n🚪 *ME SALDRÉ AUTOMÁTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) 🪙*\n\n❕ *PUEDE USAR EL COMANDO TAMBIÉN EN GRUPO MIENTRAS ESTE YO*\n\n❕ *SI QUIERE QUE ESTE POR MÁS TIEMPO AUMENTE EL NÚMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\n❗ *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA NO SE VA PODER*`, m)
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARÁ A REALIZAR DIFERENTES ACTIVIDADES 🪄 AL PRIVADO O GRUPO Y TAMBIÉN TE VAS A DIVERTIR 🎈 CON SUS MULTIPLES FUNCIONES, DISFRUTA DE GATABOT!!! 😸*\n\n💖 *GATABOT FUE INVITADA POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
}})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*¡YA NO TIENES TOKENS! 🪙*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TÚ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`
  if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN 🪙 = 30 MINUTOS*`
if (!linkRegex.test(args[0])) throw `${fg}𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊.` //Aquí 

  let res = await conn.groupAcceptInvite(code) 
  conn.reply(m.chat, `${eg}😻 *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => { //Si el Owner se une al Grupo no habrá temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `✅ SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES ⏳ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENÚ*\n\n🚪 *ME SALDRÉ AUTOMÁTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) 🪙*\n\n❕ *PUEDE USAR EL COMANDO TAMBIÉN EN GRUPO MIENTRAS ESTE YO*\n\n❕ *SI QUIERE QUE ESTE POR MÁS TIEMPO AUMENTE EL NÚMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\n❗ *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA NO SE VA PODER*`, m)  
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARÁ A REALIZAR DIFERENTES ACTIVIDADES 🪄 AL PRIVADO O GRUPO Y TAMBIÉN TE VAS A DIVERTIR 🎈 CON SUS MULTIPLES FUNCIONES, DISFRUTA DE GATABOT!!! 😸*\n\n💖 *GATABOT FUE INVITADA POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creadora', `/creadora`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, res) })}
    
}

handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd'] ///^(temporal|tiempo)$/i
export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " *Día(s)* ☀️\n" + hours + " *Hora(s)* ⏳\n" + minutes + " *Minuto(s)* ⏰\n" + sec + " *Segundo(s)* 🕐\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
