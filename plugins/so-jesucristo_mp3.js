import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 40 
global.db.data.users[m.sender].exp += 60
  
let vn = './media/jesucristo.mp3'
conn.sendFile(m.chat, vn, 'jesucristo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Jesucristo|jesucristo|Jesús|jesús|Auronplay|Auron|Dios/ 
handler.command = new RegExp
export default handler
