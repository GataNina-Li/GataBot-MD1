let handler = async (m, { command, usedPrefix, DevMode, args, conn }) => {
const categorias = {
estrategia: {
exp: {
categoria: 'Categoria 1',
descripcion: 'Experiencia',
ataque: '',
defensa: '',
utilidad: 'Muy alta',
abundancia: 'Muy alta'
},
stamina: {
categoria: 'Categoria 2',
descripcion: 'Energia',
ataque: '',
defensa: '',
utilidad: 'Medianamente alta',
abundancia: 'Medianamente poca' 
},
}}
m.reply(categorias.estrategia.categoria)
}
handler.command = /^(colección|coleccion|inforpg|set|collection)$/i

export default handler
