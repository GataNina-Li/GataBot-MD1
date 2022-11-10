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
	  	 
conn.sendButton(m.chat, '🐈 ' + wm, `*╭━[ ${lenguajeGB.smsAutoLv1()} ]━დ*
*┃ ${lenguajeGB.smsAutoLv2()} ${before}*
*┃ ┈ ┈ ┈ ┈ ┈ ┈ ┈*
*┃ ${lenguajeGB.smsAutoLv3()} ${user.level}*
*┃ ┈ ┈ ┈ ┈ ┈ ┈ ┈*
*┃ ${lenguajeGB.smsAutoLv4()}* ${user.role}
*┃ ┈ ┈ ┈ ┈ ┈ ┈ ┈*
*┃ ${lenguajeGB.smsAutoLv5()} ${new Date().toLocaleString('id-ID')}*
*╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*

*_${lenguajeGB.smsAutoLv6()}_*`, null, [[lenguajeGB.smsConMenu(), `/menu`]], m)

let especial = ['limit', 'diamond', 'joincount', 'emerald', 'berlian', 'kyubi', 'gold', 'money', 'tiketcoin', 'stamina'].getRandom()
let especialCant = [5, 3, 3, 3, 5, 5, 6, 7, 8, 9, 10, 3].getRandom()

let normal = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus']
let normalCant = [1, 2, 3, 3, 1, 1, 2, 2, 4, 4, 3, 1].getRandom() 

if (user.level == 5){
m.reply(`*${lenguajeGB.smsAutoLv7()} 5!!* 🏆\n*${especialCant * 1} ${global.rpgshop.emoticon(especial)}*`)
Object.keys(especial).map(v => user[especial] += especialCant * 1 )
  
}else if (user.level == 10){
m.reply(`*${lenguajeGB.smsAutoLv7()} 10!!* 🏆\n*${especialCant * 2} ${global.rpgshop.emoticon(especial)}*`)
Object.keys(especial).map(v => user[especial] += especialCant * 2 )
  
}else if (user.level == 15){
m.reply(`*${lenguajeGB.smsAutoLv7()} 15!!* 🏆\n*${especialCant * 3} ${global.rpgshop.emoticon(especial)}*`)
Object.keys(especial).map(v => user[especial] += especialCant * 3 )
  
}else if (user.level == 20){
m.reply(`*${lenguajeGB.smsAutoLv7()} 20!!* 🏆\n*${especialCant * 4} ${global.rpgshop.emoticon(especial)}*`)
Object.keys(especial).map(v => user[especial] += especialCant * 4 )
  
}else if (user.level == 25){
m.reply(`*${lenguajeGB.smsAutoLv7()} 25!!* 🏆\n*${especialCant * 5} ${global.rpgshop.emoticon(especial)}*`)
Object.keys(especial).map(v => user[especial] += especialCant * 5 )
	
}else{	
m.reply(`*${lenguajeGB.smsAutoLv7()} ${user.level}!!* 🎉\n*${normalCant} ${global.rpgshop.emoticon(normal)}*`)
Object.keys(normal).map(v => user[especial] += normalCant * 1 )
}
	 
}}		
//export const disabled = false 
