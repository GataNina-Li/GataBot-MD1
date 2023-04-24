import util from 'util'

import path from 'path'

let handler = async (m, { conn }) => {

if (!db.data.chats[m.chat].audios && m.isGroup) throw 0

global.db.data.users[m.sender].money += 100 

global.db.data.users[m.sender].exp += 100

  

let vn = './media/La emotiza insana(MP3_320K).mp3'

conn.sendFile(m.chat, vn, 'La emotiza insana(MP3_320K).mp3', null, m, true, {

type: 'audioMessage', 

ptt: true 

})

}

handler.customPrefix = /Emotiza insana|la emotiza insana|una emotiza insana|emotisa insana|la emotisa insana|una emotisa insana|🤑🔥/i 

handler.command = new RegExp

export default handler