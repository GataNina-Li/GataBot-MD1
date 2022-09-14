let handler = async (m, { conn, text }) => {
var number = text.split`@`[1]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {

var ayg = global.db.data.users[m.sender] //@${global.db.data.users[m.sender].pasangan.split('@')[0]}
var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]
var tu = conn.getName(m.sender)

if(ayg.pasangan == ""){
return conn.reply(m.chat,`No tienes pareja.`,m)}
  
if (typeof beb == "undefined"){
conn.reply(m.chat,`Rompió con éxito con ${tu}`, m, {contextInfo: { mentionedJid: [tu] }})
ayg.pasangan = ""
}

if (m.sender == beb.pasangan){
conn.reply(m.chat,`Usted Rompió con éxito con ${tu}`, m, {contextInfo: { mentionedJid: [tu] }})
ayg.pasangan = ""
beb.pasangan = ""
}else {
conn.reply(m.chat,`no tienes pareja.`,m)}}}

handler.command = /^(romper)$/i
handler.group = true

export default handler
