import { sticker } from '../lib/sticker.js'

let handler = m => m

handler.all = async function (m) {
let chat = db.data.chats[m.chat]
let user = db.data.users[m.sender]

if (chat.autosticker && m.isGroup) {
let q = m
let stiker = false
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp/g.test(mime)) return
if (/image/g.test(mime)) {
let img = await q.download?.()
if (!img) return
stiker = await sticker(img, false, packname, author)
} else if (/video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await this.sendButton(m.chat, `${fg}𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙉𝙊 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘿𝙐𝙍𝘼𝙍 𝙈𝘼𝙎 𝘿𝙀 *7* 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎\n\n𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊 𝙎𝙃𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝙇𝘼𝙎𝙏 𝙈𝙊𝙍𝙀 𝙏𝙃𝘼𝙉 *7* 𝙎𝙀𝘾𝙊𝙉𝘿𝙎`, wm, [['𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍', '/disable autosticker']], m)
let img = await q.download()
if (!img) return
stiker = await sticker(img, false, packname, author)
} else if (m.text.split(/\n| /i)[0]) {
if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author)
else return
}
if (stiker) {
await this.sendFile(m.chat, stiker, null, { asSticker: true })
}}
return !0
}
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))}
