const {cmd , commands} = require('../command')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const googleTTS = require('google-tts-api')
//__________________________sticker____________________
cmd({
    pattern: "sticker",
    desc: "download songs",
    category: "download",
    react: "🌹",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  if(!q) return reply("Quote an image or a short video.")
  let media;
if (q.imageMessage) {
     media = q.imageMessage
  } else if(q.videoMessage) {
media = q.videoMessage
  } 
 else {
    reply('That is neither an image nor a short video! ')
 }

var result = await conn.downloadAndSaveMediaMessage(media)

let stickerResult = new Sticker(result, {
            pack: packname,
            author: author,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer()
          await conn.sendMessage(from,{sticker: { url : Buffer}},{ quoted: mek })
    }catch(a){
reply(`${a}`)
}
})
