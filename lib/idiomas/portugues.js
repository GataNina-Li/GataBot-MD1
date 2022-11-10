const lenguaje = () => { return 'pt' } //Português

//AVISOS DE MENSAGEM
const smsAvisoRG = () => { return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *EMBARGO* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *EM FORMAÇÃO* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERRO* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *AÇÃO INADEQUADA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *RELATÓRIO* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *SUCESSO* ⊱💚⊱╮\n\n` }

//PARÂMETROS EM COMANDOS
const smsRowner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ EU COMO CRIADOR DE BOT PODE USAR!!\`\`\`` }
const smsOwner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ MEU CRIADOR PODE USAR!!\`\`\`` }
const smsMods = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SOMENTE MODERADORES E MEU CRIADOR PODEM USAR!!\`\`\`` }
const smsPremium = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO APENAS ESTÁ DISPONÍVEL PARA USUÁRIOS PREMIUM E MEU CRIADOR!!\`\`\`` }
const smsGroup = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ PODE SER USADO EM GRUPOS!!\`\`\`` }
const smsPrivate = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO SÓ PODE SER USADO PARA O PRIVADO!!\`\`\`` }
const smsAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO É SOMENTE PARA ADMINISTRADORES!!\`\`\`` }
const smsBotAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡PRECISO SER ADMIN PARA QUE VOCÊ POSSA USAR ESTE COMANDO!!\`\`\`` }
const smsUnreg = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡VOCÊ PRECISA ESTAR REGISTRADO PARA USAR ESTE COMANDO, DIGITE #verify PARA REGISTRAR!!\`\`\`` }
const smsRestrict = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡ESSE COMANDO É RESTRITO PELO MEU CRIADOR!!\`\`\`` }

//LISTA DE MENUS
const smsTime = () => { return `Hora atual`}
const smsUptime = () => { return `Correndo durante`}
const smsVersion = () => { return `Versão de ${global.packname}`}
const smsTotalUsers = () => { return `Total de usuários`}
const smsMode = () => { return `Está em modo`}
const smsModePublic = () => { return `PÚBLICO`}
const smsModePrivate = () => { return `PRIVADO`}
const smsBanChats = () => { return `Bate-papos banidos`}
const smsBanUsers = () => { return `Usuário banido`}
const smsPareja = () => { return `Parceiro`}
const smsResultPareja = () => { return `Não tem parceiro`}
const smsSaludo = () => { return `👋 !OLÁ! BEM-VINDO 👋`}
const smsDia = () => { return `🌇 Bom Dia ⛅`}
const smsTarde = () => { return `🏙️ Boa tarde 🌤️`}
const smsTarde2 = () => { return `🌆 Boa tarde 🌥️`}
const smsNoche = () => { return `🌃 Boa noite 💫`}
const smsListaMenu = () => { return `⊹ LISTA DE MENUS ⊹`}
const smsLista1 = () => { return `🌟 INFORMAÇÕES DO GATABOT 🌟`}
const smsLista2 = () => { return `💖 CRIADORA 💖`}
const smsLista3 = () => { return `🎁 DOE: APOIE 🎁`}
const smsLista4 = () => { return `🚀 RAPIDEZ 🚀`}
const smsLista5 = () => { return `💡 INFORMAÇÕES DO MENU 💡`}
const smsLista6 = () => { return `🌀 MENU COMPLETO 🌀`}
const smsLista7 = () => { return `🐈 INSTALAR O GATABOT 🐈`}
const smsLista8 = () => { return `🍄 SEJA SUB-BOT 🍄`}
const smsLista9 = () => { return `📄 TERMOS, CONDIÇÕES E PRIVACIDADE 📄\n`}
const smsLista10 = () => { return `🌟 AVENTURA E TOPO 🌟`}
const smsLista11 = () => { return `🏆 TOPO MUNDIAL 🏆`}
const smsLista12 = () => { return `🏅 USUÁRIOS PREMIUM 🏅`}
const smsLista13 = () => { return `🎟️ SEJA UM USUÁRIO PREMIUM 🎟️`}
const smsLista14 = () => { return `🛣️ MISSÕES 🛣️`}
const smsLista15 = () => { return `⚗️ MENU RPG ⚗️`}
const smsLista16 = () => { return `🏪 LOJA COMPRA 🏪`}
const smsLista17 = () => { return `🎒 INVENTÁRIO 🎒\n`}
const smsLista18 = () => { return `🌟 MULTIMÍDIA 🌟`}
const smsLista19 = () => { return `📲 BAIXAR MENU 📲`}
const smsLista20 = () => { return `🔍 PESQUISAR MENU 🔍`}
const smsLista21 = () => { return `🛰️ MENU DO CONVERSOR 🛰️`}
const smsLista22 = () => { return `🧰 MENU MODIFICADOR DE ÁUDIO 🧰\n`}
const smsLista23 = () => { return `🌟 DIVERSÃO 🌟`}
const smsLista24 = () => { return `🎡 JOGOS DINÂMICOS 🎡`}
const smsLista25 = () => { return `🔊 MENU DE ÁUDIO 🔊`}
const smsLista26 = () => { return `🎈 MENU DE ADESIVOS E FILTROS 🎈`}
const smsLista27 = () => { return `✨ MENU DE EFEITOS E LOGOTIPOS ✨`}
const smsLista28 = () => { return `🌅 MENU LOGOS 2 🌅`}
const smsLista29 = () => { return `⛩️ MEMES E ANIMES ALEATÓRIOS ⛩️`}
const smsLista30 = () => { return `🔞 COMANDOS PARA ADULTOS +18 🔞\n`}
const smsLista31 = () => { return `🌟 DEFINIÇÕES 🌟`}
const smsLista32 = () => { return `🔰 MENU PARA GRUPOS 🔰`}
const smsLista33 = () => { return `📑 TIPOS DE LISTAS 📑`}
const smsLista34 = () => { return `⚙️ CENTRO DE CONFIGURAÇÃO ⚙️`}
const smsLista35 = () => { return `💎 MENU DO PROPRIETÁRIO 💎`}

