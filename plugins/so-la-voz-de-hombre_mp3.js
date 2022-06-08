import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 70
global.db.data.users[m.sender].exp += 60
  
let vn = './media/la-voz-de-hombre.mp3'
conn.sendFile(m.chat, vn, 'la-voz-de-hombre.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /La voz de hombre|la voz de hombre|La voz del hombre|la voz del hombre|La voz|la voz/ 
handler.command = new RegExp
export default handler
