const items = {
   buy: {
        exp: { eleksirb: 2 }, 
        limit: { money: 300 },
        diamond: { berlian: 1 },
        joincount: { limit: 15 },
        emerald: { emasbatang: 5 },
        berlian: { kyubi: 10 },
        kyubi: { trash: 5 },  
        gold: {  diamond: 25 },
        money: { kaleng: 2 },
        tiketcoin: { joincount: 1 },
        
        potion: { money: 500 },
        aqua: { botol: 2 },
        trash: { eleksirb: 15 },
        wood: { string: 2 },
        rock: { kardus: 4 },
        batu: { coal: 20 },
        string: { kaleng: 3 },
        iron: { kyubi: 20 },
        coal: { trash: 7 },
        botol: { wood: 5 },
        kaleng: { potion: 2 },
        kardus: { trash: 20 },
        
        eleksirb: { healtmonster: 2},
        emasbatang: { kayu: 4},
        emasbiasa: { diamond: 30 },
        rubah: { berlian: 45 },
        sampah: { trash: 200 },
        serigala: { kaleng: 150 },
        kayu: { wood: 40 },
        sword: { gold: 2 },
        umpan: { string: 2 },
        healtmonster: { kyubi: 35 },
        pancingan: { iron: 4 },
        
        common: { berlian: 30 },
        uncoommon: { berlian: 40 },
        mythic: { berlian: 50 },
        pet: { aqua: 120 },
        gardenboxs: { aqua: 80 },
        legendary: { berlian: 80 },
        
        anggur: { emerald: 2 },
        apel: { emerald: 2 },
        jeruk: { emerald: 2 },
        mangga: { emerald: 2 },
        pisang: { emerald: 2 },
        
        bibitanggur: { aqua: 10 },
        bibitapel: { aqua: 10 },
        bibitjeruk: { aqua: 10 },
        bibitmangga: { aqua: 10 },
        bibitpisang: { aqua: 10 },
        
        centaur: { limit: 35 },
        griffin: { limit: 45 },
        kucing: { limit: 55 },
        naga: { limit: 65 },
        fox: { limit: 75 },
        kuda: { limit: 85 },
        phonix: { limit: 95 },
        wolf: { limit: 100 },
        
        petFood: { tiketcoin: 4 },
        makanancentaur: { tiketcoin: 6 },
        makanangriffin: { tiketcoin: 8 },
        makanankyubi: { tiketcoin: 10 },
        makanannaga: { tiketcoin: 12 },
        makananpet: { tiketcoin: 14 },
        makananphonix: { tiketcoin: 16 }
    },
    sell: {
        exp: { trash: 2 },
        limit: { eleksirb: 12 },
        diamond: { tiketcoin: 15 },
        joincount: { emasbatang: 25, },
        emerald: { money: 700 },
        berlian: { sword: 14 },
        kyubi: { aqua: 18 },
        gold: { exp: 1500 },
        money: { iron: 2 },
        tiketcoin: { kyubi: 14 },
        
        potion: { botol: 10 },
        aqua: { kaleng: 2 },
        trash: { umpan: 1 },
        wood: { coal: 5 },
        rock: { string: 4 },
        batu: { joincount: 2 },
        string: { kardus: 3 },
        iron: { healtmonster: 8 },
        coal: { money: 1 },
        botol: { aqua: 3 },
        kaleng: { batu: 1 },
        kardus: { pancingan: 2 },
        
        eleksirb: { rubah: 2 },
        emasbatang: { emasbiasa: 4 },
        emasbiasa: { potion: 2 },
        rubah: { petFood: 20 },
        sampah: { trash: 15 },
        serigala: { petFood: 22 },
        kayu: { wood: 13 },
        sword: { berlian: 2 },
        umpan: { exp: 20 },
        healtmonster: { diamond: 2 },
        pancingan: { money: 20 },
        
        common: { limit: 30 },
        uncoommon: { diamond: 45 },
        mythic: { berlian: 40 },
        pet: { money: 5000 },
        gardenboxs: { gold: 30 },
        legendary: { emerald: 70 },
        
        anggur: { joincount: 2 },
        apel: { tiketcoin: 2 },
        jeruk: { berlian: 2 },
        mangga: { gold: 2 },
        pisang: { diamond: 2 },
        
        bibitanggur: { potion: 1 },
        bibitapel: { kardus: 4 },
        bibitjeruk: { aqua: 3 },
        bibitmangga: { exp: 300 },
        bibitpisang: { kyubi: 4 },
        
        centaur: { anggur: 25 },
        griffin: { apel: 30 },
        kucing: { jeruk: 35 },
        naga: { mangga: 40 },
        fox: { pisang: 45 },
        kuda: { anggur: 65 },
        phonix: { apel: 75 },
        wolf: { jeruk: 85 },
        
        petFood: { money: 2500 },
        makanancentaur: { diamond: 7  },
        makanangriffin: { diamond: 9 },
        makanankyubi: { diamond: 13 },
        makanannaga: { diamond: 15 },
        makananpet: { diamond: 17 },
        makananphonix: { diamond: 19 },
    }
}

let handler = async (m, { command, conn, usedPrefix, args }) => {
let imgr = flaaa.getRandom()
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
${htki} *COMPRAR : BUY* ${htka}
`.trim()) : 
(`
${htki} *VENDER : SELL* ${htka}
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🔖 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝙍𝙏𝙄𝘾𝙐𝙇𝙊𝙎 : 𝙇𝙄𝙎𝙏 𝙊𝙁 𝘼𝙍𝙏𝙄𝘾𝙇𝙀𝙎
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `*» 1 ⇢ ${global.rpgshop.emoticon(v)}*\n*Cuesta:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*Compra* ${global.rpgshopp.emoticon(v)} Usando ${usedPrefix + command} ${v} *Cantidad*\n*---------------------------------------------------*\n`.trim()
    }).join('\n')}
