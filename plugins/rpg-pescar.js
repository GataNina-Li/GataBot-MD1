let handler  = async (m, { conn, command, args, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let anzuelo = user.pancingan
let pescarUsuario = await conn.getName(m.sender)
let carnada = user.umpan
let type = (args[0] || '').toLowerCase()

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
let __temporizador = (new Date - user.lastfishing)
let _temporizador = (240000 - __temporizador) 
let totalTiempo = clockString(_temporizador)
let usuario = conn.getName(m.sender)

if (user.level <= 1) return 'Necesitas tener el Nivel 2'        
if (user.stamina < 20) return m.reply(`Tu Energía ✨ no es suficiente, Necitas tener 20% de energía\npor favor llena tu Energía con *${usedPrefix}eat8`)
user.stamina -= 20 * 1
       
if (user.lastfishing > 10800000) return m.reply(`Todavía estás cansado\nPor favor espera *${totalTiempo}*`)
if (user.fishingrod > 0 ) {
if (new Date - user.lastfishing > 240000) {
        	        
let ikan = `${Math.floor(Math.random() * 30)}`.trim()
let lele = `${Math.floor(Math.random() * 15)}`.trim() 
let nila = `${Math.floor(Math.random() * 10)}`.trim() 
let bawal = `${Math.floor(Math.random() * 10)}`.trim() 
let buntal = `${Math.floor(Math.random() * 10)}`.trim() 
let udang = `${Math.floor(Math.random() * 39)}`.trim()
let paus = `${Math.floor(Math.random() * 2)}`.trim() 
let kepiting = `${Math.floor(Math.random() * 27)}`.trim()
        
let _psepick= `${pickRandom(['1', '0', '0', '1'])}`
let psepick = (_psepick * 1)
let _psenjata = `${pickRandom(['1', '0', '0', '0'])}`
let psenjata = (_psenjata * 1)
           
let mcng = `
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
conn.sendHydrated(m.chat, mcng, botdate, null, null, null, null, null, [
[null, null]], null)
  
if (psepick > 0 ) {
user.psepick += psepick * 1
conn.sendButton( m.chat, `Usted obtiene 🎁 Traje Épico 🧥 ${psepick}`, wm, [[`Otra vez`, `.pescar`]], m)} 
        
if  (psenjata > 0 ) {
user.psenjata += psenjata * 1
conn.sendButton( m.chat, `Usted obtiene 🎁 Traje Legendario 🥷 ${psenjata}`, wm, [[`Otra vez`, `.pescar`]], m)}}, 38000)

setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} Parece algo...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28000)
       
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} Espere`, botdate, null, null, null, null, null, [
[null, null]], null)}, 8000)
  
setTimeout(() => {
conn.sendHydrated(m.chat, `${pescarUsuario} Pescando...`, botdate, null, null, null, null, null, [
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
} else return conn.sendButton(m.chat, `*No tienes Gancho 🪝 ni carnada 🪱*`, wm, [[`Comprar un Gancho`, '.buy pancingan 1'], [`Comprar 100 Carnadas`, '.buy umpan 100']], m)
break
           
case 'easy':
let _coinesa = (new Date - pengguna.lastmancingeasy)
let coinesa = (28800000 - _coinesa)
let timersa = clockString(coinesa) 
if (user.level <= 3) throw 'Necesitas tener el Nivel 4'
if (pancingan == 0 || umpan == 0) return conn.sendButton(m.chat, `*[❗] kamu tidak punya kail pancingan dan umpan 100 🎣*`, wm, [[`Buy Pancingan`, '.buy pancingan 1'], [`Buy Umpan 100`, '.buy umpan 100']], m)
if (new Date - pengguna.lastmancingeasy > 28800000) {
if (pengguna.pancingan > 1) {
if (pengguna.umpan > 99) {
let mcing1 = `${Math.floor(Math.random() * 10)}`
let mcing2 = `${Math.floor(Math.random() * 10)}`
let mcing3 = `${Math.floor(Math.random() * 10)}`
let mcing4 = `${Math.floor(Math.random() * 10)}`
let mcing5 = `${Math.floor(Math.random() * 10)}`
let mcing6 = `${Math.floor(Math.random() * 10)}`
let mcing7 = `${Math.floor(Math.random() * 10)}`
let mcing8 = `${Math.floor(Math.random() * 10)}`
let mcing9 = `${Math.floor(Math.random() * 10)}`
let mcing10 = `${Math.floor(Math.random() * 10)}`
let mcing11 = `${Math.floor(Math.random() * 10)}`
let mcing12 = `${Math.floor(Math.random() * 10)}`
let mcing13 = `${Math.floor(Math.random() * 50)}`

let rbrb1 = (mcing1 * 1)
let rbrb2 = (mcing2 * 1) 
let rbrb3 = (mcing3 * 1)
let rbrb4 = (mcing4 * 1)
let rbrb5 = (mcing5 * 1)
let rbrb6 = (mcing6 * 1)
let rbrb7 = (mcing7 * 1)
let rbrb8 = (mcing8 * 1)
let rbrb9 = (mcing9 * 1)
let rbrb10 = (mcing10 * 1)
let rbrb11 = (mcing11 * 1)
let rbrb12 = (mcing12 * 1)
let rbrb13 = (mcing13 * 1)

let zero1 = `${rbrb1}`
let zero2 = `${rbrb2}`
let zero3 = `${rbrb3}`
let zero4 = `${rbrb4}`
let zero5 = `${rbrb5}`
let zero6 = `${rbrb6}`
let zero7 = `${rbrb7}`
let zero8 = `${rbrb8}`
let zero9 = `${rbrb9}`
let zero10 = `${rbrb10}`
let zero11 = `${rbrb11}`
let zero12 = `${rbrb12}`

let hsl = `
*${htjava} Hasil Memancing ${pemancing} ${htjava}*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
+1 Tiketcoin
`.trim()
pengguna.paus += rbrb1
pengguna.kepiting += rbrb2
pengguna.gurita += rbrb3
pengguna.cumi += rbrb4 
pengguna.buntal += rbrb5
pengguna.dory += rbrb6
pengguna.lumba += rbrb7
pengguna.lobster += rbrb8
pengguna.hiu += rbrb9
pengguna.udang += rbrb10
pengguna.ikan += rbrb11
pengguna.orca += rbrb12
pengguna.tiketcoin += 1
pengguna.umpan -= rbrb13

setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Yuk mancing mania level easy lagi`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
  
setTimeout(() => {
conn.sendHydrated(m.chat, hsl, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Menunggu`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
                                 
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Sedang Memancing...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0) 
pengguna.lastmancingeasy = new Date * 1
} else conn.reply(m.chat, 'Minimal umpan kamu *100* untuk memancing level mudah', m)
} else conn.reply(m.chat, 'Minimal pancingan kamu *Level 2* untuk memancing level mudah', m)
} else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar* ${timersa}\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
break
case 'normal':
let __timerl = (new Date - pengguna.lastmancingeasy)
let _timerl = (28800000 - __timerl)
let timerl = clockString(_timerl) 
if (pancingan == 0 || umpan == 0) return conn.sendButton(m.chat, `*[❗] kamu tidak punya kail pancingan dan umpan 100 🎣*`, wm, [[`Buy Pancingan`, '.buy pancingan 1'], [`Buy Umpan 100`, '.buy umpan 100']], m)
if (new Date - pengguna.lastmancingeasy > 28800000) {
if (pengguna.pancingan > 2) {
if (pengguna.umpan > 149) {
let mcingd1 = `${Math.floor(Math.random() * 50)}`
let mcingd2 = `${Math.floor(Math.random() * 50)}`
let mcingd3 = `${Math.floor(Math.random() * 50)}`
let mcingd4 = `${Math.floor(Math.random() * 50)}`
let mcingd5 = `${Math.floor(Math.random() * 50)}`
let mcingd6 = `${Math.floor(Math.random() * 50)}`
let mcingd7 = `${Math.floor(Math.random() * 50)}`
let mcingd8 = `${Math.floor(Math.random() * 50)}`
let mcingd9 = `${Math.floor(Math.random() * 50)}`
let mcingd10 = `${Math.floor(Math.random() * 50)}`
let mcingd11 = `${Math.floor(Math.random() * 50)}`
let mcingd12 = `${Math.floor(Math.random() * 50)}`
let mcingd13 = `${Math.floor(Math.random() * 100)}`

let mcg1 = (mcingd1 * 1)
let mcg2 = (mcingd2 * 1) 
let mcg3 = (mcingd3 * 1)
let mcg4 = (mcingd4 * 1)
let mcg5 = (mcingd5 * 1)
let mcg6 = (mcingd6 * 1)
let mcg7 = (mcingd7 * 1)
let mcg8 = (mcingd8 * 1)
let mcg9 = (mcingd9 * 1)
let mcg10 = (mcingd10 * 1)
let mcg11 = (mcingd11 * 1)
let mcg12 = (mcingd12 * 1)
let mcg13 = (mcingd13 * 1)

let aine1 = `${mcg1}`
let aine2 = `${mcg2}`
let aine3 = `${mcg3}`
let aine4 = `${mcg4}`
let aine5 = `${mcg5}`
let aine6 = `${mcg6}`
let aine7 = `${mcg7}`
let aine8 = `${mcg8}`
let aine9 = `${mcg9}`
let aine10 = `${mcg10}`
let aine11 = `${mcg11}`
let aine12 = `${mcg12}`

                                 let hsls = `
*${htjava} Hasil Memancing ${pemancing} ${htjava}*
 *🦀 = [ ${aine2} ]*			*🐠 = [ ${aine6} ]*
 *🦞 = [ ${aine8} ]*			 *🐟 = [ ${aine11} ]*
 *🦐 = [ ${aine10} ]*			 *🐬 = [ ${aine7} ]*
 *🦑 = [ ${aine4} ]*			 *🐳 = [ ${aine12} ]*
 *🐙 = [ ${aine3} ]*			 *🦈 = [ ${aine9} ]*
  *🐡 = [ ${aine5} ]*			*🐋 = [ ${aine1} ]*
  
+1 Tiketcoin
`.trim()
pengguna.paus += mcg1
pengguna.kepiting += mcg2
pengguna.gurita += mcg3
pengguna.cumi += mcg4
pengguna.buntal += mcg5
pengguna.dory += mcg6
pengguna.lumba += mcg7
pengguna.lobster += mcg8
pengguna.hiu += mcg9
pengguna.udang += mcg10
pengguna.ikan += mcg11
pengguna.orca += mcg12 
pengguna.tiketcoin += 1
pengguna.umpan -= mcg13 
                                 
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Yuk mancing mania level normal lagi`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
                                
setTimeout(() => {
conn.sendHydrated(m.chat, hsls, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Menunggu`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
  
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Sedang Memancing...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0) 
pengguna.lastmancingeasy = new Date * 1
  
} else conn.reply(m.chat, 'Minimal umpan kamu *150* untuk memancing level normal', m)
} else conn.reply(m.chat, 'Minimal pancingan kamu *Level 3* untuk memancing level normal', m)
} else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar* ${timerl}\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
break 
case 'hard':
let __timerh = (new Date - pengguna.lastmancingeasy)
let _timerh = (28800000 - __timerh)
let timerh = clockString(_timerh) 
if (pancingan == 0 || umpan == 0) return conn.sendButton(m.chat, `*[❗] kamu tidak punya kail pancingan dan umpan 100 🎣*`, wm, [[`Buy Pancingan`, '.buy pancingan 1'], [`Buy Umpan 100`, '.buy umpan 100']], m)
if (new Date - pengguna.lastmancingeasy > 28800000) {
if (pengguna.pancingan > 3) {
if (pengguna.umpan > 199) {
let mcingr1 = `${Math.floor(Math.random() * 100)}` 
let mcingr2 = `${Math.floor(Math.random() * 100)}`
let mcingr3 = `${Math.floor(Math.random() * 100)}`
let mcingr4 = `${Math.floor(Math.random() * 100)}`
let mcingr5 = `${Math.floor(Math.random() * 100)}`
let mcingr6 = `${Math.floor(Math.random() * 100)}`
let mcingr7 = `${Math.floor(Math.random() * 100)}`
let mcingr8 = `${Math.floor(Math.random() * 100)}`
let mcingr9 = `${Math.floor(Math.random() * 100)}`
let mcingr10 = `${Math.floor(Math.random() * 100)}`
let mcingr11 = `${Math.floor(Math.random() * 100)}`
let mcingr12 = `${Math.floor(Math.random() * 100)}`
let mcingr13 = `${Math.floor(Math.random() * 150)}`

let mcgh1 = (mcingr1 * 1)
let mcgh2 = (mcingr2 * 1) 
let mcgh3 = (mcingr3 * 1)
let mcgh4 = (mcingr4 * 1)
let mcgh5 = (mcingr5 * 1)
let mcgh6 = (mcingr6 * 1)
let mcgh7 = (mcingr7 * 1)
let mcgh8 = (mcingr8 * 1)
let mcgh9 = (mcingr9 * 1)
let mcgh10 = (mcingr10 * 1)
let mcgh11 = (mcingr11 * 1)
let mcgh12 = (mcingr12 * 1)
let mcgh13 = (mcingr13 * 1)

let aines1 = `${mcgh1}`
let aines2 = `${mcgh2}`
let aines3 = `${mcgh3}`
let aines4 = `${mcgh4}`
let aines5 = `${mcgh5}`
let aines6 = `${mcgh6}`
let aines7 = `${mcgh7}`
let aines8 = `${mcgh8}`
let aines9 = `${mcgh9}`
let aines10 = `${mcgh10}`
let aines11 = `${mcgh11}`
let aines12 = `${mcgh12}`

                                 let hslsh = `
*${htjava} Hasil Memancing ${pemancing} ${htjava}*
 *🦀 = [ ${aines2} ]*			*🐠 = [ ${aines6} ]*
 *🦞 = [ ${aines8} ]*			 *🐟 = [ ${aines11} ]*
 *🦐 = [ ${aines10} ]*			 *🐬 = [ ${aines7} ]*
 *🦑 = [ ${aines4} ]*			 *🐳 = [ ${aines12} ]*
 *🐙 = [ ${aines3} ]*			 *🦈 = [ ${aines9} ]*
  *🐡 = [ ${aines5} ]*			*🐋 = [ ${aines1} ]*
  
+1 Tiketcoin
`.trim()
                                 
pengguna.paus += mcgh1
pengguna.kepiting += mcgh2
pengguna.gurita += mcgh3
pengguna.cumi += mcgh4
pengguna.buntal += mcgh5
pengguna.dory += mcgh6
pengguna.lumba += mcgh7
pengguna.lobster += mcgh8
pengguna.hiu += mcgh9
pengguna.udang += mcgh10
pengguna.ikan += mcgh11
pengguna.orca += mcgh12 
pengguna.tiketcoin += 1
pengguna.umpan -= mcgh13

setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Yuk mancing mania level hard lagi`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
                                    
setTimeout(() => {
conn.sendHydrated(m.chat, hslsh, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000) 
                                    
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Menunggu`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
                                    
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Sedang Memancing...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0) 
pengguna.lastmancingeasy = new Date * 1
                                    
} else conn.reply(m.chat, 'Minimal umpan kamu *200* untuk memancing level hard', m)
} else conn.reply(m.chat, 'Minimal pancingan kamu *Level 4* untuk memancing level hard', m)
} else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar* ${timerh}\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
break
case 'extreme':
let __timere = (new Date - pengguna.lastmancingeasy)
let _timere = (28800000 - __timere)
let timere = clockString(_timere) 
if (pancingan == 0 || umpan == 0) return conn.sendButton(m.chat, `*[❗] kamu tidak punya kail pancingan dan umpan 100 🎣*`, wm, [[`Buy Pancingan`, '.buy pancingan 1'], [`Buy Umpan 100`, '.buy umpan 100']], m)
if (new Date - pengguna.lastmancingeasy > 28800000) {
if (pengguna.pancingan > 4) {
if (pengguna.umpan > 249) {
let mcinge1 = `${Math.floor(Math.random() * 500)}`
let mcinge2 = `${Math.floor(Math.random() * 500)}`
let mcinge3 = `${Math.floor(Math.random() * 500)}`
let mcinge4 = `${Math.floor(Math.random() * 500)}`
let mcinge5 = `${Math.floor(Math.random() * 500)}`
let mcinge6 = `${Math.floor(Math.random() * 500)}`
let mcinge7 = `${Math.floor(Math.random() * 500)}`
let mcinge8 = `${Math.floor(Math.random() * 500)}`
let mcinge9 = `${Math.floor(Math.random() * 500)}`
let mcinge10 = `${Math.floor(Math.random() * 500)}`
let mcinge11 = `${Math.floor(Math.random() * 500)}`
let mcinge12 = `${Math.floor(Math.random() * 500)}`
let mcinge13 = `${Math.floor(Math.random() * 200)}`

 let mcghe1 = (mcinge1 * 1)
 let mcghe2 = (mcinge2 * 1) 
 let mcghe3 = (mcinge3 * 1)
 let mcghe4 = (mcinge4 * 1)
 let mcghe5 = (mcinge5 * 1)
 let mcghe6 = (mcinge6 * 1)
 let mcghe7 = (mcinge7 * 1)
 let mcghe8 = (mcinge8 * 1)
 let mcghe9 = (mcinge9 * 1)
 let mcghe10 = (mcinge10 * 1)
 let mcghe11 = (mcinge11 * 1)
 let mcghe12 = (mcinge12 * 1)
 let mcghe13 = (mcinge13 * 1)

 let ainese1 = `${mcghe1}`
 let ainese2 = `${mcghe2}`
 let ainese3 = `${mcghe3}`
 let ainese4 = `${mcghe4}`
 let ainese5 = `${mcghe5}`
 let ainese6 = `${mcghe6}`
 let ainese7 = `${mcghe7}`
 let ainese8 = `${mcghe8}`
 let ainese9 = `${mcghe9}`
 let ainese10 = `${mcghe10}`
 let ainese11 = `${mcghe11}`
 let ainese12 = `${mcghe12}`

                                 let hslse = `
*${htjava} Hasil Memancing ${pemancing} ${htjava}*
 *🦀 = [ ${ainese2} ]*			*🐠 = [ ${ainese6} ]*
 *🦞 = [ ${ainese8} ]*			 *🐟 = [ ${ainese11} ]*
 *🦐 = [ ${ainese10} ]*			 *🐬 = [ ${ainese7} ]*
 *🦑 = [ ${ainese4} ]*			 *🐳 = [ ${ainese12} ]*
 *🐙 = [ ${ainese3} ]*			 *🦈 = [ ${ainese9} ]*
  *🐡 = [ ${ainese5} ]*			*🐋 = [ ${ainese1} ]*
  
+1 Tiketcoin
`.trim()
                                 
pengguna.paus += mcghe1
pengguna.kepiting += mcghe2
pengguna.gurita += mcghe3
pengguna.cumi += mcghe4
pengguna.buntal += mcghe5
pengguna.dory += mcghe6
pengguna.lumba += mcghe7
pengguna.lobster += mcghe8
pengguna.hiu += mcghe9
pengguna.udang += mcghe10
pengguna.ikan += mcghe11
pengguna.orca += mcghe12 
pengguna.tiketcoin += 1
pengguna.umpan -= mcghe13

setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Yuk mancing mania level extreme lagi`, botdate, null, null, null, null, null, [
[null, null]], null)}, 28800000) 
setTimeout(() => {
conn.sendHydrated(m.chat, hslse, botdate, null, null, null, null, null, [
[null, null]], null)}, 12000)
                                    
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Menunggu`, botdate, null, null, null, null, null, [
[null, null]], null)}, 6000) 
                                    
setTimeout(() => {
conn.sendHydrated(m.chat, `${pemancing} Sedang Memancing...`, botdate, null, null, null, null, null, [
[null, null]], null)}, 0)                                    
pengguna.lastmancingeasy = new Date * 1
                                    
} else conn.reply(m.chat, 'Minimal umpan kamu *250* untuk memancing level extreme', m)
} else conn.reply(m.chat, 'Minimal pancingan kamu *Level 5* untuk memancing level extreme', m)
} else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar* ${timere}\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
break
default:
return conn.sendMessage(m.chat, listMessage, {quoted: fakes})}}
} catch (e) {
conn.reply(m.chat, 'Error', m)
console.log(e)
}}

handler.help = ['fishing <args>']
handler.tags = ['rpg']
handler.command = /^(fishing|mancing)$/i
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
