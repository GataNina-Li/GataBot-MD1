let handler  = async (m, { conn, command, args, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let user = global.db.data.users[m.sender]
let gancho = user.pancingan
let pescarUsuario = await conn.getName(m.sender)
let carnada = user.umpan
let type = (args[0] || '').toLowerCase()
let pancing = global.db.data.users[m.sender].pancing
let nivelPescar = pancing == 0 ? 'No tengo | I do not have' : '' || pancing == 1 ? 'Nivel | Level ✦ 1' : '' || pancing == 2 ? 'Nivel | Level ✦ 2' : '' || pancing == 3 ? 'Nivel | Level ✦ 3' : '' || pancing == 4 ? 'Nivel | Level ✦ 4' : '' || pancing == 5 ? 'Nivel | Level ✦ 5 ǁ MAX' : ''

const sections = [
{
title: htjava + ' Lista de construcción para la pesca ' + htjava,
rows: [
{title: "🎣 Pesca de emociones", rowId: usedPrefix + command + ' emosi'},
{title: "🎣 Pesca facil", rowId: usedPrefix + command + ' easy'},
{title: "🎣 Pesca normal", rowId: usedPrefix + command + ' normal'},
{title: "🎣 Pesca difícil", rowId: usedPrefix + command + ' hard'},
{title: "🎣 Pesca extrema", rowId: usedPrefix + command + ' extreme'}
]}]

const listMessage = {
  text: `⚡ Seleccione Pesca a continuación...`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ haga clic aquí ☂️`,
  sections }
try {
if (/fishing|mancing/i.test(command)) {
switch (type) {
          
case 'emosi':
let __temporizador1 = (new Date - user.lastfishing)
let _temporizador1 = (240000 - __temporizador1) 
let totalTiempo1 = clockString(_temporizador1)
let usuario = conn.getName(m.sender)

if (user.level <= 1) return 'Necesitas tener el Nivel 2'        
if (user.stamina < 10) return m.reply(`Tu Energía ✨ no es suficiente, Necitas tener al menos 10% de energía\npor favor llena tu Energía con *${usedPrefix}eat8`)
user.stamina -= 10 * 1
       
if (user.lastfishing > 10800000) return m.reply(`Todavía estás cansado\nPor favor espera *${totalTiempo1}*`)
if (user.pancing > 0 ) {
if (new Date - user.lastfishing > 240000) {
        	        
let ikan = `${Math.floor(Math.random() * 30)}`.trim()
let lele = `${Math.floor(Math.random() * 15)}`.trim() 
let nila = `${Math.floor(Math.random() * 10)}`.trim() 
let bawal = `${Math.floor(Math.random() * 10)}`.trim() 
let buntal = `${Math.floor(Math.random() * 10)}`.trim() 
let udang = `${Math.floor(Math.random() * 39)}`.trim()
let paus = `${Math.floor(Math.random() * 2)}`.trim() 
let kepiting = `${Math.floor(Math.random() * 27)}`.trim()
        
let _psepick= `${pickRandom([1, 0, 0, 1])}`
let psepick = (_psepick * 1)
let _psenjata = `${pickRandom([1, 0, 0, 0])}`
let psenjata = (_psenjata * 1)
           
let pesca1 = `
*Resultados 🎣 de Pescar ${pescarUsuario}!*
        
🐟 *Pez : Fish » ${ikan}*
🐟 *Super Pez : Fish Super » ${lele}*
🦭 *Foca : Sea Lion » ${nila}*
🐡 *Pez Globo : Blowfish » ${bawal}*
🐡 *Super Pez Globo : Blowfish Super » ${buntal}*
🦐 *Camarón : Shrimp » ${udang}*
🐳 *Ballena : Whale » ${paus}*
🦀 *Cangrejo : Crab » ${kepiting}*

Puedes cocinar esto y comerlo. 💉
_ejemplo:_
${ usedPrefix }cook` 

setTimeout(() => {
conn.sendHydrated(m.chat, pesca1, botdate, null, null, null, null, null, [
[null, null]], null)
  
if (psepick > 0 ) {
user.psepick += psepick * 1
await conn.sendButton( m.chat, `Usted obtiene 🎁 Traje Épico 🧥 ${psepick}`, wm, [[`Otra vez`, `.pescar`]], m)} 
        
if  (psenjata > 0 ) {
user.psenjata += psenjata * 1
await conn.sendButton( m.chat, `Usted obtiene 🎁 Traje Legendario 🥷 ${psenjata}`, wm, [[`Otra vez`, `.pescar`]], m)}}, 38000)

setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Parece algo...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28000)
       
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Espere`, botdate, null, null, null, null, null, [
[null, null]], null)}, 8000)
  
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Pescando...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0)
                      
