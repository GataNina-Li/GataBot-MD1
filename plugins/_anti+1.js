let handler = m => m

export async function (m) {
   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
   }
   
export default handler
