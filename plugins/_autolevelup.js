import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    if (before !== user.level) {
        m.reply(`
Selamat, anda telah naik level!
${before} -> ${user.level}
gunakan .profile untuk mengecek
	`.trim())
    }
}

export const disabled = false
