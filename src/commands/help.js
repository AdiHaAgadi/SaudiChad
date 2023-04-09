// const { commands } = require('../../main');

module.exports = {
    name: 'help',
    description: 'displays bot command manual',
    execute(message, args) {
        const helpMsg = '** --- Command Manual --- **\n';

        // commands.array.forEach((command) => {
        //     helpMsg += command.name + " " + command.description + "\n";
        // });

        message.channel.send(helpMsg);
    }
};