user.ikan += ikan * 1
user.lele += lele * 1
user.nila += nila * 1
user.bawal += bawal * 1
user.buntal += buntal * 1 
user.udang += udang * 1
user.paus += paus * 1
user.kepiting += kepiting * 1
user.lastfishing += new Date * 1
  
} else m.reply(`Ya estás pescando, espera hasta ${totalTiempo}`)
} else return await conn.sendButton(m.chat, `*No tienes Gancho 🪝 ni carnada 🪱*`, wm, [[`Comprar un Gancho`, '.buy pancingan 1'], [`Comprar 100 Carnadas`, '.buy umpan 100']], m)
break
           
case 'easy':
let _coinesa = (new Date - user.lastmancingeasy)
let coinesa = (28800000 - _coinesa)
let tiempoTotal2 = clockString(coinesa) 
if (user.level <= 3) return 'Necesitas tener el Nivel 4'        
if (user.stamina < 20) return m.reply(`Tu Energía ✨ no es suficiente, Necitas tener al menos 20% de energía\npor favor llena tu Energía con *${usedPrefix}eat8`)
user.stamina -= 20 * 1    
if (gancho == 0 || carnada == 0) return await conn.sendButton(m.chat, `*No tienes Gancho 🪝 ni carnada 🪱*`, wm, [[`Comprar un Gancho`, '.buy pancingan 1'], [`Comprar 100 Carnadas`, '.buy umpan 100']], m)
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancing > 1) {
if (user.umpan > 99) {
  
let resultado1 = `${Math.floor(Math.random() * 10)}`
let resultado2 = `${Math.floor(Math.random() * 10)}`
let resultado3 = `${Math.floor(Math.random() * 10)}`
let resultado4 = `${Math.floor(Math.random() * 10)}`
let resultado5 = `${Math.floor(Math.random() * 10)}`
let resultado6 = `${Math.floor(Math.random() * 10)}`
let resultado7 = `${Math.floor(Math.random() * 10)}`
let resultado8 = `${Math.floor(Math.random() * 10)}`
let resultado9 = `${Math.floor(Math.random() * 10)}`
let resultado10 = `${Math.floor(Math.random() * 10)}`
let resultado11 = `${Math.floor(Math.random() * 10)}`
let resultado12 = `${Math.floor(Math.random() * 10)}`
let resultado13 = `${Math.floor(Math.random() * 50)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pesca2 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1


setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Vamos a pescar manía de nivel fácil otra vez`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
  
setTimeout(() => {
await conn.sendHydrated(m.chat, pesca2, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Espere`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
                                 
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Pescando...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0) 
user.lastmancingeasy = new Date * 1
  
} else await conn.reply(m.chat, 'Tu Carnada mínimo *100* para pescas de nivel fácil', m)
} else await conn.reply(m.chat, 'Su caña de pescar mínima es *Nivel 2* para una pesca de nivel fácil', m)
} else await conn.reply(m.chat, `*Parece que estás cansado*\n*Por favor, descanse un rato* ${tiempoTotal2}\n*Para poder seguir pescando de nuevo*`, m)
break
case 'normal':
let __temporizador3 = (new Date - pengguna.lastmancingeasy)
let _temporizador3 = (28800000 - __temporizador3)
let totalTiempo3 = clockString(_temporizador3) 
if (user.level <= 4) return 'Necesitas tener el Nivel 5'      
if (user.stamina < 40) return m.reply(`Tu Energía ✨ no es suficiente, Necitas tener al menos 40% de energía\npor favor llena tu Energía con *${usedPrefix}eat8`)
user.stamina -= 40 * 1        
if (gancho == 0 || carnada == 0) return await conn.sendButton(m.chat, `*No tienes Gancho 🪝 ni carnada 🪱*`, wm, [[`Comprar un Gancho`, '.buy pancingan 1'], [`Comprar 100 Carnadas`, '.buy umpan 100']], m)
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancingan > 3) {
if (user.umpan > 149) {
  
let resultado1 = `${Math.floor(Math.random() * 50)}`
let resultado2 = `${Math.floor(Math.random() * 50)}`
let resultado3 = `${Math.floor(Math.random() * 50)}`
let resultado4 = `${Math.floor(Math.random() * 50)}`
let resultado5 = `${Math.floor(Math.random() * 50)}`
let resultado6 = `${Math.floor(Math.random() * 50)}`
let resultado7 = `${Math.floor(Math.random() * 50)}`
let resultado8 = `${Math.floor(Math.random() * 50)}`
let resultado9 = `${Math.floor(Math.random() * 50)}`
let resultado10 = `${Math.floor(Math.random() * 50)}`
let resultado11 = `${Math.floor(Math.random() * 50)}`
let resultado12 = `${Math.floor(Math.random() * 50)}`
let resultado13 = `${Math.floor(Math.random() * 100)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pescar3 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1  
  
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Vamos a pescar manía de nivel fácil otra vez`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
  
setTimeout(() => {
await conn.sendHydrated(m.chat, pesca3, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Espere`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
                                 
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Pescando...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0) 
user.lastmancingeasy = new Date * 1
  
} else await conn.reply(m.chat, 'Tu Carnada mínimo *150* para pescas de nivel Normal', m)
} else await conn.reply(m.chat, 'Su caña de pescar mínima es *Nivel 3* para una pesca de nivel fácil', m)
} else await conn.reply(m.chat, `*Parece que estás cansado*\n*Por favor, descanse un rato* ${totalTiempo3}\n*Para poder seguir pescando de nuevo*`, m)
break
break 
case 'hard':
let __temporizador4 = (new Date - user.lastmancingeasy)
let _temporizador4 = (28800000 - __temporizador4)
let tiempoTotal4 = clockString(_temporizador4) 
if (user.level <= 6) return 'Necesitas tener el Nivel 7'   
if (user.stamina < 60) return m.reply(`Tu Energía ✨ no es suficiente, Necitas tener al menos 60% de energía\npor favor llena tu Energía con *${usedPrefix}eat8`)
user.stamina -= 60 * 1  
if (gancho == 0 || carnada == 0) return await conn.sendButton(m.chat, `*No tienes Gancho 🪝 ni carnada 🪱*`, wm, [[`Comprar un Gancho`, '.buy pancingan 1'], [`Comprar 100 Carnadas`, '.buy umpan 100']], m)
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancingan > 4) {
if (user.umpan > 199) {
  
let resultado1 = `${Math.floor(Math.random() * 100)}`
let resultado2 = `${Math.floor(Math.random() * 100)}`
let resultado3 = `${Math.floor(Math.random() * 100)}`
let resultado4 = `${Math.floor(Math.random() * 100)}`
let resultado5 = `${Math.floor(Math.random() * 100)}`
let resultado6 = `${Math.floor(Math.random() * 100)}`
let resultado7 = `${Math.floor(Math.random() * 100)}`
let resultado8 = `${Math.floor(Math.random() * 100)}`
let resultado9 = `${Math.floor(Math.random() * 100)}`
let resultado10 = `${Math.floor(Math.random() * 100)}`
let resultado11 = `${Math.floor(Math.random() * 100)}`
let resultado12 = `${Math.floor(Math.random() * 100)}`
let resultado13 = `${Math.floor(Math.random() * 150)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pescar4 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1  


setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} Vamos a pescar manía de nivel fácil otra vez`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
  
setTimeout(() => {
conn.sendHydrated(m.chat, pescar4, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} Espere`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
                                 
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} Pescando...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0) 
user.lastmancingeasy = new Date * 1
                                    
} else await conn.reply(m.chat, 'Tu Carnada mínimo *200* para pescas de nivel Normal', m)
} else await conn.reply(m.chat, 'Su caña de pescar mínima es *Nivel 4* para una pesca de nivel fácil', m)
} else await conn.reply(m.chat, `*Parece que estás cansado*\n*Por favor, descanse un rato* ${tiempoTotal4}\n*Para poder seguir pescando de nuevo*`, m)
break
break
case 'extreme':

let __temporizador5 = (new Date - user.lastmancingeasy)
let _temporizador5 = (28800000 - __temporizador5)
let tiempoTotal5 = clockString(_temporizador5) 
if (user.level <= 9) return 'Necesitas tener el Nivel 10'    
if (user.stamina < 90) return m.reply(`Tu Energía ✨ no es suficiente, Necitas tener al menos 90% de energía\npor favor llena tu Energía con *${usedPrefix}eat8`)
user.stamina -= 90 * 1  
if (gancho == 0 || carnada == 0) return await conn.sendButton(m.chat, `*No tienes Gancho 🪝 ni carnada 🪱*`, wm, [[`Comprar un Gancho`, '.buy pancingan 1'], [`Comprar 100 Carnadas`, '.buy umpan 100']], m)
if (new Date - user.lastmancingeasy > 28800000) {
if (user.pancingan > 5) {
if (user.umpan > 249) {   
  
let resultado1 = `${Math.floor(Math.random() * 500)}`
let resultado2 = `${Math.floor(Math.random() * 500)}`
let resultado3 = `${Math.floor(Math.random() * 500)}`
let resultado4 = `${Math.floor(Math.random() * 500)}`
let resultado5 = `${Math.floor(Math.random() * 500)}`
let resultado6 = `${Math.floor(Math.random() * 500)}`
let resultado7 = `${Math.floor(Math.random() * 500)}`
let resultado8 = `${Math.floor(Math.random() * 500)}`
let resultado9 = `${Math.floor(Math.random() * 500)}`
let resultado10 = `${Math.floor(Math.random() * 500)}`
let resultado11 = `${Math.floor(Math.random() * 500)}`
let resultado12 = `${Math.floor(Math.random() * 500)}`
let resultado13 = `${Math.floor(Math.random() * 200)}`

let total1 = (resultado1 * 1)
let total2 = (resultado2 * 1) 
let total3 = (resultado3 * 1)
let total4 = (resultado4 * 1)
let total5 = (resultado5 * 1)
let total6 = (resultado6 * 1)
let total7 = (resultado7 * 1)
let total8 = (resultado8 * 1)
let total9 = (resultado9 * 1)
let total10 = (resultado10 * 1)
let total11 = (resultado11 * 1)
let total12 = (resultado12 * 1)
let total13 = (resultado13 * 1)

let zero1 = `${total1}`
let zero2 = `${total2}`
let zero3 = `${total3}`
let zero4 = `${total4}`
let zero5 = `${total5}`
let zero6 = `${total6}`
let zero7 = `${total7}`
let zero8 = `${total8}`
let zero9 = `${total9}`
let zero10 = `${total10}`
let zero11 = `${total11}`
let zero12 = `${total12}`

let pescar5 = `
*${htjava} Resultados de pesca ${pescarUsuario} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
*BONO: +1 Tiketcoin*
`.trim()
user.paus += total1
user.kepiting += total2
user.gurita += total3
user.cumi += total4 
user.buntal += total5
user.dory += total6
user.lumba += total7
user.lobster += total8
user.hiu += total9
user.udang += total10
user.ikan += total1
user.orca += total2
user.umpan -= total13
user.tiketcoin += 1  

setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Vamos a pescar manía de nivel fácil otra vez`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
  
setTimeout(() => {
await conn.sendHydrated(m.chat, pescar5, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Espere`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
                                 
setTimeout(() => {
await conn.sendHydrated(m.chat, `${pescarUsuario} Pescando...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0) 
user.lastmancingeasy = new Date * 1
                                    
} else await conn.reply(m.chat, 'Tu Carnada mínimo *250* para pescas de nivel Normal', m)
} else await conn.reply(m.chat, 'Su caña de pescar mínima es *Nivel 5* para una pesca de nivel fácil', m)
} else await conn.reply(m.chat, `*Parece que estás cansado*\n*Por favor, descanse un rato* ${tiempoTotal5}\n*Para poder seguir pescando de nuevo*`, m)
break
default:
return await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}}
} catch (e) {
await conn.reply(m.chat, 'Error', m)
console.log(e)
}}

handler.help = ['fishing <args>']
handler.tags = ['rpg']
handler.command = /^(fishing|mancing|pescar)$/i
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
