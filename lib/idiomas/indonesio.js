const lenguaje = () => { return 'id' } //Bahasa Indonesia

//PEMBERITAHUAN PESAN
const smsAvisoRG = () => { return `╰⊱✅⊱ *HASIL* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *PERINGATAN* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMASI* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *KESALAHAN* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *TINDAKAN BURUK* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *LAPORAN* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *KESUKSESAN* ⊱💚⊱╮\n\n` }

//PARAMETER DALAM PERINTAH
const smsRowner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA SAYA SEBAGAI PENCIPTA BOT YANG BISA MENGGUNAKANNYA!!\`\`\`` }
const smsOwner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA KREATOR SAYA YANG BISA MENGGUNAKANNYA!!\`\`\`` }
const smsMods = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA MODERATOR DAN PENCIPTA SAYA YANG BISA MENGGUNAKANNYA!!\`\`\`` }
const smsPremium = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA TERSEDIA UNTUK PENGGUNA PREMIUM DAN PENCIPTA SAYA!!\`\`\`` }
const smsGroup = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA DAPAT DIGUNAKAN DALAM GRUP!!\`\`\`` }
const smsPrivate = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡COMMAND INI HANYA DAPAT DIGUNAKAN UNTUK PRIVATE!!\`\`\`` }
const smsAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI HANYA UNTUK ADMIN!!\`\`\`` }
const smsBotAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡SAYA PERLU MENJADI ADMIN SEHINGGA ANDA BISA MENGGUNAKAN COMMAND INI!!\`\`\`` }
const smsUnreg = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ANDA HARUS DAFTAR UNTUK MENGGUNAKAN COMMAND INI, KETIK #verify UNTUK DAFTAR!!\`\`\`` }
const smsRestrict = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PERINTAH INI DIBATASI OLEH PENCIPTA SAYA!!\`\`\`` }

//DAFTAR MENU
const smsTime = () => { return `Waktu saat ini`}
const smsUptime = () => { return `Berjalan Selama`}
const smsVersion = () => { return `Versi dari ${global.packname}`}
const smsTotalUsers = () => { return `Jumlah Pengguna`}
const smsMode = () => { return `Sedang dalam mode`}
const smsModePublic = () => { return `PUBLIK`}
const smsModePrivate = () => { return `PRIBADI`}
const smsBanChats = () => { return `Obrolan Terlarang`}
const smsBanUsers = () => { return `Pengguna yang Diblokir`}
const smsPareja = () => { return `Pasangan`}
const smsResultPareja = () => { return `Lajang`}
const smsSaludo = () => { return `👋 HALO! SELAMAT DATANG 👋`}
const smsDia = () => { return `🌇 Selamat pagi ⛅`}
const smsTarde = () => { return `🏙️ Selamat malam 🌤️`}
const smsTarde2 = () => { return `🌆 Selamat malam 🌥️`}
const smsNoche = () => { return `🌃 Selamat malam 💫`}
const smsListaMenu = () => { return `⊹ DAFTAR MENU ⊹`}
const smsLista1 = () => { return `🌟 INFORMASI GATABOT 🌟`}
const smsLista2 = () => { return `💖 PENCIPTA 💖`}
const smsLista3 = () => { return `🎁 DONASI: DUKUNGAN 🎁`}
const smsLista4 = () => { return `🚀 KECEPATAN 🚀`}
const smsLista5 = () => { return `💡 INFORMASI MENU 💡`}
const smsLista6 = () => { return `🌀 MENU LENGKAP 🌀`}
const smsLista7 = () => { return `🐈 PASANG GATABOT 🐈`}
const smsLista8 = () => { return `🍄 JADILAH SUBBOT 🍄`}
const smsLista9 = () => { return `📄 SYARAT, KETENTUAN DAN PRIVASI 📄\n`}
const smsLista10 = () => { return `🌟 PETUALANGAN DAN TOP 🌟`}
const smsLista11 = () => { return `🏆 TOP DUNIA 🏆`}
const smsLista12 = () => { return `🏅 PENGGUNA PREMIUM 🏅`}
const smsLista13 = () => { return `🎟️ JADILAH PENGGUNA PREMIUM 🎟️`}
const smsLista14 = () => { return `🛣️ MISI 🛣️`}
const smsLista15 = () => { return `⚗️ MENU RPG ⚗️`}
const smsLista16 = () => { return `🏪 PEMBELIAN TOKO 🏪`}
const smsLista17 = () => { return `🎒 INVENTARIS 🎒\n`}
const smsLista18 = () => { return `🌟 MULTIMEDIA 🌟`}
const smsLista19 = () => { return `📲 UNDUH MENU 📲`}
const smsLista20 = () => { return `🔍 MENU CARI 🔍`}
const smsLista21 = () => { return `🛰️ MENU KONVERTER 🛰️`}
const smsLista22 = () => { return `🧰 MENU PENGUBAH AUDIO 🧰\n`}
const smsLista23 = () => { return `🌟 SERU 🌟`}
const smsLista24 = () => { return `🎡 GAME DINAMIS 🎡`}
const smsLista25 = () => { return `🔊 MENU AUDIO 🔊`}
const smsLista26 = () => { return `🎈 MENU STIKER DAN FILTER 🎈`}
const smsLista27 = () => { return `✨ MENU EFEK DAN LOGO ✨`}
const smsLista28 = () => { return `🌅 LOGO MENU 2 🌅`}
const smsLista29 = () => { return `⛩️ MEME DAN ANIME RANDOM ⛩️`}
const smsLista30 = () => { return `🔞 PERINTAH UNTUK DEWASA +18 🔞\n`}
const smsLista31 = () => { return `🌟 PENGATURAN 🌟`}
const smsLista32 = () => { return `🔰 MENU UNTUK GRUP 🔰`}
const smsLista33 = () => { return `📑 JENIS DAFTAR 📑`}
const smsLista34 = () => { return `⚙️ PUSAT KONFIGURASI ⚙️`}
const smsLista35 = () => { return `💎 PEMILIK MENU 💎`}

