process.on("unhandledRejection", (error) => console.info(error));
process.on("uncaughtException", (error) => console.info(error));

const { Client } = require('whatsapp-web.js');
const { WebhookClient } = require("discord.js");

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

const webhook = new WebhookClient({ url: "https://discord.com/api/webhooks/1333515507202265199/H-C5sgflvoWyb_0FKxTGjbBTc521gwfYdd7_lPijoLGe3q65TJNKVUX80azEUdWzKxQf" });

const qrcode = require("qrcode");

client.on('qr', async(qr) => {
    const data = await qrcode.toDataURL(qr);
    
    console.log("✅ | QR Received");
    webhook.send({ files: [{ attachment: Buffer.from(data), name: "QR-WhatsApp.png" }] });
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