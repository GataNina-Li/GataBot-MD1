global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`❕⊱𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉⊱❕\n\n✨ 𝙋𝙐𝙀𝘿𝙀 𝙐𝙎𝘼𝙍 𝙇𝙊𝙎 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙇𝘼 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿

𝙉𝙄𝙑𝙀𝙇 𝘿𝙀 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿
${Object.keys(modes).join('  |  ')}

𝙀𝙅𝙀𝙈𝙋𝙇𝙊
${usedPrefix + command} noob
${usedPrefix + command} impossible2

😼 𝙈𝙄𝙀𝙉𝙏𝙍𝘼𝙎 𝙈𝘼𝙎 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿 𝙈𝘼𝙔𝙊𝙍 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝙁𝙖𝙘𝙞𝙡', `${usedPrefix + command} easy`], 
['😎 𝘿𝙞𝙛𝙞𝙘𝙞𝙡', `${usedPrefix + command} hard`], 
['🤑 𝙀𝙭𝙩𝙧𝙚𝙢𝙤', `${usedPrefix + command} extreme`]], m)
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝙁𝙖𝙘𝙞𝙡', `${usedPrefix + command} easy`], 
['😎 𝘿𝙞𝙛𝙞𝙘𝙞𝙡', `${usedPrefix + command} hard`], 
['🤑 𝙀𝙭𝙩𝙧𝙚𝙢𝙤', `${usedPrefix + command} extreme`]], m) 
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `${ag} 𝙃𝘼𝙔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼𝙎 𝙎𝙄𝙉 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝙀𝙉 𝙀𝙇 𝘾𝙃𝘼𝙏!!`, global.math[id][0])
//let ii = global.db.data.users[m.sender].limit += 10 math.dia
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚 *${math.str} = ?*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙞𝙚𝙢𝙥𝙤
🧭 *${(math.time / 1000).toFixed(0)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖 𝙚𝙨𝙩𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙮 𝙂𝙖𝙣𝙖 
🏆 *${math.bonus} 𝙓𝙋*
`, m),
math, 4,
  
await conn.sendHydrated(m.chat, `⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️`, `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘼𝙍𝙍𝙄𝘽𝘼 𝘾𝙊𝙉 𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼`, null, md, 'The Lolibot-𝙈𝘿', null, null, [ 
['𝙏𝙤𝙥𝙨 🏆', `${usedPrefix}top`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `${usedPrefix}menu`]
], m), math, 4,
  
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘼𝘾𝘼𝘽𝙊 𝙀𝙇 𝙏𝙄𝙀𝙈𝙋𝙊!!\n𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝙀𝙎 *${math.result}*${math.result}*`, wm, null, [['𝙄𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤', `${usedPrefix + command} ${math.mode}`], ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 🎡', `/juegosmenu`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i

export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 30], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 50],
medium: [-40, 40, -20, 20, '*/+-', 40000, 200],
hard: [-100, 100, -70, 70, '*/+-', 60000, 500],
extreme: [-999999, 999999, -999999, 999999, '*/', 25000, 2500],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 20000, 5500],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 15000, 8500]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
