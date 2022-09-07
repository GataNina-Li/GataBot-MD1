import db from '../lib/database.js'
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin) {
	
if (m.sender.startsWith('5' || '5')) {
global.db.data.users[m.sender].banned = true
await m.reply(' Número prohibido ')
await m.reply(' Expulsar al usuario ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('6' || '6')) {
global.db.data.users[m.sender].banned = true
await m.reply(' Número prohibido ')
await m.reply(' Expulsar al usuario ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('9' || '9')) {
global.db.data.users[m.sender].banned = true
await m.reply(' Número prohibido ')
await m.reply(' Expulsar al usuario ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].banned = true
await m.reply(' Número prohibido ')
await m.reply(' Expulsar al usuario ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
await m.reply(' Número prohibido ')
await m.reply(' Expulsar al usuario ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('4' || '4')) {
global.db.data.users[m.sender].banned = true
await m.reply(' Número prohibido ')
await m.reply(' Expulsar al usuario ')
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
}
}
export default handler