//main.js
const smsWelcome = () => { return '*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ SELAMAT DATANG!!*\n┊💖 @user\n┊📄 *BACA DESKRIPSI GRUP*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n\n@desc'}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *DIA MENINGGALKAN GRUP, SEGERA KEMBALI* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user ANDA SEKARANG ADMIN DI GRUP INI!!*'}
const smsSdemote = () => { return '*@user TIDAK ADA LAGI ADMIN DI GRUP INI!!*'}
const smsSdesc = () => { return '*DESKRIPSI BARU GRUP ADALAH:*\n\n@desc'}
const smsSsubject = () => { return '*NAMA BARU GRUP ADALAH:*\n\n@subject'}
const smsSicon = () => { return '*FOTO GRUP INI SUDAH DIUBAH!!*'}
const smsSrevoke = () => { return '*SEKARANG INI LINK BARU DARI GRUP INI!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 KONEKSI ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ SUKSES KONEKSI DENGAN WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ TMP BERSIH OTOMATIS ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ FILE DALAM FOLDER TMP SUDAH DIHAPUS 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 MEMUAT...\n`}

//_allantilink.js
const smsTextoYT = () => { return '😻 Super GataBot-MD - WhatsApp '}
const smsApagar = () => { return '❌ MENONAKTIFKAN'}
const smsEncender = () => { return '✅ MENGAKTIFKAN'}
const smsEnlaceTik = () => { return `*LINK TIKTOK YANG DILARANG TERDETEKSI DI GRUP INI*\n\n*SAYA LANJUTKAN UNTUK MENGHAPUS ANDA*`}
const smsEnlaceYt = () => { return `*LINK YOUTUBE YANG DILARANG TERDETEKSI DI GRUP INI*\n\n*SAYA LANJUTKAN UNTUK MENGHAPUS ANDA*`}
const smsEnlaceTel = () => { return `*LINK TELEGRAM YANG DILARANG TERDETEKSI DI GRUP INI*\n\n*SAYA LANJUTKAN UNTUK MENGHAPUS ANDA*`}
const smsEnlaceFb = () => { return `*LINK FACEBOOK TERBANNED TERDETEKSI DI GRUP INI*\n\n*SAYA LANJUTKAN UNTUK MENGHAPUS ANDA*`}
const smsEnlaceIg = () => { return `*LINK INSTAGRAM TERBANNED TERDETEKSI DI GRUP INI*\n\n*SAYA LANJUTKAN UNTUK MENGHAPUS ANDA*`}
const smsEnlaceTw = () => { return `*TAUTAN TWITTER YANG DILARANG TERDETEKSI DI GRUP INI*\n\n*SAYA LANJUTKAN UNTUK MENGHAPUS ANDA*`}
const smsAllAdmin = () => { return `*SAYA PERLU MENJADI ADMIN UNTUK DAPAT MENGHAPUS PENYUSU*`}
const smsSoloOwner = () => { return `*KREATOR SAYA HARUS MENGAKTIFKAN FUNGSINYA*\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 PERINTAH GAGAL 🔴*`}
const smsCont2 = () => { return `*⚠️ PLUGIN:*`}
const smsCont3 = () => { return `*⚠️ PENGGUNA:*`}
const smsCont4 = () => { return `*⚠️ MEMERINTAH:*`}
const smsCont5 = () => { return `*⚠️ KESALAHAN:*`}
const smsCont6 = () => { return `*❗ LAPORAN PESAN INI MENGGUNAKAN COMMAND #reporte UNTUK MEMECAHKANNYA*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*TIDAK MEMILIKI BERLIAN!! 💎 ANDA DAPAT PERGI KE TOKO DENGAN PERINTAH*`}
const smsCont8 = () => { return ` *BERLIAN 💎 DIGUNAKAN*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*BUTUH TINGKATNYA ➡️*`}
const smsCont10 = () => { return `*UNTUK MENGGUNAKAN PERINTAH INI. TINGKAT ANDA SAAT INI ADALAH ➡️*`}
const smsCont11 = () => { return `*PERBARUI DENGAN PERINTAH*`}
const smsCont12 = () => { return `GRUP BESAR!! 😼`}
const smsCont13 = () => {return `ADA YANG BERGABUNG!! 🥳`}
const smsCont14 = () => { return `SESEORANG TINGGAL!! 🧐`}
const smsCont15 = () => { return `*HALO*`}
const smsCont16 = () => { return `*PANGGILAN VIDEO* 📲`}
const smsCont17 = () => { return `*PANGGILAN* 📞`}
const smsCont18 = () => { return `*MEREKA TIDAK BERWENANG JADI SAYA AKAN MEMBLOKIR ANDA*\n\n*JIKA ANDA TERPANGGIL SECARA KECELAKAAN HUBUNGI ORANG PENCIPTA BOT INI*`}
const smsCont19 = () => { return `ANTI HAPUS`}
const smsCont20 = () => { return `*┃✤ Nama:*`}
const smsCont21 = () => { return `*┃✤ Mengirim pesan yang dihapus...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*NOMOR INI*`}
const smsInt2 = () => { return `*TIDAK DIPERBOLEHKAN DI GRUP INI!!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*SEBAGAI ANDA ADMIN DI GRUP INI ANDA TIDAK AKAN DIHAPUS*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*LINK WHATSAPP TERBANNED TERDETEKSI DI GRUP INI*\n\n*SAYA LANJUTKAN UNTUK MENGHAPUS ANDA*`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}LINK TERLARANG MENGANDUNG HTTPS TERDETEKSI DI GRUP INI\n\nSAYA LANJUTKAN UNTUK MENGHAPUS ANDA`}

//_antispam.js
const smsNoSpam = () => { return `🤨 JANGAN SPAM, ANDA TIDAK AKAN DAPAT MENGGUNAKAN ${global.packname} UNTUK ${60000 / 1000 - 59} MENIT`}

//_antispam_.js
const smsNoSpam2 = () => { return `DIBATALKAN SETELAH ${60000 / 1000 - 59} MENIT. TOLONG JANGAN SPAM!!`}

//teks
const smsConMenu = () => { return `☘️ MENU`}

//Kesalahan
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SEBUAH KESALAHAN YANG TIDAK TERDUGA TELAH TERJADI.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`KENYAMANAN TELAH TIMBUL. COBA LAGI.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ADA YANG SALAH, LAPORAN PERINTAH INI MENGGUNAKAN:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `TIDAK!!! 🤬 KATAKAN KATA INI`}
const smsToxic2 = () => { return `DILARANG JANGAN TOXIC`}
const smsToxic3 = () => { return `*PERINGATAN*\n⚠️`}
const smsToxic4 = () => { return `😭 SAYA MINTA MAAF`}
const smsToxic5 = () => { return `☢️ NONAKTIFKAN ANTITOXIC`}
const smsToxic6 = () => { return `SAYA PERINGATKAN KALIAN BEBERAPA KALI!!`}
const smsToxic7 = () => { return `ANDA LULUS SEMUA 4 PERINGATAN SEKARANG ANDA AKAN DIHAPUS 🙄`}

