/*let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
   }
   
export default handler */


export async function before(m, { conn, isAdmin, isBotAdmin }) {
   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
conn.reply(htki + ' Número prohibido ' + htka)
conn.reply(htki + ' Expulsar al usuario ' + htka)
conn.groupParticipantsUpdate(m.chat, [user], "remove")
}}
