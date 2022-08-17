let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`${ag}𝙉𝙊 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀𝙉 𝘼 ${conn.getName(m.sender)} 𝙀𝙎𝙏𝘼𝙍𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊 *(𝘼𝙁𝙆)*\n\n𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙇𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 *(𝘼𝙁𝙆)*${text ? ': ' + text : ''}
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
