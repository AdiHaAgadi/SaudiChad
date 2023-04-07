const { Client, GatewayIntentBits  } = require('discord.js');

const secrets = require('./secrets/secret_data');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

client.once('ready', () => {
    console.log('SaudiChad is online!')
})

client.login(secrets.Token);