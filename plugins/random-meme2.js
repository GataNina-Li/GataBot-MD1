import hispamemes from 'hispamemes'

let handler = async (m, { conn, usedPrefix, command }) => {
const meme = hispamemes.meme()
conn.sendFile(m.chat, meme, '', '', m)
}
handler.command = ['meme2', 'memes2'] 

export default handler
