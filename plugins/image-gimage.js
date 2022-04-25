import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat,`
*GOOGLE IMAGEN*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, author, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i
export default handler
