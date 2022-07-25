import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
  if (!global.db.data.settings[conn.user.jid].restrict) throw `${ag} 𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n#on restrict | #off restrict\n𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n\n 𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n#on restrict | #off restrict`
  let user = db.data.users[m.sender]
  let role = db.data.users[m.sender]
    
    //let user = db.data.users[m.sender]
    //if (!user.autolevelup)
        //return !0
  
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
