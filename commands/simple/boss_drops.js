const commando=require('discord.js-commando');

class DropRateCommand extends commando.Command
{
constructor(client)
{
super(client,{
name:'droprate',
group:'simple',
memberName:'droprate',
description:'Use !droprate to learn drop rates from bosses.'
});
}


async run(message,args)
{
var bosses=Array('Telos','Helwyr','Vindicta & Gorvek','Chaos Elemental','Queen Black Dragon','Nex','K\'\rill Tsutsaroth','Arraxor','King Black Dragon','Giant Mole','Gregorovic','General Graador','Dagannoth Kings','Corporeal Beast','ComamnderZilyana','Barrows Brothers','Elite Dungeons','Kree\'\Arra','Legiones','Twin Furies');
if (args = bosses)
message.reply("The drop rate for " + args + " =")
}
}

module.exports=DropRateCommand;

class Boss {
    constructor(client)
{
super(client,{
name:'bossdrops',
group:'simple',
memberName:'bossdrops',
description:'Use !droprate to learn drop rates from bosses.'
});
}
}