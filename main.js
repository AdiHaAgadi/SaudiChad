const Discord = require('discord.js');

const secrets = require('./src/properties/secret_data');

const BotProps = require('./src/properties/bot_properties');

const client = new Discord.Client({ 
    intents: [
        Discord.GatewayIntentBits.Guilds, 
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.DirectMessages,
    ],
    partials: [
        Discord.Partials.Channel,
    ],
});

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands/').filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
    const command = require(`./src/commands/${file}`);
    
    client.commands.set(command.name, command);
});

client.once('ready', () => {
    console.log('SaudiChad is online!\n')
})

client.on('messageCreate', (message) => {
    if (message.content.startsWith(BotProps.prefix) && !message.author.bot) {

        const args = message.content.slice(BotProps.prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        try {
            client.commands.get(command).execute(message, args);
            console.log(`command '${command}' executed!`);
        } catch (e) {
            console.log(`command '${command}' does not exist!`);
        }
    }
})

client.login(secrets.Token);