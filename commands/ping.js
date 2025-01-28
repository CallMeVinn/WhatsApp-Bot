exports.description = "Menampilkan delay respon.";
exports.private = false;

exports.execute = async (client, message) => {
    await message.reply("Pong?...");
    const msg = await message.getQuotedMessage();
    if (msg.fromMe) msg.edit(`Ping saya \`${Date.now()-message.timestamp}ms\``);
    
}