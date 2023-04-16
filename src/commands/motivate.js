const { quotes, images } = require('../../data/motivation_data');

module.exports = {
    name: 'motivate',
    description: 'Sends a random motivational quote',
    execute(message, args) {
        const quoteIndex = Math.floor(Math.random() * quotes.length);
        const imageIndex = Math.floor(Math.random() * images.length);

        const motivationEmbed = {
            color: EmbedDefaults.color,
            image: images[imageIndex],
            fields: [quotes[quoteIndex]],
        };

        channel.send({ embeds: [motivationEmbed] });
    }
}