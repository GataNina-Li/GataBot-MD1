import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`
try {
let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if(!json.data[0]) throw json
let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyi = `❒══════❬ SPOTIFY ❭══════╾❒
┇
┇➠ 🌸 *Titulo:* ${title}
┇
┇➠ 🗣 *Artista:* ${artists}
┇
┇➠ 🎆 *Album:* ${album}
┇
┇➠ ⚡️ *URL*: ${url}
┇
┇➠ 💥 *Dirección de URL:* ${preview_mp3}\n┇\n┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍❒\n\n*_⏳ Enviando música de previsualización_*\n\n🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈`

//await conn.sendHydrated(m.chat, preview_mp3, 'spotify.mp3', spotifyi, wm, thumb, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
//['𝘼𝙪𝙙𝙞𝙤 | 2️⃣', `play.1 ${url} yes`],
//['𝘽𝙪𝙨𝙘𝙖𝙧 | 𝙎𝙚𝙖𝙧𝙘𝙝 | 🌐', `.ytsearch ${url} yes`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `/menu`]
//], m,)
  
conn.sendFile(m.chat, thumb, '', spotifyi, m)
conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyi, m)
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝚂𝙴 𝙻𝙾𝙶𝚁𝙾 𝙱𝚄𝚂𝙲𝙰𝚁 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙾 𝙻𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 𝙳𝙴 𝙰𝚈𝚄𝙳𝙰 𝙿𝙰𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙴𝚂𝚃𝙰 𝙲𝙰𝙸𝙳𝙰, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*'
}}
handler.command = /^(spotify|music)$/i
handler.help = ['spotify']
handler.tags = ['general']
export default handler
