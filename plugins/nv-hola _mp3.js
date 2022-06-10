import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Hola amigos como están que introducción épica no Dross.mp3'
conn.sendFile(m.chat, vn, 'Hola amigos como están que introducción épica no Dross.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(hola|ola|Hola🤖|ola🤖)$/i
handler.fail = null
handler.exp = 100
export default handler
