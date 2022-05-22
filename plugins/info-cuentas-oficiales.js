let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *Grupos - ASISTENCIA*
*https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por el grupo de WhatsApp.*\n
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', 'the whatBots420', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentaswb|cuentawb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasbot|cuentabot|cuentasbot$/i
handler.exp = 35
export default handler
