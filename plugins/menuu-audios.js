import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = './media/menus/Menuvid1.mp4'
  
 let str = `
╭══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╮    
⎪ *_ミ💖 ¡Hola! ${username} 💖彡_*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ *MENU DE AUDIOS*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ ✢ Solo escriba la palabra/frase. sin prefijo ⎪ (/ . # etc...) 
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪➫🔊 _Noche de paz_
⎪➫🔊 _Buenos dias_
⎪➫🔊 _Audio hentai_
⎪➫🔊 _Fiesta del admin_
⎪➫🔊 _Fiesta del admin 2_
⎪➫🔊 _Fiesta del administrador_ 
⎪➫🔊 _Viernes_
⎪➫🔊 _Mierda de Bot_
⎪➫🔊 _Me olvidé_
⎪➫🔊 _Baneado_
⎪➫🔊 _Feliz navidad_
⎪➫🔊 _A nadie le importa_
⎪➫🔊 _Sexo_
⎪➫🔊 _Vete a la vrg_
⎪➫🔊 _Ara ara_
⎪➫🔊 _Hola_
⎪➫🔊 _Un pato_
⎪➫🔊 _Nyanpasu_
⎪➫🔊 _Te amo_
⎪➫🔊 _Yamete_
⎪➫🔊 _Te diagnostico con gay_
⎪➫🔊 _Quien es tu sempai botsito 7w7_
⎪➫🔊 _Bañate_
⎪➫🔊 _Vivan los novios_
⎪➫🔊 _Marica quien_
⎪➫🔊 _Es puto_
⎪➫🔊 _La biblia_
⎪➫🔊 _Onichan_
⎪➫🔊 _Bot puto_
⎪➫🔊 _Feliz cumpleaños_
⎪➫🔊 _Pasa pack Bot_
⎪➫🔊 _Atencion grupo_
⎪➫🔊 _Homero chino_
⎪➫🔊 _Oh me vengo_
⎪➫🔊 _Murio el grupo_
⎪➫🔊 _Siuuu_
⎪➫🔊 _Rawr_
⎪➫🔊 _UwU_
⎪➫🔊 _:c_
⎪➫🔊 _a_
⎪➫🔊 _Hey_
⎪➫🔊 _Enojado_
⎪➫🔊 _Enojada_
⎪➫🔊 _Chao_
⎪➫🔊 _Hentai_
⎪➫🔊 _Triste_
⎪➫🔊 _Estoy triste_
⎪➫🔊 _Me pican los cocos_
⎪➫🔊 _Contexto_
⎪➫🔊 _Me voy_
⎪➫🔊 _Tengo los calzones del admin_
⎪➫🔊 _Entrada épica_ 
⎪➫🔊 _Esto va ser épico papus_
⎪➫🔊 _Ingresa épicamente_
⎪➫🔊 _Bv_
⎪➫🔊 _Yoshi_
⎪➫🔊 _No digas eso papu_
⎪➫🔊 _Ma ma masivo_
⎪➫🔊 _Masivo_
⎪➫🔊 _Basado_
⎪➫🔊 _Basada_
⎪➫🔊 _Fino señores_
⎪➫🔊 _Verdad que te engañe_
⎪➫🔊 _Sus_
⎪➫🔊 _Ohayo_
⎪➫🔊 _La voz de hombre_
⎪➫🔊 _Pero esto_
⎪➫🔊 _Bien pensado Woody_
⎪➫🔊 _Jesucristo_
⎪➫🔊 _Wtf_
⎪➫🔊 _Una pregunta_
⎪➫🔊 _Que sucede_
⎪➫🔊 _Hablame_
⎪➫🔊 _Pikachu_
⎪➫🔊 _Niconico_
⎪➫🔊 _Yokese_
⎪➫🔊 _Omaiga_
⎪➫🔊 _Nadie te preguntó_
⎪➫🔊 _Bueno si_
⎪➫🔊 _Usted está detenido_
⎪➫🔊 _No me hables_
⎪➫🔊 _No chu_
⎪➫🔊 _El pepe_
⎪➫🔊 _Pokémon_
⎪➫🔊 _No me hagas usar esto_
⎪➫🔊 _Esto va para ti_
⎪➫🔊 _Abduzcan_
⎪➫🔊 _Joder_
⎪➫🔊 _Hablar primos_
⎪➫🔊 _Mmm_
⎪➫🔊 _Orale_
⎪➫🔊 _Me anda buscando anonymous_
⎪➫🔊 _Blackpink in your area_
⎪➫🔊 _Cambiate a Movistar_
⎪➫🔊 _Momento equisde | Momento XD_
⎪➫🔊 _Todo bien | 😇_
⎪➫🔊 _Te gusta el Pepino | 🥒_
⎪➫🔊 _El tóxico_
⎪➫🔊 _Moshi moshi_
⎪➫🔊 _Calla Fan de BTS_
⎪➫🔊 _Que tal grupo_
⎪➫🔊 _Muchachos_
⎪➫🔊 _Está Zzzz | 😴_
⎪➫🔊 _Goku Pervertido_
⎪➫🔊 _Potaxio | 🥑_
⎪➫🔊 _Nico nico_
⎪➫🔊 _El rap de Fernanfloo_
⎪➫🔊 _Tal vez_
⎪➫🔊 _Corte corte_
⎪➫🔊 _Buenas noches_
⎪➫🔊 _Porque ta tite_
⎪➫🔊 _Eres Fuerte_
⎪➫🔊 _Bueno Master | 🫂_
⎪➫🔊 _No Rompas más | 💔_
⎪➫🔊 _Traiganle una falda_
⎪➫🔊 _Se están riendo de mí_
⎪➫🔊 _Su nivel de pendejo_
⎪➫🔊 _Bienvenido/a | 🥳 | 🤗 | 👋_
⎪➫🔊 _Elmo sabe donde vives_
⎪➫🔊 _tunometecabrasaramambiche_
⎪➫🔊 _Y este quien es_
⎪➫🔊 _Motivación_
⎪➫🔊 _En caso de una investigación_
⎪➫🔊 _Buen día grupo | 🙌_
⎪➫🔊 _Las reglas del grupo_
╰══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╯
╭════• ೋ•✧๑♡๑✧•ೋ •════╮
                      🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
         0:40 ━❍──────── -8:39
         ↻     ⊲  Ⅱ  ⊳     ↺
         VOLUMEN: ▁▂▃▄▅▆▇ 100%
╰════• ೋ•✧๑♡๑✧•ೋ •════╯
`.trim()
await conn.sendHydrated(m.chat, str, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu']
], m)  
  
  

