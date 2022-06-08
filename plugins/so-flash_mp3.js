import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 40 
global.db.data.users[m.sender].exp += 60
  
let vn = './media/flash.mp3'
conn.sendFile(m.chat, vn, 'flash.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Me voy|me voy|ME VOY|Me fui|me fui|ME FUI|Se fue|se fue|SE FUE|Adios|adios|ADIOS|Chao|chao|CHAO/i 
handler.command = new RegExp
export default handler
