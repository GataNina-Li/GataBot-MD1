export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  ${eg}𝘿𝙀𝙅𝘼𝙎𝙏𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊 *(𝘼𝙁𝙆)*${user.afkReason ? ' 𝙀𝙇 𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 𝙀𝙍𝘼: ' + user.afkReason : ''}
  
𝙏𝙄𝙀𝙈𝙋𝙊 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊: *${(new Date - user.afk).toTimeString()}*`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`${ag}𝙉𝙊 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀𝙎 𝘼 𝙀𝙎𝙏𝙀(𝘼) 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼)!! 𝙀𝙎𝙏𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊(𝘼)     
${reason ? '𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙇𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 *(𝘼𝙁𝙆):* ' + reason : '𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙇𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 *(𝘼𝙁𝙆):* 𝘿𝙄𝘾𝙃𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙉𝙊 𝘿𝙄𝙅𝙊 𝙎𝙐 𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿'}
𝙏𝙄𝙀𝙈𝙋𝙊 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊: *${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
