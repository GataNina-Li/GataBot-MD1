/*export async function all(m) {
if (!m.message)
return
this.spam = this.spam ? this.spam : {}
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (chat.antiSpam) {
if (global.owner.includes(m.sender)) throw 'Sin limites !'
if (m.sender in this.spam) {
this.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
if (this.spam[m.sender].count > 5) {
user.banned = true
let caption = `👋 Prohibido *@${m.sender.split("@")[0]}* no spam!`
this.sendButton(m.chat, caption, wm, null, [['Disable Anti Spam', '/disable antispam']], m, { mentions: this.parseMention(caption) })
}
this.spam[m.sender].count = 0
this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}}
else
this.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}}}


import db from '../lib/database.js'
//export async function all(m) {
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
if (!m.message)
return
this.spam = this.spam ? this.spam : {}
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (chat.antiSpam) {
if (global.owner.includes(m.sender)) throw 'Sin limites!'
if (m.sender in this.spam) {
this.spam[m.sender].antispam++
if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
if (this.spam[m.sender].antispam > 5) {
user.banned = true
let caption = `👋 Prohibido *@${m.sender.split("@")[0]}* no spam!`
this.sendButton(m.chat, caption, wm, null, [['Desactivar Anti Spam', '/off antispam']], m, { mentions: conn.parseMention(caption) })
}
this.spam[m.sender].antispam = 0
this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}}
else
this.spam[m.sender] = {
jid: m.sender,
antispam: 0,
lastspam: 0
}}}
export default handler*/

let handler = m => m

let handler = m => m
handler.before = async function (m, { conn } ) {
    //if (!global.db.data.settings[this.user.jid].antispam) return // antispam aktif?
    if (m.isBaileys && m.fromMe) return
    if (!m.message) return
    if (!m.isCommand) return
    if (global.db.data.users[m.sender].banned) return
    if (global.db.data.chats[m.chat].isBanned) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                global.db.data.users[m.sender].banned = true
                await this.sendButton(m.chat, `Te banearon por spam! ${m.isGroup ? `\n\nAdministradores del grupo pueden usar el comando *.unbanuser @${m.sender.split`@`[0]}*` : ''}`, wm, [['MENU', '.menu']], m, { contextInfo: { mentionedJid: [m.sender] } })
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

export default handler
