const lenguaje = () => {
return 'es' } //Español 


//AVISOS DE MENSAJE
const smsAvisoRG = () => {
return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => {
return `╰⊱❕⊱ *INFORMACIÓN* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => {
return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => {
return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => {
return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }


//PARÁMETROS EN COMANDOS
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO YO COMO CREADOR(A) DE BOT LO PUEDE USAR!!\`\`\`\`` }//NUMERO DE BOT
const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO MI CREADOR(A) LO PUEDE USAR!!\`\`\`\`` }//OWNER
const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO MODERADORES Y MI CREADOR(A) LO PUEDEN USAR!!\`\`\`\`` }//MODERADORES
const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO ESTA DISPONIBLE PARA USUARIOS PREMIUM Y MI CREADOR(A)!!\`\`\`\`` }//USUARIOS PREMIUM
const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR EN GRUPOS!!\`\`\`\`` }//PARA GRUPOS
const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR AL PRIVADO!!\`\`\`\`` }//AL PRIVADO
const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SÓLO ES PARA ADMINS!!\`\`\`\`` }//ADMINS
const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡NECESITO SER ADMIN PARA QUE PUEDAS USAR ESTE COMANDO!!\`\`\`\`` }//BOT CON ADMIN
const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡NECESITAS ESTAR REGISTRADO(A) PARA USAR ESTE COMANDO, ESCRIBE #verificar PARA REGISTRARTE!!\`\`\`\`` }//VERIFICAR
const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO ESTÁ RESTRINGIDO POR MI CREADORA(A)!!\`\`\`\`` }//RESTRINGIR COMANDO

//MENU LISTA
const smsTime = () => {
return `Tiempo Actual`}
const smsUptime = () => {
return `Funcionando Durante`}
const smsVersion = () => {
return `Versión de ${global.packname}`}
const smsTotalUsers = () => {
return `Total de Usuarios`}
const smsMode = () => {
return `Está en Modo`}
const smsModePublic = () => {
return `PÚBLICO`}
const smsModePrivate = () => {
return `PRIVADO`}
const smsBanChats = () => {
return `Chat(s) Prohibido(s)`}
const smsBanUsers = () => {
return `Usuario(s) Prohibido(s)`}
const smsPareja = () => {
return `Pareja`}
const smsResultPareja = () => {
return `No tiene Pareja`}
const smsSaludo = () => {
return `👋 !HOLA! BIENVENIDO(A) 👋`}
const smsDia = () => {
return `🌇 Buenos Días ⛅`}
const smsTarde = () => {
return `🏙️ Buenas Tardes 🌤️`}
const smsTarde2 = () => {
return `🌆 Buenas tardes 🌥️`}
const smsNoche = () => {
return `🌃 Buenas noches 💫`}
const smsListaMenu = () => {
return `🟢 LISTA DE MENU 🟢`}
const smsLista1 = () => {
return `🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 🌟`}
const smsLista2 = () => {
return `💖 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼 💖`}
const smsLista3 = () => {
return `🎁 𝘿𝙊𝙉𝘼𝙍 🎁`}
const smsLista4 = () => {
return `🚀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿 🚀`}
const smsLista5 = () => {
return `💡 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙈𝙀𝙉𝙐 💡`}
const smsLista6 = () => {
return `🌀 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 🌀`}
const smsLista7 = () => {
return `🐈 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙂𝘼𝙏𝘼 𝘽𝙊𝙏 🐈`}
const smsLista8 = () => {
return `🍄 𝙎𝙀𝙍 𝙎𝙐𝘽 𝘽𝙊𝙏 🍄`}
const smsLista9 = () => {
return `📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄\n`}
const smsLista10 = () => {
return `🌟 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼 𝙔 𝙏𝙊𝙋 🌟`}
const smsLista11 = () => {
return `🏆 𝙏𝙊𝙋 𝙈𝙐𝙉𝘿𝙄𝘼𝙇 🏆`}
const smsLista12 = () => {
return `🏅 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🏅`}
const smsLista13 = () => {
return `🎟️ 𝙎𝙀𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`}
const smsLista14 = () => {
return `🛣️ 𝙈𝙄𝙎𝙄𝙊𝙉𝙀𝙎 🛣️`}
const smsLista15 = () => {
return `⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️`}
const smsLista16 = () => {
return `🏪 𝙏𝙄𝙀𝙉𝘿𝘼 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 🏪`}
const smsLista17 = () => {
return `🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 🎒\n`}
const smsLista18 = () => {
return `🌟 𝙈𝙐𝙇𝙏𝙄𝙈𝙀𝘿𝙄𝘼 🌟`}
const smsLista19 = () => {
return `📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 📲`}
const smsLista20 = () => {
return `🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 🔍`}
const smsLista21 = () => {
return `🛰️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 🛰️`}
const smsLista22 = () => {
return `🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰\n`}
const smsLista23 = () => {
return `🌟 𝘿𝙄𝙑𝙀𝙍𝙎𝙄𝙊𝙉 🌟`}
const smsLista24 = () => {
return `🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 🎡`}
const smsLista25 = () => {
return `🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 🔊`}
const smsLista26 = () => {
return `🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈`}
const smsLista27 = () => {
return `✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨`}
const smsLista28 = () => {
return `🌅 𝙈𝙀𝙉𝙐 𝙇𝙊𝙂𝙊 2 🌅`}
const smsLista29 = () => {
return `⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 : 𝘼𝙉𝙄𝙈𝙀 ⛩️`}
const smsLista30 = () => {
return `🔞 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18 🔞\n`}
const smsLista31 = () => {
return `🌟 𝘼𝙅𝙐𝙎𝙏𝙀𝙎 🌟`}
const smsLista32 = () => {
return `🔰 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔰`}
const smsLista33 = () => {
return `📑 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 📑`}
const smsLista34 = () => {
return `⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️`}
const smsLista35 = () => {
return `💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 💎`}

