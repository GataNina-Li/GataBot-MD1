import db from '../lib/database.js' //Esta función es para la versión LATAM
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.antifake) throw 0 {
//if (!db.data.chats[m.chat].antifake && m.isGroup) throw 0

if (isBotAdmin) {
let texto = `${ag}𝙀𝙎𝙏𝙀 𝙉𝙐𝙈𝙀𝙍𝙊 *@${m.sender.split`@`[0]}* 𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!\n\n𝙏𝙃𝙄𝙎 𝙉𝙐𝙈𝘽𝙀𝙍 𝙄𝙎 𝙉𝙊𝙏 𝘼𝙇𝙇𝙊𝙒𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`
	
if (m.sender.startsWith('6' || '6')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('9' || '9')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('4' || '4')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
}}
export default handler
