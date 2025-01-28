const { inspect } = require("node:util");

exports.description = "Sssstttt!";
exports.private = true;

exports.execute = async (client, message, args) => {
    if (!args.length) return;
        
    const code = args.join(" ");
        
    try {
        message.reply("```"+clean(await eval(code))+"```");
    }
    catch(error) {
        message.reply("⁉️\n```"+clean(error)+"```");
    }
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