import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=rey2k22')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.result.female, null, 'Cewe', m)
conn.sendButton(m.chat, 'Cowo', wm, json.result.male, [['next', '.ppcp']], m)

}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i


export default handler
