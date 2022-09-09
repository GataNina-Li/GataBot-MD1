//ESTOS DISEÑOS PARA MENSAJES SON COMPATIBLES CON GATABOT, SIN EMBARGO ALGUNOS NO SE VEN EN LA VERSIÓN DE WHATSAPP WEB
//PERO EN EL CELULAR SI SE NOTA TODOS, PUEDES USAR EL QUE QUIERAS 😼

import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m, { conn, args }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let fsizedoc = '1'.repeat(10)
//let ucapan = ucapan()
let sap = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann']
let name = await conn.getName(who)
let sgh = md
let sgc = nnn
let gata = 'https://i.imgur.com/EXTbyyn.jpg'
let logo = 'https://i.pinimg.com/564x/f7/d2/e4/f7d2e48fd59a8c01cd396bfc70b0a2d1.jpg'
let pp = await conn.profilePictureUrl(who).catch(_ => gata)
//pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 

global.enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
//ENLACE DE WHATSAPP	
	
global.enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
//ENLACE DE YOUTUBE	
	
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//VERIFICADO MAS IMAGEN DEL USUARIO
	
global.fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: wm, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
	
global.ftroli = { key: { participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: fsizedoc, status: 1, surface: 1, message: botdate, orderTitle: author, sellerJid: '0@s.whatsapp.net' }}}

	
global.fvn = { key: { participant: '0@s.whatsapp.net' }, message: { audioMessage: { mimetype: 'audio/ogg; codecs=opus', seconds: fsizedoc, ptt: true }}}
//MENSAJE SIMULADOR DE AUDIO	
	


/*conn.fakeReply(m.chat, `*Prueba*`, '0@s.whatsapp.net', wm)*/ //MENSAJE RESPONDIDO DE TEXTO

let fimgv = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					imageMessage: {
						url: logo,
						mimetype: 'image/jpeg',
						fileLength: fsizedoc,
						height: 306,
						width: 366,
						jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'),
						viewOnce: true
					}
				}
			}

//await conn.reply(m.chat, `*Prueba*`, fimgv, m)
await conn.sendButton(m.chat, `*Prueba*`, wm, pp, [[' Menu', '/menu']], m, fkontak2)	
}

handler.command = /^(fake)$/i
export default handler

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
} 
