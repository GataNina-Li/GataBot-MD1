let handler = async (m, { conn }) => {
let prem = global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  let caption = `🎟️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 : 𝙑𝙄𝙋 𝙐𝙎𝙀𝙍𝙎
` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i
handler.rowner = true
export default handler
