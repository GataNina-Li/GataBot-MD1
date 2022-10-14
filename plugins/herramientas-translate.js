/*import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `${mg}𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙎𝙀 𝙐𝙎𝘼 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} (idioma) (texto)*\n*${usedPrefix + command} es Hola Bot*\n\n𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙄𝙎 𝙐𝙎𝙀𝘿 𝙏𝙃𝙄𝙎 𝙒𝘼𝙔\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} (language) (text)*\n*${usedPrefix + command} en Hello Bot*\n\n𝙄𝘿𝙄𝙊𝙈𝘼𝙎 𝘼𝘿𝙈𝙄𝙏𝙄𝘿𝙊𝙎 | 𝙎𝙐𝙋𝙋𝙊𝙍𝙏𝙀𝘿 𝙇𝘼𝙉𝙂𝙐𝘼𝙂𝙀𝙎\n*https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*Traducción:* ' +  result[0]) }}
handler.help = ['translate', 'traducir']
handler.tags = ['General']
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler*/


import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let user = global.db.data.users[m.sender]
let msg = `${mg}𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙎𝙀 𝙐𝙎𝘼 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} (idioma) (texto)*\n*${usedPrefix + command} es Hola Bot*\n\n𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙄𝙎 𝙐𝙎𝙀𝘿 𝙏𝙃𝙄𝙎 𝙒𝘼𝙔\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} (language) (text)*\n*${usedPrefix + command} en Hello Bot*\n\n𝙄𝘿𝙄𝙊𝙈𝘼𝙎 𝘼𝘿𝙈𝙄𝙏𝙄𝘿𝙊𝙎 | 𝙎𝙐𝙋𝙋𝙊𝙍𝙏𝙀𝘿 𝙇𝘼𝙉𝙂𝙐𝘼𝙂𝙀𝙎\n*https://cloud.google.com/translate/docs/languages*`

if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
	
