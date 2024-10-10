const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "⚡",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
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
        ┃✰ .𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚜
        ┃✰ .𝙼𝚎𝚝𝚍𝚊𝚏𝚒𝚛𝚎
        ┃✰ .𝙶𝚍𝚛𝚊𝚟𝚎
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
        ┃✰ .𝙾𝚜𝚗𝚎𝚛
        ┃✰ .𝙼𝚎𝚗𝚞
        |✰ .𝚁𝚎𝚙𝚘
        ╰━━━━━━━━━━━━━━━⪼

        > ᴘᴏᴡᴇʀᴅ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🥷🔥`;

        // Create buttons
        const buttons = [
            { buttonId: 'command_list', buttonText: { displayText: 'Commands List' }, type: 1 },
            { buttonId: 'help', buttonText: { displayText: 'Help' }, type: 1 }
        ];

        const buttonMessage = {
            text: madeMenu,
            footer: 'Select an option below:',
            buttons: buttons,
            headerType: 1 // Use header type 1 for button messages
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// If you have a method to listen to button clicks, you may use it here instead of conn.on()
const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "⚡",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
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
        ┃✰ .𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚜
        ┃✰ .𝙼𝚎𝚝𝚍𝚊𝚏𝚒𝚛𝚎
        ┃✰ .𝙶𝚍𝚛𝚊𝚟𝚎
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
        ┃✰ .𝙾𝚜𝚗𝚎𝚛
        ┃✰ .𝙼𝚎𝚗𝚞
        |✰ .𝚁𝚎𝚙𝚘
        ╰━━━━━━━━━━━━━━━⪼

        > ᴘᴏᴡᴇʀᴅ ʙʏ ɴᴀᴠɪʏᴀ ᴍᴅ 🥷🔥`;

        // Create buttons
        const buttons = [
            { buttonId: 'command_list', buttonText: { displayText: 'Commands List' }, type: 1 },
            { buttonId: 'help', buttonText: { displayText: 'Help' }, type: 1 }
        ];

        const buttonMessage = {
            text: madeMenu,
            footer: 'Select an option below:',
            buttons: buttons,
            headerType: 1 // Use header type 1 for button messages
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// If you have a method to listen to button clicks, you may use it here instead of conn.on()
