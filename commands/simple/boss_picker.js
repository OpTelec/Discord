const commando=require('discord.js-commando');

class BossPickerCommand extends commando.Command
{
constructor(client)
{
super(client,{
name:'bosspick',
group:'simple',
memberName:'bosspick',
description:'Use!bosspicktoselectarandomboss'
});
}


asyncrun(message,args)
{
varbosses=Array('Telos','Helwyr','Vindicta&Gorvek','ChaosElemental','QueenBlackDragon','Nex','K\'\rillTsutsaroth','Arraxor','KingBlackDragon','GiantMole','Gregorovic','GeneralGraador','DagannothKings','CorporealBeast','ComamnderZilyana','BarrowsBrothers','EliteDungeons','Kree\'\Arra','Legiones','TwinFuries');
constrandomBoss=bosses[Math.floor(Math.random()*bosses.length)];

message.reply("Yourchosenbossis:"+randomBoss)
}
}

module.exports=BossPickerCommand;