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
let pp = './media/menus/Menuvid3.mp4'
  
 let str = `
╭━━〔 🐈⚡️🐈⚡️🐈⚡️🐈 〙━━⬣   
┃ 💖 ¡Hola! ${username} 💖
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *No es necesario el prefijo*
┃ *Puede solo escribir la*
┃ *Palabra o Frase.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🔊 _Noche de paz_
┃➫🔊 _Buenos dias_
┃➫🔊 _Audio hentai_
┃➫🔊 _Fiesta del admin_
┃➫🔊 _Fiesta del admin 2_
┃➫🔊 _Fiesta del administrador_ 
┃➫🔊 _Viernes_
┃➫🔊 _Mierda de Bot_
┃➫🔊 _Me olvidé_
┃➫🔊 _Baneado_
┃➫🔊 _Feliz navidad_
┃➫🔊 _A nadie le importa_
┃➫🔊 _Sexo_
┃➫🔊 _Vete a la vrg_
┃➫🔊 _Ara ara_
┃➫🔊 _Hola_
┃➫🔊 _Un pato_
┃➫🔊 _Nyanpasu_
┃➫🔊 _Te amo_
┃➫🔊 _Yamete_
┃➫🔊 _Te diagnostico con gay_
┃➫🔊 _Quien es tu sempai botsito 7w7_
┃➫🔊 _Bañate_
┃➫🔊 _Vivan los novios_
┃➫🔊 _Marica quien_
┃➫🔊 _Es puto_
┃➫🔊 _La biblia_
┃➫🔊 _Onichan_
┃➫🔊 _Bot puto_
┃➫🔊 _Feliz cumpleaños_
┃➫🔊 _Pasa pack Bot_
┃➫🔊 _Atencion grupo_
┃➫🔊 _Homero chino_
┃➫🔊 _Oh me vengo_
┃➫🔊 _Murio el grupo_
┃➫🔊 _Siuuu_
┃➫🔊 _Rawr_
┃➫🔊 _UwU_
┃➫🔊 _:c_
┃➫🔊 _a_
┃➫🔊 _Hey_
┃➫🔊 _Enojado_
┃➫🔊 _Enojada_
┃➫🔊 _Chao_
┃➫🔊 _Hentai_
┃➫🔊 _Triste_
┃➫🔊 _Estoy triste_
┃➫🔊 _Me pican los cocos_
┃➫🔊 _Contexto_
┃➫🔊 _Me voy_
┃➫🔊 _Tengo los calzones del admin_
┃➫🔊 _Entrada épica_ 
┃➫🔊 _Esto va ser épico papus_
┃➫🔊 _Ingresa épicamente_
┃➫🔊 _Bv_
┃➫🔊 _Yoshi_
┃➫🔊 _No digas eso papu_
┃➫🔊 _Ma ma masivo_
┃➫🔊 _Masivo_
┃➫🔊 _Basado_
┃➫🔊 _Basada_
┃➫🔊 _Fino señores_
┃➫🔊 _Verdad que te engañe_
┃➫🔊 _Sus_
┃➫🔊 _Ohayo_
┃➫🔊 _La voz de hombre_
┃➫🔊 _Pero esto_
┃➫🔊 _Bien pensado Woody_
┃➫🔊 _Jesucristo_
┃➫🔊 _Wtf_
┃➫🔊 _Una pregunta_
┃➫🔊 _Que sucede_
┃➫🔊 _Hablame_
┃➫🔊 _Pikachu_
┃➫🔊 _Niconico_
┃➫🔊 _Yokese_
┃➫🔊 _Omaiga_
┃➫🔊 _Nadie te preguntó_
┃➫🔊 _Bueno si_
┃➫🔊 _Usted está detenido_
┃➫🔊 _No me hables_
┃➫🔊 _No chu_
┃➫🔊 _El pepe_
┃➫🔊 _Pokémon_
┃➫🔊 _No me hagas usar esto_
┃➫🔊 _Esto va para ti_
┃➫🔊 _Abduzcan_
┃➫🔊 _Joder_
┃➫🔊 _Hablar primos_
┃➫🔊 _Mmm_
┃➫🔊 _Orale_
┃➫🔊 _Me anda buscando anonymous_
┃➫🔊 _Blackpink in your area_
┃➫🔊 _Cambiate a Movistar_
┃➫🔊 _Momento equisde | Momento XD_
┃➫🔊 _Todo bien | 😇_
┃➫🔊 _Te gusta el Pepino | 🥒_
┃➫🔊 _El tóxico_
┃➫🔊 _Moshi moshi_
┃➫🔊 _Calla Fan de BTS_
┃➫🔊 _Que tal grupo_
┃➫🔊 _Muchachos_
┃➫🔊 _Está Zzzz | 😴_
┃➫🔊 _Goku Pervertido_
┃➫🔊 _Potaxio | 🥑_
┃➫🔊 _Nico nico_
┃➫🔊 _El rap de Fernanfloo_
┃➫🔊 _Tal vez_
┃➫🔊 _Corte corte_
┃➫🔊 _Buenas noches_
┃➫🔊 _Porque ta tite_
┃➫🔊 _Eres Fuerte_
┃➫🔊 _Bueno Master | 🫂_
┃➫🔊 _No Rompas más | 💔_
┃➫🔊 _Traiganle una falda_
┃➫🔊 _Se están riendo de mí_
┃➫🔊 _Su nivel de pendejo_
┃➫🔊 _Bienvenido/a | 🥳 | 🤗 | 👋_
┃➫🔊 _Elmo sabe donde vives_
┃➫🔊 _tunometecabrasaramambiche_
┃➫🔊 _Y este quien es_
┃➫🔊 _Motivación_
┃➫🔊 _En caso de una investigación_
┃➫🔊 _Buen día grupo | 🙌_
┃➫🔊 _Las reglas del grupo_
╰━━━━━━〔 *𓃠 ${vs}* 〕━━━━━━⬣
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
  
{title: "➥🔊 Noche de paz", description: null, rowId: `Noche de paz`},
{title: "➥🔊 Buenos dias", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Audio hentai", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Fiesta del admin", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Fiesta del admin 2", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Fiesta del administrador", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Viernes", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Me olvidé", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Baneado", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Feliz navidad", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 A nadie le importa", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Sexo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Vete a la vrg", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Ara ara", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Mierda de Bot", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Hola", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Un pato", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Nyanpasu", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Te amo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Yamete", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Te diagnostico con gay", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Quien es tu sempai botsito 7w7", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Bañate", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Vivan los novios", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Marica quien", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Es puto", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 La biblia", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Onichan", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Bot puto", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Feliz cumpleaños", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Pasa pack Bot", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Atencion grupo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Homero chino", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Oh me vengo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Murio el grupo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Siuuu", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Rawr", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 UwU", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 :c", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 a", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Hey", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Enojado", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Enojada", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Chao", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Hentai", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Triste", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Estoy triste", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Me pican los cocos", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Contexto", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Me voy", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Tengo los calzones del admin", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Entrada épica", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Esto va ser épico papus", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Ingresa épicamente", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Bv", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Yoshi", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 No digas eso papu", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Ma ma masivo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Masivo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Basado", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Fino señores", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Verdad que te engañe", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Sus", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Ohayo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 La voz de hombre", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Pero esto", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Bien pensado Woody", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Jesucristo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Wtf", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Una pregunta", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Que sucede", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Hablame", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Pikachu", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Niconico", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Yokese", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Omaiga", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Nadie te preguntó", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Bueno si", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Usted está detenido", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 No me hables", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 No, chupala", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 El pepe", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Pokémon", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 No me hagas usar esto", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Esto va para ti", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Abduzcan", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Joder", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Hablar primos", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Mmm", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Orale", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Me anda buscando anonymous", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Blackpink in your area", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Cambiate a Movistar", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Momento equisde", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Momento XD", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Todo bien", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 😇", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Te gusta el Pepino", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 🥒", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 El tóxico", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Moshi moshi", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Calla Fan de BTS", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Que tal grupo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Muchachos", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Está Zzzz", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 😴", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Goku Pervertido", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Potaxio", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 🥑", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Nico nico", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 El rap de Fernanfloo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Tal vez", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Corte corte", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Buenas noches", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Porque ta tite", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Eres Fuerte", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Bueno Master", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 🫂", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 💔", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Traiganle una falda", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Se están riendo de mí", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Su nivel de pendejo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Bienvenido/a", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 🥳", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 🤗", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 👋", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Elmo sabe donde vives", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 tunometecabrasaramambiche", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Y este quien es", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Motivación", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 En caso de una investigación", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Buen día grupo", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 🙌", description: null, rowId: `${usedPrefix}menu`},
{title: "➥🔊 Las reglas del grupo", description: null, rowId: `${usedPrefix}menu`},
]}, ]
//let name = await conn.getName(m.sender)

const listMessage = {
text: `𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 | 𝘼𝙐𝘿𝙄𝙊𝙎`,
footer: `*╭━━〔 𝙈𝙀𝙉𝙐 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊 〕━━⬣*
*┃ 𝙃𝙚𝙮! 𝙖𝙦𝙪𝙞 𝙥𝙪𝙚𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧*
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
handler.exp = 60
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
