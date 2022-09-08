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
let pp = await conn.profilePictureUrl(who).catch(_ => gata)
//pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 

/*let adReply = {
		fileLength: fsizedoc, seconds: fsizedoc,
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
					showAdAttribution: true,
					title: ucapan(),
					body: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
					mediaUrl: sgc,
					description: botdate,
					previewType: 'PHOTO',
					thumbnail: await(await fetch(pp)).buffer(),
					sourceUrl: sgh
				}
			}
		}*/

let fakeig = {
		fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: ig,
						mediaType: 'VIDEO',
						description: 'Follow: ' + ig,
						title: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sgc
					}
				}
			}

await conn.reply(m.chat, `*Prueba*`, fakeig,  m)
//conn.sendButton(m.chat, `*Prueba*`, wm, null, [[' Menu', '/menu']] fakeig, m)
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
