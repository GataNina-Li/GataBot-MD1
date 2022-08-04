let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';
//let img = 'https://i.imgur.com/8fK4h6F.jpg'

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
    if (!args[0]) throw `donde esta el enlace`
    let [_, code] = args[0].match(linkRegex) || []
    if (!code) throw 'Link incorrecto'
    let user = db.data.users[m.sender]

    if (!(isPrems || isOwner || isROwner)) {
      let img = 'https://i.imgur.com/8fK4h6F.jpg'
        if (user.joincount === 0 ) throw `¡Has excedido el token/límite de agregar bots al grupo!\n¡compre premium para que pueda agregar bots al grupo nuevamente!`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Uniéndose al grupo...', m).then(async() => {
            var jumlahHari = 60 * 0.1
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Se unió al grupo con éxito ${await conn.getName(res)}\nEl bot saldrá automáticamente después de: ${msToDate(global.db.data.chats[res].expired - now)}.\nToken de recuento mu: ${user.joincount}/1`, m)
                await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} es un bot de whatsapp construido con Nodejs, ${conn.user.name} Invitado por @${m.sender.split(`@`)[0]}\n\nEscribe ${usedPrefix}menu para ver una lista de comandos\nEl bot saldrá automáticamente después de *${msToDate(global.db.data.chats[res].expired - now)}*`.trim(), wm, 'Menu', usedPrefix + `menu`, 'Creadora', usedPrefix + `owner`, { mentions: [m.sender] })
                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                    m.reply(`@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
                }
        })
    } else if ((isOwner || !isPrems || isROwner)) {
        if (!args[1]) throw `Introduzca el formato correcto! formato: ${usedPrefix}join <enlace> <número de días>`
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Holaaaa', m).then(async() => { 
          let img = 'https://i.imgur.com/8fK4h6F.jpg'
            var jumlahHari = 60 * args[1]
            var now = new Date() * 1
            //let b = namabot
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
            let teks = `${wm} es un bot de whatsapp construido con Nodejs y usa un servidor que es bastante rápido pero no muy rápido jajaj.\n\n${wm} Invitado por @${m.sender.split(`@`)[0]}\n\nEscribe ${usedPrefix}menu para ver una lista de comandos\nEl bot saldrá automáticamente después de *${msToDate(global.db.data.chats[res].expired - now)}*`.trim()
            await conn.reply(m.chat, `Se unió al grupo con éxito *${await conn.getName(res)}*\nEl bot saldrá automáticamente después de: ${msToDate(global.db.data.chats[res].expired - now)}`, m)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
                let data = (await conn.onWhatsApp(jid))[0] || {}
                if (data.exists)
                m.reply(`@${m.sender.split`@`[0]} adicional ${conn.user.name} ke ${await conn.getName(res)} jid: ${res}, el bot saldrá a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
            }
            await conn.send2ButtonImg(res, await (await fetch(img)).buffer(), teks, wm, 'Menu', usedPrefix + `menu`, 'Creadora', usedPrefix + `owner`)
        })
    } else if ((isPrems || !isOwner || !isROwner)) {
      let img = 'https://i.imgur.com/8fK4h6F.jpg'
        if (user.joincount === 0) throw `¡Has excedido el token/límite de agregar bots al grupo!`
        user.joincount -= 1
        let res = await conn.groupAcceptInvite(code)
        conn.reply(m.chat, 'Uniéndose al grupo...', m).then(async() => {
            var jumlahHari = 60 * 30
            var now = new Date() * 1
            if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
            else global.db.data.chats[res].expired = now + jumlahHari
                conn.reply(m.chat, `Se unió al grupo con éxito ${await conn.getName(res)}\nEl bot saldrá automáticamente después de: ${msToDate(global.db.data.chats[res].expired - now)}.\nToken de recuento mu: ${user.joincount}/1`, m)
                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                    m.reply(`@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)} jid: ${res}, el bot se apagará a tiempo:: ${msToDate(global.db.data.chats[res].expired - now)}`.trim(), data.jid, { mentions: [m.sender] })
                }
            await conn.send2ButtonImg(res, await(await fetch(img)).buffer(), `${conn.user.name} es un bot de whatsapp construido con Nodejs, ${conn.user.name} Invitado por @${m.sender.split(`@`)[0]}\n\nKetik ${usedPrefix}menu para ver una lista de comandos\nEl bot saldrá automáticamente después de *${msToDate(global.db.data.chats[res].expired - now)}*`.trim(), wm, 'Menu', usedPrefix + `menu`, 'Creadora', usedPrefix + `owner`, { mentions: [m.sender] })
        })
    }
}
handler.help = ['join <link> <time>']
handler.tags = ['owner']
//handler.limit = true
handler.command = /^(temporal)$/i

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
    return days + " Days ☀️\n" + hours + " Hours 🕐\n" + minutes + " Minute ⏰\n" + sec + " Segundos 🕐";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
