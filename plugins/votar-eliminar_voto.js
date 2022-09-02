let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
  
let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
if (!(id in conn.vote)) await conn.sendButton(m.chat, `No has votado en este Grupo!!`, author, null, [
['votar', `${usedPrefix}+vote`],
['menu', `${usedPrefix}menu`]], m)
  
delete conn.vote[id]
m.reply(`Tu voto ha sido eliminado!!`)}

handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus|-)vote$/i

export default handler
