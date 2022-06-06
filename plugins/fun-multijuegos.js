import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
//let com = `${usedPrefix}`
//let juegos = `${pickRandom([`${com}formarareja`,`${com}reto`,`${com}verdad`])}`   



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
  
  
if (command == 'multijuegos') { 
            let s = `Bienvenido al Multijuegos Aleeatorios`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/GataNina-Li/GataBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: 'Ingresar', id: '.juegos'}},
{index: 4, quickReplyButton: {displayText: 'menu de juegos', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', id: '#menu'}},
]
 
let t = {
text: s,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
  }
conn.sendMessage(m.chat, t, m)
}
  
  
  if (command == 'juegos') { 
              let c = `${usedPrefix}`
              let juegos = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}topgays`,`${c}topotakus`,`${c}mates medium`,`${c}mates noob`])}`
              //let juegos2 = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}formarpareja`,`${c}ppt tijeras`,`${c}ppt piedra`])}`

              let ss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/GataNina-Li/GataBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: `✨`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `🥳`, id: juegos}},
{index: 5, quickReplyButton: {displayText: `🐈`, id: juegos}},
]
 
let tt = {
text: ss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, tt, m)
} 
    
    
 /*if (command == 'juegos') { 
           let c = `${usedPrefix}`
           let juegos = `${pickRandom([`${c}reto`,`${c}verdad`])}`

           let sss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: `🍭`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `🚀`, id: juegos}},
{index: 5, quickReplyButton: {displayText: `🪁`, id: juegos}},
]
let ttt = {
text: sss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, ttt, m)
}*/
  
  if (command == 'juegos') {  
                 let c = `${usedPrefix}`
                 let juegos = `${pickRandom([`${c}reto`,`${c}verdad`])}`
         
                 let ssss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: '🎁', id: juegos}},
{index: 4, quickReplyButton: {displayText: '🤨', id: juegos}},
{index: 5, quickReplyButton: {displayText: 'Reiniciar', id: '#juegos'}},
]
let tttt = {
text: ssss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
  
  
      
   if (command == 'juegos') {  
                 let c = `${usedPrefix}`
                 let juegos = `${pickRandom([`${c}reto`,`${c}verdad`])}`
         
                 let ssss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: '🎁', id: juegos}},
{index: 4, quickReplyButton: {displayText: '🤨', id: juegos}},
{index: 5, quickReplyButton: {displayText: 'Reiniciar', id: '#juegos'}},
]
let tttt = {
text: ssss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
 }
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['multijuegos', 'juegos']
handler.group = true
handler.exp = 500
export default handler
                              
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
