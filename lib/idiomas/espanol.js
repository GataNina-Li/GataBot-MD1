const lenguaje = () => {
return 'es' } //Español 

//AVISOS DE MENSAJE
const smsAvisoRG = () => {
return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }

const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }

const smsAvisoIIG = () => {
return `╰⊱❕⊱ *INFORMACIÓN* ⊱⊱╮\n\n` }

const smsAvisoFG = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }

const smsAvisoMG = () => {
return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }

const smsAvisoEEG = () => {
return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }

const smsAvisoEG = () => {
return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }

//jajajaj
const smsAdmin = (usedPrefix) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando es solo para Administradores!!\`\`\`\`` }

const smsGrupo = (plugin, _user) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando solo se puede usar en grupos!!\`\`\`` }

export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsAdmin, smsGrupo };

