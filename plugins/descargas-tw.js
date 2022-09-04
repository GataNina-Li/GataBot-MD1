import fetch from 'node-fetch'
import axios from 'axios'
import hx from 'hxz-api'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
 const hwaifu = ['https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
'https://i.pinimg.com/originals/80/4f/1a/804f1a05f9996c96a2d492b4854b7fd5.jpg']                
/*let fpayment = {
				key: {
					remoteJid: '0@s.whatsapp.net',
					fromMe: false,
					id: 'BAE595C600522C9C',
					participant: '0@s.whatsapp.net'
				},
				message: {
					requestPaymentMessage: {
						currencyCodeIso4217: b,
						amount1000: fsizedoc,
						requestFrom: '0@s.whatsapp.net',
						noteMessage: {
							extendedTextMessage: {
								text: '👋 Hay Kak :> ' + `nombre`
							}
						},
						expiryTimestamp: fsizedoc,
						amount: {
							value: fsizedoc,
							offset: fsizedoc,
							currencyCode: b
						}
					}
				}
			}*/
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (!text) throw 'URL de entrada'
try {
	let res = await twitterDl(text)
	for (let x = 0; x < res.media.length; x++) {
		let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
  conn.sendButtonVid(m.chat, res.media[x].url, caption, author, 'To mp3', '.tomp3')
	}
	} catch {
	try {
  if (!text) throw '*Introduce el enlace*\n Example: https://twitter.com/sosmedkeras/status/1499995651240697859?s=20&t=gBiahHhbBT0FxZ3aVa3bJw'
let res = await axios('https://violetics.pw/api/downloader/twitter?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 Calidad: ' + v.name,
		description: '\n⌚ Host: ' + json.result.hosting + '\n⏲️ Título: ' + json.result.meta.title + '\n📎 URL: ' + v.url + '\n📌 Fuente: ' + json.result.meta.source,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Buscar  ☂️`,
		description: `⚡ Hola ${name}, Por favor seleccione ${command} Busca en el botón de abajo..\n*El texto que enviaste:* ${text}\n\nVuelva a escribir *${usedPrefix + command}* su texto para cambiar el texto de nuevo`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	} catch {
   throw `eror` 
     }
	/* Twit */
await hx.fbdown(`${text}`)
            .then(G => {
            let ten = `${G.HD}`
            conn.sendButtonVid(m.chat, ten, `*desc* : ${G.desc}
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'To mp3', '.tomp3')
            })
	}
	
}
handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^((twt|twitter)(dl)?)$/i

export default handler

async function twitterDl(url) {
	let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)[1]
	if (!id) throw 'Invalid URL'
	let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
	if (res.status !== 200) throw res.statusText
	let json = await res.json()
	if (json.media) {
		let media = []
		for (let i of json.media) {
			if (/video|animated_gif/.test(i.type)) {
				let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
				vid = vid.variants.pop()
				media.push({
					url: vid.url,
					type: i.type
				})
			} else {
				media.push({
					url: i.url,
					type: i.type
				})
			}
		}
		return {
			caption: json.text,
			media 
		}
	} else throw 'No media found'
}