//main.js
const smsWelcome = () => { return '*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BEM-VINDO!!*\n┊💖 @user\n┊📄 *LEIA A DESCRIÇÃO DO GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n\n@desc'}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *ELE SAIU DO GRUPO, VOLTE EM BREVE* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user AGORA VOCÊ É ADMINISTRADOR NESTE GRUPO!!*'}
const smsSdemote = () => { return '*@user NÃO É MAIS ADMINISTRADOR NESTE GRUPO!!*'}
const smsSdesc = () => { return '*A NOVA DESCRIÇÃO DO GRUPO É:*\n\n@desc'}
const smsSsubject = () => { return '*O NOVO NOME DO GRUPO É:*\n\n@subject'}
const smsSicon = () => { return '*A FOTO DESTE GRUPO FOI ALTERADA!!*'}
const smsSrevoke = () => { return '*AGORA ESTE É O NOVO LINK DESTE GRUPO!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONEXÃO ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ CONEXÃO BEM-SUCEDIDA NO WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ LIMPEZA AUTOMÁTICA TMP ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ OS ARQUIVOS NA PASTA TMP FORAM EXCLUÍDOS COM SUCESSO 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 CARREGANDO...\n`}

//_allantilink.js
const smsTextoYT = () => { return '😻 Super GataBot-MD - WhatsApp '}
const smsApagar = () => { return '❌ DESATIVAR'}
const smsEncender = () => { return '✅ ATIVAR'}
const smsEnlaceTik = () => { return `*UM LINK DO TIKTOK BANIDO FOI DETECTADO NESTE GRUPO*\n\n*EU CONTINUO A TE EXCLUIR*`}
const smsEnlaceYt = () => { return `*UM LINK DO YOUTUBE BANIDO FOI DETECTADO NESTE GRUPO*\n\n*EU CONTINUO A TE EXCLUIR*`}
const smsEnlaceTel = () => { return `*UM LINK DE TELEGRAM BANIDO FOI DETECTADO NESTE GRUPO*\n\n*EU CONTINUO A TE EXCLUIR*`}
const smsEnlaceFb = () => { return `*UM LINK DO FACEBOOK BANIDO FOI DETECTADO NESTE GRUPO*\n\n*EU CONTINUO A TE EXCLUIR*`}
const smsEnlaceIg = () => { return `*UM LINK DO INSTAGRAM BANIDO FOI DETECTADO NESTE GRUPO*\n\n*EU CONTINUO A TE EXCLUIR*`}
const smsEnlaceTw = () => { return `*UM LINK DO TWITTER BANIDO FOI DETECTADO NESTE GRUPO*\n\n*EU CONTINUO A TE EXCLUIR*`}
const smsAllAdmin = () => { return `*PRECISO SER ADMINISTRADOR PARA REMOVER INTRUDERS*`}
const smsSoloOwner = () => { return `*MEU CRIADOR DEVE ATIVAR A FUNÇÃO*\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 FALHA DE COMANDO 🔴*`}
const smsCont2 = () => { return `*⚠️ PLUGIN:*`}
const smsCont3 = () => { return `*⚠️ USUÁRIO:*`}
const smsCont4 = () => { return `*⚠️ COMANDO:*`}
const smsCont5 = () => { return `*⚠️ ERRO:*`}
const smsCont6 = () => { return `*❗ REPORTE ESTA MENSAGEM USANDO O COMANDO #reporte PARA RESOLVER*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NÃO TEM DIAMANTES!! 💎 VOCÊ PODE IR À LOJA COM O COMANDO*`}
const smsCont8 = () => { return ` *DIAMANTE 💎 USADO*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*PRECISO DO NÍVEL ➡️*`}
const smsCont10 = () => { return `*PARA USAR ESTE COMANDO. SEU NÍVEL ATUAL É ➡️*`}
const smsCont11 = () => { return `*ATUALIZAR COM COMANDO*`}
const smsCont12 = () => { return `UM GRANDE GRUPO!! 😼`}
const smsCont13 = () => { return `ALGUÉM PARTICIPOU!! 🥳`}
const smsCont14 = () => { return `ALGUÉM DEIXOU!! 🧐`}
const smsCont15 = () => { return `*OLÁ*`}
const smsCont16 = () => { return `*AS CHAMADAS DE VÍDEO* 📲`}
const smsCont17 = () => { return `*AS CHAMADAS* 📞`}
const smsCont18 = () => { return `*NÃO ESTÃO AUTORIZADOS ENTÃO VOU TE BLOQUEAR*\n\n*SE LIGADO POR ACIDENTE ENTRE EM CONTATO COM A PESSOA CRIADORA DESTE BOT*`}
const smsCont19 = () => { return `ANTI EXCLUSÃO`}
const smsCont20 = () => { return `*┃✤ Nome:*`}
const smsCont21 = () => { return `*┃✤ Enviando a mensagem excluída...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*ESTE NÚMERO*`}
const smsInt2 = () => { return `*NÃO PERMITIDO NESTE GRUPO!!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*COMO VOCÊ É ADMINISTRADOR NESTE GRUPO, VOCÊ NÃO SERÁ REMOVIDO*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*UM LINK DE WHATSAPP BANIDO FOI DETECTADO NESTE GRUPO*\n\n*EU CONTINUO A TE EXCLUIR*`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}UM LINK PROIBIDO CONTENDO HTTPS FOI DETECTADO NESTE GRUPO\n\nEU CONTINUO A TE EXCLUIR`}

//_antispam.js
const smsNoSpam = () => { return `🤨 NÃO FAÇA SPAM, VOCÊ NÃO PODERÁ USAR ${global.packname} POR ${60000 / 1000 - 59} MINUTO`}

//_antispam_.js
const smsNoSpam2 = () => { return `FOI BANIDO DEPOIS ${60000 / 1000 - 59} MINUTO. POR FAVOR NÃO SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ MENU`}

//Erro
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCORREU UM ERRO INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIU UMA INCONVENIÊNCIA. TENTE NOVAMENTE.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO DEU ERRADO, DENUNCIE ESTE COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `NÃO!!! 🤬 DIGA ESTA PALAVRA`}
const smsToxic2 = () => { return `É PROIBIDO NÃO SEJA TÓXICO`}
const smsToxic3 = () => { return `*AVISO*\n⚠️`}
const smsToxic4 = () => { return `😭 EU SINTO MUITO`}
const smsToxic5 = () => { return `☢️ DESATIVAR ANTITOXIC`}
const smsToxic6 = () => { return `EU TE AVISEI VÁRIAS VEZES!!`}
const smsToxic7 = () => { return `VOCÊ PASSOU EM TODOS OS 4 AVISOS AGORA VOCÊ SERÁ ELIMINADO 🙄`}

//fazer compras
const eExp = () => { return '⚡ Experience' } 
const eDiamante = () => { return '💎 Diamond' } 
const eDiamantePlus = () => { return '💎+ Diamond+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Emerald' } 
const eJoya = () => { return '♦️ Jewel' }
const eMagia = () => { return '🌀 Magic' } 
const eOro = () => { return '👑 Gold' } 
const eGataCoins = () => { return '🐱 GataCoins' }
const eGataTickers = () => { return '🎫 Gata Tickers' } 
const eEnergia = () => { return '✨ Energy' }

const ePocion = () => { return '🥤 Potion' }
const eAgua = () => { return '💧 Water' }
const eBasura = () => { return '🗑 Trash' }
const eMadera = () => { return '🪵 Wood' }
const eRoca = () => { return '🪨 Rock' }
const ePiedra = () => { return '🥌 Stone' }
const eCuerda = () => { return '🕸️ String' }
const eHierro = () => { return '⛓️ Iron' }
const eCarbon = () => { return '⚱️ Coal' }
const eBotella = () => { return '🍶 Bottle' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Paperboard' } 

const eEletric = () => { return '💡 Electricity' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Common Gold' }
const eZorroG = () => { return '🦊🌫️ Big Fox' }
const eBasuraG = () => { return '🗑🌫️ Super Trash' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Wood' }
const eEspada = () => { return '⚔️ Sword' }
const eCarnada = () => { return '🪱 Bait' }
const eBillete = () => { return '💵 Banknotes' }
const ePinata = () => { return '🪅 Pinata' }
const eGancho = () => { return '🪝 Hook' }
const eCanaPescar = () => { return '🎣 Fishing Rod' } 

const eCComun = () => { return '📦 Common Box' }
const ePComun = () => { return '🥡 Uncommon Box' }
const eCMistica = () => { return '🗳️ Mythic Box' }
const eCMascota = () => { return '📫 Pet Box' }
const eCJardineria = () => { return '💐 Gardening Box' }
const eClegendaria = () => { return '🎁 Legendary Box' } 

const eUva = () => { return '🍇 Grape' }
const eManzana = () => { return '🍎 Apple' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 

const eSUva = () => { return '🌾🍇 Grape seeds' }
const eSManzana = () => { return '🌾🍎 Apple seeds' }
const eSNaranja = () => { return '🌾🍊 Orange seeds' }
const eSMango = () => { return '🌾🥭 Mango Seeds' }
const eSPlatano = () => { return '🌾🍌 Banana seeds' } 

const eCentauro = () => { return '🐐 Centaur' }
const eAve = () => { return '🦅 Bird' }
const eGato = () => { return '🐈 Cat' }
const eDragon = () => { return '🐉 Dragon' }
const eZorro = () => { return '🦊 Fox' }
const eCaballo = () => { return '🐎 Horse' }
const eFenix = () => { return '🕊️ Phoenix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Dog' } 

const eAMascots = () => { return '🍖 Pet Food' }
const eCCentauro = () => { return '🐐🥩 Centaur Food' }
const eCAve = () => { return '🦅🥩 Bird Food' }
const eCMagica = () => { return '🌀🥩 Magic Food' }
const eCDragon = () => { return '🐉🥩 Dragon Food' }
const eACaballo = () => { return '🐎🥩 Horse Food' }
const eCFenix = () => { return '🕊️🥩 Phoenix Food' } 


//config-on y off.js
const smsWel1 = () => { return `🎉 BEM-VINDO`}
const smsWel2 = () => { return `Mensagem de boas-vindas para novos membros em grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `Avisos de ações dentro do Grupo`}
const smsANivel1 = () => { return `🆙 NÍVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Suba de nível todos automaticamente`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Ativar função para adicionar ou remover pessoas em Grupos`}
const smsLlamar1 = () => { return `🚫 ANTI CHAMADAS`}
const smsLlamar2 = () => { return `Bloquear pessoas que fazem chamadas`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Ativar função para que todos possam usar o GataBot`}
const smsModAd1 = () => { return `🛂 MODO ADMINISTRADOR`}
const smsModAd2 = () => { return `Apenas Admins poderão usar o GataBot em Grupos`}
const smsLect1 = () => { return `✅ LEITURA AUTOMÁTICA`}
const smsLect2 = () => { return `Deixar mensagens ou chats como lidos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORÁRIO`}
const smsTempo2 = () => { return `Função que permite permanência temporária em Grupos`}
const smsStik1 = () => { return `🎠 ADESIVOS`}
const smsStik2 = () => { return `Ative o envio automático de Stickers para todos`}
const smsStickA1 = () => { return `🪄 ADESIVOS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Vídeos, Gifs, imagens, links jpg ou jpeg; Eles serão convertidos em adesivos automaticamente`}
const smsReacc1 = () => { return `🤡 REAÇÃO `}
const smsReacc2 = () => { return `Habilitar o envio automático de Reações às mensagens`}
const smsAudi1 = () => { return `🔊 ÁUDIO`}
const smsAudi2 = () => { return `Habilite o envio automático de áudios para todos`}
const smsModHor1 = () => { return `🔞 MODO QUENTE`}
const smsModHor2 = () => { return `Mostrar conteúdo adulto nos bate-papos`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICO`}
const smsAntitoc2 = () => { return `Envie Avisos para as pessoas que insultam`}
const smsModOb1 = () => { return `👀 MODO DE OBSERVAÇÃO`}
const smsModOb2 = () => { return `Torne imagens, gifs e vídeos visíveis para todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI EXCLUSÃO`}
const smsAntiEli2 = () => { return `Todas as mensagens excluídas serão encaminhadas para o Chat ou Grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Elimine Números Internacionais considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI-LINKS`}
const smsAntiE2 = () => { return `Excluir pessoas que enviam links de grupos do WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI-LINKS 2`}
const smsAntiEE2 = () => { return `Eliminar Personas que envíen enlaces que contengan https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIK TOK`}
const smsAntiTT2 = () => { return `Remover pessoas que enviam links do TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Remover pessoas que enviam links do YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Remover pessoas que enviam links de Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Remover pessoas que enviam links do Facebook`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Remover pessoas que enviam links do Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Remover pessoas que enviam links do Twitter`}
const smsSOLOP1 = () => { return `⚜️ APENAS PRIVADO`}
const smsSOLOP2 = () => { return `Permitir que seja usado apenas em bate-papos privados`}
const smsSOLOG1 = () => { return `⚜️ APENAS GRUPOS`}
const smsSOLOG2 = () => { return `Permitir que seja usado apenas em bate-papos em grupo`}
const smsConfi1 = () => { return `DEFINIÇÕES`}
const smsConfi2 = () => { return `*Olá!*`}
const smsConfi3 = () => { return `┃ *Selecione uma opção da lista*`}
const smsConfi4 = () => { return `┃ *Para começar a configurar*`}
const smsConfi5 = () => { return `┃● *Avisos de configuração:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Função ativada*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *Função desabilitada*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Este bate-papo não é um grupo*`}
const smsConfi9 = () => { return `┃ *Recomendação: Para ver a configuração*\n┃ *Complete use este Menu de Grupo*\n┃`}
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURAÇÃO*`}
const smsParaAdmins = () => { return `PARA ADMINISTRADORES E CRIADOR: GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINISTRADORES E CRIADORES: CHATS`}
const smsParaOw = () => { return `PARA CRIADOR: CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMANDO`} 
const smsMens2 = () => { return `ATUALMENTE`} 
const smsMens3 = () => { return `NESTE`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `Bate-papo`} 

//Error2
const smsMensError1 = () => { return `❕COMANDO DE RELATÓRIO ❕`} 
const smsMensError2 = () => { return `O seguinte comando está falhando`} 


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3,
smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4,
smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2};
