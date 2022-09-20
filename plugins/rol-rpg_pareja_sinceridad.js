let handler = async (m, { conn }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `NO TIENES PAREJA`, m)
  
if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `*${usuario}* 💗 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(persona)}* 💖`, m, {contextInfo: {
mentionedJid: [ m.sender, who ] }})
  
conn.reply(m.chat, `🤨 𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 *${await conn.getName(persona)}* 𝙉𝙊 𝙃𝘼 𝘼𝘾𝙀𝙋𝙏𝘼𝘿𝙊 𝙉𝙄 𝙍𝙀𝘾𝙃𝘼𝙕𝘼𝘿𝙊 𝙏𝙐 𝙋𝙍𝙊𝙋𝙐𝙀𝙎𝙏𝘼 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝘼𝙈𝘽𝙊𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉`, m, {contextInfo: {
mentionedJid: [ persona ] }})
global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(sinceridad|mipareja)$/i
handler.group = true
export default handler
