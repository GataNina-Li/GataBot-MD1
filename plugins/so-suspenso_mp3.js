import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 30
global.db.data.users[m.sender].exp += 30
  
let vn = './media/suspenso.mp3'
conn.sendFile(m.chat, vn, 'suspenso.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Cagaste|Miedo|miedo|Pvp|PVP|temor|que pasa|Que sucede|Que pasa|que sucede|Qué pasa|Qué sucede|Dime|dime/ 
handler.command = new RegExp
export default handler
