const items = {
   buy: {
        exp: { eleksirb: 3 }, 
        limit: { money: 400 },
        diamond: { berlian: 5 },
        joincount: { limit: 15 },
        emerald: { emasbatang: 5 },
        berlian: { kyubi: 25 },
        kyubi: { trash: 15 },  
        gold: {  diamond: 35 },
        money: { kaleng: 2 },
        tiketcoin: { joincount: 3 },
        
        potion: { money: 550 },
        aqua: { botol: 2 },
        trash: { eleksirb: 5 },
        wood: { string: 5 },
        rock: { kardus: 6 },
        batu: { coal: 25 },
        string: { kaleng: 4 },
        iron: { kyubi: 20 },
        coal: { trash: 20 },
        botol: { wood: 4 },
        kaleng: { potion: 2 },
        kardus: { trash: 20 },
        
        eleksirb: { healtmonster: 2},
        emasbatang: { kayu: 30},
        emasbiasa: { diamond: 18 },
        rubah: { berlian: 40 },
        sampah: { trash: 70 },
        serigala: { kaleng: 125 },
        kayu: { wood: 40 },
        sword: { gold: 2 },
        umpan: { string: 8 },
        healtmonster: { kyubi: 19 },
        pancingan: { iron: 2 },
        emas: { berlian: 20 },
        
        common: { aqua: 40 },
        uncoommon: { kyubi: 55 },
        mythic: { tiketcoin: 17 },
        pet: { kayu: 45 },
        gardenboxs: { healtmonster: 25 },
        legendary: { emerald: 75 },
        
        anggur: { emerald: 3 },
        apel: { emerald: 3 },
        jeruk: { emerald: 3 },
        mangga: { emerald: 3 },
        pisang: { emerald: 3 },
        
        bibitanggur: { aqua: 15 },
        bibitapel: { aqua: 15 },
        bibitjeruk: { aqua: 15 },
        bibitmangga: { aqua: 15 },
        bibitpisang: { aqua: 15 },
        
        centaur: { limit:45 },
        griffin: { limit: 55 },
        kucing: { limit: 70 },
        naga: { limit: 85 },
        fox: { limit: 100 },
        kuda: { limit: 125 },
        phonix: { limit: 140 },
        wolf: { limit: 155 },
        
        petFood: { tiketcoin: 4 },
        makanancentaur: { tiketcoin: 6 },
        makanangriffin: { tiketcoin: 8 },
        makanankyubi: { tiketcoin: 10 },
        makanannaga: { tiketcoin: 12 },
        makananpet: { tiketcoin: 14 },
        makananphonix: { tiketcoin: 16 }
    },
    sell: {
        exp: { trash: 1 },
        limit: { eleksirb: 4 },
        diamond: { tiketcoin: 2 },
        joincount: { emasbatang: 2, },
        emerald: { money: 500 },
        berlian: { sword: 3 },
        kyubi: { aqua: 3 },
        gold: { exp: 1000 },
        money: { aqua: 2 },
        tiketcoin: { kyubi: 2 },
        
        potion: { botol: 3 },
        aqua: { kaleng: 2 },
        trash: { umpan: 2 },
        wood: { coal: 2 },
        rock: { string: 2 },
        batu: { joincount: 1 },
        string: { kardus: 2 },
        iron: { healtmonster: 3 },
        coal: { money: 30 },
        botol: { aqua: 2 },
        kaleng: { batu: 1 },
        kardus: { pancingan: 2 },
        
        eleksirb: { rubah: 2 },
        emasbatang: { emasbiasa: 3 },
        emasbiasa: { potion: 1 },
        rubah: { petFood: 4 },
        sampah: { trash: 20 },
        serigala: { petFood: 22 },
        kayu: { wood: 5 },
        sword: { berlian: 1 },
        umpan: { exp: 40 },
        healtmonster: { diamond: 2 },
        pancingan: { money: 30 },
        emas: { berlian: 3 },
        
        common: { limit: 10 },
        uncoommon: { diamond: 15 },
        mythic: { berlian: 13 },
        pet: { money: 1500 },
        gardenboxs: { gold: 3 },
        legendary: { emerald: 20 },
        
        anggur: { joincount: 2 },
        apel: { tiketcoin: 2 },
        jeruk: { berlian: 2 },
        mangga: { gold: 2 },
        pisang: { diamond: 2 },
        
        bibitanggur: { potion: 2 },
        bibitapel: { umpan: 3 },
        bibitjeruk: { healtmonster: 1 },
        bibitmangga: { pancingan: 3 },
        bibitpisang: { wood: 4 },
        
        centaur: { anggur: 5 },
        griffin: { apel: 4 },
        kucing: { jeruk: 6 },
        naga: { mangga: 8 },
        fox: { pisang: 9 },
        kuda: { anggur: 10 },
        phonix: { apel: 12 },
        wolf: { jeruk: 15 },
        
        petFood: { money: 1400 },
        makanancentaur: { diamond: 2  },
        makanangriffin: { diamond: 3 },
        makanankyubi: { diamond: 4 },
        makanannaga: { diamond: 4 },
        makananpet: { diamond: 5 },
        makananphonix: { diamond: 5 },
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
