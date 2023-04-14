const { jokes } = require('../../data/adi_jokes');

module.exports = {
    name: 'joke',
    description: 'Sends a random Adi-joke',
    execute(message, args) {
        const jokeIndex = Math.floor(Math.random() * jokes.length);
        message.channel.send(`**${jokes[jokeIndex]}**`);
    }
}