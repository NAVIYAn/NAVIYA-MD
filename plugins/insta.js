const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd(
   {
     pattern: "spotify2",
     alias: ["sp2"],
     desc: "Downloads a Spotify song.",
     category: "downloader",
     filename: __filename,
     use: "<Spotify URL>",
   },
   async (message, input) => {
     try {
       const url = input.trim();
       if (!url || !isValidUrl(url)) {
         return await message.send("*_Please provide a valid Spotify URL._*");
       }
 
       const apiUrl = `https://api.maher-zubair.tech/download/spotify?url=${encodeURIComponent(
         url
       )}`;
       const response = await axios.get(apiUrl);
       const data = response.data;
 
       if (!data || data.status !== 200) {
         return await message.reply("*Failed to download the Spotify song.*");
           }
