import fetch from 'node-fetch'
const isLinkTik = /tiktok.com/i 
//const isLinkYt = /youtube.com|youtu.be/i 
//const isLinkTel = /t.me/i 
//const isLinkFb = /facebook.com|fb.me/i 
//const isLinkIg = /instagram.com/i 

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
    
    
    const isAntiLinkTik = isLinkTik.exec(m.text)
    //if (chat.antiTiktok && isAntiLinkTik && !isAdmin) {
    //if (isBotAdmin) {
    
    //if (m.text.includes(isAntiLinkTik)) return !0
    //const isAntiLinkYt = isLinkYt.exec(m.text)
    //const isAntiLinkTel = isLinkTel.exec(m.text)
    //const isAntiLinkFb = isLinkFb.exec(m.text)
    //const isAntiLinkIg = isLinkIg.exec(m.text)
    //}
   
    //let hapus = m.key.participant
    //let bang = m.key.id
    //if (isAdmin && chat.antiTiktok) return m.reply(`${eg}𝘾𝙊𝙈𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙉𝙊 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼)\n\n𝘼𝙎 𝙔𝙊𝙐 𝘼𝙍𝙀 𝘼𝘿𝙈𝙄𝙉 𝙄𝙉 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝙉𝙊𝙏 𝘽𝙀 𝙍𝙀𝙈𝙊𝙑𝙀𝘿`)
    if (chat.antiTiktok && isAntiLinkTik && !isAdmin) {
    if (isBotAdmin) {
    if (m.text.includes(isAntiLinkTik)) return !0 }
    await conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝘼 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙇𝙄𝙉𝙆 𝙒𝘼𝙎 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)\n\n𝙄 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙏𝙊 𝘽𝙀 𝘼𝘽𝙇𝙀 𝙏𝙊 𝙍𝙀𝙈𝙊𝙑𝙀 𝙄𝙉𝙏𝙍𝙐𝘿𝙀𝙍𝙎`}`, wm, null, [['❎ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/off antitiktok']], m, enlace)
    if (isBotAdmin && bot.restrict) {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    } else if (!bot.restrict) return await conn.sendButton(m.chat, `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n\n𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n*#on restrict | #off restrict*`, wm, null, [['❎ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/on restrict']], m, enlace)
    }
    return !0
}

