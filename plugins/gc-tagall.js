let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let teks = `${text ? text : ''}\n┌─ 「 Tag All Member 」\n`
for (let mem of participants) {
teks += `│• @${mem.id.split('@')[0]}\n`}
teks += `└─────\n\n*TagAll by 𝚃𝚑𝚎𝙼𝚢𝚜𝚝𝚒𝚌-𝙱𝚘𝚝*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
