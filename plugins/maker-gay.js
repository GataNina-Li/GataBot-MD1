let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
      avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'gay.png', 'siapa disini yang cita citanya menjadi gay dan memperkosa gw gays?', m)
  }
  
  handler.help = ['gay']
  handler.tags = ['maker']
  
  handler.command = /^(gay)$/i
  
  export default handler