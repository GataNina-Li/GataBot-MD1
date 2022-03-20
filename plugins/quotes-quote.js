import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/random/quotes', {}, 'apikey'))

    let json = res.data
    conn.sendHydrated(m.chat, json.result.by, json.result.quote, media, instagram, 'Instagram', null, null, [
      ['Next', '/quotes'],
      [null, null],
      [null, null]
], m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i

export default handler
