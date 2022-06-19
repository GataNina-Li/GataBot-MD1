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
let { money } = global.db.data.users[m.sender]
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
  
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid3.mp4'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
╭━━━〔 𝙍𝘼𝙉𝙂𝙊𝙎 | 𝙍𝙊𝙇 〕━━━⬣
𝙉𝙊𝙈𝘽𝙍𝙀
${username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙍𝘼𝙉𝙂𝙊 𝘼𝘾𝙏𝙐𝘼𝙇
${role}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *∞ ÉLITE GLOBAL* 💎🏁
👑 *ÉLITE GLOBAL* 🏁
*TOP ASTRAL I* ⚜️🔱
*TOP ASTRAL II* ⚜️🔱
*TOP ASTRAL III* ⚜️🔱
*ESTELAR I* ☄️
*ESTELAR II* ☄️
*ESTELAR III* ☄️
*LEYENDA I* 🏆
*LEYENDA II* 🏆
*LEYENDA III* 🏆
*LEGENDARIO(A) I* 🛡️
*LEGENDARIO(A) II* 🛡️
*LEGENDARIO(A) III* 🛡️
*SUPER PRO I* 🎩
*SUPER PRO II* 🎩
*SUPER PRO III* 🎩
*PRO EN THE LOLIBOT I* 😼
*PRO EN THE LOLIBOT II* 😼
*PRO EN THE LOLIBOT III* 😼
*DIAMANTE I* 💎
*DIAMANTE II* 💎
*DIAMANTE III* 💎
*ORO I* 🏅
*ORO II* 🏅
*ORO III* 🏅
*PLATA I* 🔮
*PLATA II* 🔮
*PLATA III* 🔮
*IRON I* 🦾
*IRON II* 🦾
*IRON III* 🦾
*MAESTRO(A) I* ⚒️
*MAESTRO(A) II* ⚒️
*MAESTRO(A) III* ⚒️
*EXPLORADOR(A) I* 🪓
*EXPLORADOR(A) II* 🪓
*EXPLORADOR(A) III* 🪓
*APRENDIS I* 🪚
*APRENDIS II* 🪚
*APRENDIS III* 🪚
*NOVATO(A) I* 🪤
*NOVATO(A) II* 🪤
*NOVATO(A) III* 🪤
╰━━━━━━━━━━━━━━━━━━━⬣`.trim()
conn.sendHydrated(m.chat, menu, `𝙍𝘼𝙉𝙂𝙊𝙎 | ${wm}`, pp, 'https://github.com/Subbotsito/The-LoliBot-MD', 'The Lolibot-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 💫', '.allmenu'],
['𝙏𝙤𝙥𝙨 🏆', `${usedPrefix}top`],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu']
], m,)

}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(rol|rango|roles|rangos)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
