const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("depan hutto url ekkak 😒")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*ɴᴀᴠɪʏᴀ ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*💗🥹

title: ${data.title}
description: ${data.description }
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

ᴍᴀᴅᴇ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🖤
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//dawonload audio 

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message 
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})


    
   
 
}catch(e){
console.log(e)
reply(`${e}`)
}
})
