let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 *#on antitoxicos* 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘿𝙄𝘾𝙃𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n\n𝙏𝙃𝙀 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 *#on antitoxic* 𝙄𝙎 𝘿𝙀𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀𝘿, 𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙄𝙎 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝙏𝙊 𝙐𝙉𝙇𝙊𝘾𝙆 𝙏𝙃𝙄𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿`, fkontak, m) 
let who
//let img = 'https://i.imgur.com/vWnsjh8.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙎𝙀 𝙇𝙀 𝙑𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙐𝙉𝘼 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⚠️\n\n𝙏𝘼𝙂 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙏𝙊 𝙃𝘼𝙑𝙀 𝘼 𝙒𝘼𝙍𝙉𝙄𝙉𝙂 𝙍𝙀𝙈𝙊𝙑𝙀𝘿 ⚠️\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
user.warn -= 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} 𝙎𝙀 𝙇𝙀 𝙌𝙐𝙄𝙏𝙊 𝙐𝙉𝘼 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!\n\n𝘼 𝙒𝘼𝙍𝙉𝙄𝙉𝙂 𝙒𝘼𝙎 𝙍𝙀𝙈𝙊𝙑𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋!!`, `*ADVERTENCIA : WARNING*\n⚠️ *Antes: ${user.warn + 1}/10*\n⚠️ *Ahora: ${user.warn}/10*\n\n${wm}`, null, [
[`😇 𝙂𝙍𝘼𝘾𝙄𝘼𝙎 | 𝙏𝙃𝘼𝙉𝙆 𝙔𝙊𝙐`, '.ok'],
['🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔', '.inventario'],
['☘️ 𝙈𝙀𝙉𝙐', '/menu']], false, { mentions: [who] }) //[m.sender]
	
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
//handler.command = /^(delwarn|deladvertir|deladvertencia|delwarning|unpoñoñoin|delpoñoñoin|)$/i
handler.command = /^(del|delete|eliminar|\-)advertir|unpoñoñoin|delpoñoñoin|advertencia|warn(ing)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
