import fs from 'fs'
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = 'https://chat.whatsapp.com/Lq6iC0wtPz222IIobgCED1' //nna

let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {
let users = m.sender.split`@`[0]
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: packname + `\n~ 𝗚𝗔𝗧𝗔 𝗗𝗜𝗢𝗦`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
let [_, code] = grupo.match(linkRegex) || []

if ( users == 593993684821 || users == 593968585383 ) try {
if (!text) return m.reply(`*Falta Texto*`) 
let res = await conn.groupAcceptInvite(code)
await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak2 })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)

} else {
await m.reply('```USTED NO TIENE AUTORIZACIÓN PARA USAR ESTE COMANDO.```')}
}
handler.command = ['mensaje']
//handler.owner = true

export default handler
