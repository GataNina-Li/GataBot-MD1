let handler = async (m, { usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let media = './Menu2.jpg'
let runnya = `
*───「 RUNTIME BOT 」───*

Runtime : ${uptime}
`
//conn.sendButton(m.chat, runnya, wm, null, [['Menu', '.menu']], m) 
conn.sendButton(m.chat, runnya.trim(), wm, media, [`Back To Menu`, `${usedPrefix}menu`], m, {asLocation: true})
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
