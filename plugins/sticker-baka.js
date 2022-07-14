import axios from "axios" 
let handler = async (m, {command, conn}) => {

let res = await axios("https://source.unsplash.com/featured/?girl,woman")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `Chica`.trim(), wm, url, [['😻 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏', `/${command}`]], m)}

handler.help = ['dado']
handler.tags = ['game']
handler.command = ['chi'] 
export default handler

