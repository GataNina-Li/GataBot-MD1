import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/huele a sexo Dross.mp3'
conn.sendFile(m.chat, vn, 'huele a sexo Dross.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /🔥|sexo|Sexo|huele a sexo/
handler.command = new RegExp
export default handler
