import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
  if (!text) throw! `*Ingrese un numero o corrobore que el numero ingresado este escrito correctamente y en formato internacional*\n*Ejemplo:*\n\n*${usedPrefix + command + ' ' + global.owner[0]}*`
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
  if (response[users] == 408) throw `*El numero se salio recientemente*\n*La unica manera de añadirlo es por medio del enlace del grupo. Usa ${usedPrefix}link para obtener el enlace*`
    const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = getBinaryNodeChild(response, 'add')
    const participant = getBinaryNodeChildren(add, 'participant')
    for (const user of participant.filter(item => item.attrs.error == 403)) {
        const jid = user.attrs.jid
        const content = getBinaryNodeChild(user, 'add_request')
        const invite_code = content.attrs.code
        const invite_code_exp = content.attrs.expiration
        let teks = `*No fue posible añadir a @${jid.split('@')[0]}*\n*Enviando invitacion a su privado...*`
        m.reply(teks, null, {
            mentions: conn.parseMention(teks)
        })
        await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, await conn.getName(m.chat), 'Hey!! Hola, me presento, soy The Mystic - Bot, y soy un Bot para WhatsApp, una persona del grupo utilizo el comando para añadirte al grupo, pero no pude agregarte, asi que te mando la invitacion para que te agregues, te esperamos!!', jpegThumbnail)
    }
}
handler.command = /^(agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
