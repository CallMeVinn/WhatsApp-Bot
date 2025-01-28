const { readdirSync } = require("node:fs");

module.exports = (client) => {
    const dirs = readdirSync("./commands");
    
    for (const files of dirs) {
        const command = require(`../commands/${files}`);
        command.name = files.split(".")[0];
        client.commands.set(command.name, command);
    }
}