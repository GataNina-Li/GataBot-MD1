/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn)
          throw false
  }
  let isClose = {
	  'open': 'not_announcement',
	  'buka': 'not_announcement',
      'on': 'not_announcement',
	  '1': 'not_announcement',
	  'close': 'announcement',
	  'tutup': 'announcement',
      'off': 'announcement',
      '0': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined) {
	  let caption = `
*• 𝙚𝙟𝙚𝙢𝙥𝙡𝙤 :*
*${usedPrefix + command} open 1*
*${usedPrefix + command} close 1*
📌 *𝙚𝙟𝙚𝙢𝙥𝙡𝙤 𝙙𝙚𝙡 𝙪𝙨𝙤:* *${usedPrefix + command} close 1* 
*_😺 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙚𝙨𝙩𝙚 𝙘𝙚𝙧𝙧𝙖𝙙𝙤 1 𝙝𝙤𝙧𝙖.*
`
      m.reply(caption)
	  throw false
  }
  let timeoutset = 86400000 * args[1] / 24
  await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
	  m.reply(`⚠️ *𝙜𝙧𝙪𝙥𝙤 ${isClose == 'announcement' ? 'cerrado' : 'abierto'} ${args[1] ? `durante *${clockString(timeoutset)}*` : ''}`)
  })
  if (args[1]) {
	 setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? '*𝙀𝙡 𝙜𝙧𝙪𝙥𝙤 𝙝𝙖 𝙨𝙞𝙙𝙤 𝙘𝙚𝙧𝙧𝙖𝙙𝙤, ¡𝙖𝙝𝙤𝙧𝙖 𝙨𝙤𝙡𝙤 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙥𝙪𝙚𝙙𝙚𝙣 𝙚𝙣𝙫𝙞𝙖𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨!*' : '*𝙀𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚 𝙝𝙖 𝙖𝙗𝙞𝙚𝙧𝙩𝙤, ¡𝙖𝙝𝙤𝙧𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙢𝙞𝙚𝙢𝙗𝙧𝙤𝙨 𝙥𝙪𝙚𝙙𝙚𝙣 𝙚𝙣𝙫𝙞𝙖𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨!*'}!`)
	    })
        }, timeoutset)
  }
  }
handler.help = ['grouptime *<open/close>* *<número>*']
handler.tags = ['group']
handler.command = /^(grouptime|gctime)$/i

handler.botAdmin = true
handler.group = true 

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
