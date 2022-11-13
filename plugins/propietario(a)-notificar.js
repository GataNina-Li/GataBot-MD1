/*//let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
let linkRegex = /chat.whatsapp.com\/Eb5vV0LQdSV5twN4cSwN19/
//let linkRegex = 'chat.whatsapp.com/Eb5vV0LQdSV5twN4cSwN19'
let handler = async (m, { conn, text, isOwner, usedPrefix, command, groupMetadata }) => {

let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': wm, 'jpegThumbnail': false }}}
if (!text) throw `FATA TEXTO`
//let [_, code, expired] = text.match(linkRegex) || []
let [_, code] = text.match(linkRegex) || []
//if (!code) throw 'El link es invalido'
try{
let res = await conn.groupAcceptInvite(code)
//await m.reply(`${JSON.stringify(res, null, 1)}`)
await m.reply(`Enviando mensaje . . .`)
// Debes de poner tus enlaces abajo.
//await conn.sendMessage(res, { text: 'TEXTO QUE ENVIARA AL GRUPO', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
//await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/Eb5vV0LQdSV5twN4cSwN19', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await m.reply(`✅ MENSAJE ENVIADO CON ÉXITO `)
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.command = ['mensaje'] 
handler.owner = true

export default handler*/


//let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
let linkRegex = /chat.whatsapp.com\/Eb5vV0LQdSV5twN4cSwN19/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': wm, 'jpegThumbnail': false }}}

  if (!text) throw `${fg}\n𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿`
  //let [_, code, expired] = text.match(linkRegex) || []
  //if (!code) throw 'El link es invalido'
  let res = await conn.groupAcceptInvite(linkRegex)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`Enviando mensaje . . .`)
// Debes de poner tus enlaces abajo.
await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await m.reply(`✅ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾`)
}


handler.command = ['mensaje'] 
handler.owner = true

export default handler
