const lenguaje = () => {
return 'en' }

const smsMensaje = () => {
	return 'English language'
}

const smsAdmin = (usedPrefix) => {
  return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command is for Administrators only!!\`\`\`\``
}
const smsGrupo = (plugin, _user) => {
  return `'╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n\`\`\`¡¡This command can only be used in groups!!\`\`\``
}


export default { lenguaje, smsMensaje, smsAdmin, smsGrupo };
