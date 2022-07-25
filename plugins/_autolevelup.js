import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
  
    let { user, role } = global.db.data.users[m.sender]
    //let user = db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
  
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++

    if (before !== user.level) {
m.reply(`
╭━━━[ 𝙉𝙄𝙑𝙀𝙇 | 𝙇𝙀𝙑𝙀𝙇 ]━━━━⬣
┃ NIVEL ANTERIOR: ${before}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ NIVEL ACTUAL: ${user.level}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ RANGO ${role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ FECHA: ${new Date().toLocaleString('id-ID')}
╰━━━〔 𓃠 ${vs} 〕━━━━━⬣
Cuanto más interactúes con GataBot-MD, mayor será tu nivel!!
`.trim())
  }
}
