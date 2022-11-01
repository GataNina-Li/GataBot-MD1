import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 
	
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
	  	 
conn.sendButton(m.chat, '🐈 ' + wm, `*╭━━━[ 𝙉𝙄𝙑𝙀𝙇 | 𝙇𝙀𝙑𝙀𝙇 ]━━━⬣*
*┃ NIVEL ANTERIOR: ${before}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ NIVEL ACTUAL: ${user.level}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ RANGO:* ${user.role}
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ FECHA: ${new Date().toLocaleString('id-ID')}*
*╰━━━〔 𓃠 ${vs} 〕━━━━⬣*

*_Cuanto más interactúes conmigo, mayor será tu nivel!!_*`, null, [['🍀 𝗠 𝗘 𝗡 𝗨', `/menu`]], m)
}}		
//export const disabled = false 
