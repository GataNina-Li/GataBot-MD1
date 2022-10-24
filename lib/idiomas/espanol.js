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
const smsMenu = () => {
return `╭───────────────────❀\n│${ucapan()}\n│💝¸.• *${name}* •.¸💝\n╰───────────────────❀
╭━━〔 *${wm}* 〕━━⬣
┃✪ *Tiempo Actual*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión de GataBot-MD 𓃠*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s)*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chat(s) Prohibido(s)*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) Prohibido(s)*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━⬣`}

export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsMenu};

