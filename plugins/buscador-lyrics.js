import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${usedPrefix + command} beret`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
m.reply(`
𝐓𝐈𝐓𝐔𝐋𝐎: *${result.title}*
𝐀𝐔𝐓𝐎𝐑 ${result.author}


${result.lyrics}


𝐔𝐑𝐋 ${result.link}
`.trim())
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
