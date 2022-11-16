/*import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${lenguajeGB['smsAvisoAG']()}𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n#on restrict | #off restrict\n𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n\n 𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n#on restrict | #off restrict`
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res) 
await delay(1 * 1000)
if (command == 'kick') { 
conn.sendHydrated(m.chat, `𝘼𝙃 𝙎𝙄𝘿𝙊 𝙀𝙍𝙍𝘼𝘿𝙄𝘾𝘼𝘿𝙊(𝘼) 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 😎`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}

if (command == 'sacar') { 
conn.sendHydrated(m.chat, `𝘼𝙃 𝙎𝙄𝘿𝙊 𝙀𝙍𝙍𝘼𝘿𝙄𝘾𝘼𝘿𝙊(𝘼) 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 😎`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}
  
if (command == 'ban') { 
conn.sendHydrated(m.chat, `𝘼𝙃 𝙎𝙄𝘿𝙊 𝙀𝙍𝙍𝘼𝘿𝙄𝘾𝘼𝘿𝙊(𝘼) 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 😎`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'sacar', 'ban'] ///^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
//handler.premium = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))*/

let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${lenguajeGB['smsAvisoAG']()}𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n#on restrict | #off restrict\n𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n\n 𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n#on restrict | #off restrict`
let kicktext = `*ETIQUTE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE QUE ELIMINE*\n EJEMPLO: ${usedPrefix + command} @${global.owner[0][0]}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|echar|hechar|sacar)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler


