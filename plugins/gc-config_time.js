/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let isClose = {
'open': 'not_announcement',
'abrir': 'not_announcement',
'abierto': 'not_announcement',
'buka': 'not_announcement',
'on': 'not_announcement',
'1': 'not_announcement',
	
'close': 'announcement',
'cerrar': 'announcement',	
'cerrado': 'announcement',		
'tutup': 'announcement',
'off': 'announcement',
'0': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) {
	
let caption = `${lenguajeGB['smsAvisoMG']()}
${lenguajeGB['smsMalused']()}
${lenguajeGB['smsGrupoTime1']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() === 'en' || 'id' || 'ar' || 'pt' ? 'open' : 'abrir'} 1*
${lenguajeGB['smsGrupoTime2']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() === 'en' || 'id' || 'ar' || 'pt' ? 'close' : 'cerrar'} 1*`

m.reply(caption)
throw false
}
let timeoutset = 180000 * args[1] // 24 //Una Hora 86400000
await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
m.reply(`${lenguajeGB['smsAvisoRG']()}${lenguajeGB['smsGrupoTime3']()} ${isClose == 'announcement' ? lenguajeGB.smsGrupoTime4() : lenguajeGB.smsGrupoTime5()} ${args[1] ? `${lenguajeGB['smsGrupoTime6']()} ${clockString(timeoutset)}*` : ''}`)
})
if (args[1]) {
setTimeout(async () => {
await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
conn.reply(m.chat, `${isClose == 'not_announcement' ? lenguajeGB.smsGrupoTime7() : lenguajeGB.smsGrupoTime8()}!!`)
})
}, timeoutset)}}

handler.command = /^(grouptime|gctime)$/i
handler.botAdmin = true
handler.group = true 
handler.admin = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
