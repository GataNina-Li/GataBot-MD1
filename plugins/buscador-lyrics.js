import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉𝘼 𝘾𝘼𝙉𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙇𝘼 𝙇𝙀𝙏𝙍𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Runaway*`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
𝙏𝙄𝙏𝙐𝙇𝙊
💚 *${result.title}*

𝘼𝙐𝙏𝙊𝙍(𝘼)
💜 *${result.author}*


${result.lyrics}


𝙀𝙉𝙇𝘼𝘾𝙀
🧡 *${result.link}*
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 🚀', `/play ${text}`],
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 🔎', '#buscarmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m)
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 1
handler.level = 3
handler.exp = 55
export default handler 
