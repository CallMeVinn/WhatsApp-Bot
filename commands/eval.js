const { inspect } = require("node:util");

exports.description = "Sssstttt!";
exports.private = true;

exports.execute = async (client, message, args) => {
    if (!args.length) return;
    
    const chat = await message.getChat();
    chat.sendStateTyping();
    const code = args.join(" ");
    
    try {
        await message.reply("```"+clean(await eval(code))+"```");
    }
    catch(error) {
        await message.reply("⁉️\n```"+clean(error)+"```");
    }
    chat.clearState();
}

function clean(code) {
    if  (typeof code === "string") {
        return code
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
    }
    else {
        return inspect(code, { depth: 0 });
    }
}