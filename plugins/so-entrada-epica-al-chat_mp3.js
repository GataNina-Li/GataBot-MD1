import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 30
global.db.data.users[m.sender].exp += 80
  
let vn = './media/entrada-epica-al-chat.mp3'
conn.sendFile(m.chat, vn, 'entrada-epica-al-chat.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ENTRADA|entrada|Entrada|Entra|ENTRA|Entra|Ingresa|ingresa|INGRESA|ingresar|INGRESAR|Ingresar/i 
handler.command = new RegExp
export default handler
