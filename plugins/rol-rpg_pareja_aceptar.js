import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return conn.reply(m.chat, `*ETIQUETE O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE QUE SEA SU PAREJA*`, m) 
//if(isNaN(number)) return conn.reply(m.chat, `*DEBE SOLO DE ETIQUETAR O RESPONDER AL MENSAJE DE LA PERSONA QUE QUIERE QUE SEA SU PAREJA*`, m)
//if (isNaN(text)) return conn.reply(m.chat, `*DEBE SOLO DE ETIQUETAR O RESPONDER AL MENSAJE DE LA PERSONA QUE QUIERE QUE SEA SU PAREJA*`, m)
//if(number.length) return conn.reply(m.chat, `*DEBE SOLO DE ETIQUETAR O RESPONDER AL MENSAJE DE LA PERSONA QUE QUIERE QUE SEA SU PAREJA*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return conn.reply(m.chat, `*PERSONA NO ENCONTRADA, DEBE DE ESTAR EN ESTE GRUPO*`, m)
if(user === m.sender) return conn.reply(m.chat, `*NO PUEDE SER PAREJA USTED MISMO*`, m)
if(user === conn.user.jid) return conn.reply(m.chat, `*YO NO PUEDO SER SU PAREJA JAJAJ*`, m)
    
if(global.db.data.users[user].pasangan != m.sender){
conn.reply(m.chat, `*NO PUEDES ACEPTAR SI NADIE SE HA DECLARADO, DECLARATE CON ${tu} PARA QUE DIGA SI TE ACEPTA O TE RECHAZA*`, m, { contextInfo: { mentionedJid: [user]}})
}else{
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `*FELICITACIONES!!! 🥳😻 ${tu}*\n*✅ DE MANERA OFICIAL ESTAN EN UNA RELACION*\n\n*QUE DURE POR SIEMPRE SU AMOR Y FELICIDAD 💖😁\n💟 ${tu} 💞 ${yo}*`,m, { contextInfo: { mentionedJid: [user, tu, yo]}})
}}}
handler.command = /^(aceptar|acepto)$/i
handler.group = true
export default handler
