const Discord = require('discord.js-commando');
const client = new Discord.Client();
const TOKEN = 'process.env.TOKEN';

client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn (__dirname + '/commands');

client.on('ready', function(){
    console.log('Ready')
})

client.login(NTA3OTI3MTg0NjE1Mjc2NTQ0.Dr3z5w.jVBcbM8iqwV7t9N2lcoUgOsgUC8);



