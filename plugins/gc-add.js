import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
try {
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.onWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
}))})
    const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = getBinaryNodeChild(response, 'add')
    const participant = getBinaryNodeChildren(add, 'participant')
    for (const user of participant.filter(item => item.attrs.error == 403)) {
        const content = getBinaryNodeChild(user, 'add_request')
        const invite_code = content.attrs.code
        const invite_code_exp = content.attrs.expiration
        let teks = `*error*`
        m.reply(teks, null, {
        mentions: conn.parseMention(teks)
})}
} catch (e) {
throw m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝚀𝚄𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙾, 𝙴𝚂𝚃𝙾 𝙿𝚄𝙴𝙳𝙴 𝙾𝙲𝚄𝚁𝚁𝙸𝚁 𝙿𝙾𝚁𝚀𝚄𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚂𝙰𝙻𝙸𝙾 𝚁𝙴𝙲𝙸𝙴𝙽𝚃𝙴𝙼𝙴𝙽𝚃𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙾 𝚃𝙸𝙴𝙽𝙴 𝙲𝙾𝙽𝙵𝚁𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝚂𝚄 𝙿𝚁𝙸𝚅𝙰𝙲𝙸𝙳𝙰𝙳 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁𝙻𝙾 𝙰 𝙶𝚁𝚄𝙿𝙾𝚂, 𝚃𝙴 𝙰𝙲𝙾𝙽𝚂𝙴𝙹𝙰𝙼𝙾𝚂 𝙴𝙽𝚅𝙸𝙰𝙻𝙴 𝙻𝙰 𝙸𝙽𝚅𝙸𝚃𝙰𝙲𝙸𝙾𝙽 𝙼𝙰𝙽𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴!!*')}
}
handler.command = /^(agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
