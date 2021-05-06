const Command = require("../base/Command.js");
const clientayar = require("../client.json")
class Musicians extends Command {
    constructor(client) {
        super(client, {
            name: "müzisyen",
            aliases: ["musicians"]
        });
    }

    async run(message, args, perm) {
        if (!message.member.roles.cache.has(clientayar.botCommandhammer) && !message.member.hasPermission("ADMINISTRATOR")) return
        let user = message.mentions.members.first() || await this.client.üye(args[0], message.guild)
        if(!user) return this.client.yolla("Rolü verip/almak istediğin kullanıcıyı belirt ve tekrar dene!", message.author, message.channel)
        if(!user.roles.cache.has(clientayar.botCommandhammer)) {
            await this.client.yolla(`${user} kişisine <@&${clientayar.muzisyen}> rolü verildi.`, message.author, message.channel)
            user.roles.add(clientayar.muzisyen)
        } else{
            await this.client.yolla(`${user} kişisine <@&${clientayar.muzisyen}> rolü alındı.`, message.author, message.channel)
            user.roles.remove(clientayar.muzisyen)
        }
    }
}

module.exports = Musicians;
