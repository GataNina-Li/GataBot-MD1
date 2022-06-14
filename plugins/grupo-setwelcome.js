let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
//m.reply('Hecho')
conn.sendHydrated(m.chat, `${eg} 𝙇𝘼 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝘼`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
} else throw `${iig}𝙐𝙎𝙀 𝙇𝙊 𝙌𝙐𝙀 𝙀𝙎𝙏𝘼 𝘾𝙊𝙉 *"@"* 𝙋𝘼𝙍𝘼 𝘿𝘼𝙍 𝙇𝙊𝙎 𝙎𝙄𝙂𝙐𝙀𝙉𝙏𝙀𝙎 𝙎𝙄𝙂𝙉𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙎:\n*⚡ @user (Mención al usuario(a))*\n*⚡ @group (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
