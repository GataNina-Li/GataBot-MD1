export async function all(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
let caption = `*${this.user.name}* *SE VA DEL GRUPO!!!, SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO!!*\n\n✅ *ASISTENCIA PARA USUARIOS*\n*https://www.instagram.com/gata_dios*`
let pp = './media/menus/Menu2.jpg'
    
await this.sendButton(m.chat, caption, wm, pp, [['𝙃𝘼𝙎𝙏𝘼 𝙋𝙍𝙊𝙉𝙏𝙊 | 𝘽𝙔𝙀 💖', '.hastapronto']], null)
await this.groupLeave(m.chat)
chats.expired = null
}}

