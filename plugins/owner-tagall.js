let handler = async (m, { conn, text, participants }) => {
    let users = participants.map(u => u.id)
    let tee = text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`
    m.reply(tee.trim(), null, {
      contextInfo: { mentionedJid: users }
    })
  }
  handler.command = ['tagall']
  handler.help = ['tagall']
  handler.tags = ['group']

  handler.admin = true
  handler.group = true
  
  export default handler