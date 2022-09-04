let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let user = global.db.data.users[m.sender]   
const xpperlimit = 3

//let count = command.replace(/^buy/i, '')
//count = count ? /premall/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
//count = Math.max(1, count)
    
let txt = text.replace('').trim()
if (!txt) throw `donde el numero de dias?`
if (isNaN(txt)) return m.reply(`único número!\n\nexample:\n${usedPrefix + command} 7`)
    
var jumlahHari = 180000 * txt //86400000 son 24 horas
var now = new Date() * 1
if txt >= xpperlimit {
if (now < user.premiumTime) user.premiumTime += jumlahHari
else user.premiumTime = now + jumlahHari
user.premium = true


    
if (global.db.data.users[m.sender].limit >= xpperlimit) {
    global.db.data.users[m.sender].limit -= xpperlimit
    //global.db.data.users[m.sender].limit += count
    
m.reply(`✔️ Éxito
*Ha Gastado* :  -${xpperlimit * count} 𝙓𝙋
📛 *Nombre:* ${user.name}
📆 *minutos:* ${txt} minutos
📉 *cuenta regresiva:* ${user.premiumTime - now}`)
} else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)
}  
handler.help = ['prem [@user] <days>']
handler.command = ['prem', 'buypremall'] 
//handler.command = /^(add|tambah|\+)p(rem)?$/i
handler.group = true


export default handler
    
    /*let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `etiqueta o menciona a alguien!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `donde el numero de dias?`
    if (isNaN(txt)) return m.reply(`único número!\n\nexample:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    var jumlahHari = 180000 * txt //86400000 son 24 horas 
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    m.reply(`✔️ Éxito
┃ *Compra Efectuada* : +${count} 💎 
┃ *Ha Gastado* :  -${xpperlimit * count} 𝙓𝙋

📛 *Nombre:* ${user.name}
📆 *minutos:* ${txt} minutos
📉 *cuenta regresiva:* ${user.premiumTime - now}`)
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = true
handler.rowner = true

export default handler*/
