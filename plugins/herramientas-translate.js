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
const idiomas = [['Afrikáans',	'af'], ['Albanés', 'sq'], ['Amárico',	'am'], ['Árabe',	'ar'], ['Armenio',	'hy'], ['Asamés',	'as'], ['Aimara',	'ay'], ['Azerbaiyano',	'az'], ['Bambara',	'bm'], ['Vasco',	'eu'], ['Bielorruso',	'be'], ['Bengalí',	'bn'], ['Bhospuri',	'bho'], ['Bosnio',	'bs'], ['Búlgaro',	'bg'], ['Catalán',	'ca'], ['Cebuano',	'ceb'], ['Chino (simplificado)',	'cn'], ['Chino (tradicional)',	'ny'], ['Corso',	'co'], ['Croata',	'hr'], ['Checo',	'cs'], ['Danés',	'da'], ['Dhivehi',	'dv'], ['Dogri',	'doi'], ['Neerlandés',	'nl'], ['Inglés',	'en'], ['Esperanto',	'eo'], ['Estonio',	'et'], ['Ewe',	'ee'], ['Filipino (tagalo)',	'fil'], ['Finés',	'fi'], ['Francés',	'fr'], ['Frisón',	'fy'], ['Gallego',	'gl'], ['Georgiano',	'ka'], ['Alemán',	'de'], ['Grieg',	'el'], ['Guaraní',	'gn'], ['Guyaratí',	'gu'], ['Criollo haitiano',	'ht'], ['Hausa',	'ha'], ['Hawaiano',	'haw'], ['Hebreo',	'he'], ['Hindi',	'hi'], ['Hmong',	'hmn'], ['Húngaro',	'hu'], ['Islandés',	'is'], ['Igbo',	'ig'], ['Ilocano',	'ilo'], ['Indonesio',	'id'], ['Irlandés',	'ga'], ['Italiano',	'it'], ['Japonés',	'ja'], ['Javanés',	'jv'], ['Canarés',	'kn'], ['Kazajo',	'kk'], ['Jemer',	'km'], ['Kiñaruanda',	'rw'], ['Konkani',	'gom'], ['Corean',	'ko'], ['Krio',	'kri'], ['Curdo',	'ku'], ['Kurdo (Sorani)',	'ckb'], ['Kirg',	'ky'], ['Laosiano',	'lo'], ['Latín',	'la'], ['Letón',	'lv'], ['Lingala',	'ln'], ['Lituano',	'lt'], ['Luganda',	'lg'], ['Luxemburgués',	'lb'], ['Macedonio',	'mk'], ['Maithili',	'mai'], ['Malgache',	'mg'], ['Malayo',	'ms'], ['Malabar',	'ml'], ['Maltés',	'mt'], ['Maorí',	'mi'], ['Marathi',	'mr'], ['Meiteilon (manipuri)',	'mni-Mtei'], ['Mizo',	'lus'], ['Mongol',	'mn'], ['Birmano',	'my'], ['Nepalí',	'ne'], ['Noruego',	'no'], ['Nyanja (chichewa)',	'ny'], ['Odia (oriya)',	'or'], ['Oromo',	'om'], ['Pashto',	'ps'], ['Persa',	'fa'], ['Polaco',	'pl'], ['Portugués (Portugal y Brasil)',	'pt'], ['Punjabi',	'pa'], ['Quechua',	'qu'], ['Rumano',	'ro'], ['Ruso',	'ru'], ['Samoano',	'sm'], ['',	''], ['Sánscr',	'sa'], ['Gaélico',	'gd'], ['Sepedi',	'nso'], ['Serbio',	'sr'], ['Sesoto',	'st'], ['Shona',	'sn'], ['Sindhi',	'sd'], ['Cingalés',	'si'], ['Eslovaco',	'sk'], ['Esloveno',	'sl'], ['Somalí',	'so'], ['Español',	'es'], ['Sundanés',	'su'], ['Suajili',	'sw'], ['Sueco',	'sv'], ['Tagalo (filipino)',	'tl'], ['Tayiko',	'tg'], ['Tamil',	'ta'], ['Tártaro',	'tt'], ['Telugú',	'te'], ['Tailandés',	'th'], ['Tigriña',	'ti'], ['Tsonga',	'ts'], ['Turco',	'tr'], ['Turcom',	'tk'], ['Twi (Akan)',	'ak'], ['Ucraniano',	'uk'], ['Urdu',	'ur'], ['Uigur',	'ug'], ['Uzbeko',	'uz'], ['Vietnamita',	'vi'], ['Galés',	'cy'], ['Xhosa',	'xh'], ['Yiddish',	'yi'], ['Yoruba',	'yo'], ['Zulú',	'zu']]	
const sections = [
{
title: htjava + ' 🌐 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙄𝘿𝙄𝙊𝙈𝘼𝙎 ' + htjava,
rows: [
{title: "🪄 " + idiomas[0][0], rowId: `${usedPrefix + command} ${idiomas[0][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[0][0]} | ${idiomas[0][1]}`},
{title: "🪄 " + idiomas[1][0], rowId: `${usedPrefix + command} ${idiomas[1][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[1][0]} | ${idiomas[1][1]}`},
{title: "🪄 " + idiomas[2][0], rowId: `${usedPrefix + command} ${idiomas[2][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[2][0]} | ${idiomas[2][1]}`},
{title: "🪄 " + idiomas[3][0], rowId: `${usedPrefix + command} ${idiomas[3][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[3][0]} | ${idiomas[3][1]}`},
{title: "🪄 " + idiomas[4][0], rowId: `${usedPrefix + command} ${idiomas[4][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[4][0]} | ${idiomas[4][1]}`},
{title: "🪄 " + idiomas[5][0], rowId: `${usedPrefix + command} ${idiomas[5][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[5][0]} | ${idiomas[5][1]}`},
{title: "🪄 " + idiomas[6][0], rowId: `${usedPrefix + command} ${idiomas[6][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[6][0]} | ${idiomas[6][1]}`},
{title: "🪄 " + idiomas[7][0], rowId: `${usedPrefix + command} ${idiomas[7][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[7][0]} | ${idiomas[7][1]}`},
{title: "🪄 " + idiomas[8][0], rowId: `${usedPrefix + command} ${idiomas[8][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[8][0]} | ${idiomas[8][1]}`},
{title: "🪄 " + idiomas[9][0], rowId: `${usedPrefix + command} ${idiomas[9][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[9][0]} | ${idiomas[9][1]}`},
{title: "🪄 " + idiomas[10][0], rowId: `${usedPrefix + command} ${idiomas[10][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[10][0]} | ${idiomas[10][1]}`},
{title: "🪄 " + idiomas[11][0], rowId: `${usedPrefix + command} ${idiomas[11][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[11][0]} | ${idiomas[11][1]}`},
{title: "🪄 " + idiomas[12][0], rowId: `${usedPrefix + command} ${idiomas[12][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[12][0]} | ${idiomas[12][1]}`},
{title: "🪄 " + idiomas[13][0], rowId: `${usedPrefix + command} ${idiomas[13][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[13][0]} | ${idiomas[13][1]}`},
{title: "🪄 " + idiomas[14][0], rowId: `${usedPrefix + command} ${idiomas[14][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[14][0]} | ${idiomas[14][1]}`},
{title: "🪄 " + idiomas[15][0], rowId: `${usedPrefix + command} ${idiomas[15][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[15][0]} | ${idiomas[15][1]}`},
{title: "🪄 " + idiomas[16][0], rowId: `${usedPrefix + command} ${idiomas[16][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[16][0]} | ${idiomas[16][1]}`},
{title: "🪄 " + idiomas[17][0], rowId: `${usedPrefix + command} ${idiomas[17][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[17][0]} | ${idiomas[17][1]}`},
{title: "🪄 " + idiomas[18][0], rowId: `${usedPrefix + command} ${idiomas[18][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[18][0]} | ${idiomas[18][1]}`},
{title: "🪄 " + idiomas[19][0], rowId: `${usedPrefix + command} ${idiomas[19][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[19][0]} | ${idiomas[19][1]}`},
{title: "🪄 " + idiomas[20][0], rowId: `${usedPrefix + command} ${idiomas[20][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[20][0]} | ${idiomas[20][1]}`},
{title: "🪄 " + idiomas[21][0], rowId: `${usedPrefix + command} ${idiomas[21][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[21][0]} | ${idiomas[21][1]}`},
{title: "🪄 " + idiomas[22][0], rowId: `${usedPrefix + command} ${idiomas[22][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[22][0]} | ${idiomas[22][1]}`},
{title: "🪄 " + idiomas[23][0], rowId: `${usedPrefix + command} ${idiomas[23][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[23][0]} | ${idiomas[23][1]}`},
{title: "🪄 " + idiomas[24][0], rowId: `${usedPrefix + command} ${idiomas[24][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[24][0]} | ${idiomas[24][1]}`},
{title: "🪄 " + idiomas[25][0], rowId: `${usedPrefix + command} ${idiomas[25][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[25][0]} | ${idiomas[25][1]}`},
{title: "🪄 " + idiomas[26][0], rowId: `${usedPrefix + command} ${idiomas[26][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[26][0]} | ${idiomas[26][1]}`},
{title: "🪄 " + idiomas[27][0], rowId: `${usedPrefix + command} ${idiomas[27][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[27][0]} | ${idiomas[27][1]}`},
{title: "🪄 " + idiomas[28][0], rowId: `${usedPrefix + command} ${idiomas[28][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[28][0]} | ${idiomas[28][1]}`},
{title: "🪄 " + idiomas[29][0], rowId: `${usedPrefix + command} ${idiomas[29][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[29][0]} | ${idiomas[29][1]}`},
{title: "🪄 " + idiomas[30][0], rowId: `${usedPrefix + command} ${idiomas[30][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[30][0]} | ${idiomas[30][1]}`},
{title: "🪄 " + idiomas[31][0], rowId: `${usedPrefix + command} ${idiomas[31][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[31][0]} | ${idiomas[31][1]}`},
{title: "🪄 " + idiomas[32][0], rowId: `${usedPrefix + command} ${idiomas[32][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[32][0]} | ${idiomas[32][1]}`},
{title: "🪄 " + idiomas[33][0], rowId: `${usedPrefix + command} ${idiomas[33][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[33][0]} | ${idiomas[33][1]}`},
{title: "🪄 " + idiomas[34][0], rowId: `${usedPrefix + command} ${idiomas[34][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[34][0]} | ${idiomas[34][1]}`},
{title: "🪄 " + idiomas[35][0], rowId: `${usedPrefix + command} ${idiomas[35][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[35][0]} | ${idiomas[35][1]}`},
{title: "🪄 " + idiomas[36][0], rowId: `${usedPrefix + command} ${idiomas[36][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[36][0]} | ${idiomas[36][1]}`},
{title: "🪄 " + idiomas[37][0], rowId: `${usedPrefix + command} ${idiomas[37][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[37][0]} | ${idiomas[37][1]}`},
{title: "🪄 " + idiomas[38][0], rowId: `${usedPrefix + command} ${idiomas[38][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[38][0]} | ${idiomas[38][1]}`},
{title: "🪄 " + idiomas[39][0], rowId: `${usedPrefix + command} ${idiomas[39][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[39][0]} | ${idiomas[39][1]}`},
{title: "🪄 " + idiomas[40][0], rowId: `${usedPrefix + command} ${idiomas[40][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[40][0]} | ${idiomas[40][1]}`},
{title: "🪄 " + idiomas[41][0], rowId: `${usedPrefix + command} ${idiomas[41][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[41][0]} | ${idiomas[41][1]}`},
{title: "🪄 " + idiomas[42][0], rowId: `${usedPrefix + command} ${idiomas[42][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[42][0]} | ${idiomas[42][1]}`},
{title: "🪄 " + idiomas[43][0], rowId: `${usedPrefix + command} ${idiomas[43][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[43][0]} | ${idiomas[43][1]}`},
{title: "🪄 " + idiomas[44][0], rowId: `${usedPrefix + command} ${idiomas[44][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[44][0]} | ${idiomas[44][1]}`},
{title: "🪄 " + idiomas[45][0], rowId: `${usedPrefix + command} ${idiomas[45][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[45][0]} | ${idiomas[45][1]}`},
{title: "🪄 " + idiomas[46][0], rowId: `${usedPrefix + command} ${idiomas[46][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[46][0]} | ${idiomas[46][1]}`},
{title: "🪄 " + idiomas[47][0], rowId: `${usedPrefix + command} ${idiomas[47][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[47][0]} | ${idiomas[47][1]}`},
{title: "🪄 " + idiomas[48][0], rowId: `${usedPrefix + command} ${idiomas[48][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[48][0]} | ${idiomas[48][1]}`},
{title: "🪄 " + idiomas[49][0], rowId: `${usedPrefix + command} ${idiomas[49][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[49][0]} | ${idiomas[49][1]}`},
{title: "🪄 " + idiomas[50][0], rowId: `${usedPrefix + command} ${idiomas[50][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[50][0]} | ${idiomas[50][1]}`},
{title: "🪄 " + idiomas[51][0], rowId: `${usedPrefix + command} ${idiomas[51][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[51][0]} | ${idiomas[51][1]}`},
{title: "🪄 " + idiomas[52][0], rowId: `${usedPrefix + command} ${idiomas[52][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[52][0]} | ${idiomas[52][1]}`},
{title: "🪄 " + idiomas[53][0], rowId: `${usedPrefix + command} ${idiomas[53][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[53][0]} | ${idiomas[53][1]}`},
{title: "🪄 " + idiomas[54][0], rowId: `${usedPrefix + command} ${idiomas[54][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[54][0]} | ${idiomas[54][1]}`},
{title: "🪄 " + idiomas[55][0], rowId: `${usedPrefix + command} ${idiomas[55][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[55][0]} | ${idiomas[55][1]}`},
{title: "🪄 " + idiomas[56][0], rowId: `${usedPrefix + command} ${idiomas[56][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[56][0]} | ${idiomas[56][1]}`},
{title: "🪄 " + idiomas[57][0], rowId: `${usedPrefix + command} ${idiomas[57][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[57][0]} | ${idiomas[57][1]}`},
{title: "🪄 " + idiomas[58][0], rowId: `${usedPrefix + command} ${idiomas[58][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[58][0]} | ${idiomas[58][1]}`},
{title: "🪄 " + idiomas[59][0], rowId: `${usedPrefix + command} ${idiomas[59][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[59][0]} | ${idiomas[59][1]}`},
{title: "🪄 " + idiomas[60][0], rowId: `${usedPrefix + command} ${idiomas[60][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[60][0]} | ${idiomas[60][1]}`},
{title: "🪄 " + idiomas[61][0], rowId: `${usedPrefix + command} ${idiomas[61][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[61][0]} | ${idiomas[61][1]}`},
{title: "🪄 " + idiomas[62][0], rowId: `${usedPrefix + command} ${idiomas[62][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[62][0]} | ${idiomas[62][1]}`},
{title: "🪄 " + idiomas[63][0], rowId: `${usedPrefix + command} ${idiomas[63][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[63][0]} | ${idiomas[63][1]}`},
{title: "🪄 " + idiomas[64][0], rowId: `${usedPrefix + command} ${idiomas[64][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[64][0]} | ${idiomas[64][1]}`},
{title: "🪄 " + idiomas[65][0], rowId: `${usedPrefix + command} ${idiomas[65][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[65][0]} | ${idiomas[65][1]}`},
{title: "🪄 " + idiomas[66][0], rowId: `${usedPrefix + command} ${idiomas[66][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[66][0]} | ${idiomas[66][1]}`},
{title: "🪄 " + idiomas[67][0], rowId: `${usedPrefix + command} ${idiomas[67][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[67][0]} | ${idiomas[67][1]}`},
{title: "🪄 " + idiomas[68][0], rowId: `${usedPrefix + command} ${idiomas[68][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[68][0]} | ${idiomas[68][1]}`},
{title: "🪄 " + idiomas[69][0], rowId: `${usedPrefix + command} ${idiomas[69][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[69][0]} | ${idiomas[69][1]}`},
{title: "🪄 " + idiomas[70][0], rowId: `${usedPrefix + command} ${idiomas[70][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[70][0]} | ${idiomas[70][1]}`},
{title: "🪄 " + idiomas[71][0], rowId: `${usedPrefix + command} ${idiomas[71][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[71][0]} | ${idiomas[71][1]}`},
{title: "🪄 " + idiomas[72][0], rowId: `${usedPrefix + command} ${idiomas[72][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[72][0]} | ${idiomas[72][1]}`},
{title: "🪄 " + idiomas[73][0], rowId: `${usedPrefix + command} ${idiomas[73][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[73][0]} | ${idiomas[73][1]}`},
{title: "🪄 " + idiomas[74][0], rowId: `${usedPrefix + command} ${idiomas[74][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[74][0]} | ${idiomas[74][1]}`},
{title: "🪄 " + idiomas[75][0], rowId: `${usedPrefix + command} ${idiomas[75][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[75][0]} | ${idiomas[75][1]}`},
{title: "🪄 " + idiomas[76][0], rowId: `${usedPrefix + command} ${idiomas[76][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[76][0]} | ${idiomas[76][1]}`},
{title: "🪄 " + idiomas[77][0], rowId: `${usedPrefix + command} ${idiomas[77][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[77][0]} | ${idiomas[77][1]}`},
{title: "🪄 " + idiomas[78][0], rowId: `${usedPrefix + command} ${idiomas[78][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[78][0]} | ${idiomas[78][1]}`},
{title: "🪄 " + idiomas[79][0], rowId: `${usedPrefix + command} ${idiomas[79][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[79][0]} | ${idiomas[79][1]}`},
{title: "🪄 " + idiomas[80][0], rowId: `${usedPrefix + command} ${idiomas[80][1]} ${text}`, description: `𝑰𝒅𝒊𝒐𝒎𝒂: ${idiomas[80][0]} | ${idiomas[80][1]}`}
]}]	
try {      
let result = await translate(`${text}`, { tld, to: lang, })

const listMessage = {
text: result,
footer: `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`,
title: `*⎔───ꕤ 🌐 𝙏𝙍𝘼𝘿𝙐𝘾𝘾𝙄𝙊𝙉 ꕤ───⎔*`,
buttonText: `🪄 𝙀𝙡𝙚𝙜𝙞𝙧 𝙄𝙙𝙞𝙤𝙢𝙖 🪄`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
await m.reply(result)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=85faf717d0545d14074659ad&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated

const listMessage = {
text: result2,
footer: `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`,
title: `*⎔─ꕤ 🌐 𝙏𝙍𝘼𝘿𝙐𝘾𝘾𝙄𝙊𝙉 ꕤ─⎔*`,
buttonText: `🪄 𝙀𝙡𝙚𝙜𝙞𝙧 𝙄𝙙𝙞𝙤𝙢𝙖 🪄`,
sections }  
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
await m.reply(result2)
} catch { 
await m.reply(`${fg}\`\`\`NO SE LOGRÓ TRADUCIR SU TEXTO, REPORTE ESTE COMANDO CON EL COMANDO #reporte\`\`\``)    
}}}
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
