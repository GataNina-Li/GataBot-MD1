import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

/*const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉`,
rows: [
{title: "🎉 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼 | 𝙒𝙀𝙇𝘾𝙊𝙈𝙀", description: "𝘾𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙙𝙚 𝙡𝙖 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙂𝙧𝙪𝙥𝙤\n𝘾𝙤𝙣𝙩𝙚𝙣𝙩 𝙤𝙛 𝙩𝙝𝙚 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙛𝙤𝙧 𝙩𝙝𝙚 𝙂𝙧𝙤𝙪𝙥", rowId: `${usedPrefix + command} welcome`},
{title: "🔔 𝘿𝙀𝙏𝙀𝘾𝙏𝘼𝙍 | 𝘿𝙀𝘾𝙏𝙀𝘾𝙏", description: "𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤\n𝙂𝙧𝙤𝙪𝙥 𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨", rowId: `${usedPrefix + command} detect`},  
{title: "🆙 𝘼𝙐𝙏𝙊𝙇𝙀𝙑𝙀𝙇𝙐𝙋", description: "𝙎𝙪𝙗𝙚 𝙙𝙚 𝙣𝙞𝙫𝙚𝙡 𝘼𝙪𝙩𝙤𝙢á𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨\n𝙇𝙚𝙫𝙚𝙡 𝙪𝙥 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙡𝙡𝙮 𝙞𝙣 𝘾𝙝𝙖𝙩𝙨", rowId: `${usedPrefix + command} autolevelup`}, 
{title: "⛔ 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝙍 | 𝙍𝙀𝙎𝙏𝙍𝙄𝘾𝙏", description: "𝙐𝙨𝙖𝙧 𝙡𝙖𝙨 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙨𝙖𝙘𝙖𝙧 𝙮/𝙤 𝙖ñ𝙖𝙙𝙞𝙧 𝙚𝙣 𝙚𝙡 𝙂𝙧𝙪𝙥𝙤\n𝙐𝙨𝙚 𝙩𝙝𝙚 𝙛𝙪𝙣𝙘𝙩𝙞𝙤𝙣𝙨 𝙩𝙤 𝙧𝙚𝙢𝙤𝙫𝙚 𝙖𝙣𝙙/𝙤𝙧 𝙖𝙙𝙙 𝙞𝙣 𝙩𝙝𝙚 𝙂𝙧𝙤𝙪𝙥", rowId: `${usedPrefix + command} restrict`},	
{title: "🚫 𝘼𝙉𝙏𝙄𝙇𝙇𝘼𝙈𝘼𝙍 | 𝘼𝙉𝙏𝙄𝘾𝘼𝙇𝙇", description: "𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙧 𝙗𝙡𝙤𝙦𝙪𝙚𝙤𝙨 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙡𝙡𝙖𝙢𝙚𝙣 𝙤 𝙧𝙚𝙖𝙡𝙞𝙘𝙚𝙣 𝙫𝙞𝙙𝙚𝙤𝙡𝙡𝙖𝙢𝙖𝙙𝙖 𝙖𝙡 𝘽𝙤𝙩\n𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙗𝙡𝙤𝙘𝙠𝙨 𝙩𝙤 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙘𝙖𝙡𝙡 𝙤𝙧 𝙢𝙖𝙠𝙚 𝙖 𝙫𝙞𝙙𝙚𝙤 𝙘𝙖𝙡𝙡 𝙩𝙤 𝙩𝙝𝙚 𝘽𝙤𝙩", rowId: `${usedPrefix + command} anticall`},
{title: "🌐 𝙈𝙊𝘿𝙊 𝙋𝙐𝘽𝙇𝙄𝘾𝙊 | 𝙋𝙐𝘽𝙇𝙄𝘾 𝙈𝙊𝘿𝙀", description: "𝙐𝙨𝙖𝙧 𝙚𝙡 𝘽𝙤𝙩 𝙚𝙣 𝙈𝙤𝙙𝙤 𝙋𝙪𝙗𝙡𝙞𝙘𝙤 𝙤 𝙋𝙧𝙞𝙫𝙖𝙙𝙤\n𝙐𝙨𝙚 𝙩𝙝𝙚 𝘽𝙤𝙩 𝙞𝙣 𝙋𝙪𝙗𝙡𝙞𝙘 𝙤𝙧 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝙈𝙤𝙙𝙚", rowId: `${usedPrefix + command} public`},
{title: "👑 𝙈𝙊𝘿𝙊 𝘼𝘿𝙈𝙄𝙉 | 𝘼𝘿𝙈𝙄𝙉 𝙈𝙊𝘿𝙀", description: "𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝙍 𝙊 𝙉𝙊 𝙌𝙐𝙀 𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙐𝙎𝙀𝙉 𝙀𝙇 𝘽𝙊𝙏\n𝘼𝙇𝙇𝙊𝙒 𝙊𝙍 𝙉𝙊𝙏 𝙏𝙃𝘼𝙏 𝙊𝙉𝙇𝙔 𝘼𝘿𝙈𝙄𝙉𝙎 𝘾𝘼𝙉 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘽𝙊𝙏", rowId:  `${usedPrefix + command} modoadmin`},
{title: "✅ 𝙇𝙀𝘾𝙏𝙐𝙍𝘼 𝘼𝙐𝙏𝙊𝙈𝘼𝙏𝙄𝘾𝘼 | 𝘼𝙐𝙏𝙊𝙍𝙀𝘼𝘿", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙩𝙚𝙣𝙜𝙖 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙘𝙤𝙢𝙤 𝙇𝙚í𝙙𝙤\n𝙈𝙖𝙠𝙚 𝙩𝙝𝙚 𝘽𝙤𝙩 𝙝𝙖𝙫𝙚 𝙩𝙝𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙖𝙨 𝙍𝙚𝙖𝙙", rowId: `${usedPrefix + command} autoread`},
{title: "🐈 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 | 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙇𝙔 ", description: "𝙋𝙖𝙧𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙤 𝙣𝙤 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙨𝙚 𝙪𝙣𝙖 𝙩𝙚𝙢𝙥𝙤𝙧𝙖𝙡𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝙂𝙧𝙪𝙥𝙤𝙨\n𝙏𝙤 𝙩𝙚𝙢𝙥𝙤𝙧𝙖𝙧𝙞𝙡𝙮 𝙖𝙡𝙡𝙤𝙬 𝙤𝙧 𝙙𝙞𝙨𝙖𝙡𝙡𝙤𝙬 𝙩𝙝𝙚 𝙗𝙤𝙩 𝙩𝙤 𝙟𝙤𝙞𝙣 𝙞𝙣 𝙂𝙧𝙤𝙪𝙥𝙨", rowId: `${usedPrefix + command} temporal`},
{title: "🎠 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙚 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩\n𝙃𝙖𝙫𝙚 𝙩𝙝𝙚 𝙗𝙤𝙩 𝙨𝙚𝙣𝙙 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨", rowId: `${usedPrefix + command} stickers`},	
{title: "🪄 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍", description: "𝙏𝙤𝙙𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙫𝙞𝙙𝙚𝙤, 𝙂𝙞𝙛, 𝙚𝙣𝙡𝙖𝙘𝙚 𝙟𝙥𝙜 𝙎𝙚 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙖 𝙚𝙣 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚\n𝘼𝙡𝙡 𝙞𝙢𝙖𝙜𝙚, 𝙫𝙞𝙙𝙚𝙤, 𝙂𝙞𝙛, 𝙟𝙥𝙜 𝙡𝙞𝙣𝙠𝙨 𝙒𝙞𝙡𝙡 𝘽𝙚 𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙚𝙙 𝙏𝙤 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙡𝙡𝙮", rowId: `${usedPrefix + command} autosticker`},	
{title: "🤡 𝙍𝙀𝘼𝘾𝘾𝙄𝙊𝙉𝙀𝙎 | 𝙍𝙀𝘼𝘾𝙏𝙄𝙊𝙉𝙎", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙧𝙚𝙖𝙘𝙘𝙞𝙤𝙣𝙚 𝙖 𝙈𝙚𝙣𝙨𝙖𝙟𝙚𝙨\n𝙈𝙖𝙠𝙚 𝙩𝙝𝙚 𝘽𝙤𝙩 𝙧𝙚𝙖𝙘𝙩 𝙩𝙤 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨", rowId: `${usedPrefix + command} reaction`},
{title: "🔊 𝘼𝙐𝘿𝙄𝙊𝙎", description: "𝙐𝙨𝙖𝙧 𝙡𝙤𝙨 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙚 𝘼𝙪𝙙𝙞𝙤𝙨\n𝙐𝙨𝙚 𝘼𝙪𝙙𝙞𝙤 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨", rowId: `${usedPrefix + command} audios`},	
{title: "🔞 𝙈𝙊𝘿𝙊 𝙃𝙊𝙍𝙉𝙔 | 𝙈𝙊𝘿𝙀 +18", description: "𝙈𝙤𝙨𝙩𝙧𝙖𝙧 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 +18\n𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 +18", rowId: `${usedPrefix + command} modohorny`},	
{title: "☢️ 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾𝙊𝙎 | 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙨𝙤𝙣 𝙫𝙪𝙡𝙜𝙖𝙧𝙚𝙨 𝙚𝙣 𝙂𝙧𝙪𝙥𝙤𝙨\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙖𝙧𝙚 𝙫𝙪𝙡𝙜𝙖𝙧 𝙞𝙣 𝙂𝙧𝙤𝙪𝙥𝙨", rowId: `${usedPrefix + command} antitoxic`}, 
{title: "👀 𝘼𝙉𝙏𝙄 𝙑𝙀𝙍 | 𝘼𝙉𝙏𝙄 𝙎𝙀𝙀", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙣𝙖𝙙𝙖 𝙨𝙚 𝙤𝙘𝙪𝙡𝙩𝙚 𝙚𝙣 𝙂𝙧𝙪𝙥𝙤𝙨\n𝙈𝙖𝙠𝙚 𝙣𝙤𝙩𝙝𝙞𝙣𝙜 𝙝𝙞𝙙𝙚 𝙞𝙣 𝙂𝙧𝙤𝙪𝙥𝙨", rowId: `${usedPrefix + command} antiver`},
{title: "🗑️ 𝘼𝙉𝙏𝙄𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 | 𝘼𝙉𝙏𝙄𝘿𝙀𝙇𝙀𝙏𝙀", description: "𝙇𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨, 𝙚𝙡 𝘽𝙤𝙩 𝙡𝙤 𝙢𝙤𝙨𝙩𝙧𝙖𝙧𝙖\n𝘿𝙚𝙡𝙚𝙩𝙚𝙙 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨, 𝙩𝙝𝙚 𝘽𝙤𝙩 𝙬𝙞𝙡𝙡 𝙨𝙝𝙤𝙬 𝙞𝙩", rowId: `${usedPrefix + command} antidelete`},	
{title: "🌏 𝘼𝙉𝙏𝙄 𝙄𝙉𝙏𝙀𝙍𝙉𝘼𝘾𝙄𝙊𝙉𝘼𝙇", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙣𝙪𝙢𝙚𝙧𝙤𝙨 𝙚𝙣 𝙡𝙤𝙨 𝙂𝙧𝙪𝙥𝙤𝙨 𝙘𝙤𝙣𝙨𝙞𝙙𝙚𝙧𝙖𝙙𝙤𝙨 𝙛𝙖𝙡𝙨𝙤𝙨\n𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙩𝙚 𝙣𝙪𝙢𝙗𝙚𝙧𝙨 𝙞𝙣 𝙩𝙝𝙚 𝙂𝙧𝙤𝙪𝙥𝙨 𝙘𝙤𝙣𝙨𝙞𝙙𝙚𝙧𝙚𝙙 𝙁𝙖𝙠𝙚", rowId: `${usedPrefix + command} antifake`},
{title: "🔗 𝘼𝙉𝙏𝙄 𝙀𝙉𝙇𝘼𝘾𝙀𝙎 | 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙡𝙞𝙣𝙠𝙨 𝙛𝙧𝙤𝙢 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝙂𝙧𝙤𝙪𝙥𝙨", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 𝘼𝙉𝙏𝙄 𝙀𝙉𝙇𝘼𝘾𝙀𝙎 2 |𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 2", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙦𝙪𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙜𝙖 𝙝𝙩𝙩𝙥𝙨\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙡𝙞𝙣𝙠𝙨 𝙘𝙤𝙣𝙩𝙖𝙞𝙣𝙞𝙣𝙜 𝙝𝙩𝙩𝙥𝙨", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔗 𝘼𝙉𝙏𝙄 𝙏𝙄𝙆𝙏𝙊𝙆", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙚𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙨𝙚𝙣𝙙 𝙡𝙞𝙣𝙠𝙨 𝙛𝙧𝙤𝙢 𝙏𝙞𝙠𝙏𝙤𝙠", rowId: `${usedPrefix + command} antitiktok`},
{title: "🔗 𝘼𝙉𝙏𝙄 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙚𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙨𝙚𝙣𝙙 𝙡𝙞𝙣𝙠𝙨 𝙛𝙧𝙤𝙢 𝙔𝙤𝙪𝙏𝙪𝙗𝙚", rowId: `${usedPrefix + command} antiyoutube`},
{title: "🔗 𝘼𝙉𝙏𝙄 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙚𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙨𝙚𝙣𝙙 𝙡𝙞𝙣𝙠𝙨 𝙛𝙧𝙤𝙢 𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢", rowId: `${usedPrefix + command} antitelegram`},
{title: "🔗 𝘼𝙉𝙏𝙄 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙚𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙨𝙚𝙣𝙙 𝙡𝙞𝙣𝙠𝙨 𝙛𝙧𝙤𝙢 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠", rowId: `${usedPrefix + command} antifacebook`},
{title: "🔗 𝘼𝙉𝙏𝙄 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙚𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙨𝙚𝙣𝙙 𝙡𝙞𝙣𝙠𝙨 𝙛𝙧𝙤𝙢 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢", rowId: `${usedPrefix + command} antiinstagram`},
{title: "🔗 𝘼𝙉𝙏𝙄 𝙏𝙒𝙄𝙏𝙏𝙀𝙍", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙚𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙏𝙬𝙞𝙩𝙩𝙚𝙧\n𝙍𝙚𝙢𝙤𝙫𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙬𝙝𝙤 𝙨𝙚𝙣𝙙 𝙡𝙞𝙣𝙠𝙨 𝙛𝙧𝙤𝙢 𝙏𝙬𝙞𝙩𝙩𝙚𝙧", rowId: `${usedPrefix + command} antitwitter`},
{title: "⚜️ 𝙋𝘾𝙊𝙉𝙇𝙔", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙨𝙤𝙡𝙤 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨 𝙋𝙧𝙞𝙫𝙖𝙙𝙤𝙨\n𝙍𝙚𝙥𝙡𝙮 𝙤𝙣𝙡𝙮 𝙞𝙣 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝘾𝙝𝙖𝙩𝙨", rowId: `${usedPrefix + command} pconly`},
{title: "⚜️ 𝙂𝘾𝙊𝙉𝙇𝙔", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙨𝙤𝙡𝙤 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨\n𝙈𝙖𝙠𝙚 𝙩𝙝𝙚 𝘽𝙤𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙙 𝙤𝙣𝙡𝙮 𝙞𝙣 𝙂𝙧𝙤𝙪𝙥 𝘾𝙝𝙖𝙩𝙨", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)

const listMessage = {
text: '*~ CENTRO DE CONFIGURACIÓN*',
footer: `╭━━━[ *𝘼𝙅𝙐𝙎𝙏𝙀𝙎 𝙂𝘼𝙏𝘼𝘽𝙊𝙏* ]━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟 *¡Hola | Hi!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣
╭━━━━━━━━━━━━━⬣
┃ *𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙊 𝙐𝙎𝙀*
┃ *𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos | detect*_
┃⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restringir | restrict*_
┃⚙️ _${usedPrefix}on *:* off *antillamar | anticall*_
┃⚙️ _${usedPrefix}on *:* off *publico | public*_
┃⚙️ _${usedPrefix}on *:* off *autovisto | autoread*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reacciones | reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃⚙️ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃⚙️ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃⚙️ _${usedPrefix}on *:* off *sologrupos | gconly*_
╰━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝙍",
sections }*/