✨ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 : 𝙎𝘼𝙈𝙋𝙇𝙀 𝙏𝙊 𝘽𝙐𝙔
*Use el comando de la siguiente forma:*
*» ${usedPrefix}${command} (articulo) (cantidad)*
*» ${usedPrefix}${command} (item) (quantity)*

*★ Ejemplo : Example*
*» ${usedPrefix}${command} potion 5*
`.trim()) : 
(`
🔖 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝙍𝙏𝙄𝘾𝙐𝙇𝙊𝙎 : 𝙇𝙄𝙎𝙏 𝙊𝙁 𝘼𝙍𝙏𝙄𝘾𝙇𝙀𝙎
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `*» 1 ⇢ ${global.rpgshop.emoticon(v)}*\n*Ganancia:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*Venda* ${global.rpgshopp.emoticon(v)} Usando ${usedPrefix + command} ${v} *Cantidad*\n*---------------------------------------------------*\n`.trim()
    }).join('\n')}
✨ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝙋𝘼𝙍𝘼 𝙑𝙀𝙉𝘿𝙀𝙍 : 𝙎𝘼𝙈𝙋𝙇𝙀 𝙏𝙊 𝙎𝙀𝙇𝙇
*Use el comando de la siguiente forma:*
*» ${usedPrefix}${command} (articulo) (cantidad)*
*» ${usedPrefix}${command} (item) (quantity)*

*★ Ejemplo : Example*
*» ${usedPrefix}${command} potion 5*
`.trim())
)
    image = (command.toLowerCase() == 'buy' ?
(imgr + 'COMPRAR : BUY') : 
(imgr + 'VENDER : SELL')
)
    buttons = (command.toLowerCase() == 'buy' ?
([
[`🏪 𝙏𝙄𝙀𝙉𝘿𝘼 𝙋𝘼𝙍𝘼 𝙑𝙀𝙉𝘿𝙀𝙍`, `${usedPrefix}sell`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
]) : 
([
[`🏪 𝙏𝙄𝙀𝙉𝘿𝘼 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍`, `${usedPrefix}buy`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
])
)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return conn.sendButton(m.chat, text, footer, image, buttons, m)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.sendButton(m.chat,
`*–『 INSUFFICIENT CREDIT 』–*`, 
`Necesitas *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} Compra *${total}* ${global.rpg.emoticon(item)}${item}.
Tienes *${user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} en túinventario.
–––––––––––––––––––––––––
ᴛɪᴩ :
ᴏᴩᴇɴ ᴄʀᴀᴛᴇs & ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs.
⮕ ᴛᴏ ᴏᴩᴇɴ ᴄʀᴀᴛᴇs:
.open crate
⮕ ᴛᴏ ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs:
.adventure | .daily | .monthly
`.trim(), imgr + 'RECURSOS BAJOS : LOW RESOURCES', [
[`𝙋𝙚𝙙𝙞𝙧 𝘼𝙮𝙪𝙙𝙖 | 𝘼𝙨𝙠 𝙛𝙤𝙧 𝙝𝙚𝙡𝙥 ☘️`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod}.
*» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} @${conn.getName(m.sender)}`]], m)
       
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
return conn.sendButton(m.chat,
`*––『 COMPRADO | BOUGHT 』––*`,
`${conn.getName(m.sender)} 
*𝙃𝙖𝙨 𝘾𝙤𝙢𝙥𝙧𝙖𝙙𝙤 ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
*--------------------------------------------*
*𝙂𝙖𝙨𝙩𝙤𝙨: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*
*𝘼𝙝𝙤𝙧𝙖 𝙩𝙞𝙚𝙣𝙚: ${user[item]} ${global.rpgshopp.emoticon(item)}*
`.trim(), imgr + 'COMPRA EXITOSA : DONE', [
[`👝 𝘾𝘼𝙍𝙏𝙀𝙍𝘼 | 𝙒𝘼𝙇𝙇𝙀𝙏`, `${usedPrefix}cartera`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
], m)
} else {
        if (user[item] < total) return m.reply(`No tienes suficiente *${global.rpg.emoticon(item)}${item}* para vender solo tienes ${user[item]} Recursos\n\nYou don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]}`)
       
      let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        user[item] -= total
        user[paymentMethod] += listItems[item][paymentMethod] * total
    
return conn.sendButton(m.chat,
`*––『 VENDIDO | SOLD 』––*`,
`${conn.getName(m.sender)} 
*𝙃𝙖𝙨 𝙑𝙚𝙣𝙙𝙞𝙙𝙤 ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
*--------------------------------------------*
*𝙂𝙖𝙣𝙖𝙣𝙘𝙞𝙖𝙨: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*
*𝘼𝙝𝙤𝙧𝙖 𝙩𝙞𝙚𝙣𝙚: ${user[paymentMethod]} ${global.rpgshopp.emoticon(paymentMethod)}*
`.trim(), imgr + 'VENTA EXITOSA : DONE', [
[`👝 𝘾𝘼𝙍𝙏𝙀𝙍𝘼 | 𝙒𝘼𝙇𝙇𝙀𝙏`, `${usedPrefix}cartera`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
], m)
}}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
