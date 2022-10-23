import * as fs from 'fs'
import { en, es } from '../lib/idiomas/total-idiomas.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {  
if (args[0] == 'es'){
global.lenguajeGB = es
m.reply('EXITO!!\nIdioma de GataBot cambiado al Español')
  
}else if (args[0] == 'en'){
global.lenguajeGB = en
m.reply('SUCCESS!!\nGataBot language changed to English')
  
}else {
await conn.sendButton(m.chat,`
*Para agregar el Idioma Español Use:*
${usedPrefix + command} es

*To add the Spanish Language Use:*
${usedPrefix + command} en

\`\`\`Solo los comandos no cambiaran de Idioma

Commands will not change language\`\`\`\``, wm, null, [[`𝗠 𝗘 𝗡 𝗨 😽`, `${usedPrefix}menu`]], m)}
} catch { 
await m.reply(`${fg}\`\`\`NO SE LOGRÓ CAMBIAR DE IDIOMA, REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``)    
}}

handler.command = /^(idioma)$/i
handler.owner = true

export default handler
