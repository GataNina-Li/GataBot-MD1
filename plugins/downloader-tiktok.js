import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, args}) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙽 𝙴𝙽𝙻𝙰𝙲𝙴/𝙻𝙸𝙽𝙺 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#tiktok https://vm.tiktok.com/ZML42vSnn/*`
if (command == 'tiktokaudio') {
let espera = '*[❗𝐈𝐍𝐅𝐎❗] 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙾 𝚂𝚄 𝙰𝚄𝙳𝙸𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'tiktok') {
let espera = '*[❗𝐈𝐍𝐅𝐎❗] 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙾 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, m)}
}
handler.help = ['tiktok' , 'tiktokaudio'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktokaudio']
export default handler
