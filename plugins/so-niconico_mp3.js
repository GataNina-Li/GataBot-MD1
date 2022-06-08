import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 30
  
let vn = './media/niconico.mp3'
conn.sendFile(m.chat, vn, 'niconico.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /niconico|NICONICO|Niconico|niconiconi|Niconiconi|NICONICONI/ 
handler.command = new RegExp
export default handler
