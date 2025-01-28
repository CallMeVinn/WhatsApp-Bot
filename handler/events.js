const { readdirSync } = require("node:fs");

module.exports = (client) => {
    const dirs = readdirSync("./events");
    
    for (const files of dirs) {
        const event = require(`../events/${files}`);
        client.on(files.split(".")[0], event.bind(null, client));
    }
}