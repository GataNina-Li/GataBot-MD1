let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
if (!(id in conn.vote)) await conn.sendButton(m.chat, `Sin votar en este grupo!`, author, null, [
['votar', `${usedPrefix}+vote`],
['menu', `${usedPrefix}menu`]], m)

let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} LISTA DE VOTOS ${htjava}*
*Razón:* ${reason}

*${htjava} VOTOS A FAVOR ${htjava}*
*Total:* ${upvote.length}
${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} VOTOS EN CONTRA ${htjava}*
*Total:* ${devote.length}
${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}
`.trim()
await conn.sendButton(m.chat, caption, author, null, [
        ['votar a favor', `${usedPrefix}upvote`],
        ['votar en contra', `${usedPrefix}devote`],
        ['eliminar voto', `.delete-vote`]
    ], m, { mentions: conn.parseMention(caption) })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i

export default handler
