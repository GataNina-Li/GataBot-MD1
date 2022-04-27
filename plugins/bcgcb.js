import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
for (let id of groups) {
let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)
let thumbnail = 'https://telegra.ph/file/c73f47b440241b66cb9d3.jpg'
conn.sendButton(id, '*───━┅ 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 ┅━───*\n' + text, '𝔼𝕊𝕋𝔼 𝔼𝕊 𝕌ℕ 𝕄𝔼ℕ𝕊𝔸𝕁𝔼 𝔻𝔼 𝔻𝕀𝔽𝕌𝕊𝕀𝕆ℕ 𝔻𝔼𝕃 ℙℝ𝕆ℙ𝕀𝔼𝕋𝔸ℝ𝕀𝕆/𝙰 𝔻𝔼𝕃 𝔹𝕆𝕋 𝔼ℕ 𝕋𝕆𝔻𝕆𝕊 𝕃𝕆𝕊 𝔾ℝ𝕌ℙ𝕆𝕊 𝔼ℕ 𝔼𝕃 ℚ𝕌𝔼 𝔼𝕊𝕋𝔸 𝔼𝕃 𝔹𝕆𝕋\n' + wm,  [['OWNER 🎐', '.owner'],['DONASI ✨', '.donasi']], false)
}}
handler.command = ['bcgcb']
handler.tags = ['owner']
handler.help = ['bcgcb']
handler.rowner = true
export default handler
