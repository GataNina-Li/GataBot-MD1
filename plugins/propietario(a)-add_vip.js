let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
//let userr = m.chat.split`-`[0]
//let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
//let res = [];
if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }
  if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
let userr = global.db.data.users[who]
if (!who) throw `Menciona a la Persona`
let txt = text.replace('@' + who.split`@`[0], '').trim()
let name = await who.split`@`[0]

var hora1 = 3600000 * txt //1h
var hora3 = 10800000 * txt //3h
var hora5 = 18000000 * txt //5h
var dia1 = 86400000 * txt //1d
var semana1 = 604800000 * txt //1s
var mes1 = 2629800000 * txt //1m
var now = new Date() * 1

if (!txt) throw `*Ingrese el número de tiempo premium*`
if (isNaN(txt)) return m.reply(`Solo número!\n\nEjemplo:\n${usedPrefix + command} @${m.sender.split`@`[0]} 1`)

let titulo = [ 'PREMIUM 1', 'PREMIUM 2', 'PREMIUM 3', 'PREMIUM 4', 'PREMIUM 5', 'PREMIUM 6']
let nombre = [ 'PREMIUM BÁSICO', 'PREMIUM NORMAL', 'PREMIUM ESPECIAL', 'PREMIUM PRO', 'PREMIUM PLUS', 'PREMIUM MAGISTRAL']
let descripción = [ 'Premium durante 1 Hora', 'Premium durante 3 Horas', 'Premium durante 5 Horas', 'Premium durante 1 Día', 'Premium durante 1 Semana', 'Premium durante 1 Mes']
let tiempo = [ hora1, hora3, hora5, dia1, semana1, mes1]
let comando = [ 'premium1', `${command[2]}`, `${command[3]}`, `${command[4]}`, `${command[5]}`, `${command[6]}`]

let sections = Object.keys(titulo, nombre, descripción, tiempo, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + comando[v] + ' ' + `@${user.split('@')[0]}`, }], }))

const listMessage = {
text: `*ELIJA EL TIEMPO PREMIUM*
${wm}`,
title: null,
buttonText: `TIEMPO AQUÍ `,
sections }
  
if (command == 'addprem') {
//if (!txt || !text) return
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
  
 
if (command == 'premium1') {
if (now < user.premiumTime) user.premiumTime += hora1
else user.premiumTime = now + hora1
user.premium = true
m.reply(`*🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*

*✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${name}*
*🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${hora1 } hora(s)*
*📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*`)}

  
if (command == 'premium2') {
if (now < user.premiumTime) user.premiumTime += hora3
else user.premiumTime = now + hora1
user.premium = true
m.reply(`*🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*

*✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${name}*
*🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${hora3} hora(s)*
*📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*`)}

  
if (command == 'premium3') {
if (now < user.premiumTime) user.premiumTime += hora5
else user.premiumTime = now + hora5
user.premium = true
m.reply(`*🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*

*✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${name}*
*🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${hora5} hora(s)*
*📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*`)}
  
  
if (command == 'premium4') {
if (now < user.premiumTime) user.premiumTime += dia1
else user.premiumTime = now + dia1
user.premium = true
m.reply(`*🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*

*✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${name}*
*🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${dia1} Día(s)*
*📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*`)}

  
if (command == 'premium5') {
if (now < user.premiumTime) user.premiumTime += semana1
else user.premiumTime = now + semana1
user.premium = true
m.reply(`*🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*

*✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${name}*
*🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${semana1} Semana(s)*
*📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*`)}

  
if (command == 'premium6') {
if (now < user.premiumTime) user.premiumTime += mes1
else user.premiumTime = now + mes1
user.premium = true
m.reply(`*🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*

*✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${name}*
*🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${mes1} Mes(es)*
*📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*`)}
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = ['addprem', 'premium1', 'premium2', 'premium3', 'premium4', 'premium5', 'premium6'] 
handler.group = true
handler.owner = true
handler.botAdmin = true
export default handler

/*let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙎𝙀𝙍 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋 💎\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*\n\n𝙏𝘼𝙂 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝙃𝙊 𝙒𝙄𝙇𝙇 𝘽𝙀 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 💎\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `${iig}𝙀𝙇/𝙇𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙔𝘼 𝙀𝙎 𝙑𝙄𝙋 ✨\n\n𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 𝙄𝙎 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ✨`
global.prems.push(`${who.split`@`[0]}`)
  //user.premium = true
conn.reply(m.chat, `${eg}@${who.split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋. 𝙉𝙊 𝙑𝘼 𝙏𝙀𝙉𝙀𝙍 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 𝘾𝙊𝙉 ${gt} 😼\n\n@${who.split`@`[0]} 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙒 𝘼 𝙑𝙄𝙋 𝙐𝙎𝙀𝙍. 𝙒𝙄𝙇𝙇 𝙉𝙊𝙏 𝙃𝘼𝙑𝙀 𝙇𝙄𝙈𝙄𝙏𝙎 😼`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler*/
