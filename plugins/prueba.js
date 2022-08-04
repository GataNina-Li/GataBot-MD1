let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';
//let img = 'https://i.imgur.com/8fK4h6F.jpg'

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
    if (!args[0]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n${usedPrefix + command} enlace y número por hora*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 1*`
    let [_, code] = args[0].match(linkRegex) || []
    
    if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
    let user = db.data.users[m.sender]

    if (!(isPrems || isOwner || isROwner)) {
      let img = 'https://i.imgur.com/8fK4h6F.jpg'
        if (user.joincount === 0 ) throw `${ag}*¡YA NO TIENES TOKENS!*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TÚ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, `${eg}*SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => {
            var jumlahHari = 600000 * 1 // 1 Hora | Usuarios
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `SE HA UNIDO AL GRUPO ${await conn.getName(res)}\n*RECUERDE QUE ES TEMPORAL USE EL COMANDO ${usedPrefix}menu PARA VER EL MENÚ*\n\n*ME SALDRÉ AUTOMÁTICAMENTE DESPUÉS DE:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n*LE QUEDA ${user.joincount} TOKENS*`, m)
                await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} es un bot de whatsapp construido con Nodejs, ${conn.user.name} Invitado por @${m.sender.split(`@`)[0]}\n\nEscribe ${usedPrefix}menu para ver una lista de comandos\nEl bot saldrá automáticamente después de *${msToDate(global.db.data.chats[res].expired - now)}*`.trim(), wm, 'Menu', usedPrefix + `menu`, 'Creadora', usedPrefix + `owner`, { mentions: [m.sender] })
                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                        conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                    //m.reply(`@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
                }
        })
    } else if ((isOwner || !isPrems || isROwner)) {
        if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n${usedPrefix + command} enlace y número por hora*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 1*`
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Holaaaa', m).then(async() => { 
          let img = 'https://i.imgur.com/8fK4h6F.jpg'
            var jumlahHari = 600000 * args[1]
            var now = new Date() * 1
            //let b = namabot
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
            let teks = `${wm} es un bot de whatsapp construido con Nodejs y usa un servidor que es bastante rápido pero no muy rápido jajaj.\n\n${wm} Invitado por @${m.sender.split(`@`)[0]}\n\nEscribe ${usedPrefix}menu para ver una lista de comandos\nEl bot saldrá automáticamente después de *${msToDate(global.db.data.chats[res].expired - now)}*`.trim()
            await conn.reply(m.chat, `SE HA UNIDO AL GRUPO ${await conn.getName(res)}\n*RECUERDE QUE ES TEMPORAL USE EL COMANDO ${usedPrefix}menu PARA VER EL MENÚ*\n\n*ME SALDRÉ AUTOMÁTICAMENTE DESPUÉS DE:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n*LE QUEDA ${user.joincount} TOKENS*`, m)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
                let data = (await conn.onWhatsApp(jid))[0] || {}
                if (data.exists)
                    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                //m.reply(`@${m.sender.split`@`[0]} adicional ${conn.user.name} ke ${await conn.getName(res)} jid: ${res}, el bot saldrá a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
            }
            //await conn.send2ButtonImg(res, await (await fetch(img)).buffer(), teks, wm, 'Menu', usedPrefix + `menu`, 'Creadora', usedPrefix + `owner`)
            conn.sendButton(m.chat, teks, wm, null, [['Creadora', `/creadora`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, res)
        })
    /*} else if ((isPrems || !isOwner || !isROwner)) {
      let img = 'https://i.imgur.com/8fK4h6F.jpg'
        if (user.joincount === 0) throw `¡Has excedido el token/límite de agregar bots al grupo!`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Uniéndose al grupo...', m).then(async() => {
            var jumlahHari = 120000 * 30
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Se unió al grupo con éxito ${await conn.getName(res)}\nEl bot saldrá automáticamente después de: ${msToDate(global.db.data.chats[res].expired - now)}.\nToken de recuento mu: ${user.joincount}/1`, m)
                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                    m.reply(`@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)} jid: ${res}, el bot se apagará a tiempo:: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
                }
            conn.sendButton(m.chat, res, `${conn.user.name} es un bot de whatsapp construido con Nodejs, ${conn.user.name} Invitado por @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu para ver una lista de comandos\nEl bot saldrá automáticamente después de *${msToDate(global.db.data.chats[res].expired - now)}*`, wm, null, [['Creadora', `/creadora`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
           // await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} es un bot de whatsapp construido con Nodejs, ${conn.user.name} Invitado por @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu para ver una lista de comandos\nEl bot saldrá automáticamente después de *${msToDate(global.db.data.chats[res].expired - now)}*`.trim(), wm, 'Menu', usedPrefix + `menu`, 'Creadora', usedPrefix + `owner`, { mentions: [m.sender] })
        })*/
    } 
    if (command == 'tiempo') {
        let [_, code] = args[0].match(linkRegex) || []
        let res = await conn.groupAcceptInvite
     conn.reply(m.chat, `${rg}*${await conn.getName(res)} EN ESTE GRUPO QUEDA EL SIGUIENTE TIEMPO PARA QUE CADUQUE EL\LOS TOKEN(S):*\n\n${msToDate(global.db.data.chats[res].expired - now)}`, m)   
    }
}
handler.help = ['join <link> <time>']
handler.tags = ['owner']
//handler.limit = true
handler.command = /^(temporal|tiempo)$/i

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Día(s) ☀️\n" + hours + " Hora(s) 🕐\n" + minutes + " Minuto(s) ⏰\n" + sec + " Segundo(s) 🕐\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
