import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}𝘿𝙀𝘽𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`
//if (command == 'tiktokaudio') {
//conn.reply(m.chat, `${eg}PRONTO TENDRA EL VIDEO DE TIKTOK 🔰*`, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: 'The Lolibot-MF',
//body: 'Super Bot WhatsApp',         
//previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `https://github.com/GataNina-Li/GataBot-MD`}}})
           
//let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
//let json = await res.json()
//conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'mp3/mp4' })}

conn.reply(m.chat, `${eg}ESPERE UNOS SEG EL QUE LE MANDAMOS SUS 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 🔰`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'The Lolibot-MD',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/Subbotsito/The-LoliBot-MD`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
await conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${wm}`, m)

let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)   
           
}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
handler.limit = 2
handler.exp = 60
export default handler
