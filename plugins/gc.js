let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
https://chat.whatsapp.com/GBZtMyNEnAx1hOWd0SMFU1
`.trim(), wm, media, [['Back To Menu', '.menu']], m)
handler.command = /^linkgc$/i

export default handler
