export async function all(m, conn) {
    //let res = await conn.groupAcceptInvite(code)
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `*${this.user.name}* *SE VA DEL GRUPO!!!, SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO!!*\n\n✅ *ASISTENCIA PARA USUARIOS*\n*https://www.instagram.com/gata_dios*`
        let pp = './media/menus/Menu2.jpg'
    //await this.sendButton(m.chat, caption, wm, null, [['Eliminar caducado', '/delexpired'], ['Cec caducado', '/cekexpired']], null)
await this.sendButton(m.chat, caption, wm, pp, [['𝙃𝘼𝙎𝙏𝘼 𝙋𝙍𝙊𝙉𝙏𝙊 | 𝘽𝙔𝙀 💖', '.hastapronto']], null)
//await conn.sendHydrated2(m.chat, caption, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, m,)
        
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}

