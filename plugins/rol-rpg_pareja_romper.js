let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var ayg = global.db.data.users[who] //@${global.db.data.users[m.sender].pasangan.split('@')[0]}
var beb = global.db.data.users[global.db.data.users[who].pasangan]
var user = conn.getName(who)

if(ayg.pasangan == ""){
return conn.reply(m.chat,`No tienes pareja.`,m)}
  
if (typeof beb == "undefined"){
conn.reply(m.chat,`Rompió con éxito con ${user}`, m, {contextInfo: { mentionedJid: [user] }})
ayg.pasangan = ""
}

if (m.sender == beb.pasangan){
conn.reply(m.chat,`Usted Rompió con éxito con ${user}`, m, {contextInfo: { mentionedJid: [user] }})
ayg.pasangan = ""
beb.pasangan = ""
}else {
conn.reply(m.chat,`no tienes pareja.`,m)}}

handler.command = /^(romper)$/i
handler.group = true

export default handler