//main.js
const smsWelcome = () => {
return '*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENIDO(A)!!*\n┊💖 @user\n┊📄 *LEA LA DESCRIPCIÓN DEL GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n\n@desc'}
const smsBye = () => {
return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *NO LE SABE AL GRUPO, CHAO!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => {
return '*@user 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!*'}
const smsSdemote = () => {
return '*@user 𝘿𝙀𝙅𝘼 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!*'}
const smsSdesc = () => {
return '*𝙇𝘼 𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:*\n\n@desc'}
const smsSsubject = () => {
return '*𝙀𝙇 𝙉𝙐𝙀𝙑𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:*\n\n@subject'}
const smsSicon = () => {
return '*𝙎𝙀 𝙃𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊!!*'}
const smsSrevoke = () => {
return '*𝘼𝙃𝙊𝙍𝘼 𝙀𝙎𝙏𝙀 𝙀𝙎 𝙀𝙇 𝙉𝙐𝙀𝙑𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊!!*\n\n*@revoke*'}
const smsConexion = () => {
return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 𝘾𝙊𝙉𝙀𝙓𝙄𝙊𝙉 ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ 𝘾𝙊𝙉𝙀𝙓𝙄𝙊𝙉 𝙀𝙓𝙄𝙏𝙊𝙎𝘼 𝘾𝙊𝙉 𝙀𝙇 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => {
return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 𝘼𝙐𝙏𝙊𝘾𝙇𝙀𝘼𝙍𝙏𝙈𝙋 ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ 𝙇𝙊𝙎 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 𝙏𝙈𝙋 𝙃𝘼𝙉 𝙎𝙄𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊𝙎 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => {
return `😸 𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊...\n`}

//index.js
const smsIni = () => {
return 'INICIANDO... 🚀🚀🚀'}
const smsCod = () => {
return '✅ YA PUEDE ESCANEAR EL CÓDIGO QR!!'}
const smsIndexError = () => {
return '⚠️ ERROR INESPERADO'}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10,
smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, 
smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject,
smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsIni, smsCod, smsIndexError};
