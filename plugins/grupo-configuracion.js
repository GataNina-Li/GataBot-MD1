let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const { isBanned, autolevelup, temporal, restrict, stickers, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]

let text = 
`╭━[ 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ]━⬣
┃
┃ 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 ${welcome ? '✅' : '❌'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 ${stickers ? '✅' : '❌'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝘼𝙐𝙏𝙊𝙇𝙀𝙑𝙀𝙇𝙐𝙋 ${global.db.data.users[m.sender].autolevelup ? '✅' : '❌'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 ${global.db.data.settings[conn.user.jid].temporal ? '✅' : '❌'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘼𝙉𝘼𝘿𝙄𝙍 𝙔 𝙎𝘼𝘾𝘼𝙍 ${global.db.data.settings[conn.user.jid].restrict ? '✅' : '❌'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝘿𝙀𝙏𝙀𝘾𝙏 ${detect ? '✅' : '❌'} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 ${antiLink ? '✅' : '❌'} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 *2* ${antiLink2 ? '✅' : '❌'} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙈𝙊𝘿𝙊 𝙃𝙊𝙍𝙉𝙔 ${modohorny ? '✅' : '❌'} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ${autosticker ? '✅' : '❌'} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝘼𝙐𝘿𝙄𝙊𝙎 ${audios ? '✅' : '❌'} 
╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣
`.trim()
//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] }) 
conn.sendHydrated(m.chat, text, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(configuración|settings|setting|confugurar|configuracion|vergrupo|gruporesumen)$/i
handler.group = true
export default handler
