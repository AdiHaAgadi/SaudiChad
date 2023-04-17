const fs = require('fs');
const EmbedDefaults = require('../properties/embed_defaults');
const BotProps = require('../properties/bot_properties');
const { bold } = require('../properties/text_style');

module.exports = {
    name: 'help',
    description: 'Displays bot command manual',
    execute(message, args) {
        let commandFieldList = [];

        const commandFiles = fs.readdirSync('./src/commands/').filter((file) => file.endsWith('.js'));

        commandFiles.forEach((file) => {
            const command = require(`./${file}`);
                
            commandFieldList.push({
                name: bold(BotProps.prefix + command.name)  + ':   ' + command.description,
                value: '',
                inline: false,
            });
        });

        const helpEmbed = {
            color: EmbedDefaults.color,
            title: bold(' --- Command Manual --- '),
            fields: commandFieldList,
        };

        message.channel.send({ embeds: [helpEmbed] });
    }
};