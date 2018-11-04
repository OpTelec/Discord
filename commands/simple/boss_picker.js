const commando=require('discord.js-commando');

class BossPickerCommand extends commando.Command
{
constructor(client)
{
super(client,{
name:'m!bosspick',
group:'simple',
memberName:'bosspick',
description:'Use !bosspick to select a random boss'
});
}


async run(message,args)
{
var bosses=Array('Telos','Helwyr','Vindicta & Gorvek','Chaos Elemental','Queen Black Dragon','Nex','K\'\rill Tsutsaroth','Arraxor','King Black Dragon','Giant Mole','Gregorovic','General Graador','Dagannoth Kings','Corporeal Beast','ComamnderZilyana','Barrows Brothers','Elite Dungeons','Kree\'\Arra','Legiones','Twin Furies');
const randomBoss=bosses[Math.floor(Math.random()*bosses.length)];

message.reply("Your chosen boss is: "+randomBoss)
}
}

module.exports=BossPickerCommand;
