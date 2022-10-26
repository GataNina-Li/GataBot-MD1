const lenguaje = () => {
return 'en' } //ENGLISH


//MESSAGE NOTICES
const smsAvisoRG = () => {
return `╰⊱✅⊱ *RESULT* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *WARNING* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => {
return `╰⊱❕⊱ *INFORMATION* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => {
return `╰⊱❗️⊱ *MISUSED ACTION* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => {
return `╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => {
return `╰⊱💚⊱ *SUCCESS* ⊱💚⊱╮\n\n` }


//PARAMETERS IN COMMANDS
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY ME AS A BOT CREATOR CAN USE IT!!\`\`\`\`` }//BOT NUMBER
const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY MY CREATOR CAN USE IT!!\`\`\`\`` }//OWNER
const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND ONLY MODERATORS AND MY CREATOR CAN USE IT!!\`\`\`\`` }//MODERATORS
const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS ONLY AVAILABLE TO PREMIUM USERS AND MY CREATOR!!\`\`\`\`` }//PREMIUM USERS
const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND CAN ONLY BE USED IN GROUPS!!\`\`\`\`` }//FOR GROUPS
const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND CAN ONLY BE USED TO THE PRIVATE!!\`\`\`\`` }//TO THE PRIVATE
const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS ONLY FOR ADMINS!!\`\`\`\`` }//ADMINS
const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡I NEED TO BE ADMIN SO YOU CAN USE THIS COMMAND!!\`\`\`\`` }//BOT WITH ADMIN
const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡YOU NEED TO BE REGISTERED TO USE THIS COMMAND, WRITE #verify TO REGISTER!!\`\`\`\`` }//VERIFY
const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡THIS COMMAND IS RESTRICTED BY MY CREATOR!!\`\`\`\`` }//RESTRICT COMMAND


//LIST MENU
const smsTime = () => {
return `Current time`}
const smsUptime = () => {
return `Running During`}
const smsVersion = () => {
return `Version of ${global.packname}`}
const smsTotalUsers = () => {
return `Total Users`}
const smsMode = () => {
return `It's in mode`}
const smsModePublic = () => {
return `PUBLIC`}
const smsModePrivate = () => {
return `PRIVATE`}
const smsBanChats = () => {
return `Banned Chats`}
const smsBanUsers = () => {
return `Banned Users`}
const smsPareja = () => {
return `Couple`}
const smsResultPareja = () => {
return `Single`}
const smsSaludo = () => {
return `👋 HELLO! WELCOME 👋`}
const smsDia = () => {
return `🌇 Good Morning ⛅`}
const smsTarde = () => {
return `🏙️ Good Evening 🌤️`}
const smsTarde2 = () => {
return `🌆 Good Evening 🌥️`}
const smsNoche = () => {
return `🌃 Good Night 💫`}
const smsListaMenu = () => {
return `🟢 MENU LIST 🟢`}
const smsLista1 = () => {
return `🌟 GATABOT INFORMATION 🌟`}
const smsLista2 = () => {
return `💖 CREATOR 💖`}
const smsLista3 = () => {
return `🎁 DONATE : SUPPORT 🎁`}
const smsLista4 = () => {
return `🚀 SPEED 🚀`}
const smsLista5 = () => {
return `💡 MENU INFORMATION 💡`}
const smsLista6 = () => {
return `🌀 FULL MENU 🌀`}
const smsLista7 = () => {
return `🐈 INSTALL GATABOT 🐈`}
const smsLista8 = () => {
return `🍄 BE SUB BOT 🍄`}
const smsLista9 = () => {
return `📄 TERMS, CONDITIONS AND PRIVACY 📄\n`}
const smsLista10 = () => {
return `🌟 ADVENTURE AND TOP 🌟`}
const smsLista11 = () => {
return `🏆 WORLD TOP 🏆`}
const smsLista12 = () => {
return `🏅 PREMIUM USERS 🏅`}
const smsLista13 = () => {
return `🎟️ BE A PREMIUM USER 🎟️`}
const smsLista14 = () => {
return `🛣️ MISSIONS 🛣️`}
const smsLista15 = () => {
return `⚗️ RPG MENU ⚗️`}
const smsLista16 = () => {
return `🏪 SHOP PURCHASE 🏪`}
const smsLista17 = () => {
return `🎒 INVENTORY 🎒\n`}
const smsLista18 = () => {
return `🌟 MULTIMEDIA 🌟`}
const smsLista19 = () => {
return `📲 DOWNLOAD MENU 📲`}
const smsLista20 = () => {
return `🔍 SEARCH MENU 🔍`}
const smsLista21 = () => {
return `🛰️ CONVERTER MENU 🛰️`}
const smsLista22 = () => {
return `🧰 AUDIO MODIFIER MENU 🧰\n`}
const smsLista23 = () => {
return `🌟 FUN 🌟`}
const smsLista24 = () => {
return `🎡 DYNAMIC GAMES 🎡`}
const smsLista25 = () => {
return `🔊 AUDIO MENU 🔊`}
const smsLista26 = () => {
return `🎈 STICKERS AND FILTERS MENU 🎈`}
const smsLista27 = () => {
return `✨ EFFECTS AND LOGOS MENU ✨`}
const smsLista28 = () => {
return `🌅 LOGOS MENU 2 🌅`}
const smsLista29 = () => {
return `⛩️ RANDOM MEMES AND ANIME ⛩️`}
const smsLista30 = () => {
return `🔞 COMMANDS FOR ADULTS +18 🔞\n`}
const smsLista31 = () => {
return `🌟 SETTINGS 🌟`}
const smsLista32 = () => {
return `🔰 MENU FOR GROUPS 🔰`}
const smsLista33 = () => {
return `📑 TYPES OF LISTS 📑`}
const smsLista34 = () => {
return `⚙️ CONFIGURATION CENTER ⚙️`}
const smsLista35 = () => {
return `💎 OWNER MENU 💎`}

//main.js
const smsWelcome = () => {
return '*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ WELCOME!!*\n┊💖 @user\n┊📄 *READ THE GROUP DESCRIPTION*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n\n@desc'}
const smsBye = () => {
return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *HE LEFT THE GROUP, COME BACK SOON* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => {
return '*@user YOU ARE NOW ADMIN IN THIS GROUP!!*'}
const smsSdemote = () => {
return '*@user NO LONGER ADMIN IN THIS GROUP!!*'}
const smsSdesc = () => {
return '*THE NEW DESCRIPTION OF THE GROUP IS:*\n\n@desc'}
const smsSsubject = () => {
return '*THE NEW NAME OF THE GROUP IS:*\n\n@subject'}
const smsSicon = () => {
return '*THE PHOTO OF THIS GROUP WAS CHANGED!!*'}
const smsSrevoke = () => {
return '*NOW THIS IS THE NEW LINK OF THIS GROUP!!*\n\n*@revoke*'}
const smsConexion = () => {
return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONNECTION ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ SUCCESSFUL CONNECTION WITH WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => {
return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ AUTO CLEAN TMP ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ FILES IN THE TMP FOLDER WERE SUCCESSFULLY DELETED 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => {
return `😸 LOADING...\n`}

//index.js
const smsIni = () => {
return 'STARTING... 🚀🚀🚀'}
const smsCod = () => {
return '✅ YOU CAN NOW SCAN THE QR CODE!!'}
const smsIndexError = () => {
return '⚠️ UNEXPECTED ERROR'}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10,
smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, 
smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject,
smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsIni, smsCod, smsIndexError};
