let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro 😎 has minado','Genial!! Obtienes','WOW!! eres un(a) gran Minero(a), Obtienes','Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}`
//let boost = `${pickRandom(['https://us.123rf.com/450wm/gioiak2/gioiak21707/gioiak2170700462/82888173-el-casco-el-pico-y-la-pala-del-minero-aislados-en-fondo-negro-ilustraci%C3%B3n-3d.jpg?ver=6','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}`  
let pp = 'https://us.123rf.com/450wm/gioiak2/gioiak21707/gioiak2170700462/82888173-el-casco-el-pico-y-la-pala-del-minero-aislados-en-fondo-negro-ilustraci%C3%B3n-3d.jpg?ver=6' 
let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].exp + 600000
if (new Date - global.db.data.users[m.sender].exp < 600000) throw `*Vuelva en ${msToTime(time - new Date())} para continuar minando ⛏️*`  
conn.sendHydrated(m.chat, `*${minar} *${hasil} 𝙓𝙋*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `menu`]
], m,)
//m.reply(`🎉 𝙶𝚎𝚗𝚒𝚊𝚕! 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 *${hasil} 𝚇𝙿*`)
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
  
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
}
