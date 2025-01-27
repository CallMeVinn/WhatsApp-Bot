process.on("unhandledRejection", (error) => console.info(error));
process.on("uncaughtException", (error) => console.info(error));

const { Client } = require('whatsapp-web.js');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

const qrcode = require("qrcode");

client.on('qr', (qr) => {
    console.log("✅ | QR Received", qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply(`Pong!...`);
    }
});

client.initialize();