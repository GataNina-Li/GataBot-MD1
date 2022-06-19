import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}𝘿𝙀𝘽𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Gata*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴 ${text}*`, m)
  
  conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${text}`, `𝙁𝙤𝙣𝙙𝙤 | 𝙒𝙥 | ${wm}`, img, img, '☘️ 𝙐𝙍𝙇', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚', `${usedPrefix + command} ${text}`],
['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
], m)
  
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.exp = 29
export default handler 
