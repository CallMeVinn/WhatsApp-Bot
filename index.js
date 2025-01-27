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

let pairingCodeRequested = false;

client.on('qr', async(qr) => {
    console.log("✅ | QR Received");
    webhook.send(qr);
    
    // paiuting code example
    const pairingCodeEnabled = false;
    if (pairingCodeEnabled && !pairingCodeRequested) {
        const pairingCode = await client.requestPairingCode('6282337614839', true); // enter the target phone number
        console.log('Pairing Code:', pairingCode);
        pairingCodeRequested = true;
    }
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