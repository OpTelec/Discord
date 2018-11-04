const Discord = require('discord.js-commando');
const fs = require ("fs");
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn (__dirname + '/commands');

client.on('ready', function(){
    console.log('Ready')
}); 

client.login(TOKEN).catch(err => console.log(err));



