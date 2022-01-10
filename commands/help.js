const { MessageEmbed } = require('discord.js');

module.exports.config = { 
     name: 'help',
     aliases: ['yardım','komutlar']
 }
 
 module.exports.sex = async(client, message, args, config) => {

let prefix = config.BotPrefixes[Math.floor(Math.random() * config.BotPrefixes.length)];

message.channel.send(new MessageEmbed().setAuthor(`${message.client.user.username}`, message.client.user.avatarURL).setColor('RANDOM')
.addField('Komutlar;',`

**${prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
**${prefix}pause**: Şarkıyı durdurur.
**${prefix}resume**: Durdurulan şarkıyı devam ettirir.
**${prefix}loop**: Şarkıyı tekrardan oynatır.
**${prefix}skip**: Varsa listedeki diğer şarkılara geçer.
**${prefix}stop**: Şarkıyı durdurur. 
**${prefix}np**: o an çalan şarkıyı gösterir.
**${prefix}list**: Şarkıları gösterir.
**${prefix}mix**: Şarkıları karıştırır.
**${prefix}ping**: Botun gecikme süresini gösterir.
**Sunucunuza eklemek isterseniz:**[davet linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL))
};
