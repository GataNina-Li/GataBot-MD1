import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 20
  
let vn = './media/no-digas-eso-papu.mp3'
conn.sendFile(m.chat, vn, 'no-digas-eso-papu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /NO DIGAS ESO PAPU|no digas eso papu|No gigas eso papu|NO PAPU|No papu|NO papu|no papu/i 
handler.command = new RegExp
export default handler
