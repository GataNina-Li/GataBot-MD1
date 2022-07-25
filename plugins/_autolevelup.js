import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

//export function before(m) {
export function before(m, { conn }) {  
 
let user = global.db.data.users[m.sender]
let before = user.level * 1
let { role } = global.db.data.users[m.sender]

    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`
        let str = `
╭━━━[ *𝙉𝙄𝙑𝙀𝙇 | 𝙇𝙀𝙑𝙀𝙇* ]━━━━⬣
┃ *NIVEL ANTERIOR:* *${before}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *NIVEL ACTUAL:* *${user.level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *RANGO* ${role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *FECHA:* *${new Date().toLocaleString('id-ID')}*
╰━━━〔 *𓃠 ${vs}* 〕━━━━━⬣
*_Cuanto más interactúes con GataBot-MD, mayor será tu nivel!!_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
      }
    }
  }

export const disabled = true
