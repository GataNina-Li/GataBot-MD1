import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝙃𝘼𝘽𝙇𝘼𝙍 𝘾𝙊𝙉𝙈𝙄𝙂𝙊\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Hola Gata Bot*\n\n𝙒𝙍𝙄𝙏𝙀 𝘼 𝙏𝙀𝙓𝙏 𝙏𝙊 𝙏𝘼𝙇𝙆 𝙏𝙊 𝙈𝙀\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Hello Gata Bot*`
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=es`)    //(`https://simsimi.info/api/?text=${text}&lc=es`)    
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
//m.reply(`${tes}`) 
conn.sendHydrated(m.chat, `${tes}`, `𝘼𝙄 | ${wm}`, null, null, null, null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m)
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler



/*import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝙰 𝙷𝙰𝙱𝙻𝙰𝚁 𝙲𝙾𝙽 𝚂𝙸𝙼𝚂𝙸𝙼𝙸 𝙾 𝙴𝙻 𝙱𝙾𝚃*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} Hola bot*`
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
m.reply(json.success)}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i
export default handler*/



