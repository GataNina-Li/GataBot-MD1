let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
    
if (/^A Bueno master|Bueno master|Bueno Máster|🫂$/i.test(m.text) && chat.audios) {

    
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/A bueno adios master.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (chat.audios && m.text.match(/(bienveni|🥳|🤗|👋)/gi)) {
let vn = './media/Bienvenido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Blackpink in your area|blackpink in your area|in your area|In your area)/gi)) {    
let vn = './media/Blackpink in your area.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
return !0 }
export default handler
