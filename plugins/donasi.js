let handler =  m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇       「 DONAR 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ ❖ Hola persona hermosa 💙*
*┃ 👉🏻 Aquí tienes algunos datos*
*┃ para que puedas apoyar <3*
*┃*
*┃ -   CLABE: 646180192175788481* 
*┃ -   BANCO: STP* 
*┃ -   BENEFICIARIO: JOSE SOBRINO* 
*┃ -   CONCEPTO: APOYO*  
*┃➤ PayPal: https://www.paypal.me/TheShadowBrokers133*
*┃❖ Contáctame si necesitas otros*
*┃datos y para darte las gracias <3*
*┃❖ wa.me/5219996125657*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar$/i
export default handler
