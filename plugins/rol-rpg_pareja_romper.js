
let handler = async (m, { conn }) => {
  var ayg = global.db.data.users[m.sender] //@${global.db.data.users[m.sender].pasangan.split('@')[0]}
  var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,`No tienes pareja.`,m)
  }
  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Rompió con éxito con ${global.db.data.users[m.sender].pasanganconn.getName(m.sender)}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    conn.reply(m.chat,`Usted Rompió con éxito con ${global.db.data.users[m.sender].pasanganconn.getName(m.sender)}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    conn.reply(m.chat,`no tienes pareja.`,m)
  }
}
handler.command = /^(romper)$/i
handler.group = true

export default handler
