//let handler = m => m
//export async function all(m) {
export async function all(m, { conn, isAdmin, isBotAdmin, isOwner }) {
let user = global.db.data.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
await conn.sendButton(m.chat, `*@${m.sender.split`@`[0]} ¡Se acabó tu tiempo premium!*`, wm, null, [
['☘️ 𝙈𝙀𝙉𝙐', '/menu']], false, { mentions: [m.sender] })}
//await m.reply(`*${m.getName(m.sender)} ¡Se acabó tu tiempo premium!*`)
user.premiumTime = 0
user.premium = false
}}}
