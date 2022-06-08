import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 40 
global.db.data.users[m.sender].exp += 50
  
let vn = './media/sempai.mp3'
conn.sendFile(m.chat, vn, 'sempai.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /hablame|Habla me|Hablame|habla me|Háblame|háblame/ 
handler.command = new RegExp
export default handler
