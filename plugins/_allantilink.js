import fetch from 'node-fetch'
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /t.me/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.t
    
if (chat.antiTiktok && isAntiLinkTik) {
await conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝘼 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉 𝙏𝙄𝙆𝙏𝙊𝙆 𝙇𝙄𝙉𝙆 𝙒𝘼𝙎 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)\n\n𝙄 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙏𝙊 𝘽𝙀 𝘼𝘽𝙇𝙀 𝙏𝙊 𝙍𝙀𝙈𝙊𝙑𝙀 𝙄𝙉𝙏𝙍𝙐𝘿𝙀𝙍𝙎`}`, wm, img5, [['❎ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/off antitiktok']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n\n𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n*#on restrict | #off restrict*`, wm, img5, [['✅ 𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiYoutube && isAntiLinkYt) {
await conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝘼 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙇𝙄𝙉𝙆 𝙒𝘼𝙎 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)\n\n𝙄 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙏𝙊 𝘽𝙀 𝘼𝘽𝙇𝙀 𝙏𝙊 𝙍𝙀𝙈𝙊𝙑𝙀 𝙄𝙉𝙏𝙍𝙐𝘿𝙀𝙍𝙎`}`, wm, img5, [['❎ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/off antiyoutube']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n\n𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n*#on restrict | #off restrict*`, wm, img5, [['✅ 𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiTelegram && isAntiLinkTel) {
await conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝘼 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙇𝙄𝙉𝙆 𝙒𝘼𝙎 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)\n\n𝙄 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙏𝙊 𝘽𝙀 𝘼𝘽𝙇𝙀 𝙏𝙊 𝙍𝙀𝙈𝙊𝙑𝙀 𝙄𝙉𝙏𝙍𝙐𝘿𝙀𝙍𝙎`}`, wm, img5, [['❎ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/off antitelegram']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n\n𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n*#on restrict | #off restrict*`, wm, img5, [['✅ 𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiFacebook && isAntiLinkFb) {
await conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝘼 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙇𝙄𝙉𝙆 𝙒𝘼𝙎 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)\n\n𝙄 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙏𝙊 𝘽𝙀 𝘼𝘽𝙇𝙀 𝙏𝙊 𝙍𝙀𝙈𝙊𝙑𝙀 𝙄𝙉𝙏𝙍𝙐𝘿𝙀𝙍𝙎`}`, wm, img5, [['❎ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/off antifacebook']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n\n𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n*#on restrict | #off restrict*`, wm, img5, [['✅ 𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/on restrict']], m, dos.getRandom())
}
    
if (chat.antiInstagram && isAntiLinkIg) {
await conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝘼 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙇𝙄𝙉𝙆 𝙒𝘼𝙎 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)\n\n𝙄 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙏𝙊 𝘽𝙀 𝘼𝘽𝙇𝙀 𝙏𝙊 𝙍𝙀𝙈𝙊𝙑𝙀 𝙄𝙉𝙏𝙍𝙐𝘿𝙀𝙍𝙎`}`, wm, img5, [['❎ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/off antiinstagram']], m, dos.getRandom())
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return await conn.sendButton(m.chat, `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n\n𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n*#on restrict | #off restrict*`, wm, img5, [['✅ 𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/on restrict']], m, dos.getRandom())
}
return !0
}

