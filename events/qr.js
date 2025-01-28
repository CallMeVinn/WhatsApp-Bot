let pairingCodeRequested = false;

module.exports = async (client, qr) => {
    console.log("🆙 | QR Received");
    client.discord.webhook.send(qr);
    
    if (!pairingCodeRequested) {
        const pairingCode = await client.requestPairingCode(client.config.developer/*"6282337614839"*/);
        console.log("Pairing Code:", pairingCode);
        pairingCodeRequested = true;
    }
}