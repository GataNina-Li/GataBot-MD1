import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘾𝘼𝙉𝘼𝙇 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
✨ *${v.title}* 
🎈 (${v.url})
⏳ *Duración:* ${v.durationH}
🗓 *Fecha:* de subida: ${v.durationH}
👀 *Vistas:* ${v.view} 
      `.trim()
      case 'channel': return `
✨ *${v.channelName}* 
(${v.url})
👥 *Subscriptores:* ${v.subscriberH} 
🎥 *Videos:* ${v.videoCount}  
`.trim()
    }
  }).filter(v => v).join('\n====================================\n')
 await m.reply(teks)
 let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
handler.level = 4
export default handler
