let handler = async m => 
await m.reply(`${eg}\n\n*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`)
m.reply('🚀')
m.reply('🚀🚀')
m.reply('🚀🚀🚀')
m.reply(`${rg}\n\n*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad)$/i
export default handler
