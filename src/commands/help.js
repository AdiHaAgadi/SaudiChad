const fs = require('fs');
const EmbedDefaults = require('../properties/embed_defaults');
const BotProps = require('../properties/bot_properties');


module.exports = {
    name: 'help',
    description: 'Displays bot command manual',
    execute(message, args) {
        let commandFieldList = [];

        const commandFiles = fs.readdirSync('./src/commands/').filter((file) => file.endsWith('.js'));

        commandFiles.forEach((file) => {
            const command = require(`./${file}`);
                
            commandFieldList.push({
                name: BotProps.prefix + command.name,
                value: command.description,
                inline: false,
            });
        });

        const helpEmbed = {
            color: EmbedDefaults.color,
            title: '** --- Command Manual --- **',
            fields: commandFieldList,
        };

        message.channel.send({ embeds: [helpEmbed] });
    }
};