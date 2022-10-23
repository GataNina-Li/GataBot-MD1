const lenguaje = () => {
return 'es' }

const smsMensaje = () => {
	return 'Lenguaje Español'
}

const smsAdmin = (usedPrefix) => {
  return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando es solo para Administradores!!\`\`\`\``
}
const smsGrupo = (plugin, _user) => {
  return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡Este comando solo se puede usar en grupos!!\`\`\``
}


export default { lenguaje, smsMensaje, smsAdmin, smsGrupo };

