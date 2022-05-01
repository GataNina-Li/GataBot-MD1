import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙰𝚄𝙽 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝚄𝙽𝙰 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾, TERMINA LA PARTIDA O ELIMINA LA SALA*\n\n*👉🏻 𝙿𝙰𝚁𝙰 𝚂𝙰𝙻𝙸𝚁 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 "salir" 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙴𝙽𝙳𝙾 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴𝙻 𝙸𝙽𝙸𝙲𝙸𝙾 𝙳𝙴𝙻 𝙹𝚄𝙴𝙶𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻 𝙱𝙾𝚃*\n*👉🏻 𝙿𝙰𝚁𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙻𝙰 𝚂𝙰𝙻𝙰 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #delttt + 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝚂𝙰𝙻𝙰*'
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('*[ ✔ ] 𝚄𝙽 𝙹𝚄𝙶𝙰𝙳𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙾 𝙰 𝙻𝙰 𝚂𝙰𝙻𝙰, 𝙴𝙻 𝙹𝚄𝙴𝙶𝙾 𝙸𝙽𝙸𝙲𝙸𝙰*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `
*👾 𝘾𝙇𝘼𝙎𝙄𝘾𝙊 𝙅𝙐𝙀𝙂𝙊 𝘿𝙀 𝙂𝘼𝙏𝙊 𝙊 3 𝙀𝙉 𝙍𝘼𝙔𝘼 👾*
*𝙴𝚂 𝚃𝚄𝚁𝙽𝙾 𝙳𝙴 @${room.game.currentTurn.split('@')[0]}*

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

*𝚂𝙸 𝙽𝙾 𝚂𝙰𝙱𝙴𝚂 𝙲𝙾𝙼𝙾 𝙹𝚄𝙶𝙰𝚁, 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #infottt*
`.trim()
if (room.x !== room.o) await conn.sendButton(room.x, str, author, ['𝙳𝙰𝚁𝚂𝙴 𝙿𝙾𝚁 𝚅𝙴𝙽𝙲𝙸𝙳𝙾', 'salir'], m, {
mentions: conn.parseMention(str)
})
await conn.sendButton(room.o, str, author, ['𝙳𝙰𝚁𝚂𝙴 𝙿𝙾𝚁 𝚅𝙴𝙽𝙲𝙸𝙳𝙾', 'salir'], m, {
mentions: conn.parseMention(str)
})
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('*[ ⏱️ ] 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰 𝚀𝚄𝙴 𝙴𝙻 𝙹𝚄𝙶𝙰𝙳𝙾𝚁 𝟸 𝚂𝙴 𝚄𝙽𝙰 𝙰 𝙻𝙰 𝚂𝙰𝙻𝙰* ' + (text ? `*𝙴𝙻 𝙹𝚄𝙶𝙰𝙳𝙾𝚁 𝟸 𝙳𝙴𝙱𝙴𝚁𝙰 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝙴𝙻 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚁𝙴𝚂𝙿𝙴𝚃𝙰𝙽𝙳𝙾 𝙻𝙰𝚂 𝙼𝙰𝚈𝚄𝚂𝙲𝚄𝙻𝙰𝚂, 𝙼𝙸𝙽𝚄𝚂𝙲𝚄𝙻𝙰𝚂, 𝙰𝙲𝙴𝙽𝚃𝚄𝙰𝙲𝙸𝙾𝙽𝙴𝚂, 𝙿𝚄𝙽𝚃𝙾𝚂, 𝙲𝙾𝙼𝙰𝚂, 𝙴𝚃𝙲𝙴𝚃𝙴𝚁𝙰:*
${usedPrefix + command} ${text}` : ''))
conn.game[room.id] = room
}}

handler.help = ['tictactoe', 'ttt'].map(v => v + ' [custom room name]')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/
export default handler
