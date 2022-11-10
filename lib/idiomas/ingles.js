const lenguaje = () => { return 'en' } //ENGLISH

//MESSAGE NOTICES
const smsAvisoRG = () => { return `╰⊱✅⊱ *RESULT* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *WARNING* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *MISUSED ACTION* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *SUCCESS* ⊱💚⊱╮\n\n` }


//PARAMETERS IN COMMANDS
const smsRowner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY ME AS A BOT CREATOR CAN USE IT!!\`\`\`` }//BOT NUMBER
const smsOwner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY MY CREATOR CAN USE IT!!\`\`\`` }//OWNER
const smsMods = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY MODERATORS AND MY CREATOR CAN USE IT!!\`\`\`` }//MODERATORS
const smsPremium = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS ONLY AVAILABLE TO PREMIUM USERS AND MY CREATOR!!\`\`\`` }//PREMIUM USERS
const smsGroup = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND CAN ONLY BE USED IN GROUPS!!\`\`\`` }//FOR GROUPS
const smsPrivate = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND CAN ONLY BE USED TO THE PRIVATE!!\`\`\`` }//TO THE PRIVATE
const smsAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS ONLY FOR ADMINS!!\`\`\`` }//ADMINS
const smsBotAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡I NEED TO BE ADMIN SO YOU CAN USE THIS COMMAND!!\`\`\`` }//BOT WITH ADMIN
const smsUnreg = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡YOU NEED TO BE REGISTERED TO USE THIS COMMAND, WRITE #verify TO REGISTER!!\`\`\`` }//VERIFY
const smsRestrict = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS RESTRICTED BY MY CREATOR!!\`\`\`` }//RESTRICT COMMAND


//LIST MENU
const smsTime = () => { return `Current time`}
const smsUptime = () => { return `Running During`}
const smsVersion = () => { return `Version of ${global.packname}`}
const smsTotalUsers = () => { return `Total Users`}
const smsMode = () => { return `It's in mode`}
const smsModePublic = () => { return `PUBLIC`}
const smsModePrivate = () => { return `PRIVATE`}
const smsBanChats = () => { return `Banned Chats`}
const smsBanUsers = () => { return `Banned Users`}
const smsPareja = () => { return `Couple`}
const smsResultPareja = () => { return `Single`}
const smsSaludo = () => { return `👋 HELLO! WELCOME 👋`}
const smsDia = () => { return `🌇 Good Morning ⛅`}
const smsTarde = () => { return `🏙️ Good Evening 🌤️`}
const smsTarde2 = () => { return `🌆 Good Evening 🌥️`}
const smsNoche = () => { return `🌃 Good Night 💫`}
const smsListaMenu = () => { return `⊹ MENU LIST ⊹`}
const smsLista1 = () => { return `🌟 GATABOT INFORMATION 🌟`}
const smsLista2 = () => { return `💖 CREATOR 💖`}
const smsLista3 = () => { return `🎁 DONATE : SUPPORT 🎁`}
const smsLista4 = () => { return `🚀 SPEED 🚀`}
const smsLista5 = () => { return `💡 MENU INFORMATION 💡`}
const smsLista6 = () => { return `🌀 FULL MENU 🌀`}
const smsLista7 = () => { return `🐈 INSTALL GATABOT 🐈`}
const smsLista8 = () => { return `🍄 BE SUB BOT 🍄`}
const smsLista9 = () => { return `📄 TERMS, CONDITIONS AND PRIVACY 📄\n`}
const smsLista10 = () => { return `🌟 ADVENTURE AND TOP 🌟`}
const smsLista11 = () => { return `🏆 WORLD TOP 🏆`}
const smsLista12 = () => { return `🏅 PREMIUM USERS 🏅`}
const smsLista13 = () => { return `🎟️ BE A PREMIUM USER 🎟️`}
const smsLista14 = () => { return `🛣️ MISSIONS 🛣️`}
const smsLista15 = () => { return `⚗️ RPG MENU ⚗️`}
const smsLista16 = () => { return `🏪 SHOP PURCHASE 🏪`}
const smsLista17 = () => { return `🎒 INVENTORY 🎒\n`}
const smsLista18 = () => { return `🌟 MULTIMEDIA 🌟`}
const smsLista19 = () => { return `📲 DOWNLOAD MENU 📲`}
const smsLista20 = () => { return `🔍 SEARCH MENU 🔍`}
const smsLista21 = () => { return `🛰️ CONVERTER MENU 🛰️`}
const smsLista22 = () => { return `🧰 AUDIO MODIFIER MENU 🧰\n`}
const smsLista23 = () => { return `🌟 FUN 🌟`}
const smsLista24 = () => { return `🎡 DYNAMIC GAMES 🎡`}
const smsLista25 = () => { return `🔊 AUDIO MENU 🔊`}
const smsLista26 = () => { return `🎈 STICKERS AND FILTERS MENU 🎈`}
const smsLista27 = () => { return `✨ EFFECTS AND LOGOS MENU ✨`}
const smsLista28 = () => { return `🌅 LOGOS MENU 2 🌅`}
const smsLista29 = () => { return `⛩️ RANDOM MEMES AND ANIME ⛩️`}
const smsLista30 = () => { return `🔞 COMMANDS FOR ADULTS +18 🔞\n`}
const smsLista31 = () => { return `🌟 SETTINGS 🌟`}
const smsLista32 = () => { return `🔰 MENU FOR GROUPS 🔰`}
const smsLista33 = () => { return `📑 TYPES OF LISTS 📑`}
const smsLista34 = () => { return `⚙️ CONFIGURATION CENTER ⚙️`}
const smsLista35 = () => { return `💎 OWNER MENU 💎`}

