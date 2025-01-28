const { Client } = require("whatsapp-web.js");
const { Collection, WebhookClient } = require("discord.js");
const { readdirSync } = require("node:fs");

class WhatsApp extends Client {
    constructor() {
        super({
            puppeteer: {
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
        });
        
        process.on("unhandledRejection", (error) => console.info(error));
        process.on("uncaughtException", (error) => console.info(error));
        
        this.config = require("../root/config");
        this.commands = new Collection();
        
        this.discord = {
            webhook: new WebhookClient({ url: process.env.WEBHOOK })
        }
        
        this.loadHandlers();
        super.initialize();
    }
    loadHandlers() {
        const handlers = readdirSync("./handler");
        
        for (const handler of handlers) {
            require(`../handler/${handler}`)(this);
        }
    }
}

module.exports = WhatsApp;