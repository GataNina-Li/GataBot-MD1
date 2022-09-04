let handler = m => m

handler.before = async function (m) {
    let user = global.db.data.users[m.sender]                              
    if (new Date() - user.premiumTime > 0) {
        await m.reply(`¡Se acabó tu tiempo premium!`)
            user.premiumTime = 0
            user.premium = false
        }
    }

export default handler


/*let handler = m => m

export async function all(m) {
    let user = global.db.data.users[m.sender]
    //if (m.chat.endsWith('broadcast')) return                         
    if (new Date() - user.premiumTime > 0) {
            await m.reply(`¡Se acabó tu tiempo premium!`)
            user.premiumTime = 0
            user.premium = false
        }
    }*/
