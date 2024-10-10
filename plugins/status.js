const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const https = require('https');

// Initialize the WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth()
});

// Generate QR code to authenticate
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Bot is ready!');
});

// Status save command
client.on('message', async (message) => {
    if (message.body.toLowerCase() === '!savestatus') {
        const contact = await message.getContact();
        const status = await contact.getStatus();

        if (status) {
            console.log(`Status: ${status}`);
            
            // Save status text to a file
            fs.writeFile('status.txt', status, (err) => {
                if (err) throw err;
                console.log('Status saved to status.txt');
                message.reply('Status saved successfully!');
            });
        } else {
            message.reply('This contact has no status.');
        }
    }
});

// Handle media statuses (images/videos)
client.on('message', async (message) => {
    if (message.body.toLowerCase() === '!savestatusmedia') {
        const contact = await message.getContact();
        const status = await contact.getStatus();

        if (status && status.mediaUrl) {
            const mediaUrl = status.mediaUrl;
            const fileName = `status.${mediaUrl.split('.').pop()}`; // Get file extension

            const file = fs.createWriteStream(fileName);
            https.get(mediaUrl, (response) => {
                response.pipe(file);

                file.on('finish', () => {
                    file.close();
                    console.log('Media status saved successfully!');
                    message.reply('Media status saved successfully!');
                });
            }).on('error', (err) => {
                fs.unlink(fileName);
                console.error('Error saving media status:', err.message);
                message.reply('Error saving media status.');
            });
        } else {
            message.reply('No media status found for this contact.');
        }
    }
});
