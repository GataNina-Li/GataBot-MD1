import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${fg}𝙉𝙊 𝙎𝙀 𝙋𝙐𝘿𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝙍 𝙀𝙇 𝘼𝙐𝘿𝙄𝙊/𝙑𝙄𝘿𝙀𝙊. 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n\n𝙏𝙃𝙀 𝘼𝙐𝘿𝙄𝙊/𝙑𝙄𝘿𝙀𝙊 𝘾𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝘽𝙀 𝙁𝙊𝙐𝙉𝘿. 𝙏𝙍𝙔 𝘼𝙉𝙊𝙏𝙃𝙀𝙍 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀`
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 /* await conn.sendHydrated(m.chat, `
╭━━━━━━━❰  *𓃠*  ❱━━━━━━━⬣
✦ 𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀
✦ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 | 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉
✦ ${description}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 | 𝙋𝙐𝘽𝙇𝙄𝙎𝙃𝙀𝘿
✦ ${publishedTime}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 | 𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉
✦ ${durationH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙑𝙄𝙎𝙏𝘼𝙎 | 𝙑𝙄𝙀𝙒𝙎
✦ ${viewH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙐𝙍𝙇
✦ ${url}
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣`.trim(), wm, thumbnail, '', '', null, null, [
    ['𝙑𝙞𝙙𝙚𝙤 | 1️⃣', `${usedPrefix}ytv ${url} yes`],
    ['𝙑𝙞𝙙𝙚𝙤 | 2️⃣', `${usedPrefix}play.2 ${url} yes`],
    ['𝘼𝙪𝙙𝙞𝙤 | 1️⃣', `${usedPrefix}yta ${url} yes`]
  ], m)
    let info = `💝 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙋𝙐𝙀𝘿𝙀 𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝘼𝙍𝙇𝙀.
💗 𝙔𝙊𝙐 𝙈𝘼𝙔 𝘼𝙇𝙎𝙊 𝘽𝙀 𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏𝙀𝘿.`.trim()  
await conn.sendHydrated(m.chat, info, wm, thumbnail, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝘼𝙪𝙙𝙞𝙤 | 2️⃣', `${usedPrefix}play.1 ${url} yes`],
['𝘽𝙪𝙨𝙘𝙖𝙧 | 𝙎𝙚𝙖𝙧𝙘𝙝 | 🌐', `.ytsearch ${url} yes`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `/menu`]
], m,) */
await conn.sendButton(m.chat, wm, `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*
ও 𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀
» ${title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 | 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉
» ${description}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 | 𝙋𝙐𝘽𝙇𝙄𝙎𝙃𝙀𝘿
» ${publishedTime}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 | 𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉
» ${durationH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝙑𝙄𝙎𝙏𝘼𝙎 | 𝙑𝙄𝙀𝙒𝙎
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝙐𝙍𝙇
» ${url}
*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`, thumbnail, [[null, null]], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' 📡 𝗧𝗜𝗣𝗢𝗦 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ' + fin,
rows: [
{title: "𓃠 𝗩 𝗜 𝗗 𝗘 𝗢 (Opcion 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "𓃠 𝗩 𝗜 𝗗 𝗘 𝗢 (Opcion 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "𓃠 𝗔 𝗨 𝗗 𝗜 𝗢 (Opcion 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "𓃠 𝗔 𝗨 𝗗 𝗜 𝗢 (Opcion 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' 🔎 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔 𝗔𝗩𝗔𝗡𝗭𝗔𝗗𝗔 ' + fin,
rows: [
{title: "𓃠 𝗠 𝗔 𝗦  𝗥 𝗘 𝗦 𝗨 𝗟 𝗧 𝗔 𝗗 𝗢 𝗦", rowId: `${usedPrefix}ytsearch ${url}`}
]}]

const listMessage = {
  text: `𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉 ${text}?`,
  footer: global.wm,
  title: `${htki} *♻️ 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`,
  buttonText: `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}catch(e){
m.reply(`${fg}𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊\n𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.limit = 1
export default handler
