let limit = 80
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*'
try {
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
conn.sendFile(m.chat, source, title + '.mp3', `
*🔥 𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
`.trim(), m, null, {
asDocument: chat.useDocument
})
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾.. 𝙴𝚂𝚃𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙳𝙴𝙱𝙴𝚁 𝙰 𝚀𝚄𝙴 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾 𝙴𝚂 𝙳𝙴 𝚄𝙽 𝙿𝙴𝚂𝙾 / 𝚃𝙰𝙼𝙰𝙽̃𝙾 𝙶𝚁𝙰𝙽𝙳𝙴*')
console.log(e)
}}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
export default handler
