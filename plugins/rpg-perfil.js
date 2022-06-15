import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/EXTbyyn.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`*𝙽𝙾𝙼𝙱𝚁𝙴:* 
${username} ${registered ? '(' + name + ') ': ''}
*𝙽𝚄𝙼𝙴𝚁𝙾:* 
${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*𝙻𝙸𝙽𝙺:* 
wa.me/${who.split`@`[0]}${registered ? 
'*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
*𝙻𝙸𝙼𝙸𝚃𝙴:* 
${limit} 𝚄𝚂𝙾𝚂
*𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾:* 
${registered ? '✅': '❎'}
*𝙿𝚁𝙴𝙼𝙸𝚄𝙼:* 
${prem ? '✅' : '❎'}
*𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴:* 
${sn}`
conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['𝙌𝙪𝙚 𝙚𝙢𝙥𝙞𝙚𝙘𝙚 𝙡𝙖 𝙖𝙫𝙚𝙣𝙩𝙪𝙧𝙖!! 😎', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
