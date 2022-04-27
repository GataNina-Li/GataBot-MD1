let handler = async (m, { conn, text } ) => {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
for (let id of groups) {
let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)
conn.sendButton(id, `*╔══❰ 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚═══════════════╝*`, '𝙀𝙎𝙏𝙀 𝙀𝙎 𝙐𝙉 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n' + wm,  [['🤖𝙾𝚆𝙽𝙴𝚁🤖', '.owner'],['💎𝙳𝙾𝙽𝙰𝚁💎', '.donasi']], false)
}}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
