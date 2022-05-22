let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true

m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🤑\n𝙉𝙊 𝙀𝙎𝙏𝘼𝙍𝙀 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀 𝙃𝘼𝙎𝙏𝘼 𝙌𝙐𝙀 𝙎𝙀𝘼 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝘼.\n\n𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 𝙒𝘼𝙎 𝘽𝘼𝙉𝙉𝙀𝘿 👻\n𝙄 𝙒𝙄𝙇𝙇 𝙉𝙊𝙏 𝘽𝙀 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀 𝙐𝙉𝙏𝙄𝙇 𝙄𝙏 𝙄𝙎 𝙐𝙉𝘽𝘼𝙉𝙉𝙀𝘿`)
}
handler.help = ['banchat1']
handler.tags = ['owner']
handler.command = /^ban1|banear1|banchat1$/i
handler.exp = 500
handler.rowner = true

export default handler
