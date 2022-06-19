import fs from 'fs'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
  await m.reply(`╰⊱🔰⊱ *INSTALACIÓN* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let text = `
*PASO PARA LA INSTALACIÓN*
*The LoliBot-MD ya esta lista para la instalación*

*si necesitas ayuda entra al grupo del bot*

📌 *https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*

*o escribime al wa.me/56977774748*
*solo por tema del bot*

📌 *paso para instalar el bot el termux*
🔸 *necesita 2 celu solo para escanear el QR*
🔸 *instalar termux de Google*

*paso numero 1*

🔸 termux-setup-storage
   *(le dar el permite)*

🔸  apt update 

🔸  pkg upgrade 

🔸 pkg install git -y

🔸 pkg install nodejs -y

🔸 pkg install ffmpeg -y

🔸 pkg install imagemagick -y

🔸 pkg install yarn

🔸 git clone https://github.com/Subbotsito/The-LoliBot-MD

🔸  cd The-LoliBot-MD

🔸 npm install

🔸 yarn install 

🔸 npm install

🔸 npm update

🔸 ls

🔸 npm start 
*(y aca que van manda el QR tener la  opción saca una captura y mandala* *a tu otro celu y escanea)*

*cualquier cosa hablame solo por tema del bot🔰🤖*
*saludos🔰🤖*`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'The Lolibot-𝙈𝘿',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})  
  
  let info = `✨ *Infórmate sobre las Novedades y recuerda tener la última versión..*
  `.trim()
  
  await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [

['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '/cuentasgb'],
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)
  
  //await conn.sendButton(m.chat, `Infórmate sobre las Novedades y recuerda tener la última versión.\nFind out about what's new and remember to have the latest version.`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', /${command}], ['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 2 🔄', /${command}]], m)
}
handler.command = /^(Instalarbot|botinstalacion|instalarbot|botinstalacion)/i
export default handler
