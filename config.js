import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import fs from 'fs'

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰ 
global.owner = [
  ['593993684821', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 💖🐈', true],
  ['50498965677', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 2 💖🐈', true],
  ['51993042301', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 3 💖🐈', true],
  ['50495086382'],
  ['593968585383'] 
]
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = ['528451003894'], 

global.APIs = { // API Prefix.
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  'https://violetics.pw': 'beta'
},
  
global.APIKeys = { // APIKey Here
  //⊱ ━━━━━.⋅ 'https://website': 'apikey' ⋅.━━━━ ⊰
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//⊱ ━━━━━.⋅ KEY ⋅.━━━━ ⊰

global.Key360 = ['964f-0c75-7afc'] //keys ephoto360
//global.beta = ['https://violetics.pw'] //keys ephoto360

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = '🐈 𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿'
global.author = '𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = '1.2.10'
global.version = vs

global.gt = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿'
global.gatabot = gt

global.yt = 'https://youtube.com/channel/UCpNU4eY7eiI0ve05CssjdbA'
global.youtube = yt

global.ig = 'https://www.instagram.com/gata_dios'
global.gatadiosig = ig

global.md = 'https://github.com/GataNina-Li/GataBot-MD'
global.gatabot = md

global.nn = 'https://chat.whatsapp.com/CunoFmEfBW75APfI0ZO5DJ'
global.nngrupo = nn //Grupo 1

global.nnn = 'https://chat.whatsapp.com/KDTSNka7Z82Jr2iO3S2Dfo'
global.nnngrupo = nnn //Grupo 2

global.nnnt = 'https://chat.whatsapp.com/GiodIwTRDek4QMPJd2jpPH'
global.nnngrupo = nnnt //Grupo 3

global.paypal = 'https://paypal.me/OficialGD'
global.donar = paypal

//global.gataimg = fs.readFileSync('./media/menus/Menu3.jpg')

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰
global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱❕⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n'
global.exito = eg

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨'
global.igfg = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿'
global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

//━━━━━━━━━━━━━━lolkeys━━━━━━━━━
global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❏––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '┗━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'

global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
                               }
                              }
                             }

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

//Emojis RPG
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️ Agilidad : Agility',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      //armordurability: '🤺 ',
      bank: '🏦 Banco : Bank',
      bibitanggur: '🍇 Semilla de Uva : Grapeseed',
      bibitapel: '🍎 Semilla de Manzana : Apple Seed',
      bibitjeruk: '🍊 Semillas de naranja : Orange Seeds',
      bibitmangga: '🥭 Semilla de Mango : Mango Seed',
      bibitpisang: '🍌 Semillas de Plátano : Banana Seeds',
      bow: '🏹 Super Arco : Super Bow',
      bull: '🐃 Toro : Bull',      
      cat: '🐈 Gato : Cat',      
      centaur: '🐐 Centauro : Centaur',
      chicken: '🐓 Pollo : Chicken',
      common: '📦 Caja Común : Common Box',
      cow: '🐄 Vaca : Cow',
      crystal: '🔮 Cristal : Crystal',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      diamond: '💎+ Diamante+ : Diamond+',
      dog: '🐕 Perro : Dog',
      dragon: '🐉 Dragón : Dragon',
      elephant: '🐘 Elefante : Elephant',
      emerald: '💚 Esmeralda : Emerald',
      exp: '⚡ Experiencia : Exp',
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      fox: '🦊 Zorro : Fox',
      gems: '🍀 Gemas : Gemas',
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: '🚰 Grifo : Griffin',
      gold: '👑 Oro : Gold',
      health: '❤️ Salud : Health',
      horse: '🐎 Caballo : Horse',
      intelligence: '🧠 Inteligencia : Intelligence',
      iron: '⛓️ Hierro : Iron',
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      kyubi: '🌀 Magia : Magic',
      knife: '🔪 Cuchillo : Knife',
      legendary: '🎁 Caja Legendaria : Legendary Box',
      level: '🧬 Nivel : Level',
      limit: '💎 Diamante : Diamond',
      lion: '🦁 León : Lion',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      money: '🐱 GataCoins : CatCoins',
      mythic: '🗳️ Caja Mítica : Mythic Box',
      pet: '🍱 Caja para Mascota : Pet Box',
      petFood: '🍖 Alimento para Mascota : Pet Food',
      pickaxe: '⛏️ Pico : Peak',
      pointxp: '📧 Puntos Exp : Point Xp',
      potion: '🥤 Poción : Potion',
      phonix: '🎗️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      rock: '🪨 Roca : Rock',
      robo: '🚔 Robo : Robo',
      snake: '🐍 Serpiente : Snake',
      stamina: '🦾 Aguante : Stamina',
      strength: '🦹‍ ♀️ Fuerza : Strength',
      string: '🕸️ Cuerda : Cuerda',
      superior: '💼 Superior : Superior',
      sword: '⚔️ Espada : Sword',
      tiger: '🐅 Tigre : Tiger',
      joincount: '🪙 Token',
      trash: '🗑 Basura : Trash',
      uncommon: '🗳️ Caja Poco Común : Uncommon',
      uncommonn: '🗳️ Caja Poco Común : Uncommon',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wolf: '🐺 Lobo : Wolf',
      wood: '🪵 Madera : Wood'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      //armordurability: '🤺 ',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',      
      cat: '🐈',      
      centaur: '🐐',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎+',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '⚡',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      griffin: '🚰',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      kyubi: '🌀',
      knife: '🔪',
      legendary: '🎁',
      level: '🧬',
      limit: '💎',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '🐱',
      mythic: '🗳️',
      pet: '🍱',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      phonix: '🎗️',
      rhinoceros: '🦏',
      rock: '🪨',
      robo: '🚔',
      snake: '🐍',
      stamina: '🦾',
      strength: '🦹‍ ♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      joincount: '🪙',
      trash: '🗑',
      uncommon: '🗳️',
      uncommonn: '🗳️',
      upgrader: '🧰',
      wolf: '🐺',
      wood: '🪵'      
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
