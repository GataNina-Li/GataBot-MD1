//let media = './media/menus/telefutaclub.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
🎃 Concurso de Halloween [FUTANARI] 🎃

¿De que va esto?: Bien pues esto va para el grupo necesitamos que los integrantes del grupo FutabuClub aporten imagenes Futanari de Halloween que tenga las misma dimensiónes para la foto del grupo.

¿Cual es el tamaño de la imagen?: El tamaño es de 640 x 640

¿Como cambio el tamaño o mediciones de la imagen?: Con la página "https://www.iloveimg.com/resize-image"

¿Cual es el premió?: El premio es 50.000 de experiencia y 10.000 Diamantes con el Bot

¿Se pueden hacer edits?: Claro que si, Mientras sea futanari de halloween es bienvenido!

¿Cuantas imágenes se podra pasar?: Para no hacer tanto spam solo se podra pasar 1 imagen por dia (OBVIAMENTE TIENE QUE SER FUTANARI DE HALLOWEEN)

¿Que pasara si nadie aporta?: Si nadie llega a aportar duplicare el premio x2, el cual seria 150.000 de experiencia y 25.000 de diamantes.

¿Cuando termina?: El evento termina el 5 de octubre

¿Como se ganará?: Se ganará por la foto que tenga mas reacciones

¿Donde se hará el evento?: En el grupo FutabuClub!
`.trim()
  
conn.sendHydrated(m.chat, str, null, null, null, null, null, [
], m,)}

handler.command = /^concurso|concursofutabuclub$/i
handler.exp = 35
export default handler
