const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👾 NAVIYA MD Repastitory Information*

*| ɴᴀᴍᴇ*: ɴᴀᴠɪʏᴀ-ᴍᴅ
*| ᴏᴡɴᴇʀ*: ɴᴀᴠɪʏᴀ ( ɴᴀᴠɪʏᴀ-ᴍᴅ )
*| ɴᴜᴍʙᴇʀ*: 94764038550
*| ᴠᴇʀꜱɪᴏɴ*: 4.0.0


*📡 REPO LINK*
🔗https://github.com/NAVIYAn/navidumd/

*📌 ꜰᴏʟʟᴏᴡ MY ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ *
🔗◦ https://whatsapp.com/channel/0029VaeVPmI9cDDZhrnhhu0K

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴀᴠɪʏᴀ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://github.com/NAVIYAn/Pkya/blob/main/autosticker/images%20(3).jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
