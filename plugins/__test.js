import { sticker } from '../lib/sticker.js'
let handler = async (m) => {
    let q = m.quoted ? m.quoted : m
    let buf = await q.download()
    let api = await sticker(buf, '', packname, author)
    conn.sendFile(m.chat, api, '', author, m, '', { asSticker: 1 })
}

handler.command = ['t']

export default handler