let titulo = [
lenguajeGB.smsParaAdmins(),
"Grupo3",
"Grupo2",
"Grupo4"]

let nombre = [
lenguajeGB.smsWel1(),
"Prueba2",
"Prueba3",
"Prueba4"]

let descripción = [
lenguajeGB.smsWel2(),
"Esto es prueba2",
"Esto es prueba3",
"Esto es prueba4"]

let comando = [
"welcome",
"prueba2",
"prueba3",
"prueba4"]

let sections = Object.keys(nombre, descripción, comando, titulo).map((v, index) => ({
title: `${titulo[v]}`,
rows: [{
title: `${nombre[v]} : ${command} ${comando[v]}`, description: `No.${1 + index} ${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v],
}], }))

let name = await conn.getName(m.sender)
const listMessage = {
text: '*~ CENTRO DE CONFIGURACIÓN*',
footer: `╭━━━[ *𝘼𝙅𝙐𝙎𝙏𝙀𝙎 𝙂𝘼𝙏𝘼𝘽𝙊𝙏* ]━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟 *¡Hola | Hi!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣
╭━━━━━━━━━━━━━⬣
┃ *𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙊 𝙐𝙎𝙀*
┃ *𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ En Mantnimiento...
╰━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝙍",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect':
case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
    
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
		
case 'antidelete': 
case 'antieliminar':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
    
case 'public':
case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink':
case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2':
case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok':
case 'antitk':
case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube':
case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram':
case 'antitl':
case 'antitele':
case 'antitg':
case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook':
case 'antifb':
case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram':
case 'antinstagram':
case 'antiig':
case 'antig':
case 'antiinsta':
case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter':
case 'antitw':
case 'antitwit':
case 'antitwter':
case 'antitwiter':
case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break
    
case 'modohorny':
case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
    
//case 'autolevelup':
//case 'autonivel':
//isUser = true
//user.autolevelup = isEnable
//break
		
case 'autolevelup':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction':
case 'reaccion':
case 'emojis':
case 'antiemojis':
case 'reacciones':
case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic':
case 'antitoxicos':
case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver':
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antiinternacional':
case 'antinternacional':
case 'antinternational':
case 'antifake':
case 'antifalsos':
case 'antivirtuales':
case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
    
case 'restrict':
case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread':
case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
    
case 'anticall':
case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'antispam':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiSpam = isEnable          
break
 
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
   
case 'pconly':
case 'privateonly':
case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly':
case 'grouponly':
case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
    
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	
//if (!/[01]/.test(command)) return conn.sendListM(m.chat, button, row, fkontak)
throw false
}
//conn.sendButton
	
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoRG']()}ღ *_COMANDO_* *|* ${type} 
ღ *_ACTUALMENTE_* *|* ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'} 
ღ *_EN ESTE_* *|* ${isAll ? 'BOT' : isUser ? '' : 'CHAT'}`, wm, null, [[`${isEnable ? '🔕 DESACTIVAR' : '🔔 ACTIVAR'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 🍀', '.menu']], fkontak, m)}
//await conn.sendButton(m.chat, null, ajuste, null, [['🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 🌟', `/infomenu`], ['⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️', `/on`]], fkontak, m)
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
