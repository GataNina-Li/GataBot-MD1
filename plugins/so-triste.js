import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 30
global.db.data.users[m.sender].exp += 70
  
let vn = './media/violin.mp3'
conn.sendFile(m.chat, vn, 'violin.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Estoy triste|ESTOY TRISTE|estoy triste|Triste|TRISTE|triste|Troste|TROSTE|troste|Truste|TRUSTE|truste/i
handler.command = new RegExp
export default handler
