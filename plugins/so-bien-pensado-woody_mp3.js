import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 10 
global.db.data.users[m.sender].exp += 10
  
let vn = './media/bien-pensado-woody.mp3'
conn.sendFile(m.chat, vn, 'bien-pensado-woody.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Bien pensado woody|bien pensado woody|Bien pensado|bien pensado|Bien pensado wudy|bien pensado wudy|Bien pensado Woody|bien pensado Woody|Bien pensado woodi|bien pensado woodi/
handler.command = new RegExp
export default handler
