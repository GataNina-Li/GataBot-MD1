let handler = m => m
import fs from 'fs'
handler.before = async function (m) {
    const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync("./media/menus/Menu3.jpg"), thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),sendEphemeral: true}}}

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `tiempo *${this.user.name}* para dejar el grupo, ¿quieres que este bot permanezca en tu grupo? alquilar al número`, null).then(() => {
                this.sendKontak(m.chat, fkontak, { contexInfo: { forwardingScore: 99999, isForwarded: true } }).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

export default handler
