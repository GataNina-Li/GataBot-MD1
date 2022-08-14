//https://violetics.pw/api/ephoto360

let handler = async (m, { conn, args, command }) => { 
let response = args.join(' ').split('|')
if (!args[0]) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙀𝙇 𝙇𝙊𝙂𝙊\n\n𝙒𝙍𝙄𝙏𝙀 𝘼 𝙏𝙀𝙓𝙏 𝙏𝙊 𝘾𝙍𝙀𝘼𝙏𝙀 𝙏𝙃𝙀 𝙇𝙊𝙂𝙊`
let img = './media/menus/Menu3.jpg'  
let ftroli = { key: { fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: img, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
try {    
if (command == 'logocorazon') {
await conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙎𝙐 𝙇𝙊𝙂𝙊 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝙉𝘿𝙊\n\n`, fkontak,  m)
let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=${beta}&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
  
if (command == 'logochristmas') {
await conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙎𝙐 𝙇𝙊𝙂𝙊 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝙉𝘿𝙊\n\n`, fkontak,  m)
let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=${beta}&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
  
} catch {
conn.reply(m.chat, `${fg}𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊 𝙈𝘼𝙇 𝙑𝙐𝙀𝙇𝘼𝙑𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍\n\n𝙎𝙊𝙈𝙀𝙏𝙃𝙄𝙉𝙂 𝙒𝙀𝙉𝙏 𝙒𝙍𝙊𝙉𝙂 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`, m)    
}}
handler.command = /^logocorazon|logochristmas/i
export default handler
