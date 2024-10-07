const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "insta",
    desc: "Download media from Instagram.",
    react: "👾",
    category: "downloader",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
use: "<url>",
 }, async (m, providedUrl = "") => {
   try {
     const url = providedUrl.trim(); // Trim any leading/trailing whitespace
     if (!url) {
       return await m.send("*_Please provide an Instagram URL!_*");
     }
 
     const apiUrl = `https://api.maher-zubair.tech/download/instagram?url=${encodeURIComponent(url)}`;
     const response = await fetch(apiUrl);
 
     if (!response.ok) {
       return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
     }
 
     const data = await response.json();
 
     if (data.status !== 200) {
       return await m.send(`*_Error: ${data.status} - ${data.result || "Unknown error"}_*`);
     }
 
     const mediaData = data.result[0];
 
     if (!mediaData) {
       return await m.send("*_No media found!_*");
     }
 
     const { thumbnail, url: mediaUrl, wm } = mediaData;
     const caption = `*Watermark:* ${wm}\n\n_Note: This media may have a watermark._`;
 
     await m.bot.sendFromUrl(m.from, thumbnail, caption, m, {}, "image");
     await m.bot.sendFromUrl(m.from, mediaUrl, "", m, {}, "video");
   } catch (e) {
     await m.error(`${e}\n\ncommand: instagram2`, e);
   }
 });
