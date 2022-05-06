let handler = async (m, { conn, args }) => {
let group = m.chat
m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.admin = false
handler.botAdmin = true
export default handler
