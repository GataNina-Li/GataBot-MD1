import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/Murio.m4a'
conn.sendFile(m.chat, vn, 'Murio.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Murió el grupo|Murio el grupo|murio el grupo|murió el grupo|Grupo muerto|grupo muerto/
handler.command = new RegExp
export default handler
