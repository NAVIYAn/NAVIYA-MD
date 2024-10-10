const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const record = require('node-record-lpcm16');

// Initialize the WhatsApp client
const client = new Client();

client.on('qr', (qr) => {
    // Generate and display the QR code in the terminal
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Bot is ready!');
});

// Flag to check if recording is active
let isRecording = false;

// Function to start recording
function startRecording() {
    if (!isRecording) {
        isRecording = true;
        const recording = record.start({
            sampleRateHertz: 16000,
            threshold: 0.5,
        });
        console.log('Recording started...');

        // Handle the audio data
        recording.on('data', (data) => {
            console.log('Recording data received...');
            // Here you can save or process the recorded audio data
        });

        recording.on('end', () => {
            console.log('Recording stopped.');
        });
    } else {
        console.log('Already recording!');
    }
}

// Function to stop recording
function stopRecording() {
    if (isRecording) {
        isRecording = false;
        record.stop();
        console.log('Recording stopped and saved.');
    } else {
        console.log('No recording in progress!');
    }
}

// Function to check recording status
function checkRecordingStatus() {
    return isRecording ? 'Recording is active.' : 'No recording in progress.';
}

// Listen to incoming WhatsApp messages
client.on('message', (message) => {
    if (message.body === '!on') {
        startRecording();
        message.reply('Auto recording has been turned ON.');
    } else if (message.body === '!off') {
        stopRecording();
        message.reply('Auto recording has been turned OFF.');
    } else if (message.body === '!status') {
        const status = checkRecordingStatus();
        message.reply(status);
    }
});
