const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = 'https://chat.whatsapp.com/Eb5vV0LQdSV5twN4cSwN19' //nna

let handler = async (m, { conn, text, isOwner, usedPrefix, command, groupMetadata }) => {
let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': wm, 'jpegThumbnail': false }}}

if (!text) throw `*Falta Texto*`
let [_, code] = grupo.match(linkRegex) || []

try{
let res = await conn.groupAcceptInvite(code)

await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)
  
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = ['mensaje'] 
handler.owner = true

export default handler
