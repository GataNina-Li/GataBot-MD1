import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${ag} 𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n#on restrict | #off restrict\n𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`
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
        let teks = `${fg}𝙉𝙊 𝙎𝙀 𝙋𝙐𝙀𝘿𝙀 𝘼𝙉𝘼𝘿𝙄𝙍 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊, 𝙑𝙀𝙍𝙄𝙁𝙄𝙌𝙐𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊, 𝙏𝘼𝙇 𝙑𝙀𝙕 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙎𝘼𝙇𝙄𝙊 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊, 𝙊 𝙀𝙎𝙏𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝘼 𝙇𝘼 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 𝙀𝙉 𝙂𝙍𝙐𝙋𝙊𝙎, 𝘿𝙀 𝙎𝙀𝙍 𝘼𝙎𝙄, 𝙀𝙉𝙑𝙄𝙀 𝙐𝙉𝘼 𝙄𝙉𝙑𝙄𝙏𝘼𝘾𝙄𝙊𝙉 𝙈𝘼𝙉𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀.`
        m.reply(teks, null, {
        mentions: conn.parseMention(teks)
})}
} catch (e) {
throw m.reply(`${fg}𝙉𝙊 𝙎𝙀 𝙋𝙐𝙀𝘿𝙀 𝘼𝙉𝘼𝘿𝙄𝙍 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊, 𝙑𝙀𝙍𝙄𝙁𝙄𝙌𝙐𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊, 𝙏𝘼𝙇 𝙑𝙀𝙕 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙎𝘼𝙇𝙄𝙊 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊, 𝙊 𝙀𝙎𝙏𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝘼 𝙇𝘼 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 𝙀𝙉 𝙂𝙍𝙐𝙋𝙊𝙎, 𝘿𝙀 𝙎𝙀𝙍 𝘼𝙎𝙄, 𝙀𝙉𝙑𝙄𝙀 𝙐𝙉𝘼 𝙄𝙉𝙑𝙄𝙏𝘼𝘾𝙄𝙊𝙉 𝙈𝘼𝙉𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀.`)}
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
