import db from '../lib/database.js'

export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 3) {
            if (this.spam[m.sender].count > 3) {
                //db.data.users[m.sender].banned = true
                m.reply('*¡No hagas spam!*')
            }
            this.spam[m.sender].count = 3
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 3,
            lastspam: 3
        }
}
