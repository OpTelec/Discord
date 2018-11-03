const commando=require('discord.js-commando');

class NsfwSpamCommand extends commando.Command
{
constructor(client)
{
super(client,{
name:'suprise',
group:'simple',
memberName:'suprise',
description:'Use !suprise to send someone a nice gift'
});
}


async run(message,args)
{
message.reply("bbsendnudes"+ message.args)
}
}

module.exports=NsfwSpamCommand;
