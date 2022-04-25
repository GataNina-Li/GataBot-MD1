import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)

    let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.user_picture)).buffer()
    m.reply(`
Username: ${json.result.username}
Nickname: ${json.result.nickname}
Followers: ${json.result.followers}
Following: ${json.result.followings}
Likes: ${json.result.likes}
Video: ${json.result.video}
Bio: ${json.result.bio}
`.trim())
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i

export default handler
