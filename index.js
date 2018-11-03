const Discord = require('discord.js');
const client = new Discord.client();
const TOKEN = 'process.env.TOKEN';

client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn (__dirname + '/commands');

client.on('ready', function(){
    console.log('Ready')
})

client.login(TOKEN);



