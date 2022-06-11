import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/pero-esto-ya-es-otro-nivel.mp3'
conn.sendFile(m.chat, vn, 'pero-esto-ya-es-otro-nivel.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Pero esto|pero esto|Pero esto ya es otro nivel|pero esto ya es otro nivel|Otro nivel|otro nivel/ 
handler.command = new RegExp
export default handler
