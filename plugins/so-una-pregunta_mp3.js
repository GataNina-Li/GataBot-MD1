import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 60
global.db.data.users[m.sender].exp += 70
  
let vn = './media/una-pregunta.mp3'
conn.sendFile(m.chat, vn, 'una-pregunta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Una pregunta|una pregunta|WhatsApp|whatsApp|pregunton|preguntona/ 
handler.command = new RegExp
export default handler
