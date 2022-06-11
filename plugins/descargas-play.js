import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Billie Eilish - Bellyache*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw `${fg}𝙉𝙊 𝙎𝙀 𝙋𝙐𝘿𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝙍 𝙀𝙇 𝘼𝙐𝘿𝙄𝙊/𝙑𝙄𝘿𝙀𝙊. 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊`
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
╭━━━━━━━❰  *𓃠*  ❱━━━━━━━⬣
✦ 𝙏𝙄𝙏𝙐𝙇𝙊
✦ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉
✦ ${description}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊
✦ ${publishedTime}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉
✦ ${durationH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙑𝙄𝙎𝙏𝘼𝙎
✦ ${viewH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙐𝙍𝙇
✦ ${url}
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣`.trim(), wm, thumbnail, '', '', null, null, [
    ['𝙑𝙞𝙙𝙚𝙤', `${usedPrefix}play.2 ${url} yes`],
    ['𝘼𝙪𝙙𝙞𝙤', `${usedPrefix}yta ${url} yes`]
  ], m)
    let info = `💝 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙋𝙐𝙀𝘿𝙀 𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝘼𝙍𝙇𝙀.`.trim()  
await conn.sendHydrated(m.chat, info, wm, thumbnail, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝘼𝙪𝙙𝙞𝙤 | 2️⃣', `${usedPrefix}play.1 ${url} yes`],
['𝘽𝙪𝙨𝙘𝙖𝙧 🌐', `.ytsearch ${url} yes`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]
], m,)
    
}catch(e){
m.reply(`${fg}𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.limit = 2
export default handler
