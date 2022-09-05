let handler = async (m, { conn, text, usedPrefix, command, args }) => {
	
let template = (args[0] || '').toLowerCase()  
if (args[0]) {
switch (template) {
	
case 'addprem':
	case 'addpremm':
	case 'addpremmm':
const xpperlimit = text

let user = global.db.data.users[m.sender]
    
if (!text) throw `donde el numero de dias?`
if (isNaN(text)) throw `${mg}*SOLO INGRESE EL NÚMERO*`
if (user.limit < xpperlimit) throw `No hay diamantes`
user.limit -= xpperlimit
    
var jumlahHari = 180000 * text //86400000 son 24 horas
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += jumlahHari
else user.premiumTime = now + jumlahHari
user.premium = true
    
m.reply(`✔️ Éxito
*Ha Gastado* :  -${xpperlimit} 💎
📛 *Nombre:* ${user.name}
📆 *minutos:* ${text} minutos
📉 *cuenta regresiva:* ${user.premiumTime - now}`)
break
		
case 'pasepremium':
case 'passprem':
case 'passpremium':
case 'premiumpase':
case 'premiumpass':
case 'vippass':   
case 'pasevip':   
case 'passvip':    
const sections = [
    {
	title: comienzo + ' 🌟 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ' + fin,
	rows: [
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + command + 'ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 2", rowId: usedPrefix + command + ' ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 3", rowId: usedPrefix + command + ' ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 4", rowId: usedPrefix + command + ' ok'}
]
},{
	title: comienzo + ' 🌟 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ' + fin,
	rows: [
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + command + ' ok'},
{title: "🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 2", rowId: usedPrefix + ' ok'}
]}
]

const listMessage = {
  text: `${htki} *🎟️ PREMIUM 🎟️* ${htka}`,
  footer: global.wm,
  title: `𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙄𝙉𝙁𝙊`,
  buttonText: `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠`,
  sections
}

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


//default:
//if (!/pasprem/.test(command))
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
//throw false
break		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
//handler.command = /^([01]|add|tambah|\+)p(rem)?$/i
handler.command = /^(pre)$/i
handler.group = true
handler.rowner = true

export default handler
