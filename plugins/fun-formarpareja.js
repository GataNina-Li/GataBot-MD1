let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝙳𝙴𝙱𝙴𝚁𝙸𝙰𝚂 𝙲𝙰𝚂𝙰𝚁𝚃𝙴 💍 𝙲𝙾𝙽 ${toM(b)}, 𝙷𝙰𝙲𝙴𝙽 𝚄𝙽𝙰 𝙱𝚄𝙴𝙽𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 💓*`, null, {
mentions: [a, b]
})

let veloz = 
`🚄 *VELOCIDAD:*\n `

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/GataNina-Li/GataBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: '𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: '𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage }

handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
export default handler
