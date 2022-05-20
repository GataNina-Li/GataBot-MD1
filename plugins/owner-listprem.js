let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

conn.reply(m.chat, `*╭━━[ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ]━━━⬣*\n*┃*\n` + prem.map(v => '*┃* 💎 @' + v.replace(/@.+/, '')).join`\n``\n*╰━━━━━━━━━━━━━━━━━━⬣*`, m, { contextInfo: { mentionedJid: prem } }) 
                                                                                                                       
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i
handler.rowner = true
export default handler
