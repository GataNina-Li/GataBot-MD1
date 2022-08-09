import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {

if (command == 'consejo') {
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`
*╭━━━━━━━━━⬣*
*ღ ${frase1}*
*╰━━━━━━━━━⬣*`)}

if (command == 'fraseromantica') {
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`
*╭━━━━━━━━━⬣*
*ღ ${frase1}*
*╰━━━━━━━━━⬣*`)}

if (command == 'historia') {
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'es' })
let titletime = await translate(`${title}`, { tld, to: 'es' })
conn.reply(m.chat, `
💗 *Título: ${titletime}*
💗 *Autor(a): ${author_name}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📖 *${storytime}*`, m)}
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'fraseromantica', 'historia']
export default handler
