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
return `Partner`}
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


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche};
