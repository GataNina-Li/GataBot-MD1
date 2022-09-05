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
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 1
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('limit')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.limit < gata) return conn.reply(m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('limit')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('limit')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`, fkontak, m)
user.limit -= gata

var tiempo = 180000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre, [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🏆 𝙏𝙊𝙋 𝙈𝙐𝙉𝘿𝙄𝘼𝙇 🏆`, `${usedPrefix}top`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text //tiempo total 
var tiempoDecretado = 15 * 1 //tiempo decretado 
const gata = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('kyubi')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('kyubi')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`, fkontak, m)
user.kyubi -= gata
    
var tiempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata} ${rpgshopp.emoticon('kyubi')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre, [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🏆 𝙏𝙊𝙋 𝙈𝙐𝙉𝘿𝙄𝘼𝙇 🏆`, `${usedPrefix}top`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text //tiempo total 
var tiempoDecretado = 30 * 1 //tiempo decretado 
const gata = 1
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('emerald')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.emerald < gata) return conn.reply(m.chat, `${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('emerald')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('emerald')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`, fkontak, m)
user.emerald -= gata
    
var tiempo = 180000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata} ${rpgshopp.emoticon('emerald')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre, [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🏆 𝙏𝙊𝙋 𝙈𝙐𝙉𝘿𝙄𝘼𝙇 🏆`, `${usedPrefix}top`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
const sections = [{
title: comienzo + ' 🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ' + fin,
rows: [
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵ : 𝗣𝗔𝗦𝗦 ⓵", description: ``, rowId: `${usedPrefix}prem 1`},
{title: "🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶ : 𝗣𝗔𝗦𝗦 ⓶", description: ``, rowId: `${usedPrefix}prem2 1`},
{title: "💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷ : 𝗣𝗔𝗦𝗦 ⓷", description: ``, rowId: `${usedPrefix}prem3 1`},
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓸ : 𝗣𝗔𝗦𝗦 ⓸", description: ``, rowId: `${usedPrefix}prem4 1`},
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹ : 𝗣𝗔𝗦𝗦 ⓹", description: ``, rowId: `${usedPrefix}prem5 1`},
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺ : 𝗣𝗔𝗦𝗦 ⓺", description: ``, rowId: `${usedPrefix}prem6 1`},
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻ : 𝗣𝗔𝗦𝗦 ⓻", description: ``, rowId: `${usedPrefix}prem7 1`},
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼ : 𝗣𝗔𝗦𝗦 ⓼", description: ``, rowId: `${usedPrefix}prem8 1`}
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
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
