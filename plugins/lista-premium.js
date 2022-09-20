let handler = async (m, { conn, isOwner }) => {
//let prem = global.db.data.users[m.sender].premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `🎟️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 : 𝙑𝙄𝙋 𝙐𝙎𝙀𝙍𝙎

│ Total : ${prem.length} Pengguna${prem ? '\n' + prem.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : ''}`
//` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i
handler.rowner = true
export default handler
