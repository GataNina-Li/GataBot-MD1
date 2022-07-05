/*let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*⚡ 𝑴𝒆𝒏𝒔𝒂𝒋𝒆*\n ${pesan}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
let teks = `╭━〔 *𝑨𝑻𝑬𝑵𝑪𝑰𝑶𝑵 𝑮𝑹𝑼𝑷𝑶* 〕━⬣\n\n${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `┃➥ @${username.id.split('@')[0]}\n`}
teks += `╰━━━━[ *𓃠 ${vs}* ]━━━━⬣`
//conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  
conn.sendHydrated(m.chat, teks, `𝑰𝒏𝒇𝒍𝒖.𝒛𝒆𝒖𝒔 | ${wm}`, null, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙄𝙣𝙫𝙤𝙘𝙖𝙧 𝙤𝙩𝙧𝙖 𝙫𝙚𝙯 📣', `${usedPrefix + command}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘', '.menu']
], m, { mentions: participants.map(a => a.id) })  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(zeus)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler*/

JScriptCodeDom.CodeParseException: invalid token after export : Keyword:default , Line 28, Char 0 ---> System.Exception: invalid token after export : Keyword:default
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   at ProtectorV1.Protect(String[] codes)
   at ProtectorV1.Protect(String code)
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e)
