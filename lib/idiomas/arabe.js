const lenguaje = () => {
return 'ar' } //عرب


//إشعارات الرسائل
const smsAvisoRG = () => {
return `╰⊱✅⊱ *نتيجة* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *تنبيه قضائي* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => {
return `╰⊱❕⊱ *معلومة* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => {
return `╰⊱❌⊱ *خطأ* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => {
return `╰⊱❗️⊱ *عمل سيء* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => {
return `╰⊱📩⊱ *أبلغ عن* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => {
return `╰⊱💚⊱ *النجاح* ⊱💚⊱╮\n\n` }


//المعلمات في الأوامر
const smsRowner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر أنا فقط بصفتي صانع الروبوت يمكنه استخدامه!!\`\`\`\`` }
const smsOwner = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر فقط منشئ المحتوى الخاص بي يمكنه استخدامه!!\`\`\`\`` }
const smsMods = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر فقط للمنسقين ومنشئ المحتوى الخاص بي يمكنهم استخدامه!!\`\`\`\`` }
const smsPremium = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡يتوفر هذا الأمر فقط للمستخدمين المتميزين ومنشئ المحتوى الخاص بي!!\`\`\`\`` }
const smsGroup = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡لا يمكن استخدام هذا الأمر إلا في مجموعات!!\`\`\`\`` }
const smsPrivate = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡لا يمكن استخدام هذا الأمر إلا للخصوصية!!\`\`\`\`` }
const smsAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر مخصص فقط للمشرفين!!\`\`\`\`` }
const smsBotAdmin = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡أنا بحاجة إلى أن أكون مشرفًا حتى تتمكن من استخدام هذا الأمر!!\`\`\`\`` }
const smsUnreg = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡أنت بحاجة إلى التسجيل لاستخدام هذا الأمر ، نوع #verify للتسجيل!!\`\`\`\`` }
const smsRestrict = () => {
return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡هذا الأمر مقيد من قِبل خالقي!!\`\`\`\`` }


//قائمة القائمة
const smsTime = () => {
return `الوقت الحالي`}
const smsUptime = () => {
return `أثناء الجري`}
const smsVersion = () => {
return `إصدار ${global.packname}`}
const smsTotalUsers = () => {
return `إجمالي المستخدمين`}
const smsMode = () => {
return `إنه في الوضع`}
const smsModePublic = () => {
return `عام`}
const smsModePrivate = () => {
return `خاص`}
const smsBanChats = () => {
return `الدردشات المحظورة`}
const smsBanUsers = () => {
return `المستخدمون المحظورون`}
const smsPareja = () => {
return `شريك`}
const smsResultPareja = () => {
return `غير مرتبطة`}
const smsSaludo = () => {
return `👋 أهلا! أهلا بك 👋`}
const smsDia = () => {
return `🌇 صباح الخير ⛅`}
const smsTarde = () => {
return `🏙️ مساء الخير 🌤️`}
const smsTarde2 = () => {
return `🌆 مساء الخير 🌥️`}
const smsNoche = () => {
return `🌃 طاب مساؤك 💫`}
const smsListaMenu = () => {
return `🟢 قائمة القائمة 🟢`}
const smsLista1 = () => {
return `🌟 معلومات GATABOT 🌟`}
const smsLista2 = () => {
return `💖 المنشئ 💖`}
const smsLista3 = () => {
return `🎁 تبرع: الدعم 🎁`}
const smsLista4 = () => {
return `🚀 سرعة 🚀`}
const smsLista5 = () => {
return `💡 معلومات القائمة 💡`}
const smsLista6 = () => {
return `🌀 قائمة كاملة 🌀`}
const smsLista7 = () => {
return `🐈 تثبيت GATABOT 🐈`}
const smsLista8 = () => {
return `🍄 كن SUB BOT 🍄`}
const smsLista9 = () => {
return `📄 الشروط والأحكام والخصوصية 📄\n`}
const smsLista10 = () => {
return `🌟 المغامرة والأعلى 🌟`}
const smsLista11 = () => {
return `🏆 قمة العالم 🏆`}
const smsLista12 = () => {
return `🏅 المستخدمون المتميزون 🏅`}
const smsLista13 = () => {
return `🎟️ كن مستخدمًا متميزًا 🎟️`}
const smsLista14 = () => {
return `🛣️ البعثات 🛣️`}
const smsLista15 = () => {
return `⚗️ قائمة آر بي جي ⚗️`}
const smsLista16 = () => {
return `🏪 شراء شراء 🏪`}
const smsLista17 = () => {
return `🎒 المخزون 🎒\n`}
const smsLista18 = () => {
return `🌟 الوسائط المتعددة 🌟`}
const smsLista19 = () => {
return `📲 تنزيل القائمة 📲`}
const smsLista20 = () => {
return `🔍 قائمة البحث 🔍`}
const smsLista21 = () => {
return `🛰️ قائمة المحول 🛰️`}
const smsLista22 = () => {
return `🧰 قائمة تعديل الصوت 🧰\n`}
const smsLista23 = () => {
return `🌟 مرح 🌟`}
const smsLista24 = () => {
return `🎡 الألعاب الديناميكية 🎡`}
const smsLista25 = () => {
return `🔊 قائمة الصوت 🔊`}
const smsLista26 = () => {
return `🎈 قائمة الملصقات والمرشحات 🎈`}
const smsLista27 = () => {
return `✨ قائمة التأثيرات والشعارات ✨`}
const smsLista28 = () => {
return `🌅 قائمة الشعارات 2 🌅`}
const smsLista29 = () => {
return `⛩️ ذكريات و انمي عشوائية ⛩️`}
const smsLista30 = () => {
return `🔞 أوامر للبالغين +18 🔞\n`}
const smsLista31 = () => {
return `🌟 الإعدادات 🌟`}
const smsLista32 = () => {
return `🔰 قائمة المجموعات 🔰`}
const smsLista33 = () => {
return `📑 أنواع القوائم 📑`}
const smsLista34 = () => {
return `⚙️ مركز التكوين ⚙️`}
const smsLista35 = () => {
return `💎 قائمة المالك 💎`}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup,
smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, 
smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10,
smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, 
smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35};
