exports.description = "Menampilkan delay respon.";
exports.private = false;

exports.execute = async(client, message) => {
    const created = Date.now();
    const msg = await message.reply(`Ping saya \`${Date.now()-created}ms\``);
}