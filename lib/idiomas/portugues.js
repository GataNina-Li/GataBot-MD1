const lenguaje = () => {
return 'pt' } //Português


//AVISOS DE MENSAGEM
const smsAvisoRG = () => {
return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }

const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *EMBARGO* ⊱⚠️⊱╮\n\n` }

const smsAvisoIIG = () => {
return `╰⊱❕⊱ *EM FORMAÇÃO* ⊱❕⊱╮\n\n` }

const smsAvisoFG = () => {
return `╰⊱❌⊱ *ERRO* ⊱❌⊱╮\n\n` }

const smsAvisoMG = () => {
return `╰⊱❗️⊱ *AÇÃO INADEQUADA* ⊱❗️⊱╮\n\n` }

const smsAvisoEEG = () => {
return `╰⊱📩⊱ *RELATÓRIO* ⊱📩⊱╮\n\n` }

const smsAvisoEG = () => {
return `╰⊱💚⊱ *SUCESSO* ⊱💚⊱╮\n\n` }


//PARÂMETROS EM COMANDOS
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ EU COMO CRIADOR DE BOT PODE USAR!!\`\`\`\`` }

const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ MEU CRIADOR PODE USAR!!\`\`\`\`` }

const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SOMENTE MODERADORES E MEU CRIADOR PODEM USAR!!\`\`\`\`` }

const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO APENAS ESTÁ DISPONÍVEL PARA USUÁRIOS PREMIUM E MEU CRIADOR!!\`\`\`\`` }

const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ PODE SER USADO EM GRUPOS!!\`\`\`\`` }

const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ PODE SER USADO PARA O PRIVADO!!\`\`\`\`` }

const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO É SOMENTE PARA ADMINISTRADORES!!\`\`\`\`` }

const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PRECISO SER ADMIN PARA QUE VOCÊ POSSA USAR ESTE COMANDO!!\`\`\`\`` }

const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡VOCÊ PRECISA ESTAR REGISTRADO PARA USAR ESTE COMANDO, DIGITE #verify PARA REGISTRAR!!\`\`\`\`` }

const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO É RESTRITO PELO MEU CRIADOR!!\`\`\`\`` }


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict};
