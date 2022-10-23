const lenguaje = () => {
return 'en' } //ENGLISH

//MESSAGE NOTICES
const smsAviso1 = () => {
return `╰⊱✅⊱ *RESULT* ⊱✅⊱╮\n\n` }

const smsAviso2 = () => {
return `╰⊱⚠️⊱ *WARNING* ⊱⚠️⊱╮\n\n` }

const smsAviso3 = () => {
return `╰⊱❕⊱ *INFORMATION* ⊱⊱╮\n\n` }

const smsAviso4 = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }

const smsAviso5 = () => {
return `╰⊱❗️⊱ *MISUSED ACTION* ⊱❗️⊱╮\n\n` }

const smsAviso6 = () => {
return `╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n` }

const smsAviso7 = () => {
return `╰⊱💚⊱ *SUCCESS* ⊱💚⊱╮\n\n` }


const smsAdmin = (usedPrefix) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command is for Administrators only!!\`\`\`\``}

const smsGrupo = (plugin, _user) => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command can only be used in groups!!\`\`\``}


export default { lenguaje, smsAviso1, smsAviso2, smsAviso3, smsAviso4, smsAviso5, smsAviso6, smsAviso7, smsAdmin, smsGrupo };
