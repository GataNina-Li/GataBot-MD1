import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}𝘿𝙀𝘽𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Gata*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Cat*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴 ${text}*`, m)
  
  conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙂𝙤𝙤𝙜𝙡𝙚 | ${wm}`, img, img, '☘️ 𝙐𝙍𝙇', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/imagen ${text}`],
['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wallpaper2?)$/i
export default handler
