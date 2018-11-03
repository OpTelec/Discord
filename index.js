const Commando = require('discord.js-commando');
const client = new Commando.client();
const TOKEN = 'process.env.TOKEN';

client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn (__dirname + '/commands');

client.on('ready', function(){
    console.log('Ready')
})

client.login(TOKEN);



