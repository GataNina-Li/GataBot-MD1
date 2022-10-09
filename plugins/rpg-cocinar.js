let handler = async (m, { command, usedPrefix, DevMode, args, conn }) => {
let type = (args[0] || '').toLowerCase()
let msk = (args[0] || '').toLowerCase()
let user = global.db.data.users[m.sender]

let cocinar = `
*◈ Pollo a la Parrilla 🍖*
*${rpg.emoticon('ayam')} →* _${user.ayam}/2_
*${rpgshop.emoticon('coal')} →* _${user.coal}/1_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/1_
${user.ayam == 2 || user.coal == 1 || user.ramuan == 1 ? '*👩‍🍳 PUEDE COCINAR 🧑‍🍳*' : `${user.ayam !== 2 ? `❗${rpgg.emoticon('ayam')} ` : ''}`, `${user.coal !== 1 ? `❗${rpgg.emoticon('coal')} ` : ''}`, `${user.ramuan !== 1 ? `❗${rpgg.emoticon('ramuan')}` : ''}`}
${user.ayam == 2 || user.coal == 1 || user.ramuan == 1 ? '*👩‍🍳 PUEDE COCINAR 🧑‍🍳*' : ''.concat(`${user.ayam >= 2 ? `❗${rpgg.emoticon('ayam')} ` : ''}`, `${user.coal >= 1 ? `❗${rpgshop.emoticon('coal')} ` : ''}`, `${user.ramuan >= 1 ? `❗${rpgg.emoticon('ramuan')}` : ''}`)} 
- - - - - - - - - - - - -
▧ ayamgoreng 🍗
〉Need 2 ayam 🐓 & 1 Coal 🕳️
▧ oporayam 🍜
〉Need 2 ayam 🐓 & 1 Coal 🕳️
▧ steak 🥩
〉Need 2 sapi 🐮 & 1 Coal 🕳️
▧ rendang 🥘
〉Need 2 sapi 🐮 & 1 Coal 🕳️
▧ gulaiayam 🍲
〉Need 2 ayam 🐓 & 1 Coal 🕳️
▧ babipanggang 🥠
〉Need 2 babi 🐖 & 1 Coal 🕳️
▧ ikan bakar 🐟
〉Need 2 ikan 🐟 & 1 Coal 🕳️
▧ lele bakar 🐟
〉Need 2 lele 🐟 & 1 Coal 🕳️
▧ nila bakar 🐟
〉Need 2 nila 🐟 & 1 Coal 🕳️
▧ bawal bakar 🐟
〉Need 2 bawal 🐟 & 1 Coal 🕳️
▧ udang bakar 🦐
〉Need 2 udang 🦐 & 1 Coal 🕳️
▧ paus bakar 🐳
〉Need 2 paus 🐳 & 1 Coal 🕳️
▧ kepiting bakar 🦀
〉Need 2 kepiting 🦀 & 1 Coal 🕳️
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayambakar':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayambakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ayam bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam bakar\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				  case 'gulaiayam':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                            user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.gulai += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Gulai Ayam🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gulai ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                  case 'rendang':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.rendang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Rendang 🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak dimasak rendang\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
					break
                   case 'ayamgoreng':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayamgoreng += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } ayam goreng🍗`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam goreng\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'oporayam':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                          user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.oporayam += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } opor ayam`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak opor ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'steak':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.steak += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Steak`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak steak\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
				break
             case 'babipanggang':
            if (user.babi < count * 2 || user.coal < 1 * count) {
                            user.babi >= count * 1
                            user.babi -= count * 2
                            user.coal -= count * 1
                            user.babipanggang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } babi panggang`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak babi panggang\nAnda butuh 2 babi dan 1 coal untuk memasak`, m)
				break
				case 'ikanbakar':
            if (user.ikan < count * 2 || user.coal < 1 * count) {
                           user.ikan >= count * 1
                            user.ikan -= count * 2
                            user.coal -= count * 1
                            user.ikanbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ikan bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ikan bakar\nAnda butuh 2 ikan dan 1 coal untuk memasak`, m)
					break
					case 'lelebakar':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                           user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.lelebakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} lele bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak lele bakar\nAnda butuh 2 lele dan 1 coal untuk memasak`, m)
					break
					case 'nilabakar':
            if (user.nila < count * 2 || user.coal < 1 * count) {
                           user.nila >= count * 1
                            user.nila -= count * 2
                            user.coal -= count * 1
                            user.nilabakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} nila bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak nila bakar\nAnda butuh 2 nila dan 1 coal untuk memasak`, m)
					break
					case 'bawalbakar':
            if (user.bawal < count * 2 || user.coal < 1 * count) {
                           user.bawal >= count * 1
                            user.bawal -= count * 2
                            user.coal -= count * 1
                            user.bawalbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} bawal bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak bawal bakar\nAnda butuh 2 bawal dan 1 coal untuk memasak`, m)
					break
					case 'udangbakar':
            if (user.udang < count * 2 || user.coal < 1 * count) {
                           user.udang >= count * 1
                            user.udang -= count * 2
                            user.coal -= count * 1
                            user.udangbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} udang bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak udang bakar\nAnda butuh 2 udang dan 1 coal untuk memasak`, m)
					break
					case 'pausbakar':
            if (user.paus < count * 2 || user.coal < 1 * count) {
                           user.paus >= count * 1
                            user.paus -= count * 2
                            user.coal -= count * 1
                            user.pausbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} paus bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak paus bakar\nAnda butuh 2 paus dan 1 coal untuk memasak`, m)
					break
					case 'kepitingbakar':
            if (user.kepiting < count * 2 || user.coal < 1 * count) {
                           user.kepiting >= count * 1
                            user.kepiting -= count * 2
                            user.coal -= count * 1
                            user.kepitingbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} kepiting bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak kepiting bakar\nAnda butuh 2 kepiting dan 1 coal untuk memasak`, m)
					break
                default:
                await conn.sendMessage(m.chat, {
				text: cocinar,
				footer: wm,
				title: '「 *C O O K I N G* 」',
				buttonText: "C O O K I N G",
				sections: [{
					title: "List Featured",
					rows: [{
				title: "Ayam Bakar 🍖",
				rowId: ".cook ayambakar",
				description: "Cooking Ayam Bakar"
			},{
				title: "Ayam Goreng 🍗",
				rowId: ".cook ayambakar",
				description: "Cooking Ayam Goreng"
			},{
				title: "Opor Ayam 🍜",
				rowId: ".cook oporayam",
				description: "Cooking Opor Ayam"
			},{
				title: "Steak 🥩",
				rowId: ".cook steak",
				description: "Cooking Steak"
			},{
				title: "Rendang 🥘",
				rowId: ".cook rendang",
				description: "Cooking Rendang"
			},{
				title: "Gulai Ayam 🍲",
				rowId: ".cook gulaiayam",
				description: "Cooking Gulai Ayam"
			},{
				title: "Babi Panggang 🥠",
				rowId: ".cook babipanggang",
				description: "Cooking Babi Panggang"
			},{
				title: "ikan bakar 🐟",
				rowId: ".cook ikanbakar",
				description: "Cooking ikan bakar"
			},{
				title: "lele bakar 🐟",
				rowId: ".cook lelebakar",
				description: "Cooking lele bakar"
			},{
				title: "nila bakar 🐟",
				rowId: ".cook nilabakar",
				description: "Cooking nila bakar"
			},{
				title: "bawal bakar 🐟",
				rowId: ".cook bawalbakar",
				description: "Cooking bawal bakar"
			},{
				title: "udang bakar 🦐",
				rowId: ".cook udangbakar",
				description: "Cooking udang bakar"
			},{
				title: "paus bakar 🐳",
				rowId: ".cook pausbakar",
				description: "Cooking paus bakar"
			},{
				title: "kepiting bakar 🦀",
				rowId: ".cook kepitingbakar",
				description: "Cooking kepiting bakar"
			}
					]
				}]
			})
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak <masakan> <args>', 'cook <masakan> <args>']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i

export default handler
