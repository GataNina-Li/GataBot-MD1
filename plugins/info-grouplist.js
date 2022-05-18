let handler = async (m, { conn }) => {
//let txt = ''
//for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? '𝙽𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴' : '𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴'}]\n\n`
//m.reply(`*𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙴𝙽 𝙻𝙾𝚂 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃:*
//${txt}
//`.trim())
  
let group = conn.chats.all/).filter(v => v.jid.endsWith('g.us'))
let txt = ''
for (let v of group) txt += `${await conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]\n\n`
m.reply( 'List Groups:\n' + txt.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
