let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${mg}𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n*${usedPrefix + command}texto1|texto2|texto3|texto4....*\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n*${usedPrefix + command}text1|text2|text3|text4....*`, fkontak, m)
if (!text.includes('|')) return conn.reply(m.chat, `${mg}𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝙀𝙉 𝙇𝘼 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝙐𝙎𝙀 *|*\n*${usedPrefix + command}texto1|texto2|texto3|texto4....*\n\n𝙏𝙊 𝘾𝙍𝙀𝘼𝙏𝙀 𝙊𝙋𝙏𝙄𝙊𝙉𝙎 𝙄𝙉 𝙏𝙃𝙀 𝙎𝙐𝙍𝙑𝙀𝙔 𝙐𝙎𝙀 *|*\n*${usedPrefix + command}text1|text2|text3|text4....*`, fkontak, m)
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) { a.push([b[c]]) }
let texto = `📊 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝘿𝘼 𝙋𝙊𝙍 *${conn.getName(m.sender)}*`
return conn.sendPoll(m.chat, texto, a, m, {mentions: texto})} //{mentions: await conn.parseMention(texto)})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
