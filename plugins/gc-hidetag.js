import MessageType from'@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
//let users = participants.map(u => u.jid)
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
let msg = conn.cMod(
m.chat,
conn.prepareMessageFromContent(
m.chat,
{ [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
text: c || ''
} },
{
contextInfo: {
mentionedJid: users
},
quoted: m
}),
text || q.text 
)
await conn.relayWAMessage(msg)
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(opengumuman|oannounce|ohiddentag|hidetag|notificar|noti|notify|notifi)$/i
handler.group = true
handler.admin = true
module.exports = handler

/*import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  const msg = conn.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: m,
      userJid: conn.user.id
    }),
    text || q.text, conn.user.jid, { mentions: users }
  )
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i

handler.group = true
handler.admin = true

export default handler*/
