let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
╭━〔 👝 *CARTERA | WALLET* 〕━⬣
┃ ${name} 𝙀𝙣 𝙨𝙪 𝘾𝙖𝙧𝙩𝙚𝙧𝙖 𝙩𝙞𝙚𝙣𝙚...
┃ *${global.db.data.users[who].limit} Diamantes*
┃ *${global.db.data.users[who].money} GataCoins*
┃ *${global.db.data.users[who].exp} EXP*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙄𝙣 𝙮𝙤𝙪𝙧 𝙬𝙖𝙡𝙡𝙚𝙩 𝙮𝙤𝙪 𝙝𝙖𝙫𝙚...
┃ *${global.db.data.users[who].limit} Diamantes*
┃ *${global.db.data.users[who].money} GataCoins*
┃ *${global.db.data.users[who].exp} EXP*
╰━━━━〔 *𓃠 ${vs}* 〕━━━⬣`

conn.sendHydrated(m.chat, wm, `Con sus GataCoins puede comprar Diamantes usando el comando\n#buy cantidad\n#buyall cantidad`, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu'],
['𝙑𝙚𝙧 𝙈𝙞 𝙀𝙓𝙋', '/buy2']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
