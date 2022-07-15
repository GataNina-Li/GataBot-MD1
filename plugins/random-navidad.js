import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Christmas")
let json = res.data
let gata = json.url
conn.sendButton(m.chat, `_Navidad 🧑‍🎄_`, wm, gata, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
export default handler
