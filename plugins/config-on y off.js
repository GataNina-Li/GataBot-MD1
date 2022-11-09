import fetch from 'node-fetch'
import fs from 'fs' 

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}

let titulo = [ 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : enguajeGB.smsNoGg()}`, 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : enguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.autolevelup ? '✅' : '❌' : enguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`,    
lenguajeGB.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`,     
lenguajeGB.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : enguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['autoread'] ? '❌' : '✅'}`, 
lenguajeGB.smsParaOw() + ' ' + `${bot.temporal ? '✅' : '❌'}`,      
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.stickers ? '✅' : '❌' : enguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autosticker ? '✅' : '❌' : enguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : enguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.audios ? '✅' : '❌' : enguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.modohorny ? '✅' : '❌' : enguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antitoxic ? '✅' : '❌' : enguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : enguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '✅' : '❌' : enguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : enguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : enguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : enguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : enguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : enguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : enguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : enguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : enguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : enguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaOw() + ' ' + `${global.opts['pconly'] ? '❌' : '✅'}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['gconly'] ? '❌' : '✅'}`]

let nombre = [ lenguajeGB.smsWel1(), lenguajeGB.smsDete1(), lenguajeGB.smsANivel1(), lenguajeGB.smsRestri1(), lenguajeGB.smsLlamar1(), lenguajeGB.smsModP1(), lenguajeGB.smsModAd1(), lenguajeGB.smsLect1(), lenguajeGB.smsTempo1(), lenguajeGB.smsStik1(), lenguajeGB.smsStickA1(), lenguajeGB.smsReacc1(), lenguajeGB.smsAudi1(), lenguajeGB.smsModHor1(), lenguajeGB.smsAntitoc1(), lenguajeGB.smsModOb1(), lenguajeGB.smsAntiEli1(), lenguajeGB.smsAntiInt1(), lenguajeGB.smsAntiE1(), lenguajeGB.smsAntiEE1(), lenguajeGB.smsAntiTT1(), lenguajeGB.smsAntiYT1(), lenguajeGB.smsAntiTEL1(), lenguajeGB.smsAntiFB1(),
lenguajeGB.smsAntiIG1(), lenguajeGB.smsAntiTW1(), lenguajeGB.smsSOLOP1(), lenguajeGB.smsSOLOG1()]

let descripción = [ lenguajeGB.smsWel2(), lenguajeGB.smsDete2(), lenguajeGB.smsANivel2(), lenguajeGB.smsRestri2(), lenguajeGB.smsLlamar2(), lenguajeGB.smsModP2(), lenguajeGB.smsModAd2(), lenguajeGB.smsLect2(), lenguajeGB.smsTempo2(), lenguajeGB.smsStik2(), lenguajeGB.smsStickA2(), lenguajeGB.smsReacc2(), lenguajeGB.smsAudi2(), lenguajeGB.smsModHor2(), lenguajeGB.smsAntitoc2(), lenguajeGB.smsModOb2(), lenguajeGB.smsAntiEli2(), lenguajeGB.smsAntiInt2(), lenguajeGB.smsAntiE2(), lenguajeGB.smsAntiEE2(), lenguajeGB.smsAntiTT2(), lenguajeGB.smsAntiYT2(), lenguajeGB.smsAntiTEL2(), lenguajeGB.smsAntiFB2(),
lenguajeGB.smsAntiIG2(), lenguajeGB.smsAntiTW2(), lenguajeGB.smsSOLOP2(), lenguajeGB.smsSOLOG2()]

let comando = [ "welcome", "detect", "autolevelup", "restrict", "anticall", "public", "modoadmin", "autoread", "temporal", "stickers", "autosticker", "reaction", "audios", "modohorny", "antitoxic", "antiviewonce", "antidelete", "antifake", "antilink", "antilink2", "antitiktok", "antiyoutube", "antitelegram", "antifacebook",
"antinstagram", "antitwitter", "pconly", "gconly"]

let sections = Object.keys(titulo, nombre, descripción, comando).map((v, index) => ({
title: `${titulo[v]}`,
rows: [{
title: `${nombre[v]} : ${command} ${comando[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v],
}], }))

let name = await conn.getName(m.sender)
const listMessage = {
text: '*~ CENTRO DE CONFIGURACIÓN*',
footer: `╭━━━[ *𝘼𝙅𝙐𝙎𝙏𝙀𝙎 𝙂𝘼𝙏𝘼𝘽𝙊𝙏* ]━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟 *¡Hola | Hi!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣
╭━━━━━━━━━━━━━⬣
┃ *𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙊 𝙐𝙎𝙀*
┃ *𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ En Mantnimiento...
╰━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝙍",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)

let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
    
case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break
    
case 'modohorny': case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
    
//case 'autolevelup':
//case 'autonivel':
//isUser = true
//user.autolevelup = isEnable
//break
		
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
    
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
    
case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'antispam':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiSpam = isEnable          
break
 
case 'modoadmin': case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
   
case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
    
case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	
throw false
}
	
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoRG']()}ღ *_COMANDO_* *|* ${type} 
ღ *_ACTUALMENTE_* *|* ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'} 
ღ *_EN ESTE_* *|* ${isAll ? 'BOT' : isUser ? '' : 'CHAT'}`, wm, null, [[`${isEnable ? '🔕 DESACTIVAR' : '🔔 ACTIVAR'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 🍀', '.menu']], fkontak, m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
