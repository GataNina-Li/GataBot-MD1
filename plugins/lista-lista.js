let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 ' + fin,
rows: [
{title: "📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦", rowId: `${usedPrefix}listablock`, description: `Usuarios Bloqueados por llamar.`},
{title: "⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦", rowId: `${usedPrefix}listadv`, description: `Usuarios Advertidos por Malas Palabras.`},
{title: "📵 𝗖𝗛𝗔𝗧 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦", rowId: `${usedPrefix}chatsbaneados`, description: `Chats donde no pueden usar a GataBot`},
{title: "🚷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦", rowId: `${usedPrefix}listbanuser`, description: `Usuarios que no pueden usar a GataBot`},
{title: "🎟️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠", rowId: `${usedPrefix}listapremium`, description: `Usuarios con Pase Premium`},
{title: "💞 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗘𝗡 𝗨𝗡𝗔 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡", rowId: `${usedPrefix}listaparejas`, description: `Usuarios que están en una Relación Romántica `}]}]

const listMessage = {
  text: `*TIPOS DE LISTAS DE USUARIOS*`,
  footer: wm,
  title: `${htki} *📃 𝙇𝙄𝙎𝙏𝘼 𝙑𝘼𝙍𝙄𝘼𝘿𝘼𝙎* ${htka}`,
  buttonText: `📑 𝙑𝙀𝙍 𝙇𝙄𝙎𝙏𝘼𝙎 📑`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
