global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚂𝙴 𝙰𝙷 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙾 𝙰 𝙴𝚂𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰*', author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', '/mates']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 1000
if (m.text == math.result) {
  //if (conn.sendButton == money0) {
 
conn.sendButton(m.chat, `💖 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼\n𝙌𝙐𝙀 𝙋𝙍𝙊 😎\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙂𝘼𝙉𝘼𝙎𝙏𝙀 | 𝙒𝙊𝙉\n🏆 ${math.bonus} 𝙓𝙋\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝘽𝙊𝙉𝙊 | 𝘽𝙊𝙉𝙐𝙎\n🎁 $1000 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙎𝙐 𝘿𝙄𝙉𝙀𝙍𝙊 | 𝙔𝙊𝙐𝙍 𝙈𝙊𝙉𝙀𝙔\n💵 $${gatacoins} 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙅𝙪𝙜𝙖𝙧 🧮', `/math ${math.mode}`], ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', `/menu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `*𝚂𝙴 𝙰𝙲𝙰𝙱𝙰𝚁𝙾𝙽 𝚃𝚄𝚂 𝙾𝙿𝙾𝚁𝚃𝚄𝙽𝙸𝙳𝙰𝙳𝙴𝚂*\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂: ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', `/math ${math.mode}`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `*𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰!!*\n*𝙰𝚄𝙽 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂 ${global.math[id][2]} 𝚘𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚍𝚊𝚍𝚎𝚜*`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
