let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙎𝙐 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 𝙋𝘼𝙍𝘼 𝙎𝙀𝙍 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝘿𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `╭━〔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 〕━⬣  
⁉️ 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼
🙀 *${text}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼
😼 *${['Si','Tal vez sí','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
╰━━━━━〔 𓃠 *${vs}* 〕━━━━⬣`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'The Lolibot-𝙈𝘿', null, null, [
['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 🔮', `${usedPrefix + command} ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
