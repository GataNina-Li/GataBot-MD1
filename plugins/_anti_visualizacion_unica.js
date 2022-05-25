let handler = m => m

//handler.before = async function (m, { user }) {
        //let q = m.quoted ? m.quoted : m
               if (m.mtype == 'viewOnceMessage') {
                          await this.copyNForward(m.chat, await this.loadMessage(m.chat, m.id), false, { readViewOnce: true })
                          }
}

export default handler
