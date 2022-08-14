import { join } from 'path'
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let user = global.db.data.users[m.sender]
    
    if (user.health >= 100) return m.reply(`
¡Tu ❤️salud está llena!
`.trim())
  
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    
    if (user.potion < count) return conn.sendButton(m.chat,
`*–『 POCIÓN INSUFICIENTE 』–*`, 
`NECESITAS COMPRAR ${count - user.potion} MÁS POCIÓN 🥤 PARA CURAR
TIENES ${user.potion} 🥤 POCIÓN EN BOLSA
⛊━─┈────────┈─━⛊
PROPINA :
'COMPRAR POCIÓN 🥤' | 'PREGUNTAR A TODOS'
`.trim(), imgr + 'lowpotion', [
[`COMPRAR POCIÓN 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`PREGUNTAR A TODOS`, `${usedPrefix}tagall *ALGUIEN POR FAVOR ENVIAR ${count - user.potion} POCIÓN* A MI.
⮕ TRANSFERIR POCIÓN:
${usedPrefix}transfer potion ${count - user.potion} @${conn.getName(m.sender)}`]
], m)
  
    user.potion -= count * 1
    user.health += heal * count
    conn.sendButton(m.chat, `*━┈━┈━『 SALUD COMPLETA 』━┈━┈━*`, `EXITOSAMENTE ${count} 🥤 USO DE POCIONES PARA RECUPERAR LA SALUD`, imgr + 'saludcompletada',
[
[`Aventura`, `${usedPrefix}adventure`]
], m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
