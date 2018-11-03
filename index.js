const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = 'process.env.TOKEN';

//client.registry.registerGroup('simple', 'Simple');
//client.registry.registerDefaults();
//client.registry.registerCommandsIn (__dirname + '/commands');

client.on('ready', function(){
    console.log('Ready')
})

class BossPickerCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'bosspick',
            group: 'simple',
            memberName: 'bosspick',
            description: 'Use !bosspick to select a random boss'
        });    
    }


    async run(message, args) 
    {
        var bosses = Array('Telos', 'Helwyr','Vindicta & Gorvek', 'Chaos Elemental', 'Queen Black Dragon','Nex', 'K\'\ rill Tsutsaroth', 'Arraxor', 'King Black Dragon', 'Giant Mole','Gregorovic','General Graador','Dagannoth Kings','Corporeal Beast','Comamnder Zilyana','Barrows Brothers','Elite Dungeons','Kree\'\Arra','Legiones','Twin Furies');
        const randomBoss = bosses[Math.floor(Math.random()*bosses.length)];

    message.reply("Your chosen boss is: " + randomBoss)
    }
}

client.login(TOKEN);



