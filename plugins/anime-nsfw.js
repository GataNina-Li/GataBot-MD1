let handler = async (m, {command, conn}) => {
    if (command == 'nsfwloli') {
        m.reply('_sedang di proses_')
        let haha = await conn.getFile(`https://api-faza.herokuapp.com/api/wallpaper/nsfwloli?apikey=FZDEVELOPER`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['NEXT', `/${command}`]], m)
    } else {
        m.reply('_sedang di proses_')
        let haha = await conn.getFile(`https://api-faza.herokuapp.com/api/nsfw/${command.replace('nsfw', '')}?apikey=FZDEVELOPER`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['NEXT', `/${command}`]], m)
    }
}

handler.help = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.command = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.tags = ['nsfw']
handler.premium = true
export default  handler