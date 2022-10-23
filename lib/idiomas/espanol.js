const lenguaje = () => {
return 'es' } //Español 

//AVISOS DE MENSAJE
const smsAviso1 = () => {
return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }
global.rg = global.lenguajeGB['smsAviso1']()

const smsAviso2 = () => {
return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }
global.ag = lenguajeGB['smsAviso2']()

const smsAviso3 = () => {
return `╰⊱❕⊱ *INFORMACIÓN* ⊱⊱╮\n\n` }
global.iig = lenguajeGB['smsAviso3']()

const smsAviso4 = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
global.fg = lenguajeGB['smsAviso4']()

const smsAviso5 = () => {
return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }
global.mg = lenguajeGB['smsAviso5']()

const smsAviso6 = () => {
return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }
global.eeg = lenguajeGB['smsAviso6']()

const smsAviso7 = () => {
return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }
global.eg = lenguajeGB['smsAviso7']()

//jajajaj
const smsAdmin = (usedPrefix) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando es solo para Administradores!!\`\`\`\`` }

const smsGrupo = (plugin, _user) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando solo se puede usar en grupos!!\`\`\`` }

export default { lenguaje, smsAviso1, smsAviso2, smsAviso3, smsAviso4, smsAviso5, smsAviso6, smsAviso7, smsAdmin, smsGrupo };

