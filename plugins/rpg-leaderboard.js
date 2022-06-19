let handler = async (m, { conn, args, participants, usedPrefix }) => {
  //let user = global.db.data.users[m.sender] 
   //user.registered = false
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
   let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
     let sortedRole = users.map(toNumber('role')).sort(sort('role'))
      let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
     
      let usersExp = sortedExp.map(enumGetKey)
       let usersLim = sortedLim.map(enumGetKey)
        let usersLevel = sortedLevel.map(enumGetKey)
         let usersRole = sortedRole.map(enumGetKey)
          let usersMoney = sortedMoney.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
  let text = `
       🏆 *TABLA DE CLASIFICACION*
    
💠 *TOP ${len} XP 🎯* 
Tú : *${usersExp.indexOf(m.sender) + 1}* de *${usersExp.length} Usuarios*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *TOP ${len} DIAMANTES💎* 
Tú : *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length} Usuarios*

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Diamantes*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *TOP ${len} NIVEL 💪* 
Tú : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length} Usuarios*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Nivel ${level}*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *TOP ${len} ROL 🌟* 
Tú : *${usersRole.indexOf(m.sender) + 1}* de *${usersRole.length} Usuarios*

${sortedRole.slice(0, len).map(({ jid, role }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *TOP ${len} LOLICOINS 🐈*
Tú : *${usersMoney.indexOf(m.sender) + 1}* de *${usersMoney.length} Usuarios*

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} GataCoins*`).join`\n`}
`.trim()
  await conn.reply(m.chat, text, m, { 
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersRole.slice(0, len), ...usersMoney.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
await conn.sendHydrated(m.chat, wm, `𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖 𝙩𝙪𝙨 𝘿𝙖𝙩𝙤𝙨 𝙘𝙤𝙣 𝙡𝙤𝙨 𝘽𝙤𝙩𝙤𝙣𝙚𝙨 𝙙𝙚 𝘼𝙗𝙖𝙟𝙤 𝙚𝙣 𝙚𝙡 𝙏𝙤𝙥 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 𝙤 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n${usedPrefix}nivel\n${usedPrefix}exp\n${usedPrefix}rol`, null, md, 'The Lolibot-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 🎡', '#juegosmenu'],
['𝙍𝙖𝙣𝙜𝙤𝙨 🚹', '#rol'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `${usedPrefix}menu`]
], m,)  
  
}
handler.help = ['top']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top'] 
//handler.register = true
handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
