let handler = async(m, { conn }) => {
  
const s = [
'https://img-16.stickers.cloud/packs/f73a3b52-02ed-4f9c-83ea-969d698b6200/webp/animated/2887d998-3f0c-424a-aaeb-132bad02da58.webp'     
];  
    conn.sendFile(m.chat, s, 'sticker.webp', global.packname global.author, m)
}
handler.customPrefix = /payaso|🤡|pallaso/
handler.command = new RegExp
export default handler
