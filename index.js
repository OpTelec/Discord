const Discord = require('discord.js-commando');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn (__dirname + '/commands');

client.on('ready', function(){
    console.log('Ready')
})

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf8"));

if (!prefixes[message.guild.id]){
    prefixes[message.guld.id] = {
        prefixes: botconfig.prefix
    }
}


client.login(TOKEN).catch(err => console.log(err));



