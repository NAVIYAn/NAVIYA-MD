const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list ",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download:'',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `🥺❤️‍🩹 *Hello ${pushname}*
*ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ 🚀*

${menu.download}

*ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ 🍭*

${menu.main}

*ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ 💌*

${menu.group}

*ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ ✨*

${menu.owner}

*ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ 🎀*

${menu.convert}

*ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ 🔥*

${menu.search}



> ᴘᴏᴡᴇʀᴅ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🍭✨

`

}catch(e){
console.log(e)
reply(`${e}`)
}
})
