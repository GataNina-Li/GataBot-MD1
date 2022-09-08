/*let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastclaim + 7200000 //2 Horas 
if (new Date - global.db.data.users[m.sender].lastclaim < 7200000) throw `𝙔𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝙂𝘼𝙇𝙊 🎁\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍\n\n𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘾𝙇𝘼𝙄𝙈𝙀𝘿 𝙔𝙊𝙐𝙍 𝙂𝙄𝙁𝙏 🎁\n𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉 *${msToTime(time - new Date())}* 𝙏𝙊 𝘾𝙇𝘼𝙄𝙈 𝘼𝙂𝘼𝙄𝙉`

let img = 'https://img.freepik.com/vector-gratis/gente-diminuta-enormes-cajas-regalo-ilustracion-vectorial-plana-personas-que-celebran-cumpleanos-envian-o-reciben-regalos-lealtad-o-ideas-brillantes-recompensa-bonificacion-concepto-fiesta_74855-25016.jpg?w=2000'
let dia = Math.floor(Math.random() * 15)
let tok = Math.floor(Math.random() * 3)
let gata = Math.floor(Math.random() * 2000)
let expp = Math.floor(Math.random() * 2500)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += gata
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp
  
let texto = `
╭━━🎁━🎁━🎁━━⬣
┃✨ 𝙊𝘽𝙏𝙄𝙀𝙉𝙀𝙎 𝙐𝙉 𝙍𝙀𝙂𝘼𝙇𝙊!!
┃✨ 𝙔𝙊𝙐 𝙂𝙀𝙏 𝘼 𝙂𝙄𝙁𝙏!!
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎁 *${dia} Diamantes* 💎
┃🎁 *${tok} Tokens* 🪙
┃🎁 *${gata} GataCoins* 🐈
┃🎁 *${expp} Exp* ⚡
╰━━〔 𓃠 *${vs}* 〕━━⬣`

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

await conn.sendButton(m.chat, texto, wm, img, [['⛰️ 𝘼𝘽𝙍𝙄𝙍 𝘾𝙊𝙁𝙍𝙀 | 𝘾𝙊𝙁𝙁𝙀𝙍 ⛰️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['daily', 'reclamar', 'reclamo', 'regalo', 'claim'] 
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}*/

let handler = async (m, { isPrems, conn }) => {
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

let user = global.db.data.users[m.sender]
let premium = user.premium

let exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1
let exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1
	
let money = `${pickRandom([300, 500, 700, 900, 500, 800, 900, 1100, 1350, 1500])}` * 1
let moneypremium = `${pickRandom([800, 1300, 1600, 1900, 2200, 2500, 2700, 3000, 3300, 3500])}` * 1

let potion = `${pickRandom([1, 2, 3, 4, 5])}` * 1
let potionpremium = `${pickRandom([2, 4, 6, 9, 12])}` * 1

const recompensas = {
  exp: premium ? exppremium : exp,
  money: premium ? moneypremium : money,
  potion: premium ? potionpremium : potion,
}

let time = user.lastclaim + 120000 //2 Horas 7200000
if (new Date - user.lastclaim < 120000) throw `𝙔𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝙂𝘼𝙇𝙊 🎁\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍\n\n𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘾𝙇𝘼𝙄𝙈𝙀𝘿 𝙔𝙊𝙐𝙍 𝙂𝙄𝙁𝙏 🎁\n𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉 *${msToTime(time - new Date())}* 𝙏𝙊 𝘾𝙇𝘼𝙄𝙈 𝘼𝙂𝘼𝙄𝙉`
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n`
let text = `
╭━━🎁━🎁━🎁━━⬣
┃ ✨ 𝙊𝘽𝙏𝙄𝙀𝙉𝙀𝙎 𝙐𝙉 𝙍𝙀𝙂𝘼𝙇𝙊!!
┃ ✨ 𝙔𝙊𝙐 𝙂𝙀𝙏 𝘼 𝙂𝙄𝙁𝙏!!
┃ ${wm}
╰━━🎁━🎁━🎁━━⬣`
let img = 'https://img.freepik.com/vector-gratis/gente-diminuta-enormes-cajas-regalo-ilustracion-vectorial-plana-personas-que-celebran-cumpleanos-envian-o-reciben-regalos-lealtad-o-ideas-brillantes-recompensa-bonificacion-concepto-fiesta_74855-25016.jpg?w=2000'

await conn.sendButton(m.chat, text, texto, img, [['⛰️ 𝘼𝘽𝙍𝙄𝙍 𝘾𝙊𝙁𝙍𝙀 | 𝘾𝙊𝙁𝙁𝙀𝙍 ⛰️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu'] ], fkontak, m)  
user.lastclaim = new Date * 1
}}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['daily', 'reclamar', 'reclamo', 'regalo', 'claim'] 
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
