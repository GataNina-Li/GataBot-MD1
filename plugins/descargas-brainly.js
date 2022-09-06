import * as baileys from '@adiwajshing/baileys'
import { Brainly } from 'brainly-scraper-v2'
import fetch from 'node-fetch'
let brainly = new Brainly('es')

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Consulta de entrada'
	let res = await brainly.search(text, 'es').catch(() => null)
	console.log(res)
	if (res) {
		let answer = res.map(({ question, answers }, i) => `
*Pregunta*${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `
*Respuesta para ${i + 1}*${v.verification ? ' (Verificado)' : ''}${v.isBest ? ' (Mejor)' : ''}
${v.content}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join``}`).join('\n' + '-'.repeat(45))
		m.reply(answer.trim())
	} else {
		let answer = await (await fetch(API('violetics', '/api/media/brainly', { query: text }, 'apikey'))).json()
		answer = answer.result
		if (!answer.length) throw 'no funciona'
		for (let x = 0; x < answer.length; x++) {
			await m.reply(`*${answer[x].pertanyaan}*\n_${answer[x].source}_\n${answer[x].jawaban}`)
			await baileys.delay(2000)
		}
	}
}
handler.help = handler.alias = ['brainlys']
handler.tags = ['tools']
handler.command = /^(brainlys)$/i

export default handler
