import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn, args }) {
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

const elemento = (args[0] || '').toLowerCase()

//let especial1 = ['limit', 'diamond']
//let especial2 = ['joincount', 'emerald']
//let especial3 = ['berlian', 'kyubi']
//let especial4 = ['gold', 'money']
//let especial5 = ['tiketcoin', 'stamina']

//let especialCant1 = [5, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10, 15].getRandom()
//let especialCant2 = [5, 3, 3, 3, 5, 5, 6, 7, 8, 9, 10, 3].getRandom()
//let especialCant3 = [5, 3, 3, 3, 5, 5, 6, 7, 8, 9, 10, 3].getRandom()
//let especialCant4 = [5, 3, 3, 3, 5, 5, 6, 7, 8, 9, 10, 3].getRandom()
//let especialCant5 = [5, 3, 3, 3, 5, 5, 6, 7, 8, 9, 10, 3].getRandom()

let especial = ['limit', 'diamond', 'joincount', 'emerald', 'berlian', 'kyubi', 'gold', 'money', 'tiketcoin', 'stamina'].getRandom()
let especialCant = [5, 3, 3, 3, 5, 5, 6, 7, 8, 9, 10, 3].getRandom()

let normal = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let normalCant = [1, 2, 3, 3, 1, 1, 2, 2, 4, 4, 3, 1].getRandom() 

if (user.level == 5){
m.reply(`*${lenguajeGB.smsAutoLv7()} 10!!* 🏆\n*${especialCant * 1} ${global.rpgshop.emoticon(especial)}*`)
user[especial] += especialCant * 1
//Object.keys(especial, elemento).map(v => user[elemento.especial] += especialCant * 1 )
//Object.keys(especial1, especialCant1).map((v, index) => {
//m.reply(`*${lenguajeGB.smsAutoLv7()} 5!!* 🏆
//*${especialCant1[v]} » ${user[especial1[v]]} ${global.rpgshop.emoticon(v)}*`)
//user.limit += especialCant1 * 1
//user.diamond += especialCant1 * 1 
//})
  
}else if (user.level == 10){
m.reply(`*${lenguajeGB.smsAutoLv7()} 10!!* 🏆\n*${especialCant * 2} ${global.rpgshop.emoticon(especial)}*`)
user[especial] += especialCant * 2
//Object.keys(especial, elemento).map(v => user[especial] += especialCant * 2 )
//for (let reward of Object.keys(especial)) { if (!(reward in user)) continue user[reward] += especialCant * 2
  
}else if (user.level == 15){
m.reply(`*${lenguajeGB.smsAutoLv7()} 15!!* 🏆\n*${especialCant * 3} ${global.rpgshop.emoticon(especial)}*`)
user[especial] += especialCant * 3
//Object.keys(especial, elemento).map(v => user[especial] += especialCant * 3 )
//for (let reward of Object.keys(especial)) { if (!(reward in user)) continue user[reward] += especialCant * 3
  
}else if (user.level == 20){
m.reply(`*${lenguajeGB.smsAutoLv7()} 20!!* 🏆\n*${especialCant * 4} ${global.rpgshop.emoticon(especial)}*`)
user[especial] += especialCant * 4
//Object.keys(especial, elemento).map(v => user[especial] += especialCant * 4 )
//for (let reward of Object.keys(especial)) { if (!(reward in user)) continue user[reward] += especialCant * 4
  
}else if (user.level == 25){
m.reply(`*${lenguajeGB.smsAutoLv7()} 25!!* 🏆\n*${especialCant * 5} ${global.rpgshop.emoticon(especial)}*`)
user[especial] += especialCant * 5
//Object.keys(especial, elemento).map(v => user[especial] += especialCant * 5 )
//for (let reward of Object.keys(especial)) { if (!(reward in user)) continue user[reward] += especialCant * 5
	
}else{	
m.reply(`*${lenguajeGB.smsAutoLv7()} ${user.level}!!* 🎉\n*${normalCant} ${global.rpgshop.emoticon(normal)}*`)
user[normal] += normalCant * 1
//Object.keys(normal, elemento).map(v => user[normal] += normalCant * 1 )
//for (let reward of Object.keys(normal)) { if (!(reward in user)) continue user[reward] += normalCant * 1
}
	 
}}		
//export const disabled = false 
