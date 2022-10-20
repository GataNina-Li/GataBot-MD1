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
  ['593959425714'],
  ['50495086382'],
  ['584166662765'],
  ['584163647116'],
  ['18059196237'],
  ['593968585383'] 
]
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = ['528451003894'], 

global.APIs = { // API Prefix. 
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  aria: 'https://ariarestapii.herokuapp.com',
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
  'https://ariarestapii.herokuapp.com': 'aria',
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

global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = '🐈 𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿'
global.author = '𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = '1.3.3'
global.version = vs

global.gt = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿'
global.gatabot = gt

global.yt = 'https://youtube.com/channel/UCpNU4eY7eiI0ve05CssjdbA'
global.youtube = yt

global.ig = 'https://www.instagram.com/gata_dios'
global.gatadiosig = ig

global.md = 'https://github.com/GataNina-Li/GataBot-MD'
global.gatabot = md

global.nna = 'https://chat.whatsapp.com/F0gXWzOzQd985W4lT1OFg3'
global.nnagrupo = nna //UPDATE GATABOT

global.nn = 'https://chat.whatsapp.com/DOIfEoroMCQ76hEZyZbJEn'
global.nngrupo = nn //Grupo 1

global.nnn = 'https://chat.whatsapp.com/HvADoPQIYLW0s5iFa82b0E'
global.nnngrupo = nnn //Grupo 2

global.nnnt = 'https://chat.whatsapp.com/EIpepNDkU9rL8hMgQOy13y'
global.nnntgrupo = nnnt //Grupo 3

global.nnntt = 'https://chat.whatsapp.com/JUVI9cHrLM9JgED3TcM0Ny'
global.nnnttgrupo = nnntt //Grupo 4

global.nnnttt = 'https://chat.whatsapp.com/KgvRe8dmUEwJMBCSjZkKVN'
global.nnntttgrupo = nnnttt //Grupo 5

global.paypal = 'https://paypal.me/OficialGD'
global.donar = paypal

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱⊱╮\n\n'
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

global.wm = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 : 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨'
global.igfg = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿'
global.wait = '*⌛ _Cargando | Charging..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _Cargando | Charging..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando | Charging..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▭*'
global.nomorown = '593993684821'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━lolkeys━━━━━━━━━

global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
//global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://i.imgur.com/IXlUwTW.jpg'
global.img2 = 'https://i.imgur.com/EXTbyyn.jpg'

global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' //prem
global.img4 = 'https://i.imgur.com/i0pccuo.jpg' //prem

global.img5 = 'https://i.imgur.com/iL1snRx.jpeg'
global.img6 = 'https://i.imgur.com/cYFgSKv.jpeg'
global.img7 = 'https://i.imgur.com/JqL3h2V.jpeg'
global.img8 = 'https://i.imgur.com/PCujt1s.jpeg'
global.img9 = 'https://i.imgur.com/xfUEdDb.jpeg'

global.img10 = 'https://i.imgur.com/DvHoMc3.jpg'
global.img11 = 'https://i.imgur.com/5Q1MqGD.jpg'
global.img12 = 'https://i.imgur.com/vWnsjh8.jpg'

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
 
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
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

//Emojis RPG - Referencias
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬 Nivel : Level',
      limit: '💎 Diamante : Diamond',
      exp: '⚡ Experiencia : Exp',
      bank: '🏦 Banco : Bank',
      diamond: '💎+ Diamante+ : Diamond+',
      health: '❤️ Salud : Health',
      kyubi: '🌀 Magia : Magic',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda : Emerald',
      stamina: '✨ Energía : Energy',
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: '👑 Oro : Gold',
      
      trash: '🗑 Basura : Trash',
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: '🕸️ Cuerda : Cuerda',
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: '🪅 Piñata : Doll',
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: '⛓️ Hierro : Iron',
      rock: '🪨 Roca : Rock',
      potion: '🥤 Poción : Potion',
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: '🪵 Madera : Wood',
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: '⚔️ Espada : Sword',
      
      common: '📦 Caja Común : Common Box',
      uncoommon: '🥡 Caja Poco Común : Uncommon',
      mythic: '🗳️ Caja Mítica : Mythic Box',
      legendary: '🎁 Caja Legendaria : Legendary Box',
      petFood: '🍖 Alimento para Mascota : Pet Food',
      pet: '🍱 Caja para Mascota : Pet Box',
      
      bibitanggur: '🍇 Semilla de Uva : Grapeseed',
      bibitapel: '🍎 Semilla de Manzana : Apple Seed',
      bibitjeruk: '🍊 Semillas de naranja : Orange Seeds',
      bibitmangga: '🥭 Semilla de Mango : Mango Seed',
      bibitpisang: '🍌 Semillas de Plátano : Banana Seeds',
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: '🐈 Gato : Cat',      
      centaur: '🐐 Centauro : Centaur',
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: '🐕 Perro : Dog',
      dragon: '🐉 Dragón : Dragon',
      elephant: '🐘 Elefante : Elephant',
      fox: '🦊 Zorro : Fox',
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: '🦅 Ave : Griffin', //Mascota : Griffin',
      horse: '🐎 Caballo : Horse',
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: '🐱 GataCoins : CatCoins',
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: '🐺 Lobo : Wolf',
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      level: '🧬',
      limit: '💎',
      exp: '⚡',
      bank: '🏦',
      diamond: '💎+',
      health: '❤️',
      kyubi: '🌀',
      joincount: '🪙',
      emerald: '💚',
      stamina: '✨',
      role: '💪',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      
      trash: '🗑',
      crystal: '🔮',
      intelligence: '🧠',
      string: '🕸️',
      keygold: '🔑',
      keyiron: '🗝️',
      emas: '🪅',
      fishingrod: '🎣',
      gems: '🍀',
      magicwand: '⚕️',
      mana: '🪄',
      agility: '🤸‍♂️',
      darkcrystal: '♠️',
      iron: '⛓️',
      rock: '🪨',
      potion: '🥤',
      superior: '💼',
      robo: '🚔',
      upgrader: '🧰',
      wood: '🪵',
      
      strength: '🦹‍ ♀️',
      arc: '🏹',
      armor: '🥼',
      bow: '🏹',
      pickaxe: '⛏️',
      sword: '⚔️',
      
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      legendary: '🎁',
      petFood: '🍖',
      pet: '🍱',
      
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      
      ayam: '🐓',
      babi: '🐖',
      Jabali: '🐗',
      bull: '🐃',    
      buaya: '🐊',    
      cat: '🐈',      
      centaur: '🐐',
      chicken: '🐓',
      cow: '🐄', 
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      fox: '🦊',
      giraffe: '🦒',
      griffin: '🦅', //Mascota : Griffin',
      horse: '🐎',
      kambing: '🐐',
      kerbau: '🐃',
      lion: '🦁',
      money: '🐱',
      monyet: '🐒',
      panda: '🐼',
      snake: '🐍',
      phonix: '🕊️',
      rhinoceros: '🦏',
      wolf: '🐺',
      tiger: '🐅',
      cumi: '🦑',
      udang: '🦐',
      ikan: '🐟',
      
      fideos: '🍝',
      ramuan: '🧪',
      knife: '🔪'
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: '⚡ Experiencia : Exp',
      limit: '💎 Diamante : Diamond',
      diamond: '💎+ Diamante+ : Diamond+',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda : Emerald',
      berlian: '♦️ Joya : Ruby',
      kyubi: '🌀 Magia : Magic',
      gold: '👑 Oro : Gold',
      money: '🐱 GataCoins : CatCoins',
      tiketcoin: '🎫 Gata Tickers',
      stamina: '✨ Energía : Energy',
            
      potion: '🥤 Poción : Potion',
      aqua: '💧 Agua : Water',
      trash: '🗑 Basura : Trash',
      wood: '🪵 Madera : Wood',
      rock: '🪨 Roca : Rock',
      batu: '🥌 Piedra : Stone',
      string: '🕸️ Cuerda : Cuerda',
      iron: '⛓️ Hierro : Iron',
      coal: '⚱️ Carbón : Coal',
      botol: '🍶 Botella : Bottle',
      kaleng: '🥫 Lata : Can',
      kardus: '🪧 Cartón : Paperboard',
      
      eleksirb: '💡 Electricidad : Electricity',
      emasbatang: '〽️ Barra de Oro : Gold bar',
      emasbiasa: '🧭 Oro Común : Common Gold',
      rubah: '🦊🌫️ Zorro Grande : Big Fox',
      sampah: '🗑🌫️ Super Basura : Big Trash',
      serigala: '🐺🌫️ Super Lobo : Big Wolf',
      kayu: '🛷 Super Madera : Super Wood',
      sword: '⚔️ Espada : Sword',
      umpan: '🪱 Carnada : Bait', 
      healtmonster: '💵 Billetes : Fare',
      emas: '🪅 Piñata : Doll',
      pancingan: '🪝 Gancho : Hook',
      pancing: '🎣 Caña de Pescar : Fishing Rod',
       
      common: '📦 Caja Común : Common Box',
      uncoommon: '🥡 Caja Poco Común : Uncommon',
      mythic: '🗳️ Caja Mítica : Mythic Box',
      pet: '📫 Caja de Mascotas : Pet Box',//?
      gardenboxs: '💐 Caja de Jardinería : Garden boxs',//?
      legendary: '🎁 Caja Legendaria : Legendary Box',
      
      anggur: '🍇 Uva : Grape',
      apel: '🍎 Manzana : Apple',
      jeruk: '🍊 Naranja : Orange',
      mangga: '🥭 Mango',
      pisang: '🍌 Platano : Banana',
      
      bibitanggur: '🌾🍇 Semillas de uva : Grape Seeds',
      bibitapel: '🌾🍎 Semillas de manzana : Apple seeds',
      bibitjeruk: '🌾🍊 Semillas de naranja : Orange Seeds',
      bibitmangga: '🌾🥭 Semillas de Mango : Mango Seeds',
      bibitpisang: '🌾🍌 Semillas de plátano : Banana Seeds',
      
      centaur: '🐐 Centauro : Centaur',
      griffin: '🦅 Ave : Griffin',
      kucing: '🐈 Gato : Cat',
      naga: '🐉 Dragón : Dragon',
      fox: '🦊 Zorro : Fox',
      kuda: '🐎 Caballo : Horse',
      phonix: '🕊️ Fénix : Phoenix',
      wolf: '🐺 Lobo : Wolf',
      anjing: '🐶 Perro : Dog',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '🍖 Alimento para Mascota : Pet Food', //?
      makanancentaur: '🐐🥩 Comida de Centauro : Centauro Food',
      makanangriffin: '🦅🥩 Comida de Ave : Griffin Food',
      makanankyubi: '🌀🥩 Comida Mágica : Magic Food',
      makanannaga: '🐉🥩 Comida de Dragón : Dragon Food',
      makananpet: '🍱🥩 Alimentos de mascotas: Pet Food',
      makananphonix: '🕊️🥩 Comida de Fénix : Phoenix Food'  
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emottt[results[0][0]]
  }
}

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: '⚡',
      limit: '💎',
      diamond: '💎+',
      joincount: '🪙',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '🐱',
      tiketcoin: '🎫',
      stamina: '✨',
            
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱', 
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '🍖', //?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})


/*/*console.log(`╭──────────── ✦ 𓃠
┊● ${chalk.redBright('%s')}
┊● ${chalk.black(chalk.bgYellow('%s'))}
┊● ${chalk.black(chalk.bgGreen('%s'))}
┊● ${chalk.magenta('%s [%s %sB]')}
┊● ${chalk.green('%s')}
┊● ${chalk.yellow('%s%s')}
┊● ${chalk.green('%s')}
┊● ${chalk.black(chalk.bgYellow('%s'))}
╰──────────── ✦ 𓃠`.trim(),
console.log(`╭──────────── ✦ 𓃠
┊ ${chalk.redBright('%s')} ${chalk.black(chalk.bgYellow('%s'))} ${chalk.black(chalk.bgGreen('%s'))} ${chalk.magenta('%s [%s %sB]')}
┊ ${chalk.green('%s')} ${chalk.yellow('%s%s')} ${chalk.blueBright('-')} ${chalk.green('%s')} ${chalk.cyanBright(chalk.blueBright('%s'))}
╰──────────── ✦ 𓃠`.trim(),*/
