const lenguaje = () => {
return 'id' } //Bahasa Indonesia


//PEMBERITAHUAN PESAN
const smsAvisoRG = () => {
return `╰⊱✅⊱ *HASIL* ⊱✅⊱╮\n\n` }

const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *PERINGATAN* ⊱⚠️⊱╮\n\n` }

const smsAvisoIIG = () => {
return `╰⊱❕⊱ *INFORMASI* ⊱❕⊱╮\n\n` }

const smsAvisoFG = () => {
return `╰⊱❌⊱ *KESALAHAN* ⊱❌⊱╮\n\n` }

const smsAvisoMG = () => {
return `╰⊱❗️⊱ *TINDAKAN BURUK* ⊱❗️⊱╮\n\n` }

const smsAvisoEEG = () => {
return `╰⊱📩⊱ *LAPORAN* ⊱📩⊱╮\n\n` }

const smsAvisoEG = () => {
return `╰⊱💚⊱ *KESUKSESAN* ⊱💚⊱╮\n\n` }


//PARAMETER DALAM PERINTAH
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA SAYA SEBAGAI PENCIPTA BOT YANG BISA MENGGUNAKANNYA!!\`\`\`\`` }

const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA KREATOR SAYA YANG BISA MENGGUNAKANNYA!!\`\`\`\`` }

const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA MODERATOR DAN PENCIPTA SAYA YANG BISA MENGGUNAKANNYA!!\`\`\`\`` }

const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA TERSEDIA UNTUK PENGGUNA PREMIUM DAN PENCIPTA SAYA!!\`\`\`\`` }

const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA DAPAT DIGUNAKAN DALAM GRUP!!\`\`\`\`` }

const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡COMMAND INI HANYA DAPAT DIGUNAKAN UNTUK PRIVATE!!\`\`\`\`` }

const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA UNTUK ADMIN!!\`\`\`\`` }

const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡SAYA PERLU MENJADI ADMIN SEHINGGA ANDA BISA MENGGUNAKAN COMMAND INI!!\`\`\`\`` }

const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ANDA HARUS DAFTAR UNTUK MENGGUNAKAN COMMAND INI, KETIK #verify UNTUK DAFTAR!!\`\`\`\`` }

const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI DIBATASI OLEH PENCIPTA SAYA!!\`\`\`\`` }


//DAFTAR MENU
const smsTime = () => {
return `Waktu saat ini`}
const smsUptime = () => {
return `Berjalan Selama`}
const smsVersion = () => {
return `Versi dari ${global.packname}`}
const smsTotalUsers = () => {
return `Jumlah Pengguna`}
const smsMode = () => {
return `Sedang dalam mode`}
const smsModePublic = () => {
return `PUBLIK`}
const smsModePrivate = () => {
return `PRIBADI`}
const smsBanChats = () => {
return `Obrolan Terlarang`}
const smsBanUsers = () => {
return `Pengguna yang Diblokir`}
const smsPareja = () => {
return `Pasangan`}
const smsResultPareja = () => {
return `Lajang`}
const smsSaludo = () => {
return `👋 HALO! SELAMAT DATANG 👋`}
const smsDia = () => {
return `🌇 Selamat pagi ⛅`}
const smsTarde = () => {
return `🏙️ Selamat malam 🌤️`}
const smsTarde2 = () => {
return `🌆 Selamat malam 🌥️`}
const smsNoche = () => {
return `🌃 Selamat malam 💫`}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche};
