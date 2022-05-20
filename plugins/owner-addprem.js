let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙎𝙀𝙍 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n${usedPrefix + command} @tag\n\n𝙏𝘼𝙂 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝙃𝙊 𝙒𝙄𝙇𝙇 𝘽𝙀 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n${usedPrefix + command} @tag`
if (global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝙳𝙾 𝚈𝙰 𝙴𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*'
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼, 𝙽𝙾 𝚃𝙴𝙽𝙳𝚁𝙰 𝙻𝙸𝙼𝙸𝚃𝙴𝚂 𝙰𝙻 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
