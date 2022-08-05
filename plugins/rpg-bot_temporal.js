let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
  if (!args[0]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 1*\n\n*1 TOKEN 🪙 = 10 MINUTOS*`
let [_, code] = args[0].match(linkRegex) || []
    
  if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
let user = db.data.users[m.sender]

  if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)

let img = 'https://i.imgur.com/8fK4h6F.jpg'
  if (user.joincount === 0 ) throw `${ag}*¡YA NO TIENES TOKENS! 🪙*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TÚ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`
        //user.joincount -= 1
 
if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 1*\n\n*1 TOKEN 🪙 = 10 MINUTOS*`
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}😻 *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => { 
  user.joincount -= 1
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
//let res = await conn.groupAcceptInvite(code) 
//conn.reply(m.chat, `${eg}😻 *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => {
 //var jumlahHari = 600000 * 1 // 10 minutos | Usuarios
// var now = new Date() * 1
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `✅ SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES ⏳ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENÚ*\n\n🚪 *ME SALDRÉ AUTOMÁTICAMENTE DESPUÉS DE:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) 🪙*`, m)
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

  if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 1*\n\n*1 TOKEN 🪙 = 10 MINUTOS*`
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}😻 *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => { 
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
         
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `✅ *SE HA UNIDO AL GRUPO!!!*\n${await conn.getName(res)}\n\n*RECUERDE QUE ES ⏳ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENÚ*\n\n🚪 *ME SALDRÉ AUTOMÁTICAMENTE DESPUÉS DE:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) 🪙*`, m)  
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARÁ A REALIZAR DIFERENTES ACTIVIDADES 🪄 AL PRIVADO O GRUPO Y TAMBIÉN TE VAS A DIVERTIR 🎈 CON SUS MULTIPLES FUNCIONES, DISFRUTA DE GATABOT!!! 😸*\n\n💖 *GATABOT FUE INVITADA POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, teks, wm, null, [['Creadora', `/creadora`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, res) })}
    
    //if (command == 'tiempo') {
        //let [_, code] = args[0].match(linkRegex) || []
        //let res = await conn.groupAcceptInvite
       // var now = new Date() * 1
     //conn.reply(m.chat, `${rg}*${await conn.getName(res)} EN ESTE GRUPO QUEDA EL SIGUIENTE TIEMPO PARA QUE CADUQUE EL\LOS TOKEN(S):*\n\n${msToDate(global.db.data.chats[res].expired - now)}`, m)   
    //}
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
