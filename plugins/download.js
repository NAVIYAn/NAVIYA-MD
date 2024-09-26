
(function(_0x1f4605,_0x2d1120){var _0x5574ec=_0x4eb3,_0x3df74b=_0x1f4605();while(!![]){try{var _0x44ec1c=-parseInt(_0x5574ec(0x171))/0x1*(parseInt(_0x5574ec(0x16c))/0x2)+-parseInt(_0x5574ec(0x174))/0x3*(-parseInt(_0x5574ec(0x170))/0x4)+-parseInt(_0x5574ec(0x175))/0x5+parseInt(_0x5574ec(0x16f))/0x6*(parseInt(_0x5574ec(0x16e))/0x7)+parseInt(_0x5574ec(0x172))/0x8+parseInt(_0x5574ec(0x173))/0x9+-parseInt(_0x5574ec(0x16b))/0xa;if(_0x44ec1c===_0x2d1120)break;else _0x3df74b['push'](_0x3df74b['shift']());}catch(_0x253c8c){_0x3df74b['push'](_0x3df74b['shift']());}}}(_0x5429,0x742cf));function hi(){var _0x51d9e4=_0x4eb3;console['log'](_0x51d9e4(0x16d));}function _0x4eb3(_0x418cc3,_0x55e41d){var _0x54292b=_0x5429();return _0x4eb3=function(_0x4eb3e7,_0x3d5625){_0x4eb3e7=_0x4eb3e7-0x16b;var _0x215562=_0x54292b[_0x4eb3e7];return _0x215562;},_0x4eb3(_0x418cc3,_0x55e41d);}hi();function _0x5429(){var _0x4e4ad3=['2781815LiKFCn','10311590YjjCCq','9440HQExej','Hello\x20World!','98MjFjSs','232032KqVEtP','312hOjjpk','31lkrXFB','6006328fJJmtv','6637266asQFUS','6924ckhHtG'];_0x5429=function(){return _0x4e4ad3;};return _0x5429();}

const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🥷🔥";



//fb downloader
cmd({
    pattern: "fb",
    alias: ["facebook"],
    desc: "download fb videos",
    category: "download",
    react: "🔽",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me fb url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//tiktok downloader
cmd({
    pattern: "tiktok",
    alias: ["tt"],
    desc: "download tt videos",
    category: "download",
    react: "🔽",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me tiktok url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`)
        reply("*Downloading...*")
        //send video (wm,nwm)
        await conn.sendMessage(from, { video: { url: data.data.no_wm }, mimetype: "video/mp4", caption: `- NO-WATERMARK\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.wm }, mimetype: "video/mp4", caption: `- WITH-WATERMARK \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//twitter dl (x)
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    react: "🔽",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    react: "🔽",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//mediafire dl
cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    desc: "download mfire files",
    category: "download",
    react: "🔽",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me mediafire url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: `${data.data.name}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//apk dl
cmd({
    pattern: "apk",
    alias: ["modapk"],
    desc: "download apks",
    category: "download",
    react: "🔽",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("❗Apk Not Found,Sorry")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/apkdl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: cap }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
