let handler = async (m, { conn, text, usedPrefix, command }) => {
const xpperlimit = 3
let user = global.db.data.users[m.sender]
    //let who
    //if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    //else who = m.chat
    //let user = global.db.data.users[who]
    //if (!who) throw `tag or mention someone!`
    //let txt = text.replace('').trim()
    if (!text) throw `donde el numero de dias?`
    if (text > xpperlimit) throw `No hay diamantes`
    user.limit -= xpperlimit
    //if (isNaN(txt)) return m.reply(`only number!\n\nexample:\n${usedPrefix + command} 7`)
    var jumlahHari = 180000 * text //86400000 son 24 horas
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    
    m.reply(`✔️ Éxito
*Ha Gastado* :  -${xpperlimit} 💎
📛 *Nombre:* ${user.name}
📆 *minutos:* ${text} minutos
📉 *cuenta regresiva:* ${user.premiumTime - now}`)
}  
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = true
handler.rowner = true

export default handler


/*const xpperlimit = 3
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let user = global.db.data.users[m.sender]   


//let count = command.replace(/^buy/i, '')
//count = count ? /premall/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
//count = Math.max(1, count)

let txt = text.replace('').trim()  
//let txt = text.replace('').trim()
if (!txt) throw `donde el numero de dias?`
if (isNaN(txt)) return m.reply(`único número!\n\nexample:\n${usedPrefix + command} 7`)
if txt < xpperlimit throw `No hay diamantes`   
var jumlahHari = 180000 * txt //86400000 son 24 horas
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true

if (user.limit > xpperlimit) return 
conn.reply(m.chat, `❎ Lo siento, no tienes suficientes Diamantes💎`, m)
user.limit -= xpperlimit
    //global.db.data.users[m.sender].limit += count
    
m.reply(`✔️ Éxito
*Ha Gastado* :  -${xpperlimit} 💎
📛 *Nombre:* ${user.name}
📆 *minutos:* ${txt} minutos
📉 *cuenta regresiva:* ${user.premiumTime - now}`)
}  
handler.help = ['prem [@user] <days>']
handler.command = ['obtenerprem', 'buyprem'] 
//handler.command = /^(add|tambah|\+)p(rem)?$/i
handler.group = true
export default handler*/
    
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
