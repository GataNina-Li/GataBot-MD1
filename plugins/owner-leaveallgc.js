let handler = async ({ command }) => {
    let chat = Object.keys(conn.chats).filter(v => v.endsWith('g.us'))
    if (command.endsWith('all') || command.endsWith('semua')) {
        for (let i of chat) { // For loops
            await m.reply('Byee👋, Bot akan keluar dari group')
            await conn.groupLeave(i)
            await delay(1 * 2000) // Delaynya
        }
        await m.reply('Succes!!')
    } else if (args[0] || args.length > 0) {
        let ada = chat.find(bot => bot == args[0]) // Apakah botnya ada disitu
        if (!ada) throw 'Bot tidak berada dalam group itu!!'
        await m.reply('Byee👋, Bot akan keluar dari group', args[0])
        await conn.groupLeave(args[0])
        await m.reply('Succes!!')
    } else {
        if (!m.isGroup) return global.dfail('group', m, conn)
        await m.reply('Byee👋, Bot akan keluar dari group', m.chat) // WKWKW pesannya sama semua. gk kreatif :v
        await conn.groupLeave(m.chat)
    }
    
}

handler.help = ['gc', 'gcall', 'group'].map(v => 'leave' + v)
handler.tags = ['group', 'owner']
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i

handler.rowner = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time)) 