import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*Inserte el link/enlace que desee acortar*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `*Link acortado correctamente!!*\n\n*Link anterior:*\n${text}\n*Link nuevo:*\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','short'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
