import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝘼𝙉𝙄𝙈𝙀\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼𝙉 𝘼𝙉𝙄𝙈𝙀`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀 
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀𝙋𝙄𝙎𝙊𝘿𝙄𝙊𝙎 | 𝙀𝙋𝙄𝙎𝙊𝘿𝙀𝙎
❣ ${episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙄𝘿𝙊 𝙋𝙊𝙍 | 𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙏𝙀𝘿 𝘽𝙔
❣ ${type}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝘾𝙄𝙊𝙉 | 𝙍𝘼𝙏𝙄𝙉𝙂
❣ ${rated}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙐𝙉𝙏𝘼𝙅𝙀 | 𝙎𝘾𝙊𝙍𝙀
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎 | 𝙈𝙀𝙈𝘽𝙀𝙍𝙎
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙄𝙉𝙊𝙋𝙎𝙄𝙎 𝙀𝙉𝙂𝙇𝙄𝙎𝙃
❣ ${synopsis}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀𝙉𝙇𝘼𝘾𝙀 | 𝙐𝙍𝙇
❣ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
