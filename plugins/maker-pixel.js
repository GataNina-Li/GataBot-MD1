let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, 'yahaha kotak-koyak!!', author, global.API('https://some-random-api.ml', '/canvas/pixelate', {
        avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['pixel', `${usedprefix}pixel`]], m)
}

handler.help = ['pixel']
handler.tags = ['maker']

handler.command = /^(pixel)$/i

export default handler