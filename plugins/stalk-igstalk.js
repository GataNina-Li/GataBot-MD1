import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example use ${usedPrefix}${command} <username>`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* Followers
*${followingH}* Following
*${postsH}* Posts
*Bio:* ${description}
`.trim())
}

handler.help = ['instagramstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']

handler.command = /^(igstalk|instagramstalk)$/i

export default handler
