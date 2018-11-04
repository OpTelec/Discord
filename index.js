const commando = require('discord.js-commando');
const fs = require ("fs");
const TOKEN = process.env.TOKEN;
const client = new commando.Client({
    unknownCommandResponse: false
});

client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn (__dirname + '/commands');

client.on('ready', function(){
    console.log('Ready')
}); 

client.login(TOKEN).catch(err => console.log(err));