//main.js
const smsWelcome = () => { return '*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ WELCOME!!*\n┊💖 @user\n┊📄 *READ THE GROUP DESCRIPTION*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n\n@desc'}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *HE LEFT THE GROUP, COME BACK SOON* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user YOU ARE NOW ADMIN IN THIS GROUP!!*'}
const smsSdemote = () => { return '*@user NO LONGER ADMIN IN THIS GROUP!!*'}
const smsSdesc = () => { return '*THE NEW DESCRIPTION OF THE GROUP IS:*\n\n@desc'}
const smsSsubject = () => { return '*THE NEW NAME OF THE GROUP IS:*\n\n@subject'}
const smsSicon = () => { return '*THE PHOTO OF THIS GROUP WAS CHANGED!!*'}
const smsSrevoke = () => { return '*NOW THIS IS THE NEW LINK OF THIS GROUP!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONNECTION ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ SUCCESSFUL CONNECTION WITH WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ AUTO CLEAN TMP ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ FILES IN THE TMP FOLDER WERE SUCCESSFULLY DELETED 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 LOADING...\n`}

//_allantilink.js
const smsTextoYT = () => { return '😻 Super GataBot-MD - WhatsApp '}
const smsApagar = () => { return '❌ DEACTIVATE'}
const smsEncender = () => { return '✅ ACTIVATE'}
const smsEnlaceTik = () => { return `*A BANNED TIKTOK LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceYt = () => { return `*A BANNED YOUTUBE LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceTel = () => { return `*A BANNED TELEGRAM LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceFb = () => { return `*A BANNED FACEBOOK LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceIg = () => { return `*A BANNED INSTAGRAM LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsEnlaceTw = () => { return `*A BANNED TWITTER LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}
const smsAllAdmin = () => { return `*I NEED TO BE ADMIN TO BE ABLE TO REMOVE INTRUDERS*`}
const smsSoloOwner = () => { return `*MY CREATOR MUST ACTIVATE THE FUNCTION*\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 COMMAND FAILING 🔴*`}
const smsCont2 = () => { return `*⚠️ PLUGIN:*`}
const smsCont3 = () => { return `*⚠️ USER:*`}
const smsCont4 = () => { return `*⚠️ COMMAND:*`}
const smsCont5 = () => { return `*⚠️ ERROR:*`}
const smsCont6 = () => { return `*❗ REPORT THIS MESSAGE USING THE COMMAND #reporte IN ORDER TO SOLVE IT*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*DOESN'T HAVE DIAMONDS!! 💎 YOU CAN GO TO THE STORE WITH THE COMMAND*`}
const smsCont8 = () => { return ` *DIAMOND 💎 USED*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NEED THE LEVEL ➡️*`}
const smsCont10 = () => { return `*TO USE THIS COMMAND. YOUR CURRENT LEVEL IS ➡️*`}
const smsCont11 = () => { return `*UPDATE WITH COMMAND*`}
const smsCont12 = () => { return `A GREAT GROUP!! 😼`}
const smsCont13 = () => { return `SOMEONE JOINED!! 🥳`}
const smsCont14 = () => { return `SOMEONE LEFT!! 🧐`}
const smsCont15 = () => { return `*HELLO*`}
const smsCont16 = () => { return `*THE VIDEO CALLS* 📲`}
const smsCont17 = () => { return `*THE CALLS* 📞`}
const smsCont18 = () => { return `*THEY ARE NOT AUTHORIZED SO I AM GOING TO BLOCK YOU*\n\n*IF YOU CALLED BY ACCIDENT CONTACT THE PERSON CREATOR OF THIS BOT*`}
const smsCont19 = () => { return `ANTI DELETE`}
const smsCont20 = () => { return `*┃✤ Name:*`}
const smsCont21 = () => { return `*┃✤ Sending the deleted message...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*THIS NUMBER*`}
const smsInt2 = () => { return `*NOT ALLOWED IN THIS GROUP!!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*AS YOU ARE ADMIN IN THIS GROUP YOU WILL NOT BE REMOVED*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*A BANNED WHATSAPP LINK WAS DETECTED IN THIS GROUP*\n\n*I PROCEED TO DELETE YOU*`}


//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}A FORBIDDEN LINK CONTAINING HTTPS WAS DETECTED IN THIS GROUP\n\nI PROCEED TO DELETE YOU`}

//_antispam.js
const smsNoSpam = () => { return `🤨 DO NOT SPAM, YOU WILL NOT BE ABLE TO USE ${global.packname} FOR ${60000 / 1000 - 59} MINUTE`}

//_antispam_.js
const smsNoSpam2 = () => { return `WAS UNBANNED AFTER ${60000 / 1000 - 59} MINUTE. PLEASE DO NOT SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ MENU`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`AN UNEXPECTED ERROR HAS OCCURRED.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`AN INCONVENIENCE HAS ARISEN. TRY AGAIN.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SOMETHING WENT WRONG, REPORT THIS COMMAND USING:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `NOO!!! 🤬 SAY THIS WORD`}
const smsToxic2 = () => { return `IT IS FORBIDDEN DO NOT BE TOXIC`}
const smsToxic3 = () => { return `*WARNING*\n⚠️`}
const smsToxic4 = () => { return `😭 I'M SORRY`}
const smsToxic5 = () => { return `☢️ DISABLE ANTITOXIC`}
const smsToxic6 = () => { return `I WARNED YOU SEVERAL TIMES!!`}
const smsToxic7 = () => { return `YOU PASSED ALL 4 WARNINGS NOW YOU WILL BE ELIMINATED 🙄`}

//Tienda
const eExp = () => { return '⚡ Experience' } 
const eDiamante = () => { return '💎 Diamond' } 
const eDiamantePlus = () => { return '💎+ Diamond+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Emerald' } 
const eJoya = () => { return '♦️ Jewel' }
const eMagia = () => { return '🌀 Magic' } 
const eOro = () => { return '👑 Gold' } 
const eGataCoins = () => { return '🐱 GataCoins' }
const eGataTickers = () => { return '🎫 Gata Tickers' } 
const eEnergia = () => { return '✨ Energy' }

const ePocion = () => { return '🥤 Potion' }
const eAgua = () => { return '💧 Water' }
const eBasura = () => { return '🗑 Trash' }
const eMadera = () => { return '🪵 Wood' }
const eRoca = () => { return '🪨 Rock' }
const ePiedra = () => { return '🥌 Stone' }
const eCuerda = () => { return '🕸️ String' }
const eHierro = () => { return '⛓️ Iron' }
const eCarbon = () => { return '⚱️ Coal' }
const eBotella = () => { return '🍶 Bottle' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Paperboard' } 

const eEletric = () => { return '💡 Electricity' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Common Gold' }
const eZorroG = () => { return '🦊🌫️ Big Fox' }
const eBasuraG = () => { return '🗑🌫️ Super Trash' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Wood' }
const eEspada = () => { return '⚔️ Sword' }
const eCarnada = () => { return '🪱 Bait' }
const eBillete = () => { return '💵 Banknotes' }
const ePinata = () => { return '🪅 Pinata' }
const eGancho = () => { return '🪝 Hook' }
const eCanaPescar = () => { return '🎣 Fishing Rod' } 

const eCComun = () => { return '📦 Common Box' }
const ePComun = () => { return '🥡 Uncommon Box' }
const eCMistica = () => { return '🗳️ Mythic Box' }
const eCMascota = () => { return '📫 Pet Box' }
const eCJardineria = () => { return '💐 Gardening Box' }
const eClegendaria = () => { return '🎁 Legendary Box' } 

const eUva = () => { return '🍇 Grape' }
const eManzana = () => { return '🍎 Apple' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 

const eSUva = () => { return '🌾🍇 Grape seeds' }
const eSManzana = () => { return '🌾🍎 Apple seeds' }
const eSNaranja = () => { return '🌾🍊 Orange seeds' }
const eSMango = () => { return '🌾🥭 Mango Seeds' }
const eSPlatano = () => { return '🌾🍌 Banana seeds' } 

const eCentauro = () => { return '🐐 Centaur' }
const eAve = () => { return '🦅 Bird' }
const eGato = () => { return '🐈 Cat' }
const eDragon = () => { return '🐉 Dragon' }
const eZorro = () => { return '🦊 Fox' }
const eCaballo = () => { return '🐎 Horse' }
const eFenix = () => { return '🕊️ Phoenix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Dog' } 

const eAMascots = () => { return '🍖 Pet Food' }
const eCCentauro = () => { return '🐐🥩 Centaur Food' }
const eCAve = () => { return '🦅🥩 Bird Food' }
const eCMagica = () => { return '🌀🥩 Magic Food' }
const eCDragon = () => { return '🐉🥩 Dragon Food' }
const eACaballo = () => { return '🐎🥩 Horse Food' }
const eCFenix = () => { return '🕊️🥩 Phoenix Food' } 


//config-on y off.js
const smsWel1 = () => { return `🎉 WELCOME`}
const smsWel2 = () => { return `Welcome Message for new Members in Groups`}
const smsDete1 = () => { return `🔔 DETECT`}
const smsDete2 = () => { return `Notices of actions within the Group`}
const smsANivel1 = () => { return `🆙 AUTO LEVEL`}
const smsANivel2 = () => { return `Level up everyone automatically; (Applies rewards for leveling up)`}
const smsRestri1 = () => { return `⛔ TO RESTRICT`}
const smsRestri2 = () => { return `Enable function to add or remove people in Groups`}
const smsLlamar1 = () => { return `🚫 ANTI CALLS`}
const smsLlamar2 = () => { return `Block people who make calls`}
const smsModP1 = () => { return `🌐 PUBLIC MODE`}
const smsModP2 = () => { return `Enable function so everyone can use GataBot`}
const smsModAd1 = () => { return `🛂 ADMIN MODE`}
const smsModAd2 = () => { return `Only Admins will be able to use GataBot in Groups`}
const smsLect1 = () => { return `✅ AUTOMATIC READING`}
const smsLect2 = () => { return `Leave messages or chats as Read`}
const smsTempo1 = () => { return `🐈 TEMPORARY BOT`}
const smsTempo2 = () => { return `Function that allows temporary stay in Groups`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Enable automatic sending of Stickers to everyone`}
const smsStickA1 = () => { return `🪄 AUTOMATIC STICKERS`}
const smsStickA2 = () => { return `Videos, Gifs, images, jpg or jpeg links; They will be converted into Stickers Automatically`}
const smsReacc1 = () => { return `🤡 REACTION `}
const smsReacc2 = () => { return `Enable automatic sending of Reactions to messages`}
const smsAudi1 = () => { return `🔊 AUDIOS`}
const smsAudi2 = () => { return `Enable automatic sending of Audios to everyone`}
const smsModHor1 = () => { return `🔞 HORNY MODE`}
const smsModHor2 = () => { return `Show Adult content in Chats`}
const smsAntitoc1 = () => { return `☢️ ANTI TOXIC`}
const smsAntitoc2 = () => { return `Send Warnings those people who insult`}
const smsModOb1 = () => { return `👀 OBSERVE MODE`}
const smsModOb2 = () => { return `Make Images, Gifs, and Videos Viewable for Everyone`}
const smsAntiEli1 = () => { return `🗑️ ANTI DELETE`}
const smsAntiEli2 = () => { return `All deleted messages will be forwarded to the Chat or Group`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNATIONAL`}
const smsAntiInt2 = () => { return `Eliminate International Numbers considered fake`}
const smsAntiE1 = () => { return `🔗 ANTI LINKS`}
const smsAntiE2 = () => { return `Delete People who send links from WhatsApp Groups`}
const smsAntiEE1 = () => { return `🔗 ANTI LINKS 2`}
const smsAntiEE2 = () => { return `Remove People who send links containing https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIK TOK`}
const smsAntiTT2 = () => { return `Remove People Sending Links from TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Remove People Sending Links from YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Remove People who send links from Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Remove People Sending Facebook Links`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Remove People Sending Instagram Links`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Remove People Sending Twitter Links`}
const smsSOLOP1 = () => { return `⚜️ ONLY PRIVATE`}
const smsSOLOP2 = () => { return `Allow it to be used only in Private Chats`}
const smsSOLOG1 = () => { return `⚜️ ONLY GROUPS`}
const smsSOLOG2 = () => { return `Allow it to only be used in Group Chats`}
const smsConfi1 = () => { return `SETTINGS`}
const smsConfi2 = () => { return `*¡Hello!*`}
const smsConfi3 = () => { return `┃ *Select an option from the list*`}
const smsConfi4 = () => { return `┃ *To start to configure*`}
const smsConfi5 = () => { return `┃● *Configuration Notices:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Function Activated*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *function Disabled*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *This Chat is not a Group*`}
const smsConfi9 = () => { return `┃ *Recommendation: To see the configuration*\n┃ *Complete use this Group Menu*\n┃`}
const smsConfi10 = () => { return `*~ CONFIGURATION CENTER*`}
const smsParaAdmins = () => { return `FOR ADMINS AND CREATOR : GROUPS`}
const smsParaAdYOw = () => { return `FOR ADMINS AND CREATOR : CHATS`}
const smsParaOw = () => { return `FOR CREATOR : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMMAND`} 
const smsMens2 = () => { return `CURRENTLY`} 
const smsMens3 = () => { return `IN THIS`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ REPORT COMMAND ❕`} 
const smsMensError2 = () => { return `The following command is failing`} 


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3,
smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4,
smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2};
