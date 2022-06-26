import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙋𝘼𝙍𝘼 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) { 
if (text.length < 25) throw `${fg}𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊, 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙉𝙊 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 𝙈𝘼𝙎 𝘿𝙀 25 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙀𝙎\n\n𝙎𝙊𝙍𝙍𝙔, 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙎𝙃𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝘽𝙀 𝙈𝙊𝙍𝙀 𝙏𝙃𝘼𝙉 25 𝘾𝙃𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙎`  
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname|newnombre)$/i
handler.group = true
handler.admin = true
export default handler