const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 |  𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✳️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅", description: null, rowId: `${usedPrefix}cuentasgatabot`},  
  
{title: "➥🔊 Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "༄ؘ ۪۪۫۫ ▹🔊◃ ۪۪۫۫ ༄ؘ  ➥ Noche de paz", description: null, rowId: `${usedPrefix}menu`},
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 |  𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 |  𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ❇️", description: null, rowId: `${usedPrefix}menu`},


{title: "💖 𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 💖", description: "𝙐𝙉𝙀𝙏𝙀 𝘼 𝙇𝘼 𝘾𝙊𝙈𝙐𝙉𝙄𝘿𝘼𝘿 𝙂𝘼𝙏𝘼𝘽𝙊𝙏\n𝙅𝙊𝙄𝙉 𝙏𝙃𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 𝘾𝙊𝙈𝙈𝙐𝙉𝙄𝙏𝙔", rowId: `${usedPrefix}gruposgb`},
{title: "🔰 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝙂𝙧𝙤𝙪𝙥 𝙇𝙞𝙨𝙩 🔰", description: "𝙂𝙍𝙐𝙋𝙊𝙎 𝙀𝙉 𝘿𝙊𝙉𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙃𝘼 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊\n𝙂𝙍𝙊𝙐𝙋𝙎 𝙒𝙃𝙀𝙍𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿", rowId: `${usedPrefix}listagrupos`},
{title: "💡 𝙀𝙨𝙩𝙖𝙙𝙤 | 𝙎𝙩𝙖𝙩𝙪𝙨 💡", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙀𝙎𝙏𝘼𝘿𝙊 𝙔 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙏𝘼𝙏𝙐𝙎 𝘼𝙉𝘿 𝙈𝙊𝙍𝙀 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}estado`},   
{title: "⚜️ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙖 | 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ⚜️", description: "𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙏𝘼𝙇𝙇𝘼𝘿𝘼\n𝘿𝙀𝙏𝘼𝙄𝙇𝙀𝘿 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}infogata`},    
{title: "🪄 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙢𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 🪄", description: "𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼\n𝙈𝙔 𝘾𝙍𝙀𝘼𝙏𝙊𝙍", rowId: `${usedPrefix}creadora`},      
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},    
]}, ]
//let name = await conn.getName(m.sender)

const listMessage = {
text: `𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 | 𝘼𝙐𝘿𝙄𝙊𝙎`,
footer: `
*╭━━〔 𝙈𝙀𝙉𝙐 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊 〕━━⬣*
*┃ 𝙃𝙚𝙮 𝙖𝙦𝙪𝙞 𝙥𝙪𝙚𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧*
*┃ 𝙚𝙡 𝘼𝙪𝙙𝙞𝙤 𝙖 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤.*
*╰━━━━━━━━━━━━━━━━━━━━⬣*
${wm}`,
title: null,
buttonText: "𝙀𝙇𝙀𝙂𝙄𝙍 𝘼𝙐𝘿𝙄𝙊", 
sections }

 conn.sendMessage(m.chat, listMessage)

}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(ddee)$/i
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
