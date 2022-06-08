import util from 'util'
import path from 'path'
 
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 70
global.db.data.users[m.sender].exp += 100
  
let vn = './media/masivo-cancion.mp3'
conn.sendFile(m.chat, vn, 'masivo-cancion.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /MA MA MASIVO|ma ma masivo|Ma ma masivo|Bv|BV|bv|masivo|Masivo|MASIVO/i 
handler.command = new RegExp
export default handler
