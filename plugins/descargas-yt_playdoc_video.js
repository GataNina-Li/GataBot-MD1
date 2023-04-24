let limit = 3
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args || !args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝘿𝙊𝘾𝙐𝙈𝙀𝙉𝙏𝙊 𝘿𝙀 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊 𝘿𝙊𝘾𝙐𝙈𝙀𝙉𝙏\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak,  m)

await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙋𝙍𝙊𝙉𝙏𝙊 𝙏𝙀𝙉𝘿𝙍𝘼 𝙎𝙐 𝘿𝙊𝘾𝙐𝙈𝙀𝙉𝙏𝙊 𝘿𝙀 𝙑𝙄𝘿𝙀𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙎𝙊𝙊𝙉 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝙃𝘼𝙑𝙀 𝙔𝙊𝙐𝙍 𝙑𝙄𝘿𝙀𝙊 𝘿𝙊𝘾𝙐𝙈𝙀𝙉𝙏, 𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙄𝙏`, fkontak,  m)
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSize
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: m})
}
handler.command = /^playvideodoc|pdocvideo|docvideo|ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
handler.limit = null
export default handler
