import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 |  𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✳️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: null, rowId: `${usedPrefix}ping`}, 
{title: "💎 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙧 | 𝙐𝙥𝙙𝙖𝙩𝙚 💎", description: "𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝙇𝘼 𝙐𝙇𝙏𝙄𝙈𝘼 𝙑𝙀𝙍𝙎𝙄𝙊𝙉\n𝙐𝙋𝘿𝘼𝙏𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙇𝘼𝙏𝙀𝙎𝙏 𝙑𝙀𝙍𝙎𝙄𝙊𝙉", rowId: `${usedPrefix}update`},
{title: "💎 𝙍𝙚𝙞𝙣𝙞𝙘𝙞𝙖𝙧 | 𝙍𝙚𝙨𝙩𝙖𝙧𝙩 💎", description: "𝙍𝙀𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝙇𝘼 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙇\n𝙍𝙀𝙎𝙏𝘼𝙍𝙏 𝙏𝙃𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙇", rowId: `${usedPrefix}reiniciar`},
{title: "💎 𝘽𝙤𝙧𝙧𝙖𝙧𝙩𝙢𝙥 | 𝘾𝙡𝙚𝙖𝙧𝙩𝙢𝙥 💎", description: "𝘽𝙊𝙍𝙍𝘼𝙍 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝘾𝙊𝙉𝙎𝙐𝙈𝙊\n𝘿𝙀𝙇𝙀𝙏𝙀 𝘾𝙊𝙉𝙎𝙐𝙈𝙋𝙏𝙄𝙊𝙉 𝙁𝙄𝙇𝙀𝙎", rowId: `${usedPrefix}clear`},
{title: "💎 𝘽𝙖𝙣𝙚𝙖𝙧 𝘾𝙝𝙖𝙩 | 𝘽𝙖𝙣 𝘾𝙝𝙖𝙩 💎", description: "𝙊𝙈𝙄𝙏𝙄𝙍 𝙐𝙎𝙊 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙀𝙉 𝘾𝙃𝘼𝙏𝙎\n𝘽𝙔𝙋𝘼𝙎𝙎 𝙐𝙎𝙄𝙉𝙂 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙄𝙉 𝘾𝙃𝘼𝙏𝙎", rowId: `${usedPrefix}ban1`},   
{title: "💎 𝘿𝙚𝙨𝙗𝙖𝙣𝙚𝙖𝙧 𝘾𝙝𝙖𝙩 | 𝙐𝙣𝙗𝙖𝙣 𝘾𝙝𝙖𝙩 💎", description: "𝙍𝙀𝘼𝙉𝙐𝘿𝘼𝙍 𝙐𝙎𝙊 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙀𝙉 𝘾𝙃𝘼𝙏\n𝙍𝙀𝙎𝙐𝙈𝙀 𝙐𝙎𝙀 𝙊𝙁 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙄𝙉 𝘾𝙃𝘼𝙏", rowId: `${usedPrefix}}desban1`},    
{title: "💎 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙂𝙚𝙣𝙚𝙧𝙖𝙡 | 𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 𝘼𝙡𝙡 💎", description: "𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝘼𝙉𝙐𝙉𝘾𝙄𝙊 𝘼 𝙏𝙊𝘿𝙊𝙎\n𝙎𝙀𝙉𝘿 𝘼𝙉 𝘼𝘿 𝙏𝙊 𝙀𝙑𝙀𝙍𝙔𝙊𝙉𝙀", rowId: `${usedPrefix}bc`}, 
{title: "💎 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙖 𝙋𝙧𝙞𝙫𝙖𝙙𝙤 | 𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 💎", description: "𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝘼𝙉𝙐𝙉𝘾𝙄𝙊 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊\n𝙎𝙀𝙉𝘿 𝘼𝙉 𝘼𝘿 𝙏𝙊 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏𝙎", rowId: `${usedPrefix}comunicarpv`},  
{title: "💎 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙖 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 𝙂𝙧𝙤𝙪𝙥𝙨 💎", description: "𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝘼𝙉𝙐𝙉𝘾𝙄𝙊 𝘼 𝙂𝙍𝙐𝙋𝙊𝙎\n𝙎𝙀𝙉𝘿 𝘼𝙉 𝘼𝘿 𝙏𝙊 𝙂𝙍𝙊𝙐𝙋𝙎", rowId: `${usedPrefix}bcgc`},  
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)


const listMessage = {
text: `💗 *¡HOLA | HI!* ${username}`,
footer: `╭━━〔 *${wm}* 〕━━⬣
┃⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
┃✪ *EXPERIENCIA | EXP ➺ ${exp}*
┃✪ *NIVEL | LEVEL ➺ ${level}*
┃✪ *ROL ➺ ${role}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *FECHA ➺ ${week}, ${date}*
┃✪ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
┃⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
╰━━━━━━〔 𓃠 *${vs}* 〕━━━━━━⬣

╭━━〔 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄Ó𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 〕━━⬣
┃ *PRESIONE ESTE MENSAJE PARA IR AL MENÚ.*
┃ *PRESS THIS MESSAGE TO GO TO THE MENU.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💎➺ _${usedPrefix}actualizar | update_
┃💎➺ _${usedPrefix}reiniciar | restart_
┃💎➺ _${usedPrefix}borrartmp | cleartmp_
┃💎➺ _${usedPrefix}ban1 | banchat1_
┃💎➺ _${usedPrefix}desban1 | unbanchat1_
┃💎➺ _${usedPrefix}comunicar | broadcastall | bc_
┃💎➺ _${usedPrefix}comunicarpv | broadcastchats | bcc_
┃💎➺ _${usedPrefix}comunicargrupos | broadcastgc | bcgc_
╰━━━━━━━━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝘼𝙌𝙐Í | 𝙋𝙍𝙀𝙎𝙎 𝙃𝙀𝙍𝙀", 
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(ownermenu)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
