import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/chica lgante.mp3'
conn.sendFile(m.chat, vn, 'chica lgante.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Me olvide|ME OLVIDE|me olvide|Me olvidé|me olvidé|ME OLVIDÉ/ 
handler.command = new RegExp
handler.money = 100
export default handler

