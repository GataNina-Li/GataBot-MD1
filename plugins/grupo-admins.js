let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* ${pesan}`
let text = 
`╭━━[ *𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝘼𝘿𝙈𝙄𝙉𝙎* ]━━━⬣ 
${oi}

*𝘼𝘿𝙈𝙄𝙉𝙎:*
${listAdmin}

𝙐𝙎𝘼𝙍 𝙀𝙉 𝘾𝘼𝙎𝙊 𝘿𝙀 𝙀𝙈𝙀𝙍𝙂𝙀𝙉𝘾𝙄𝘼
╰━━━━━━[ *𓃠 ${vs}* ]━━━━━⬣`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
  
await conn.sendHydrated(m.chat, null, `𝘼𝙙𝙢𝙞𝙣𝙨 | ${wm}`, null, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘', '.menu']
], m)//, false, { mentions: [...groupAdmins.map(v => v.id), owner] })  
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
