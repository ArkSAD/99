exports.run = function(bot, message) {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .addField('> 🔶 - WebSocket:', `${Math.floor(bot.ping)} ms`, )
        .addField('> 🔶 - Host:', `Computing...`, )
        .setColor('#c3cdff');
        message.channel.send({embed}).then(function(newMessage) {
        const ping = newMessage.createdTimestamp - message.createdTimestamp;
        var color = 'c3cdff';

        if (ping <= 500) {
            color = 'c3cdff';
        } else if (ping > 1000) {
            color = 'c3cdff';
        } else if (ping > 500) {
            color = 'c3cdff';
        }

        const embed = new Discord.RichEmbed()
            .addField('> 🔶 - WebSocket:', `${Math.floor(bot.ping)} ms`, )
            .addField('> 🔶 - Host:', `${ping} ms`, )
            .setColor(color);
        message.channel.send({embed});
        newMessage.delete();
    }).catch(function(error) {
        const embed = new Discord.RichEmbed()
            .setTitle('An error occured.')
            .setDescription(`Please report this error to the development team of **${bot.user.username}**.\n\`\`\`${error}\`\`\``)
            .setColor('#c3cdff');
        message.channel.send({embed});
    })
}

exports.infos = {
    name: "Client Ping",
    perms: {
        bot: 1,
        discord: null
    },
    enabled: null,
    category: "Bot",
    description: "Checks bot's latency"
}