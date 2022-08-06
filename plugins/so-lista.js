let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^A Bueno master|Bueno master|Bueno Máster|🫂$/i.test(m.text) && chat.audios) {
let vn = './media/A bueno adios master.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (chat.audios && m.text.match(/(bienveni|🥳|🤗|👋)/gi)) {
let vn = './media/Bienvenido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Blackpink in your area|blackpink in your area|in your area|In your area)/gi)) {    
let vn = './media/Blackpink in your area.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
/*if (chat.audios && m.text.match(/(miarda de bot|mierda de bot|mearda de bot|Miarda de Bot|Mierda de Bot|Mearda de Bot)/gi)) {    
let vn = './media/insultar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(bañate|Bañate)/gi)) {    
let vn = './media/Banate.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(baneado|Baneado)/gi)) {    
let vn = './media/baneado.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
   
if (chat.audios && m.text.match(/(bebito fiu fiu|bff|Bebito Fiu Fiu|Bff)/gi)) {    
let vn = './media/bff.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
    
if (chat.audios && m.text.match(/(buenas noches|Buenas noches|Boanoite|boanoite)/gi)) {    
let vn = './media/boanoite.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(buenas tardes|Buenas tardes|boatarde|Boatarde)/gi)) {    
let vn = './media/boatarde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(buenos dias|Buenos dias|buenos días|Buenos días)/gi)) {    
let vn = './media/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(chica lgante|Chica lgante|Chicalgante|chicalgante|chical gante|Chical gante)/gi)) {    
let vn = './media/chica lgante.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(giagnosticadocongay|diagnosticado con gay|diagnosticado gay|te diagnóstico con gay|diagnóstico gay|te diagnostico con gay|te diagnóstico con gay|te diagnosticó con gay|te diagnostico con gay)/gi)) {    
let vn = './media/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(es puto|eeesss putoo|es putoo|esputoo)/gi)) {    
let vn = './media/Es putoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(feliz cumpleaños|felizcumpleaños|happy birthday)/gi)) {    
let vn = './media/Feliz cumple.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Fiesta del admin|fiesta del admin)/gi)) {    
let vn = './media/admin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(fiesta del administrador)/gi)) {    
let vn = './media/fiesta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(fiesta del admin 3|atención grupo|atencion grupo|aviso importante|fiestadeladmin3)/gi)) {    
let vn = './media/Fiesta1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {    
let vn = './media/gemi2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(audio hentai|Audio hentai|audiohentai|Audiohentai)/gi)) {    
let vn = './media/hentai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(sexo|Sexo|Hora de sexo|hora de sexo)/gi)) {    
let vn = './media/maau1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(laoracion|La biblia|La oración|La biblia|La oración|la biblia|La Biblia)/gi)) {    
let vn = './media/ora.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Marica tu|cancion1|Marica quien)/gi)) {    
let vn = './media/cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Murió el grupo|Murio el grupo|murio el grupo|murió el grupo|Grupo muerto|grupo muerto)/gi)) {    
let vn = './media/Murio.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {    
let vn = './media/navidad.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(noche de paz|Noche de paz|Noche de amor|noche de amor|Noche de Paz)/gi)) {    
let vn = './media/Noche.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Nyapasu|Nyanpasu|nyapasu|Nyapasu|Gambure|Yabure)/gi)) {    
let vn = './media/otaku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo)/gi)) {    
let vn = './media/vengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(oni-chan|onichan|o-onichan)/gi)) {    
let vn = './media/Onichan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|Pásame tus fotos desnudas|pásame tu pack|me pasas tu pak|me pasas tu pack|pasa pack)/gi)) {    
let vn = './media/Elmo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Quién es tu senpai botsito 7u7|Quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7u7|Quien es tu sempai botsito 7u7|Quién es tu senpai botsito 7w7|Quien es tu senpai botsito 7w7|quién es tu senpai botsito 7u7|quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7w7|Quien es tu sempai botsito 7w7|Quién es tu senpai botsito|Quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito|Quién es tu senpai botsito|Quien es tu senpai botsito|quién es tu senpai botsito|quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito)/gi)) {    
let vn = './media/Tu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(rawr|Rawr|RAWR|raawwr|rraawr|rawwr)/gi)) {    
let vn = './media/rawr.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {    
let vn = './media/siu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(te amo|teamo)/gi)) {    
let vn = './media/Te-amo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ooo tio|tio que rico)/gi)) {    
let vn = './media/oh_tio.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {    
let vn = './media/pato.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {    
let vn = './media/UwU.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {    
let vn = './media/vete a la verga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {    
let vn = './media/viernes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(vivan!!|vivan los novios|vivanlosnovios)/gi)) {    
let vn = './media/vivan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {    
let vn = './media/Yamete-kudasai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}*/
   
return !0 }
export default handler
