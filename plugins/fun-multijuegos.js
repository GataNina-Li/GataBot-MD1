import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
let com = `${usedPrefix}`
let juegos = `${pickRandom([`${com}formarareja`,`${com}reto`,`${com}verdad`])}`   
let old = performance.now()
let neww = performance.now()
let juegos2 = `${neww - old}`


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
{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅", description: null, rowId: `${usedPrefix}cuentasgatabot`},
{title: "𝙈𝙪𝙡𝙩𝙞𝙟𝙪𝙚𝙜𝙤𝙨 | 𝙈𝙪𝙡𝙩𝙞𝙜𝙖𝙢𝙚𝙨", description: "ggggg", rowId: `${juegos2}`},
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)


const listMessage = {
text: `💗 *¡HOLA | HI!* ${username}`,
footer: `╭━━〔 *${wm}* 〕━━⬣
┃🪄🪄🪄🪄🪄🪄🪄🪄🪄
┃✪ *EXPERIENCIA | EXP ➺ ${exp}*
┃✪ *NIVEL | LEVEL ➺ ${level}*
┃✪ *ROL ➺ ${role}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *FECHA ➺ ${week}, ${date}*
┃✪ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
┃🪄🪄🪄🪄🪄🪄🪄🪄🪄
╰━━━━━━〔 𓃠 *${vs}* 〕━━━━━━⬣

╭━━〔 𝙈𝙐𝙇𝙏𝙄𝙅𝙐𝙀𝙂𝙊𝙎 | 𝙈𝙐𝙇𝙏𝙄𝙂𝘼𝙈𝙀𝙎 〕━⬣
┃ *PRESIONE ESTE MENSAJE PARA IR AL MENÚ.*
┃ *PRESS THIS MESSAGE TO GO TO THE MENU.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃
┃🚀➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃🚀➺ _${usedPrefix}clonarepo | gitclone *link*_
╰━━━━━━━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝘼𝙌𝙐Í | 𝙋𝙍𝙀𝙎𝙎 𝙃𝙀𝙍𝙀", 
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(multijuegos)$/i
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
