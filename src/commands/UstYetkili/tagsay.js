const Discord = require("discord.js")
const { green, red } = require("../../configs/emojis.json")
const conf = require("../../configs/sunucuayar.json")
module.exports = {
    conf: {
      aliases: ["tagsay"],
      name: "tagsay",
      help: "tagsay"
    },
  
    run: async (client, message, args, embed) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) { message.channel.send("Yeterli yetkin bulunmuyor!").then(x=>x.delete({timeout:5000}))
        message.react(red)
        return }

      let tag = "`"
      let tag2 = "Mark"

        let page = 1;
        const memberss = message.guild.members.cache.filter((member) => member.user.username.includes(tag) || member.user.username.includes(tag2) || member.user.discriminator == "1983"  && !member.user.bot);
        let liste = memberss.map((member) => `${member} - \`${member.id}\``) || `**Mark, #1993, mark** taglı kullanıcı yok`
        var msg = await message.channel.send(new Discord.MessageEmbed().setDescription(`Kullanıcı adında **Shéw, #1983, †** tagı olan **${memberss.size}** kişi bulunuyor:\n\n ${liste.slice(page == 1 ? 0 : page * 40 - 40, page * 40).join('\n')}`).setColor("RANDOM"));
        if (liste.length > 40) {
            await msg.react(`⬅️`);
            await msg.react(`➡️`);
            let collector = msg.createReactionCollector((react, user) => ["⬅️", "➡️"].some(e => e == react.emoji.name) && user.id == message.member.id, { time: 200000 });
            collector.on("collect", (react) => {
                if (react.emoji.name == "➡️") {
                    if (liste.slice((page + 1) * 40 - 40, (page + 1) * 40).length <= 0) return;
                    page += 1;
                    let tagsay = liste.slice(page == 1 ? 0 : page * 40 - 40, page * 40).join("\n");
                    msg.edit(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Kullanıcı adında **Shéw, #1983, †** tagı olan **${memberss.size}** kişi bulunuyor:\n\n${tagsay}`).setColor("RANDOM"));
                    react.users.remove(message.author.id)
                }
                if (react.emoji.name == "⬅️") {
                    if (liste.slice((page - 1) * 40 - 40, (page - 1) * 40).length <= 0) return;
                    page -= 1;
                    let tagsay = liste.slice(page == 1 ? 0 : page * 40 - 40, page * 40).join("\n");
                    msg.edit(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Kullanıcı adında **Shéw, #1983, †** tagı olan **${memberss.size}** kişi bulunuyor:\n\n${tagsay}`).setColor("RANDOM"));
                    react.users.remove(message.author.id)
                }
            })
        }
      },
    };