//Toko
const eExp = () => { return '⚡ Experience' } 
const eDiamante = () => { return '💎 Diamond' } 
const eDiamantePlus = () => { return '💎+ Diamond+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Emerald' } 
const eJoya = () => { return '♦️ Jewel' }
const eMagia = () => { return '🌀 Magic' } 
const eOro = () => { return '👑 Gold' } 
const eGataCoins = () => { return '🐱 GataCoins' }
const eGataTickers = () => { return '🎫 Gata Tickers' } 
const eEnergia = () => { return '✨ Energy' }

const ePocion = () => { return '🥤 Potion' }
const eAgua = () => { return '💧 Water' }
const eBasura = () => { return '🗑 Trash' }
const eMadera = () => { return '🪵 Wood' }
const eRoca = () => { return '🪨 Rock' }
const ePiedra = () => { return '🥌 Stone' }
const eCuerda = () => { return '🕸️ String' }
const eHierro = () => { return '⛓️ Iron' }
const eCarbon = () => { return '⚱️ Coal' }
const eBotella = () => { return '🍶 Bottle' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Paperboard' } 

const eEletric = () => { return '💡 Electricity' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Common Gold' }
const eZorroG = () => { return '🦊🌫️ Big Fox' }
const eBasuraG = () => { return '🗑🌫️ Super Trash' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Wood' }
const eEspada = () => { return '⚔️ Sword' }
const eCarnada = () => { return '🪱 Bait' }
const eBillete = () => { return '💵 Banknotes' }
const ePinata = () => { return '🪅 Pinata' }
const eGancho = () => { return '🪝 Hook' }
const eCanaPescar = () => { return '🎣 Fishing Rod' } 

const eCComun = () => { return '📦 Common Box' }
const ePComun = () => { return '🥡 Uncommon Box' }
const eCMistica = () => { return '🗳️ Mythic Box' }
const eCMascota = () => { return '📫 Pet Box' }
const eCJardineria = () => { return '💐 Gardening Box' }
const eClegendaria = () => { return '🎁 Legendary Box' } 

const eUva = () => { return '🍇 Grape' }
const eManzana = () => { return '🍎 Apple' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 

const eSUva = () => { return '🌾🍇 Grape seeds' }
const eSManzana = () => { return '🌾🍎 Apple seeds' }
const eSNaranja = () => { return '🌾🍊 Orange seeds' }
const eSMango = () => { return '🌾🥭 Mango Seeds' }
const eSPlatano = () => { return '🌾🍌 Banana seeds' } 

const eCentauro = () => { return '🐐 Centaur' }
const eAve = () => { return '🦅 Bird' }
const eGato = () => { return '🐈 Cat' }
const eDragon = () => { return '🐉 Dragon' }
const eZorro = () => { return '🦊 Fox' }
const eCaballo = () => { return '🐎 Horse' }
const eFenix = () => { return '🕊️ Phoenix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Dog' } 

const eAMascots = () => { return '🍖 Pet Food' }
const eCCentauro = () => { return '🐐🥩 Centaur Food' }
const eCAve = () => { return '🦅🥩 Bird Food' }
const eCMagica = () => { return '🌀🥩 Magic Food' }
const eCDragon = () => { return '🐉🥩 Dragon Food' }
const eACaballo = () => { return '🐎🥩 Horse Food' }
const eCFenix = () => { return '🕊️🥩 Phoenix Food' } 


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18,
smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3,
smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia,
ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar,
eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano,
eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix };
