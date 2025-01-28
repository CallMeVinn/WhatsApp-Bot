let pairingCodeRequested = false;

module.exports = (client) => {
    console.log("🆙 | QR Received");
    client.discord.webhook.send(qr);
    
    if (!pairingCodeRequested) {
        const pairingCode = await client.requestPairingCode("6282337614839");
        console.log("Pairing Code:", pairingCode);
        pairingCodeRequested = true;
    }
}