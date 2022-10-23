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
const smsRowner = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SOLO YO COMO CREADOR(A) DE BOT LO PUEDE USAR!!\`\`\`\`` }//NUMERO DE BOT

const smsOwner = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SOLO MI CREADOR(A) LO PUEDE USAR!!\`\`\`\`` }//OWNER

const smsMods = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SOLO MODERADORES Y MI CREADOR(A) LO PUEDEN USAR!!\`\`\`\`` }//MODERADORES

const smsPremium = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SOLO ESTA DISPONIBLE PARA USUARIOS PREMIUM Y MI CREADOR(A)!!\`\`\`\`` }//USUARIOS PREMIUM

const smsGroup = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SOLO SE PUEDE UTILIZAR EN GRUPOS!!\`\`\`\`` }//PARA GRUPOS

const smsPrivate = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SOLO SE PUEDE UTILIZAR AL PRIVADO!!\`\`\`\`` }//AL PRIVADO

const smsAdmin = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO SOLO ES PARA ADMINS!!\`\`\`\`` }//ADMINS

const smsBotAdmin = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡NECESITO SER ADMIN PARA QUE PUEDAS USAR ESTE COMANDO!!\`\`\`\`` }//BOT CON ADMIN

const smsUnreg = (lenguajeGB, usedPrefix) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡NECESITAS ESTAR REGISTRADO(A) PARA USAR ESTE COMANDO, ESCRIBE ${usedPrefix}verificar PARA REGISTRARTE!!\`\`\`\`` }//VERIFICAR

const smsRestrict = (lenguajeGB) => {
return `${lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESTE COMANDO ESTA RESTRINGIDO POR MI CREADORA(A)!!\`\`\`\`` }//RESTRINGIR COMANDO

export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict};

