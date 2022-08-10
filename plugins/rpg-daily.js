//const free = 5000
//const prem = 20000

let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastclaim + 120000//86400000
  
if (new Date - global.db.data.users[m.sender].lastclaim < 120000) throw `🎁 *Ya recogiste tu recompensa diaria*\n\n🕚 Vuelve en *${msToTime(time - new Date())}* `

//let dia = `${pickRandom(['20','25','30','35','40','45','50','55','60','65','70'])}`
//let gata = `${pickRandom(['1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000'])}`
//let tok = `${pickRandom(['2','4','8','12','15','20','24','28','30','35','40'])}`
//let expp = `${pickRandom(['3000','4000','5000','6000','7000','8000','9000','10000','11000','12000','13000'])}`
let img = 'https://img.freepik.com/vector-gratis/gente-diminuta-enormes-cajas-regalo-ilustracion-vectorial-plana-personas-que-celebran-cumpleanos-envian-o-reciben-regalos-lealtad-o-ideas-brillantes-recompensa-bonificacion-concepto-fiesta_74855-25016.jpg?w=2000'
let dia = `${pickRandom(['5','10','15','20','25','30','35','40','45','50','55'])}`
let gata = `${pickRandom(['500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500'])}`
let tok = `${pickRandom(['2','12','3','4','5','6','7','8','9','10','11'])}`
let expp = `${pickRandom(['1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000'])}`


  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += gata
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp
  
let texto = `
✨ *RECLAMO DIARIO*

🎁 ${dia} Diamantes 💎
🎁 ${tok} Tokens 🪙
🎁 ${gata} GataCoins 🐈
🎁 ${expp} Exp ⚡`

await conn.sendButton(m.chat, texto, wm, img, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)

  //m.reply(`
//🎁 *RECOMPENSA DIARIA*
//▢ *Has recibido:*
//🆙 *XP* : +${isPrems ? prem : free}`)
global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['daily', 'reclamar', 'reclamo', 'claim'] 
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

