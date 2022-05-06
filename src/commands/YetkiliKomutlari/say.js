const conf = require("../../configs/sunucuayar.json")
const { red } = require("../../configs/emojis.json")
module.exports = {
  conf: {
    aliases: ["say"],
    name: "say",
    help: "say"
  },

  run: async (client, message, args, embed) => {
    if(!conf.teyitciRolleri.some(oku => message.member.roles.cache.has(oku)) && !conf.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
      message.react(red)
      return
    }
    let Tag = conf.tag 
    var TotalMember = message.guild.memberCount
           var Taglı  = message.guild.members.cache.filter(b => b.roles.cache.has("952596895098892297")).size || 0;
           var Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
           var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
           message.channel.send(embed
              .setColor('RANDOM')
              .setDescription(`
\`>\` Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
\`>\` Aktif **${Online}** kullanıcı bulunmaktadır.
\`>\` Tagımızı alan toplam **${Taglı}** kullanıcı bulunmaktadır.
\`>\` Ses Kanallarında **${Voice}** kullanıcı bulunmaktadır.`)
 )
 
   },
 };
