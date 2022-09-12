import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
/*await m.reply(`
╭━〔 👝 *CARTERA | WALLET* 〕━⬣
┃ ${name} 𝙀𝙣 𝙨𝙪 𝘾𝙖𝙧𝙩𝙚𝙧𝙖 𝙩𝙞𝙚𝙣𝙚...
┃ *${global.db.data.users[who].limit} Diamante(s)* 💎
┃ *${global.db.data.users[who].money} GataCoin(s)* 🐈
┃ *${global.db.data.users[who].exp} EXP* ⚡
┃ *${global.db.data.users[who].joincount} Token(s)* 🪙
┃ *${global.db.data.users[who].emerald} Esmeralda(s)* 💚
┃ *${global.db.data.users[who].potion} Poción(es)* 🥤
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙄𝙣 𝙮𝙤𝙪𝙧 𝙬𝙖𝙡𝙡𝙚𝙩 𝙮𝙤𝙪 𝙝𝙖𝙫𝙚...
┃ *${global.db.data.users[who].limit} Diamond(s)* 💎
┃ *${global.db.data.users[who].money} GataCoin(s)* 🐈
┃ *${global.db.data.users[who].exp} EXP* ⚡
┃ *${global.db.data.users[who].joincount} Token(s)* 🪙
┃ *${global.db.data.users[who].emerald} Emerald(s)* 💚
┃ *${global.db.data.users[who].potion} Potion(s)* 🥤
╰━━━━〔 *𓃠 ${vs}* 〕━━━⬣`)

await conn.sendHydrated(m.chat, wm, `Puede comprar más recuersos económicos usando estos comandos\nYou can buy more cheap resources using these commands\n\nCOMPRAR DIAMANTES CON EXP\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\nCOMPRAR DIAMANTES CON GATACOINS\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\nCOMPRAR TOKENS CON DIAMANTES\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu']
], m,) */
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
    economia: {
    exp: true,
    limit: true,
    money: true,
  },
}
const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)}: ${user[v]}*`).filter(v => v).join('\n').trim()
await conn.sendButton(m.chat, `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, recursos, img5, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, enlace)  
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
