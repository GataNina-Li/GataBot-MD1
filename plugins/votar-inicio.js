let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
if (m.isGroup) {
  
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
conn.vote = conn.vote ? conn.vote : {}
let id = m.chat

if (id in conn.vote) { 
await conn.sendButton(m.chat, `*Todavía hay votos en este chat!!*`, author, null, [
['hapus', `${usedPrefix}-vote`]], m)}
  
let caption = `${htjava} MULAI VOTE ${htjava}
${dmenub} *${usedPrefix}upvote* - llegar a un acuerdo
${dmenub} *${usedPrefix}devote* - en desacuerdo
${dmenub} *${usedPrefix}cekvote* - comprobar el voto
${dmenub} *${usedPrefix}hapusvote* - para borrar votos
${dmenuf}`

await conn.sendButton(m.chat, caption, author, null, [
['votar a favor', `${usedPrefix}upvote`],
['votar en contra', `${usedPrefix}devote`]], m)
  
conn.vote[id] = [
text,
[],
[]
]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|nuevo|\+)vote$/i

export default handler 
