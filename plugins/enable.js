let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `List Options`,
rows: [
{title: "✨ | Welcome", rowId: `${usedPrefix + command} welcome`},
{title: "🚫 | Delete", rowId: `${usedPrefix + command} delete`},
{title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
{title: "🥵 | Modo Horny", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | Antilink", rowId: `${usedPrefix + command} antilink`},
{title: "🔗 | Antilink 2", rowId: `${usedPrefix + command} antilink2`},
{title: "🚫 | Antidelete", rowId: `${usedPrefix + command} antidelete`},
{title: "🔎 | Detect", rowId: `${usedPrefix + command} detect`},
{title: "❗ | Restrict", rowId: `${usedPrefix + command} restrick`},
{title: "😐 | Nyimak", rowId: `${usedPrefix + command} nyimak`},
{title: "☑️ | Autoread", rowId: `${usedPrefix + command} autoread`},
{title: "💬 | PcOnly", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | GcOnly", rowId: `${usedPrefix + command} gconly`},
{title: "📷 | SwOnly", rowId: `${usedPrefix + command} swonly`},
]}, ]
const listMessage = {
text: ' ',
footer: author,
title: `Lista de opciones`,
buttonText: "Click Here!",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, author, null, [[`${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['🎀 Menu', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
