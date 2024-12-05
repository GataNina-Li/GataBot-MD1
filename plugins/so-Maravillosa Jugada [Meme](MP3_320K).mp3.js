import util from 'util'

import path from 'path'

let handler = async (m, { conn }) => {

if (!db.data.chats[m.chat].audios && m.isGroup) throw 0

global.db.data.users[m.sender].money += 40

global.db.data.users[m.sender].exp += 20

let vn = './media/Maravillosa Jugada [Meme](MP3_320K).mp3'

conn.sendFile(m.chat, vn, 'Maravillosa Jugada [Meme](MP3_320K).mp3', null, m, true, {

type: 'audioMessage', 

ptt: true 

})

}

handler.customPrefix = /Maravillosa jugada|👏🏻/i

handler.command = new RegExp

export default handler