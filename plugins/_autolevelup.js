//import { spawn } from 'child_process'
import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'
//import { levelup } from '../lib/canvas.js'

export function before(m, { conn }) {  	
	
    //let user = global.db.data.users[m.sender]
    let { user, role } = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
	
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
	    
//let teks = `Genial! ${conn.getName(m.sender)} Nivel: ${user.level}`	    
let str = 
`╭━━━[ *𝙉𝙄𝙑𝙀𝙇 | 𝙇𝙀𝙑𝙀𝙇* ]━━━━⬣
┃ *NIVEL ANTERIOR:* *${before}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *NIVEL ACTUAL:* *${user.level}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *RANGO* ${role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *FECHA:* *${new Date().toLocaleString('id-ID')}*
╰━━━〔 *𓃠 ${vs}* 〕━━━━━⬣
*_Cuanto más interactúes con GataBot-MD, mayor será tu nivel!!_*
`.trim()

/*try {
       const img = await levelup(teks, user.level)
        conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
     } catch (e) {
            m.reply(str)*/
   }
}
export const disabled = false

//function levelup(teks, level) {

/*if (global.support.convert || global.support.magick || global.support.gm) {
	 
        //const font = join(__dirname, '../src/font')
        let fontLevel = join(font, './level_c.otf')
        let fontTexts = join(font, './texts.otf')
        let xtsx = join(__dirname, '../src/lvlup_template.jpg')
	let bufs = []
        let anotations = '+1385+260' // gapake else if kadang error
        if (level > 2) anotations = '+1370+260'
        if (level > 10) anotations = '+1330+260'
        if (level > 50) anotations = '+1310+260'
        if (level > 100) anotations = '+1260+260'
	    
	   const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
            'convert',
            xtsx,
            '-font',
            fontTexts,
            '-fill',
            '#0F3E6A',
            '-size',
            '1024x784',
            '-pointsize',
            '68',
            '-interline-spacing',
            '-7.5',
            '-annotate',
            '+153+200',
            teks,
            //original together
            '-font',
            fontLevel,
            '-fill',
            '#0A2A48',
            '-size',
            '1024x784',
            '-pointsize',
            '140',
            '-interline-spacing',
            '-1.2',
            '-annotate',
            anotations,
            level,
            '-append',
            'jpg:-'
        ]
        spawn(_spawnprocess, _spawnargs)
          .on('error', e => {
            throw e
          })
          .on('close', () => {
           this.sendFile(m.chat, Buffer.concat(bufs), 'levelup.jpg', str, m) //this.sendFile(m.chat, Buffer.concat(bufs), 'result.jpg', str, m)
          })
          .stdout.on('data', chunk => bufs.push(chunk))

      } else {
        m.reply(str, m.chat, {
          contextInfo: {
            mentionedJid: [m.sender]
          }
        })
      }
    }

    return true
  }*/	    
