const lenguaje = () => {
return 'en' } //ENGLISH

//MESSAGE NOTICES
const smsAvisoRG = () => {
return `╰⊱✅⊱ *RESULT* ⊱✅⊱╮\n\n` }

const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *WARNING* ⊱⚠️⊱╮\n\n` }

const smsAvisoIIG = () => {
return `╰⊱❕⊱ *INFORMATION* ⊱⊱╮\n\n` }

const smsAvisoFG = () => {
return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }

const smsAvisoMG = () => {
return `╰⊱❗️⊱ *MISUSED ACTION* ⊱❗️⊱╮\n\n` }

const smsAvisoEEG = () => {
return `╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n` }

const smsAvisoEG = () => {
return `╰⊱💚⊱ *SUCCESS* ⊱💚⊱╮\n\n` }


const smsAdmin = () => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command is for Administrators only!!\`\`\`\``}

const smsGrupo = () => {
return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command can only be used in groups!!\`\`\``}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsAdmin, smsGrupo };
