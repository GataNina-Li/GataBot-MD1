import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, text, participants, groupMetadata}) => {
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    /*
    m.reply(`*Ciee...* ${toM(a)} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    */
    let caption = `*Mensaje de amor...* ${toM(a)} ❤️ ${toM(b)}\n${await ktnmbk.getRandom()}`
    await conn.sendButton(m.chat, caption, wm, null, [['jodohnya', `${usedPrefix}jodohnya`],['jodohku', `${usedPrefix}jodohku`]], m, { mentions: conn.parseMention(caption) })
    }
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `ingrese el número, la etiqueta de destino o responda al mensaje de destino`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `_*Número invalido.*_`, m)
  if(number.length > 15) return conn.reply(m.chat, `*_Formato inválido.*_`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `*_Objetivo o Número no encontrado, puede haber dejado o no ser miembro de este grupo.*_`, m)
    if(user === m.sender) return conn.reply(m.chat, `_*no puedo salir conmigo mismo.*_`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `_*no puedo salir conmigo. :')*_`, m)

    if (typeof global.db.data.users[user] == "undefined") return m.reply("_*La persona que etiquetaste no está registrada en la base de datos.*_")
    var pacar = global.db.data.users[user].pasangan
    var spac = global.db.data.users[m.sender].pasangan
    if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
      conn.reply(m.chat, `Ya estas saliendo @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\npor favor rompe (escriba .disconnect para desconectar) para disparar @${user.split('@')[0]}\n\nPor cierto que son muy leales!`, m , { contextInfo: { mentionedJid: [user, global.db.data.users[m.sender].pasangan]}})
    }else if(global.db.data.users[user].pasangan != ""){
      if (pacar){
        if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
        conn.reply(m.chat, `Lo siento, @${user.split('@')[0]} ya saliendo @${pacar.split('@')[0]}\nPor favor busque otro socio!`, m , { contextInfo: { mentionedJid: [user, pacar]}})
      }else{
        global.db.data.users[m.sender].pasangan = user
        conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nacabas de invitar @${user.split('@')[0]} Fechado\n\nPor favor espere su respuesta!\n\nEscribe *${usedPrefix}terima @user* por aceptar\n*${usedPrefix}tolak @user Rechazar*`, m , { contextInfo: { mentionedJid: [user]}})
      }
    }else if (global.db.data.users[user].pasangan == m.sender){
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Felicitaciones, oficialmente están saliendo. @${user.split('@')[0]}\n\nQue dure para siempre y siempre sea feliz 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
    }else {
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nacabas de invitar @${user.split('@')[0]} Fechado\n\nPor favor espere su respuesta!\n\nEscriba *${usedPrefix}terima @user* untuk menerima\n*${usedPrefix}tolak @user untuk menolak*`, m , { contextInfo: { mentionedJid: [user]}})
    }
	}	
}
handler.command = /^(mensaje)$/i
handler.group = true

export default handler


