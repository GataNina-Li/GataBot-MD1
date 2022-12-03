let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply(`*${lenguajeGB['smsAvisoEG']()} 𝙇𝘼 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝘼*`)
} else throw `*${lenguajeGB['smsAvisoIIG']()} 𝙐𝙎𝙀 𝙇𝙊 𝙌𝙐𝙀 𝙀𝙎𝙏𝘼 𝘾𝙊𝙉 *"@"* 𝙋𝘼𝙍𝘼 𝘿𝘼𝙍 𝙇𝙊𝙎 𝙎𝙄𝙂𝙐𝙀𝙉𝙏𝙀𝙎 𝙎𝙄𝙂𝙉𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙎:\n*⚡ @user (Mención al usuario(a))*\n*⚡ @subject (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*\n\n𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙌𝙐𝙀 𝙇𝙊𝙎 *"@"* 𝙇𝙊𝙎 𝙋𝙐𝙀𝘿𝙀 𝙊𝙈𝙄𝙏𝙄𝙍 𝘿𝙀 𝙎𝙀𝙍 𝘾𝙊𝙉𝙑𝙀𝙉𝙄𝙀𝙉𝙏𝙀 𝘼𝙇 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝙍 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