try {      
let result = await translate(`${text}`, { tld, to: lang, })
//await m.reply('*Traducción:* ' + result)
const idiomas = [['Afrikáans',	'af'], ['Albanés', 'sq'], ['Amárico',	'am'], ['Árabe',	'ar'], ['Armenio',	'hy'], ['Asamés',	'as'], ['Aimara',	'ay'], ['Azerbaiyano',	'az'], ['Bambara',	'bm'], ['Vasco',	'eu'], ['Bielorruso',	'be'], ['Bengalí',	'bn'], ['Bhospuri',	'bho'], ['Bosnio',	'bs'], ['Búlgaro',	'bg'], ['Catalán',	'ca'], ['Cebuano',	'ceb'], ['Chino (simplificado)',	'zh-CN'], ['Chino (tradicional)',	'zh-TW'], ['Corso',	'co'], ['Croata',	'hr'], ['Checo',	'cs'], ['Danés',	'da'], ['Dhivehi',	'dv'], ['Dogri',	'doi'], ['Neerlandés',	'nl'], ['Inglés',	'en'], ['Esperanto',	'eo'], ['Estonio',	'et'], ['Ewe',	'ee'], ['Filipino (tagalo)',	'fil'], ['Finés',	'fi'], ['Francés',	'fr'], ['Frisón',	'fy'], ['Gallego',	'gl'], ['Georgiano',	'ka'], ['Alemán',	'de'], ['Grieg',	'el'], ['Guaraní',	'gn'], ['Guyaratí',	'gu'], ['Criollo haitiano',	'ht'], ['Hausa',	'ha'], ['Hawaiano',	'haw'], ['Hebreo',	'he'], ['Hindi',	'hi'], ['Hmong',	'hmn'], ['Húngaro',	'hu'], ['Islandés',	'is'], ['Igbo',	'ig'], ['Ilocano',	'ilo'], ['Indonesio',	'id'], ['Irlandés',	'ga'], ['Italiano',	'it'], ['Japonés',	'ja'], ['Javanés',	'jv'], ['Canarés',	'kn'], ['Kazajo',	'kk'], ['Jemer',	'km'], ['Kiñaruanda',	'rw'], ['Konkani',	'gom'], ['Corean',	'ko'], ['Krio',	'kri'], ['Curdo',	'ku'], ['Kurdo (Sorani)',	'ckb'], ['Kirg',	'ky'], ['Laosiano',	'lo'], ['Latín',	'la'], ['Letón',	'lv'], ['Lingala',	'ln'], ['Lituano',	'lt'], ['Luganda',	'lg'], ['Luxemburgués',	'lb'], ['Macedonio',	'mk'], ['Maithili',	'mai'], ['Malgache',	'mg'], ['Malayo',	'ms'], ['Malabar',	'ml'], ['Maltés',	'mt'], ['Maorí',	'mi'], ['Marathi',	'mr'], ['Meiteilon (manipuri)',	'mni-Mtei'], ['Mizo',	'lus'], ['Mongol',	'mn'], ['Birmano',	'my'], ['Nepalí',	'ne'], ['Noruego',	'no'], ['Nyanja (chichewa)',	'ny'], ['Odia (oriya)',	'or'], ['Oromo',	'om'], ['Pashto',	'ps'], ['Persa',	'fa'], ['Polaco',	'pl'], ['Portugués (Portugal y Brasil)',	'pt'], ['Punjabi',	'pa'], ['Quechua',	'qu'], ['Rumano',	'ro'], ['Ruso',	'ru'], ['Samoano',	'sm'], ['',	''], ['Sánscr',	'sa'], ['Gaélico',	'gd'], ['Sepedi',	'nso'], ['Serbio',	'sr'], ['Sesoto',	'st'], ['Shona',	'sn'], ['Sindhi',	'sd'], ['Cingalés',	'si'], ['Eslovaco',	'sk'], ['Esloveno',	'sl'], ['Somalí',	'so'], ['Español',	'es'], ['Sundanés',	'su'], ['Suajili',	'sw'], ['Sueco',	'sv'], ['Tagalo (filipino)',	'tl'], ['Tayiko',	'tg'], ['Tamil',	'ta'], ['Tártaro',	'tt'], ['Telugú',	'te'], ['Tailandés',	'th'], ['Tigriña',	'ti'], ['Tsonga',	'ts'], ['Turco',	'tr'], ['Turcom',	'tk'], ['Twi (Akan)',	'ak'], ['Ucraniano',	'uk'], ['Urdu',	'ur'], ['Uigur',	'ug'], ['Uzbeko',	'uz'], ['Vietnamita',	'vi'], ['Galés',	'cy'], ['Xhosa',	'xh'], ['Yiddish',	'yi'], ['Yoruba',	'yo'], ['Zulú',	'zu']]	
const sections = [
{
title: htjava + ' 🌐 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙄𝘿𝙄𝙊𝙈𝘼𝙎 ' + htjava,
rows: [
{title: "🪄 " + idiomas[0][0], rowId: usedPrefix + command + '' + idiomas[0][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[0][0]} | ${idiomas[0][1]}`},
{title: "🪄 " + idiomas[1][0], rowId: usedPrefix + command + '' + idiomas[1][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[1][0]} | ${idiomas[1][1]}`},
{title: "🪄 " + idiomas[2][0], rowId: usedPrefix + command + '' + idiomas[2][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[2][0]} | ${idiomas[2][1]}`},
{title: "🪄 " + idiomas[3][0], rowId: usedPrefix + command + '' + idiomas[3][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[3][0]} | ${idiomas[3][1]}`},
{title: "🪄 " + idiomas[4][0], rowId: usedPrefix + command + '' + idiomas[4][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[4][0]} | ${idiomas[4][1]}`}
]}]

const listMessage = {
text: result,
footer: `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`,
title: `*⎔───ꕤ 🌐 𝙏𝙍𝘼𝘿𝙐𝘾𝘾𝙄𝙊𝙉 ꕤ───⎔*`,
buttonText: `🪄 𝙀𝙡𝙚𝙜𝙞𝙧 𝙄𝙙𝙞𝙤𝙢𝙖 🪄`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
  
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
const idiomas = [['Afrikáans',	'af'], ['Albanés', 'sq'], ['Amárico',	'am'], ['Árabe',	'ar'], ['Armenio',	'hy'], ['Asamés',	'as'], ['Aimara',	'ay'], ['Azerbaiyano',	'az'], ['Bambara',	'bm'], ['Vasco',	'eu'], ['Bielorruso',	'be'], ['Bengalí',	'bn'], ['Bhospuri',	'bho'], ['Bosnio',	'bs'], ['Búlgaro',	'bg'], ['Catalán',	'ca'], ['Cebuano',	'ceb'], ['Chino (simplificado)',	'zh-CN'], ['Chino (tradicional)',	'zh-TW'], ['Corso',	'co'], ['Croata',	'hr'], ['Checo',	'cs'], ['Danés',	'da'], ['Dhivehi',	'dv'], ['Dogri',	'doi'], ['Neerlandés',	'nl'], ['Inglés',	'en'], ['Esperanto',	'eo'], ['Estonio',	'et'], ['Ewe',	'ee'], ['Filipino (tagalo)',	'fil'], ['Finés',	'fi'], ['Francés',	'fr'], ['Frisón',	'fy'], ['Gallego',	'gl'], ['Georgiano',	'ka'], ['Alemán',	'de'], ['Grieg',	'el'], ['Guaraní',	'gn'], ['Guyaratí',	'gu'], ['Criollo haitiano',	'ht'], ['Hausa',	'ha'], ['Hawaiano',	'haw'], ['Hebreo',	'he'], ['Hindi',	'hi'], ['Hmong',	'hmn'], ['Húngaro',	'hu'], ['Islandés',	'is'], ['Igbo',	'ig'], ['Ilocano',	'ilo'], ['Indonesio',	'id'], ['Irlandés',	'ga'], ['Italiano',	'it'], ['Japonés',	'ja'], ['Javanés',	'jv'], ['Canarés',	'kn'], ['Kazajo',	'kk'], ['Jemer',	'km'], ['Kiñaruanda',	'rw'], ['Konkani',	'gom'], ['Corean',	'ko'], ['Krio',	'kri'], ['Curdo',	'ku'], ['Kurdo (Sorani)',	'ckb'], ['Kirg',	'ky'], ['Laosiano',	'lo'], ['Latín',	'la'], ['Letón',	'lv'], ['Lingala',	'ln'], ['Lituano',	'lt'], ['Luganda',	'lg'], ['Luxemburgués',	'lb'], ['Macedonio',	'mk'], ['Maithili',	'mai'], ['Malgache',	'mg'], ['Malayo',	'ms'], ['Malabar',	'ml'], ['Maltés',	'mt'], ['Maorí',	'mi'], ['Marathi',	'mr'], ['Meiteilon (manipuri)',	'mni-Mtei'], ['Mizo',	'lus'], ['Mongol',	'mn'], ['Birmano',	'my'], ['Nepalí',	'ne'], ['Noruego',	'no'], ['Nyanja (chichewa)',	'ny'], ['Odia (oriya)',	'or'], ['Oromo',	'om'], ['Pashto',	'ps'], ['Persa',	'fa'], ['Polaco',	'pl'], ['Portugués (Portugal y Brasil)',	'pt'], ['Punjabi',	'pa'], ['Quechua',	'qu'], ['Rumano',	'ro'], ['Ruso',	'ru'], ['Samoano',	'sm'], ['',	''], ['Sánscr',	'sa'], ['Gaélico',	'gd'], ['Sepedi',	'nso'], ['Serbio',	'sr'], ['Sesoto',	'st'], ['Shona',	'sn'], ['Sindhi',	'sd'], ['Cingalés',	'si'], ['Eslovaco',	'sk'], ['Esloveno',	'sl'], ['Somalí',	'so'], ['Español',	'es'], ['Sundanés',	'su'], ['Suajili',	'sw'], ['Sueco',	'sv'], ['Tagalo (filipino)',	'tl'], ['Tayiko',	'tg'], ['Tamil',	'ta'], ['Tártaro',	'tt'], ['Telugú',	'te'], ['Tailandés',	'th'], ['Tigriña',	'ti'], ['Tsonga',	'ts'], ['Turco',	'tr'], ['Turcom',	'tk'], ['Twi (Akan)',	'ak'], ['Ucraniano',	'uk'], ['Urdu',	'ur'], ['Uigur',	'ug'], ['Uzbeko',	'uz'], ['Vietnamita',	'vi'], ['Galés',	'cy'], ['Xhosa',	'xh'], ['Yiddish',	'yi'], ['Yoruba',	'yo'], ['Zulú',	'zu']]	
const sections = [
{
title: htjava + ' 🌐 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙄𝘿𝙄𝙊𝙈𝘼𝙎 ' + htjava,
rows: [
{title: "🪄 " + idiomas[0][0], rowId: usedPrefix + command + '' + idiomas[0][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[0][0]} | ${idiomas[0][1]}`},
{title: "🪄 " + idiomas[1][0], rowId: usedPrefix + command + '' + idiomas[1][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[1][0]} | ${idiomas[1][1]}`},
{title: "🪄 " + idiomas[2][0], rowId: usedPrefix + command + '' + idiomas[2][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[2][0]} | ${idiomas[2][1]}`},
{title: "🪄 " + idiomas[3][0], rowId: usedPrefix + command + '' + idiomas[3][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[3][0]} | ${idiomas[3][1]}`},
{title: "🪄 " + idiomas[4][0], rowId: usedPrefix + command + '' + idiomas[4][1] + '' + text, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[4][0]} | ${idiomas[4][1]}`}
]}]

const listMessage = {
text: result2,
footer: `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`,
title: `*⎔───ꕤ 🌐 𝙏𝙍𝘼𝘿𝙐𝘾𝘾𝙄𝙊𝙉 ꕤ───⎔*`,
buttonText: `🪄 𝙀𝙡𝙚𝙜𝙞𝙧 𝙄𝙙𝙞𝙤𝙢𝙖 🪄`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
//await m.reply('*Traducción:* ' + result2)
} catch { 
await m.reply(`${fg}\`\`\`NO SE LOGRÓ TRADUCIR SU TEXTO, REPORTE ESTE COMANDO CON EL COMANDO #reporte\`\`\``)    
}}}
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
