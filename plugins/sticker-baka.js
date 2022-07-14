import axios from "axios" 
import fetch from 'node-fetch'
let handler = async (m, {command, conn}) => {

//let res = await axios("https://source.unsplash.com/featured/?girl,woman")
//let json = res.data
//let url = json.url
let res = await fetch('https://source.unsplash.com/featured/?girl,woman')
let json = await res.json()
let { url } = json
conn.sendButton(m.chat, `Chica`.trim(), wm, url, [['😻 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏', `/${command}`]], m)}

handler.help = ['dado']
handler.tags = ['game']
handler.command = ['chi'] 
export default handler

