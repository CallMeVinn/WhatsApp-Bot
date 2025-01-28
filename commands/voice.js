const { MessageMedia } = require("whatsapp-web.js");

exports.description = "Testing";
exports.private = true;

exports.execute = async (client, message) => {
    const chat = await message.getChat();
    
    chat.sendStateRecording();
    
    const choices = ['Manut','Sekti'];
    const file = choices[Math.floor(Math.random() * choices.length)];
    
    const media = MessageMedia.fromFilePath(process.cwd()+"/root/mp3/"+file+".mp3");
    
    chat.sendMessage(media, { sendAudioAsVoice: true });
    
    chat.clearState();
}