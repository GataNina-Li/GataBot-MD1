//let media = './media/menus/telefutaclub.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
🎄| *25 DE DICIEMBRE* _{TEMATICA FUTANARI NAVIDEÑA}_

⌛| *¿A que hora sera el evento?*
_El evento sera a la hora que sea ya 25 de Diciembre a esa hora._

❔| *¿De que va el evento?*
_El evento es sobre navidad para festejarlo haremos un eventos de una sola tematica *FUTANARI NAVIDEÑA*, en el dia 25 de Diciembre tendras que mandar solo *FUTANARI NAVIDEÑA* cualquier otro tipo de Futanari que no sea navideña sera eliminado su aporte, solo tiene que ser la futanari relacionado a la navidad._

🕛| *¿A que hora termina?*
_El evento terminara cuando termine el dia 25 de Diciembre!._

🏆| *¿Hay algun premio?*
_La verdad no, no pensamos dar un premio por esto, esto es solo un festejo por las festividades navideñas y decidi hacer este evento para festejarlo con el grupo._
`.trim()
  
conn.sendHydrated(m.chat, str, null, null, null, null, null, [
], m,)}

handler.command = /^evento|eventos|eventofutabuclub$/i
handler.exp = 35
export default handler
