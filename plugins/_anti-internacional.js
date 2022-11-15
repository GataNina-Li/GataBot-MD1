import db from '../lib/database.js' //Esta función es para la versión LATAM
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.antifake) {
let texto = `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`
	
if (m.sender.startsWith('6' || '6')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('9' || '9')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('2' || '2')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('4' || '4')) {
global.db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
}}
export default handler
