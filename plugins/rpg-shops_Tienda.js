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
        
        eleksirb: { healtmonster: 8 },
        emasbatang: { kayu: 4},
        emasbiasa: { diamond: 30 },
        rubah: { berlian: 45 },
        sampah: { trash: 200 },
        serigala: { kaleng: 150 },
        kayu: { wood: 40 },
        sword: { gold: 2 },
        umpan: { string: 4 },
        healtmonster: { kyubi: 35 },
        pancingan: { iron: 4 },
        
        common: { berlian: 30 },
        uncommon: { berlian: 40 },
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
        exp: { emerald: 22 },
        limit: { money: 1250 },
        diamond: { money: 500 },
        joincount: { money: 4, },
        emerald: { money: 700 },
        berlian: { money: 850 },
        kyubi: { money: 400 },
        gold: { money: 3000 },
        money: { money: 7500 },
        tiketcoin: { money: 8500 },
        
        potion: { money: 3500 },
        aqua: { money: 1500 },
        trash: { money: 200 },
        wood: { money: 2000 },
        rock: { money: 25000 },
        batu: { money: 75000 },
        string: { money: 3500 },
        iron: { money: 40000 },
        coal: { money: 120000 },
        botol: { money: 120000 },
        kaleng: { money: 2000 },
        kardus: { money: 2000 },
        
        eleksirb: { money: 2000 },
        emasbatang: { money: 2000 },
        emasbiasa: { money: 2000 },
        rubah: { money: 2000 },
        sampah: { money: 2000 },
        serigala: { money: 2000 },
        kayu: { money: 2000 },
        sword: { money: 2000 },
        umpan: { money: 2000 },
        healtmonster: { money: 2000 },
        pancingan: { money: 2000 },
        
        common: { money: 2000 },
        uncommon: { money: 2000 },
        mythic: { money: 2000 },
        pet: { money: 2000 },
        gardenboxs: { money: 2000 },
        legendary: { money: 2000 },
        
        anggur: { money: 2000 },
        apel: { money: 2000 },
        jeruk: { money: 2000 },
        mangga: { money: 2000 },
        pisang: { money: 2000 },
        
        bibitanggur: { money: 2000 },
        bibitapel: { money: 2000 },
        bibitjeruk: { money: 2000 },
        bibitmangga: { money: 2000 },
        bibitpisang: { money: 2000 },
        
        centaur: { money: 2000 },
        griffin: { money: 2000 },
        kucing: { money: 2000 },
        naga: { money: 2000 },
        fox: { money: 2000 },
        kuda: { money: 2000 },
        phonix: { money: 200 },
        wolf: { money: 2000 },
        
        petFood: { money: 2000 },
        makanancentaur: { money: 2000  },
        makanangriffin: { money: 2000 },
        makanankyubi: { money: 2000 },
        makanannaga: { money: 2000 },
        makananpet: { money: 2000 },
        makananphonix: { money: 2000 },
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
        //return `» 1 ${global.rpgshop.emoticon(v)}\nCuesta: ${listItems[paymentMethod]}\n\nTiene: ${global.rpgshopp.emoticon(v)} = ${user.v}\nCompre ${global.rpgshopp.emoticon(v)} Usando ${v}`.trim()
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
        //return `» 1 ${global.rpg.emoticon(v)}${v}\n﹫ ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}\n\n${paymentMethod}`.trim()
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
[`💎 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀 𝙓5 | 𝘽𝙐𝙔`, `${usedPrefix}buy limit 5`],
[`🥤 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙋𝙊𝘾𝙄𝙊𝙉 𝙓5 | 𝘽𝙐𝙔`, `${usedPrefix}buy potion 5`]
]) : 
([
[`💎 𝙑𝙀𝙉𝘿𝙀𝙍 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀 𝙓5 | 𝙎𝙀𝙇𝙇`, `${usedPrefix}sell potion 5`],
[`🥤 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝙊𝘾𝙄𝙊𝙉 𝙓5 | 𝙎𝙀𝙇𝙇`, `${usedPrefix}sell trash 5`]
])
)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return conn.sendButton(m.chat, text, footer, image, buttons, m)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.sendButton(m.chat,
`*–『 INSUFFICIENT CREDIT 』–*`, 
`ʏᴏᴜ ɴᴇᴇᴅ ᴇxᴛʀᴀ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ʙᴜʏ *${total}* ${global.rpg.emoticon(item)}${item}.
ʏᴏᴜ'ᴠᴇ *${user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ɪɴ ʙᴀɢ.
–––––––––––––––––––––––––
ᴛɪᴩ :
ᴏᴩᴇɴ ᴄʀᴀᴛᴇs & ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs.
⮕ ᴛᴏ ᴏᴩᴇɴ ᴄʀᴀᴛᴇs:
.open crate
⮕ ᴛᴏ ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs:
.adventure | .daily | .monthly
`.trim(), imgr + 'lowcredit', [
[`ᴀsᴋ ᴛᴏ ᴀʟʟ`, `${usedPrefix}tagall sᴏᴍᴇʙᴏᴅʏ ᴩʟᴇᴀsᴇ sᴇɴᴅ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ᴍᴇ.
⮕ ᴛᴏ ᴛʀᴀɴsғᴇʀ ${paymentMethod}:
${usedPrefix}transfer ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} @${conn.getName(m.sender)}`]
], m)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return conn.sendButton(m.chat,
`*––『 COMPRADO | BOUGHT 』––*`,
`${conn.getName(m.sender)} *𝙃𝙖𝙨 𝘾𝙤𝙢𝙥𝙧𝙖𝙙𝙤 ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
`.trim(), imgr + 'COMPRA EXITOSA : DONE', [
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
], m)
    } else {
        if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
       
       let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        user[item] -= total
        user.money += listItems[item].money * total
        return conn.sendButton(m.chat,
`*––『 VENDIDO | SOLD 』––*`,
`${conn.getName(m.sender)} 
*𝙃𝙖𝙨 𝙑𝙚𝙣𝙙𝙞𝙙𝙤 ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
*--------------------------------------------*
*𝙂𝙖𝙣𝙖𝙣𝙘𝙞𝙖𝙨 𝙙𝙚: ${user[paymentMethod]}*`.trim(), imgr + 'VENTA EXITOSA : DONE', [
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
], m)}
}
}

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