let ktnmbk = [
/*"Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.",
"Aku baru sadar ternyata selama ini kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?",
"Aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.",
"Aku boleh kirim CV ke kamu nggak? Soalnya aku mau ngelamar jadi pacar.",
"Aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?",
"Aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. Maukah kamu menerima cintaku?",
"Aku ingin bilang sesuatu. Udah lama aku suka sama aku, tapi aku nggak berani ngomong. Jadi, kuputuskan untuk WA saja. Aku pengin kamu jadi pacarku.",
"Aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. Aku mencintaimu, maukah kamu menjadi pacarku?",
"Aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. Maukah kau jadi pacarku?",
"Aku mau chat serius sama kamu. Selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. Kalau nggak keberatan, kamu mau jadi pacarku?",
"Aku melihatmu dan melihat sisa hidupku di depan mataku.",
"Aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.",
"Aku menyukaimu dari dulu. Kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. Akan sempurna jika kamu yang menjadi spesial di hati.",
"Aku naksir banget sama kamu. Maukah kamu jadi milikku?",
"Aku nggak ada ngabarin kamu bukan karena aku gak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. Mungkin kamu akan kaget mendengarnya. Selama ini aku menyukaimu.",
"Aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. Aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. Aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.",
"Aku nggak tahu sampai kapan usiaku berakhir. Yang aku tahu, cintaku ini selamanya hanya untukmu.",
"Aku sangat menikmati waktu yang dihabiskan bersama hari ini. Kita juga sudah lama saling mengenal. Di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.",
"Aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. Namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. Maukah kamu menjadi kekasihku?",
"Aku siapkan mental untuk hari ini. Kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.",
"Aku tahu kita gak seumur, tapi bolehkan aku seumur hidup sama kamu?",
"Aku tahu kita sudah lama sahabatan. Tapi nggak salah kan kalau aku suka sama kamu? Apa pun jawaban kamu aku terima. Yang terpenting itu jujur dari hati aku yang terdalam.",
"Aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. Jika kau mengerti akan kode ini maka kita akan bersama.",
"Aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.",
"Apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. Karena berada di sampingmu, anugerah terindah bagiku. Jadilah kekasihku, hey kamu.",
"Atas izin Allah dan restu mama papa, kamu mau nggak jadi pacarku?",
"Bagaimana kalau kita jadi komplotan pencuri? Aku mencuri hatimu dan kau mencuri hatiku.",
"Bahagia itu kalau aku dan kamu telah menjadi kita.",
"Besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. Biar aku ada kerjaan buat selalu mikirin kamu.",
"Biarkan aku membuatmu bahagia selamanya. Kamu hanya perlu melakukan satu hal: Jatuh cinta denganku.",
"Biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. Biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!",
"Biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?",
"Bisakah kamu memberiku arahan ke hatimu? Sepertinya aku telah kehilangan diriku di matamu.",
"Bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. Dijawab ya.",
"Caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. Aku mau kamu jadi milikku.",
"Cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.",
"Cintaku ke kamu tuh kayak angka 5 sampai 10. Nggak ada duanya. Aku mau kamu jadi satu-satunya wanita di hatiku.",
"Cowok mana yang berani-beraninya nyakitin kamu. Sini aku obati, asal kamu mau jadi pacar aku.",
"Hai, kamu lagi ngapain? Coba deh keluar rumah dan lihat bulan malam ini. Cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. Gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?",
"Hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. Senyummu menerangi hidupku dan semua kegelapan menghilang. Maukah kamu menjadi milikku?",
"Ini bukan rayuan, tapi ini yang aku rasakan. Aku ingin bertukar tulang denganmu. Aku jadi tulang punggungmu, kamu jadi tulang rusukku. Jadian yuk!",
"Ini cintaku, ambillah. Ini jiwaku, gunakan itu. Ini hatiku, jangan hancurkan. Ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.",
"Izinkan aku mengatakan sesuatu yang menurutku sangat penting. Hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. Tetaplah di sana dan jadilah kekasihku. Mau?",
"Jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. Biarkan aku melakukannya sekarang.",
"Kalau aku matahari, kamu mau nggak jadi langitku? Biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.",
"Kalau kamu membuka pesan ini, berarti kamu suka sama aku. Kalau kamu membalas pesan ini, artinya kamu sayang sama aku. Kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. Kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.",
"Kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.",
"Kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. Kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. Aku ingin kamu selalu bersamaku. Aku mencintaimu.",
"Kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.",
"Kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. Maukah kamu jadi pacar aku?",
"Kamu kenal Iwan nggak? Iwan to be your boy friend.",
"Kamu mau nggak jadi matahari di kehidupanku? Kalau mau, menjauhlah 149.6 juta KM dari aku sekarang!",
"Kamu nggak capek HTS-an sama aku? Aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. Kita pacaran aja, yuk?",
"Kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. Iya, aku.",
"Kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. Apakah kamu akan membiarkan aku menjadi orangnya?",
"Kamu tahu enggak kenapa aku ngambil jurusan elektro? Karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.",
"Kamu tahu kenapa hari ini aku menyatakan semua ini padamu? Karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.",
"Kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?",
"Kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. Aku mau kamu jadi milikku.",
"kepada cewek incaran bukanlah perkara yang mudah. Ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. Selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.",
"Ketika aku bertemu denganmu, aku tak peduli dengan semuanya. Namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. Dan apakah ini cinta?",
"Ketika engkau memandangku, engkau akan melihat fisikku. Tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.",
"Ketika Hawa tercipta buat sang Adam, begitu indah kehidupan mereka izinkan aku menjadi sang Adam/Hawa buatmu karena aku sangat mencintaimu.",
"Ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.",
"Kita udah saling tahu masa lalu masing-masing. Tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. Mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?",
"Ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. Resah jika kamu tak menjadi milikku selamanya.",
"Lebih spesial dari nasi goreng, lebih indah dari purnama. Ya, jika kamu yang temani akhir hidupku.",
"Maaf sebelumnya karena cuma bisa bilang lewat WA. Sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. Mau?",
"Makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. Sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.",
"Makan tahu bumbu petis. Merenung sambil makan buah duku. Aku bukan lelaki yang romantis. Namun, maukah kau jadi pacarku?",
"Makasih, ya, selama ini sudah mau temani aku. Entah itu dalam suka ataupun duka. Tapi sekarang aku mau kamu berubah. Aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.",
"Malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.",
"Mataku mencarimu ketika kamu tidak ada. Hatiku sakit ketika aku tidak menemukanmu. Kamu adalah alasan untuk semua kebahagiaanku dan tanpamu hidupku akan sangat membosankan. Maukah kamu terus bersamaku?",
"Mau jadi pacarku nggak, lagi gabut nih. Coba dulu 1 bulan kalau nyaman lanjut deh.",
"Menjadi teman memang menyenangkan. Akan lebih membahagiakan jika kamu menjadi milikku.",
"Meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. Tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - Zarry Hendrik",
"Meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. Hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.",
"Mungkin aku bukan Obama, tapi aku senang kalau bisa manggil kamu, o sayang. Kamu mau nggak mulai saat ini aku panggil seperti itu?",
"Mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. Tapi satu yang aku sanggup, membuatmu bahagia. Izinkan aku membuktikannya, ya!",
"Neng, bakar-bakaran yuk! | Bakar apa? | Kita bakar masa lalu dan buka lembaran baru dengan cinta kita.",
"Nggak perlu basa basi. Kita udah kenal lama, aku suka kamu apa adanya. Jadian yuk!",
"Pepatah mengatakan, empat sehat lima sempurna. Namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.",
"Saatnya aku mengungkapkan perasaan yang terdalam kepadamu. Aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.",
"Saking jatuh cintanya aku sama kamu. Mendengar kamu kentut aja aku sudah bahagia.",
"Satu tambah satu sama dengan dua. Aku tanpamu nggak bisa apa-apa. Satu dua tiga sepuluh. Aku maunya kamu jadi pacarkuh.",
"Secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.",
"Sejak kenal kamu, bawaannya pengin belajar terus. Belajar jadi yang terbaik. Untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?",
"Senjata bertuah amatlah sakti. Kalah oleh iman nan hakiki. Maukah kau jadi orang yang aku kasihi? Aku janji cintaku sampai mati.",
"Seseorang bermimpi tentangmu setiap malam. Seseorang tidak bisa bernapas tanpamu, kesepian. Seseorang berharap suatu hari kau akan melihatnya. Seseorang itu adalah aku.",
"Setelah hari berlalu, aku yakin kamu pilihanku.",
"Setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. Aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. Aku mencintaimu.",
"Suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. Akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. Perempuan itu adalah kamu.",
"Suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?",
"Tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.",
"Tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. Ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. Apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.",
"Tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.",
"Tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. Itu adalah kamu.",
"Telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. Karena aku mau kamu jadi pacar aku?",
"Tidak peduli seberapa sederhanya dan ketidakjelasan kamu. Tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. Aku mau kamu jadi pacarku.",
"Untuk apa memajang foto berdua? Yang aku mau fotomu ada dalam buku nikahku kelak. Maukah kamu jadi pacarku?"*/
"Hay momentos en los que no me gusta estar solo. Pero tampoco quiero que todos me acompañen, solo te quiero a ti".
"¡Me acabo de dar cuenta de que has sido rico todo este tiempo! Como lo que he estado buscando todo este tiempo. ¿Quieres ser mi novia?",
"Agradezco a mis ojos, porque estos ojos me llevaron a encontrarte",
"¿Puedo enviarte un CV o no? Porque quiero postularme para ser novia".,
"No soy el más grande, pero estoy seguro que si puedo hacerte feliz con amor y cariño, ¿me quieres verdad?",
"Solo soy una persona común que tiene muchos defectos y puede que no merezca tu amor, pero si estás dispuesto a aceptarme como amante, prometo hacer lo que sea mejor para ti. ¿Aceptarás mi amor?",
"Quiero decir algo. Me gusta desde hace mucho tiempo, pero no me atrevo a decirlo. Entonces, decidí solo WA. Quiero que seas mi novia",
"Quiero decir algo que no puedo contener más. Te amo, ¿serás mi novia?",
"Quiero ser una persona que pueda hacerte reír y sonreír todos los días. ¿Serás mi novia?",
"Quiero tener una charla seria contigo. Todo este tiempo he albergado sentimientos por ti y siempre he estado pendiente de ti. Si no te importa, ¿quieres ser mi novia?",
"Te miro y veo el resto de mi vida ante mis ojos.",
"No tengo todo, pero al menos tengo suficiente amor para ti",
"Me gustaste desde el principio. Eres tan simple, pero la sencillez es muy especial a mis ojos. Será perfecto si eres especial en mi corazón",
"Realmente estoy enamorado de ti. ¿Serás mía?",
"No te dije que no porque no tengo cupo ni crédito, pero estoy disfrutando de este anhelo por ti. Tal vez te sorprendas al escuchar eso. Siempre me has gustado",
"No quiero que seas el sol de mi vida, porque aunque hace calor estás muy lejos. Tampoco quiero que seas aire, porque aunque te necesito y estás muy cerca, pero todos pueden respirarte también. Solo quiero que seas sangre que pueda estar muy cerca de mí",
"No sé hasta cuándo terminará mi edad. Todo lo que sé es que mi amor es para siempre solo para ti",
"Realmente disfruté el tiempo que pasamos juntos hoy. También nos conocemos desde hace mucho tiempo. En este día soleado, quiero expresarte que te amo",
"Siempre imaginé lo hermoso que sería si algún día pudiéramos construir un arca de una casa y vivir juntos hasta el final de la vida. Sin embargo, todo eso no habría sucedido si los dos no hubiéramos estado juntos hasta ahora. ¿Serás mi amante?",
"Me preparo mentalmente para hoy. Tienes que ser mi novia para tratar este amor incontrolable",
"Sé que no tenemos la misma edad, pero ¿puedo vivir contigo por el resto de mi vida?",
"Sé que hemos sido amigos durante mucho tiempo. ¿Pero no está mal si me gustas? Cualquiera que sea tu respuesta, acepto. Lo más importante es ser honesto desde el fondo de mi corazón",
"No puedo empezar esto primero, pero te daré un código que me gustas. Si entiendes este código, estaremos juntos",
"Soy demasiado estúpido o eres demasiado egoísta para hacer que me enamore de ti",
"Cualquier cosa sobre ti, nunca he encontrado aburrimiento en ello. Porque estar a tu lado, el regalo más hermoso para mí. Sé mi amante, hey tú",
"Con el permiso de Alá y la bendición de mamá papá, ¿quieres ser mi novio o no?",
"¿Y si nos convertimos en una banda de ladrones? Yo robé tu corazón y tú me robaste el mío",
"Feliz es que tú y yo nos hemos convertido en nosotros",
"Mañana, si no funciona, puedo registrarme para ser tu novia. Déjame tener trabajo para pensar siempre en ti",
"Déjame hacerte feliz para siempre. Solo tienes que hacer una cosa: Enamórate de mí",
"Que toda mi alegría sea tuya, toda tu tristeza sea mía. ¡Que el mundo entero sea tuyo, solo tú seas mía!",
"Que el pasado sea mi pasado, pero por el presente, ¿serás tú mi futuro?",
"¿Puedes darme una dirección a tu corazón? Parece que me he perdido en tus ojos",
"No es el trono o el tesoro lo que busco, sino el retorno de mi amor lo que espero de ti. La respuesta es sí",
"La forma en que puedes hacerme reír incluso en los días más oscuros me hace sentir más ligero que cualquier otra cosa. Quiero que seas mía",
"Mi amor por ti es incuestionable porque este amor es sincero desde el fondo de mi corazón",
"Mi amor por ti es como un número del 5 al 10. No hay segundo. Quiero que seas la única mujer en mi corazón",
"Qué chico se atreve a lastimarte. Aquí te trataré, mientras quieras ser mi novia",
"Oye, ¿qué estás haciendo? Sal de la casa y mira la luna esta noche. La luz es hermosa y encantadora, pero sería aún más hermosa si yo estuviera a tu lado. ¿Qué tal si estamos juntos?"
]
