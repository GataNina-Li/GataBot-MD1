let handler = async (m, { participants }) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('Done!')
}
handler.help = ['banchat']
handler.tags = ['owner', 'group']
handler.command = /^banchat$/i
handler.admin = true
export default handler
