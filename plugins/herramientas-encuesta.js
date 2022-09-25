let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${mg}⚠️️ *_Ingrese un texto para iniciar la escuesta._*\n\n📌 Ejemplo : \n*${usedPrefix + command}* texto|texto2...`, fkontak, m)
if (!text.includes('|')) return conn.reply(m.chat, `${mg}⚠️️ Separe las encuestas con *|* \n\n📌 Ejemplo : \n*${usedPrefix + command}* texto|texto2...`, fkontak, m)
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) { a.push([b[c]]) }
let texto = `📊 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝘿𝘼 𝙋𝙊𝙍 *${conn.getName(m.sender)}*`
return conn.sendPoll(m.chat, texto, a, fkontak, m, {mentions: [participants]})} //{mentions: await conn.parseMention(texto)})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
