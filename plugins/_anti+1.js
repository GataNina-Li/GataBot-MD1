let handler = async (m) =>

handler.before = async function (m) {
   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }

export default handler
