//import translate from 'translate-google-api'
import translate from '@vitalets/google-translate-api'
import * as fs from 'fs'
import { en, es } from '../lib/idiomas/total-idiomas.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let texto = `EXITO!! Idioma de GataBot cambiado Correctamente: `

//const tld = 'cn'
//let idioma = await translate(`${texto}`, { tld, to: args[0] })
let result = await translate(`${texto}`, { to: args[0], autoCorrect: true })

try {  
if (args[0] == 'es'){
global.lenguajeGB = es
m.reply(idioma + 'Español')
  
}else if (args[0] == 'en'){
global.lenguajeGB = en
m.reply(idioma + 'English')
  
}else if (args[0] == 'id'){
global.lenguajeGB = id
m.reply(idioma + 'Bahasa Indonesia')
  
}else if (args[0] == 'ar'){
global.lenguajeGB = ar
m.reply(idioma + 'عرب')
  
}else if (args[0] == 'pt'){
global.lenguajeGB = pt
m.reply(idioma + 'Português')
  
}else {
 
await conn.sendButton(m.chat,`
*Para agregar el Idioma Español Use:*
${usedPrefix + command} es

*To add the Spanish Language Use:*
${usedPrefix + command} en

\`\`\`Solo los comandos no cambiaran de Idioma

Commands will not change language\`\`\`\``, wm, null, [[`𝗠 𝗘 𝗡 𝗨 😽`, `${usedPrefix}menu`]], m)
}
} catch { 
await m.reply(`${fg}\`\`\`NO SE LOGRÓ CAMBIAR DE IDIOMA, REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``)    
}}

handler.command = /^(idioma)$/i
handler.owner = true

export default handler
