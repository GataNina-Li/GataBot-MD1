let handler = async (m, { conn, isPrems}) => { //lastmiming
let hasil = Math.floor(Math.random() * 3000)
let time = global.db.data.users[m.sender].exp + 600000
if (new Date - global.db.data.users[m.sender].exp < 600000) throw `⏲️ _𝙴𝚜𝚙𝚎𝚛𝚊_ ${msToTime(time - new Date())} _𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚖𝚒𝚗𝚊𝚛_`  
m.reply(`🎉 𝙶𝚎𝚗𝚒𝚊𝚕! 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 *${hasil} 𝚇𝙿*`)
global.db.data.users[m.sender].exp = new Date * 1
  
}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}
