module.exports = (client, message) => {
    const content = message.body;
    
    const mentions = await message.getMentions();
    
    for (const user of mentions) {
        console.log(`${user.pushname} telah disebutkan`);
    }
    
    const prefix = client.config.prefix;
    
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const prefixRegex = new RegExp(`^(${escapeRegex(prefix)})\\s*`);
    const rawContent = content?.toLowerCase();
    
    if (!prefixRegex.test(rawContent)) return;
    
    const [matchedPrefix] = rawContent.match(prefixRegex);
    const args = content.slice(matchedPrefix.length).trim().split(/ +/g);
    const query = args.shift().toLowerCase();
    
    if (!query.length) return;
    
    const commands = client.commands.cache.get(query);
    
    if (!commands) return;
    
    try {
        commands.execute(client, message, args);
    } catch(error) {
        console.info(error);
    }
}