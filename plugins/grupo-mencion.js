/*let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*⚡ 𝑴𝒆𝒏𝒔𝒂𝒋𝒆*\n ${pesan}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
let teks = `╭━〔 *𝑨𝑻𝑬𝑵𝑪𝑰𝑶𝑵 𝑮𝑹𝑼𝑷𝑶* 〕━⬣\n\n${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `┃➥ @${username.id.split('@')[0]}\n`}
teks += `╰━━━━[ *𓃠 ${vs}* ]━━━━⬣`
//conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
let img = 'https://i.imgur.com/8fuQ7X5.jpeg'  
conn.sendHydrated(m.chat, teks, `𝑰𝒏𝒇𝒍𝒖.𝒛𝒆𝒖𝒔 | ${wm}`, img, 'https://github.com/ColapsusHD/FutabuBot-MD', '𝙵𝚞𝚝𝚊𝚋𝚞𝙱𝚘𝚝-𝙼𝙳', null, null, [
['𝙄𝙣𝙫𝙤𝙘𝙖𝙧 𝙤𝙩𝙧𝙖 𝙫𝙚𝙯 📣', `${usedPrefix + command}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘', '.menu']
], m, { mentions: participants.map(a => a.id) })  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(zeus)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler*/


import MessageType from '@adiwajshing/baileys'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : { text: c || '' }
}, {
quoted: m,
userJid: conn.user.id
}),
conn.reply(m.chat, `${text} Hola` || q.text, conn.user.jid, { mentions: users }), {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙲𝚘𝚕𝚊𝚙𝚜𝚞𝚜 | 𝙱𝚎𝚗𝚓𝚊',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})
                      
//`${text} Hola` || q.text, conn.user.jid, { mentions: users })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(dinamica)$/i
handler.group = true
handler.admin = true 
export default handler
