let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
	
let template = (args[0] || '').toLowerCase()  
//if (command == 'comprar') {
if (!args[0]) {
const xpperlimit = text

let user = global.db.data.users[m.sender]
    
if (!text) throw `donde el numero de dias?`
if (isNaN(text)) throw `${mg}*SOLO INGRESE EL NÚMERO*`
if (user.limit < xpperlimit) throw `No hay diamantes`
user.limit -= xpperlimit
    
var jumlahHari = 180000 * text //180000 3min | 900000 15 min | 1800000 30 min | 3600000 1 h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += jumlahHari
else user.premiumTime = now + jumlahHari
user.premium = true
    
conn.sendButton(m.chat,`✔️ Éxito
*Ha Gastado* :  -${xpperlimit} 💎
📛 *Nombre:* ${user.name}
📆 *minutos:* ${text} minutos
📉 *cuenta regresiva:* ${user.premiumTime - now}`, wm, null, [
[`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚 🏕️`, `${usedPrefix}adventure`],
[`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚 🏕️`, `${usedPrefix}adventure`],
[`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚 🏕️`, `${usedPrefix}adventure`]], fkontak, m)}
//break
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
const sections = [{
title: comienzo + ' 🌟 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ' + fin,
rows: [
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + command + 'ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 2", rowId: usedPrefix + command + ' ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 3", rowId: usedPrefix + command + ' ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 4", rowId: usedPrefix + command + ' ok'}
]},{
title: comienzo + ' 🌟 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ' + fin,
rows: [
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + command + ' ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 2", rowId: usedPrefix + ' ok'}
]}]

const listMessage = {
  text: `${htki} *🎟️ PREMIUM 🎟️* ${htka}`,
  footer: global.wm,
  title: `𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙄𝙉𝙁𝙊`,
  buttonText: `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
break		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
//handler.command = /^([01]|add|tambah|\+)p(rem)?$/i
handler.command = /^(comprar|premium|vip|prem|pass|pase|pre1|pre2|pre3|pre4|pre5|pre6|pre7|pre8)$/i
handler.group = true
handler.rowner = true

export default handler
