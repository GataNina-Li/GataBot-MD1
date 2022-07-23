import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`

const s = [
// 'https://media2.giphy.com/media/awEamY4rvlY0uXf6a8/giphy.gif?cid=ecf05e471flaehmn8xdife8uofelqxdgnrsskq0z3cl1pjfs&rid=giphy.gif&ct=g'
' https://i.ytimg.com/vi/o_CUKEyS4WM/maxresdefault.jpg'
];  
 
 let stiker = await sticker(null, s, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
//conn.sendFile(m.chat, s, 'sticker.gif', null, m)
 
 }
handler.customPrefix = /payaso|🤡|pallaso/i 
handler.command = new RegExp
export default handler
