const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => { client.user.setActivity('-help | By Natrix', { type: "LISTENING" }); });
client.once('ready', () => { console.log("Pret"); });


const YesEmoji = ("<:yes:848850867729334332>");
const NoEmoji = ("<:ereur:848850714289111060>");
const LoadingEmoji = ("<a:loading:848851120759504906>");
const HelpEmoji = ("<:help:848853458253643817>");
const Bot = ("<:command2:848855260605055017>");
const fleche = ("<a:command:848855067960410142>");

client.on('message',  msg => {
  if(msg.content.startsWith('-help')){
    const helpEmbed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Help - NatBot  ' + HelpEmoji)
.setThumbnail('https://nassyonal.com/storage/img/3.png')
.addFields(
  { name: '<:ImABot:848855260605055017> Commands', value: '<a:inviteMe:848895764028981279>  ' },
  { name: '│<a:command:848855067960410142>  -raidmode on', value: '┃Enable Raid mode ', inline: true },
  { name: '│<a:command:848855067960410142>  -raidmode off', value: '┃Disable Raid mode ', inline: true },
  { name: '│<a:command:848855067960410142>  -raidmode info', value: '┃Status of Raid mode', inline: true},
  { name: '│<a:command:848855067960410142>  -ping', value: '┃Ping of the bot', inline: true },
  { name: '│<a:command:848855067960410142>  -clear', value: '┃Clear messages', inline: true},
  { name: '│<a:command:848855067960410142>  -invite', value: '┃Invite the bot', inline: true}


)
.setFooter('NatBot - By Natrix | -help', 'https://nassyonal.com/storage/img/3.png');

msg.channel.send(helpEmbed);

}});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
//see an heroku tutorial on process.ENV EVENTS
