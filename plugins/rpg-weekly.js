import fetch from 'node-fetch'
let handler = async (m, { isPrems, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

let user = global.db.data.users[m.sender]
let premium = user.premium

let exp = `${pickRandom([1000, 1800, 2500, 3000, 3700, 4400, 5000, 5500, 6000, 6500])}` * 1
let exppremium = `${pickRandom([3000, 4500, 6600, 8500, 9999, 10500, 11600, 12650, 13479, 15000])}` * 1

let diamond = `${pickRandom([3, 5, 8, 9, 11, 13, 16, 18, 19, 20])}` * 1
let diamondpremium = `${pickRandom([8, 14, 18, 22, 27, 29, 33, 36, 38, 40])}` * 1

let kyubi = `${pickRandom([5, 8, 15, 16, 25, 28, 30])}` * 1
let kyubipremium = `${pickRandom([12, 19, 25, 34, 44, 50])}` * 1

let sampah = `${pickRandom([3, 3, 5, 7, 9, 14, 15])}` * 1
let sampahpremium = `${pickRandom([5, 8, 16, 21, 25, 30])}` * 1

let sword = `${pickRandom([1, 1, 2, 2, 1])}` * 1
let swordpremium = `${pickRandom([2, 3, 3, 5, 8])}` * 1

let uncoommon = `${pickRandom([2, 2, 2, 3, 3, 3, 4, 4, 4, 5])}` * 1
let uncoommonpremium = `${pickRandom([5, 5, 5, 5, 5, 7, 7, 9, 9, 10])}` * 1

let mythic = `${pickRandom([2, 2, 2, 1, 2, 1, 1, 2, 1, 3])}` * 1
let mythicpremium = `${pickRandom([2, 2, 3, 3, 3, 3, 4, 4, 4, 3])}` * 1
 
const recompensas = {
  exp: premium ? exppremium : exp,
  diamond: premium ? diamondpremium : diamond,
  kyubi: premium ? kyubipremium : kyubi,
  sampah: premium ? sampahpremium : sampah,
  sword: premium ? swordpremium : sword,
  uncoommon: premium ? uncoommonpremium : uncoommon,
  mythic: premium ? mythic : mythicpremium,
}

let time = user.lastweekly + 120000 //259200000 3 dias
if (new Date - user.lastweekly < 120000) return await conn.sendButton(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙄𝘽𝙄𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝙎𝙀𝙈𝘼𝙉𝘼𝙇 ⛅\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝙍𝙀𝘾𝙄𝘽𝙄𝙍 𝙊𝙏𝙍𝘼 𝙀𝙉𝙏𝙍𝙀𝙂𝘼\n\n𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 𝙔𝙊𝙐𝙍 𝙒𝙀𝙀𝙆𝙇𝙔 𝙍𝙀𝙒𝘼𝙍𝘿 ⛅\n𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉 *${msToTime(time - new Date())}* 𝙏𝙊 𝙍𝙀𝘾𝙀𝙄𝙑𝙀 𝘼𝙉𝙊𝙏𝙃𝙀𝙍 𝘿𝙀𝙇𝙄𝙑𝙀𝙍𝙔`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n`}
let text = `
╭━━⛅━☃️━⛈️━━⬣
┃ ☀️ 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝙎𝙀𝙈𝘼𝙉𝘼𝙇!!
┃ 🌕 𝙒𝙀𝙀𝙆𝙇𝙔 𝙍𝙀𝙒𝘼𝙍𝘿!!
┃ *${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*
╰━━💫━🌈━🌛━━⬣`

await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, gata.getRandom(), [['🌅 𝙀𝙉𝙏𝙍𝙀𝙂𝘼 𝘿𝙀𝙇 𝙈𝙀𝙎 | 𝙈𝙊𝙉𝙏𝙃 🌠', '/monthly'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, enlace)  
user.lastweekly = new Date * 1
}
handler.command = ['weekly', 'semana', 'semanal', 'semanas', 'entregasemanal'] 
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
