import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/esto va a hacer epico papus.mp3'
conn.sendFile(m.chat, vn, 'esto va a hacer epico papus.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Esto va ser épico papus|esto va ser épico papus|Esto va ser|Esto va a hacer|esto va acer|Esto va aser|esto va ser|esto va a hacer/i 
handler.command = new RegExp
export default handler
