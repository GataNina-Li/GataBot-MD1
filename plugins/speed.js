let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠
╠➥ [🤴🏻] 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: *𝙱𝚛𝚞𝚗𝚘 𝚂𝚘𝚋𝚛𝚒𝚗𝚘*
╠➥ [#️⃣] 𝙽𝙾° 𝙳𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: *+1 (772) 238-6341*
╠➥ [🎳] 𝙿𝚁𝙴𝙵𝙸𝙹𝙾: *${usedPrefix}*
╠➥ [🔐] 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂: *${chats.length - groups.length}*
╠➥ [🦜] 𝙲𝙷𝙰𝚃𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂: *${groups.length}* 
╠➥ [💡] 𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: *${chats.length}* 
╠➥ [🚀] 𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳: *${uptime}*
╠➥ [🎩] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [👨‍🦯] 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: 
╠ *${speed} 
╠ 𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
╠
╠═〘 𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭 〙 ═
`.trim() 
conn.reply(m.chat, info, m)
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
