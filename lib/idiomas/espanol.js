const lenguaje = () => {
return 'es' } //Español 

//AVISOS DE MENSAJE
const smsAviso1 = () => {
return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }

const smsAviso2 = () => {
return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }

const smsAviso3 = () => {
return `╰⊱❕⊱ *INFORMACIÓN* ⊱⊱╮\n\n` }

const smsAviso4 = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }

const smsAviso5 = () => {
return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }

const smsAviso6 = () => {
return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }

const smsAviso7 = () => {
return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }

//jajajaj
const smsAdmin = (usedPrefix) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando es solo para Administradores!!\`\`\`\`` }

const smsGrupo = (plugin, _user) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando solo se puede usar en grupos!!\`\`\`` }

export default { lenguaje, smsAviso1, smsAviso2, smsAviso3, smsAviso4, smsAviso5, smsAviso6, smsAviso7, smsAdmin, smsGrupo };

