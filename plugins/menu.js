//ඔබේ බොට් එකට අලුත්ම මෙනුවක් සහ බොත්තම් එකතු කිරීම සඳහා පහත දැක්වෙන කේතය භාවිතා කළ හැක. මෙම කේතය අවශ්‍ය බොත්තම් සහිත ක්‍රියාකාරී මෙනුවක් නිර්මාණය කරයි.

//අලුත් මෙනු කේතය

const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const { MessageType, MessageOptions, Buttons, Button } = require('@adiwajshing/baileys'); // Make sure to import necessary types

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv();
        let menu = {
            main: '',
            download: '',
            group: '',
            owner: '',
            convert: '',
            search: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `.${config.PREFIX}${commands[i].pattern}\n`;
            }
        }

        let madeMenu = `🥺❤️‍🩹 *Hello ${pushname}*

╭─────────────━┈⊷
│👾 ʙᴏᴛ ɴᴀᴍᴇ: ɴᴀᴠɪʏᴀ-ᴍᴅ
│👨‍💻 ᴏᴡɴᴇʀ :  ɴᴀᴠɪʏᴀ
│👤 ɴᴜᴍʙᴇʀ: 94764038550
│💻 HOSTER: ɴᴀᴠɪʏᴀ-ᴍᴅ-ᴏᴡɴᴇʀ 
│💫 ᴘʀᴇғɪx: [Multi-Prefix]
╰─────────────━┈⊷ 
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃✰ .𝚂𝚝𝚒𝚌𝚔𝚎𝚛
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃✰ .𝙰𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃✰ 𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃✰ 𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃✰ .𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃✰ .𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃✰ .𝙶𝚛𝚘𝚞𝚙
┃✰ .𝚂𝚎𝚝𝚐𝚘𝚘𝚍𝚋𝚞𝚢
┃✰ .𝚂𝚎𝚝𝚠𝚎𝚕𝚌𝚘𝚖𝚎
┃✰ .𝙰𝚍𝚍
┃✰ .𝚁𝚎𝚖𝚘𝚟𝚎
┃✰ .𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃✰ .𝙳𝚎𝚖𝚘𝚝𝚎
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃✰ .𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚚
┃✰ .𝙼𝚎𝚍𝚒𝚏𝚒𝚛𝚎
┃✰ .𝙶𝚍𝚛𝚒𝚟𝚎
┃✰ .𝙸𝚗𝚜𝚝𝚊
┃✰ .𝚂𝚘𝚗𝚐
┃✰ .𝚅𝚒𝚍𝚎𝚘
┃✰ .𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃✰ .𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃✰ .𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃✰ .𝙿𝚒𝚗𝚐
┃✰ .𝙰𝚕𝚒𝚟𝚎
┃✰ .𝙾𝚜𝚊
┃✰ .𝙼𝚎𝚗𝚞
┃✰ .𝚁𝚎𝚙𝚘
╰━━━━━━━━━━━━━━━⪼

> ᴘᴏᴡᴇʀᴅ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🥷🔥
`;

        const buttons = [
            { buttonId: 'help', buttonText: { displayText: 'Help' }, type: 1 },
            { buttonId: 'about', buttonText: { displayText: 'About' }, type: 1 }
        ];
        
        const buttonMessage = {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu,
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 4
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

//කේතය විශේෂාංග

//බොත්තම් එකතු කිරීම: buttons අසුරු ක්ෂේමය තුළ බොත්තම් එකතු කර ඇත. මෙහිදී Help සහ About යන දෙකක් වන අතර ඔබට යාවත්කාලීන කර ඔබට අවශ්‍ය වුවමනාකාරයෙන් වඩාත් සුදුසුකර ගැනීමේදී භාවිතා කළ හැකිය.


//බොත්තම් පණිවිඩය: buttonMessage යනු භාවිතා කර ඇති පණිවිඩය වන අතර, එයට අන්තර්ගතය සහ බොත්තම් එකතු කර ඇත.


//න්තර්ගතය: මෙනුවේ අන්තර්ගතය එකී සටහන් වලට යාවත්කාලීන කර තිබේ.



//තැන්පත් කිරීම

//මෙම කේතය ඔබේ menu.js හි පිහිටුවා, Bot එක යළි ආරම්භ කරන්න. බොත්තම් ක්‍රියාත්මක වනු ඇත.

//පරීක්ෂා කරන්න

//ඔබේ Bot එක නිවැරදිව ක්‍රියාත්මක වන බව පරීක්ෂා කිරීම සඳහා, මෙම අළුත් කේතය යාවත්කාලීන කර බලන්න. වෙනත් ගැටළු ඇත්නම්, කරුණාකර පවසන්න.
