import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
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

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.sendButton(m.chat, `𝙏𝙐 𝙎𝘼𝙇𝙐𝘿 𝙀𝙎𝙏𝘼 𝙇𝙇𝙀𝙉𝘼 ❤️\n𝙔𝙊𝙐𝙍 𝙃𝙀𝘼𝙇𝙏𝙃 𝙄𝙎 𝙁𝙐𝙇𝙇 ❤️`, wm, imgr + `SALUD | HEALTH: ${user.health}`, [
[`🏕️ 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙍 | 𝙑𝙀𝙉𝙏𝙐𝙍𝙀`, `${usedPrefix}adventure`], [`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}adventure`]], fkontak, m)
    
const heal = 40 + (user.cat * 2)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((50 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.sendButton(m.chat,`${htki} *POCIÓN INSUFICIENTE* ${htka}`, 
`NECESITAS COMPRAR ${count - user.potion} POCIÓN 🥤 PARA CURAR
TU SALUD ACTUAL ES DE ${user.health} 
TIENES ${user.potion} 🥤 POCIÓN EN TU ALMACÉN 
⛊━─┈────────┈─━⛊
PROPINA :
'COMPRAR POCIÓN 🥤' | 'PREGUNTAR A TODOS'`.trim(), imgr + 'lowpotion', [
[`COMPRAR POCIÓN 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`PREGUNTAR A TODOS`, `${usedPrefix}tagall *ALGUIEN POR FAVOR ENVIAR ${count - user.potion} POCIÓN A MI.*
*» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)
  
    user.potion -= count * 1
    user.health += heal * count
    
conn.sendButton(m.chat, `*━┈━┈━『 SALUD COMPLETA 』━┈━┈━*`, `EXITOSAMENTE USO ${count} DE POCIONES 🥤 PARA RECUPERAR SU SALUD`, imgr + 'Salud Completada', [
[`Aventurar`, `${usedPrefix}adventure`]], m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
