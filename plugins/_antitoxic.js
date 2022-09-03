const toxicRegex = /mal/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://i.imgur.com/mtqCy2V.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await conn.sendButton(m.chat,`${user.warn == 1 ? `𝙉𝙊𝙊!!! *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝘿𝙀𝘾𝙄𝙍 𝙀𝙎𝙏𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼 *(${isToxic})* 𝙀𝙎𝙏𝘼 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝘼 𝙉𝙊 𝙎𝙀𝘼𝙎 𝙏𝙊𝙓𝙄𝘾𝙊(𝘼)\n\n🤬 𝘿𝙊𝙉'𝙏 𝘽𝙀 𝙏𝙊𝙓𝙄𝘾 𝙏𝙃𝘼𝙏 𝙒𝙊𝙍𝘿 𝙄𝙎 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉!!`, `*ADVERTENCIA : WARNING*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[`😭 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊 | 𝙄'𝙈 𝙎𝙊𝙍𝙍𝙔`, 'ok'],
['☢️ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾', '.off antitoxic'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], false, { mentions: [m.sender] })}
//await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, decir la palabra (${isToxic}) está prohibido en este bot *${user.warn}/4* advertencia`, false, { mentions: [m.sender] })

if (user.warn >= 4) {
user.warn = 0
await m.reply(`𝙏𝙀 𝙇𝙊 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿 𝙑𝘼𝙍𝙄𝘼𝙎 𝙑𝙀𝘾𝙀𝙎!!\n*@${m.sender.split`@`[0]}* 𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 *4* 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼) 🙄\n\n𝙔𝙊𝙐 𝙋𝘼𝙎𝙎𝙀𝘿 𝘼𝙇𝙇 *4* 𝙒𝘼𝙍𝙉𝙄𝙉𝙂𝙎 𝙉𝙊𝙒 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝘽𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 😐`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
