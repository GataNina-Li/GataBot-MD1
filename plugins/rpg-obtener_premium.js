let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
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
📛 *Nombre:* ${user.name}
📆 *minutos:* ${txt} minutos
📉 *cuenta regresiva:* ${user.premiumTime - now}`)
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = true
handler.rowner = true

export default handler
