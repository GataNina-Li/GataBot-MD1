let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('broadcast')) return
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings[this.user.jid]

    if (/(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i.test(m.text) && !m.fromMe) {
        m.reply(`Wa\'alaikumussalam Wr.Wb.`)
    }

    if (/^bot$/i.test(m.text)) {
        await this.sendButton(m.chat, !(m.isGroup || m.isPrems) && group ? 'hanya grup' : isBanned ? 'chat banned' : banned ? 'user banned' : 'aktif', wm, !(m.isGroup || m.isPrems) && group ? 'donasi' : isBanned ? 'unban' : banned ? 'minta owner kalo mau di unban' : 'donasi', !(m.isGroup || m.isPrems) && group ? '.donasi' : isBanned ? '.unban' : banned ? '.owner' : '.donasi', m)
    }

    return !0
}

export default handler
