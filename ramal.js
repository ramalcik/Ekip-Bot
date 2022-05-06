const { Client, Collection, Discord } = require("discord.js");
require("discord-reply")
const client = (global.client = new Client({ fetchAllMembers: true }));
require('discord-buttons')(client)
const settings = require("./src/configs/settings.json");
const conf = require("./src/configs/sunucuayar.json");
const { Mute2, Unmute} = require("./src/configs/emojis.json");
const fs = require("fs");
client.commands = new Collection();
client.aliases = new Collection();
client.invites = new Collection();
client.cooldown = new Map();

const map = new Map();
const lımıt = 5;
const TIME = 180000;
const DIFF = 2000;

//RANK KISMI//
client.ranks = [
  { role: "855159722553901087", coin: 7000 },
  { role: "855159722007855125", coin: 9000 },
  { role: "855159721325363232", coin: 13000 },
  { role: "855159712172605461", coin: 17000 },
  { role: "855159711044730930", coin: 20000 },
  { role: "855159710319640597", coin: 25000 },
  { role: "855159709053354045", coin: 28000 },
  { role: "855159708640608256", coin: 40000 },
  ]
//KOMUT ÇALIŞTIRMA
fs.readdir('./src/commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`[Ramal] ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    fs.readdir("./src/commands/" + f, (err2, files2) => {
      files2.forEach(file => {
        let props = require(`./src/commands/${f}/` + file);
        console.log(`[Ramal KOMUT] ${props.conf.name} komutu yüklendi!`);
        client.commands.set(props.conf.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.conf.name);
        });
      })
    })
  });
});
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(settings.token)
  .then(() => console.log("Bot Başarıyla Bağlandı!"))
  .catch(() => console.log("[HATA] Bot Bağlanamadı!"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async (msg) => {
  if (!msg.guild || msg.author.id === client.user.id) return;
  let reklamKoruma = true;

  if (reklamKoruma) {
      const kelime = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
      if (kelime.some(reklam => msg.content.includes(reklam))) {
        if (msg.member.permissions.has(8)) return
        msg.channel.send(`Hey ${msg.author}, sunucuda reklam yapamazsın!`).then(ozixd => ozixd.delete({ timeout: 3000 }));
        if (msg.deletable) msg.delete({
          timeout: 200
        }).catch(err => {});
      }
  }
})

client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (!newMsg.guild || newMsg.author.id === client.user.id) return;
      if (newMsg.member.permissions.has(8)) return
      const kelime = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
     if (kelime.some(reklam => newMsg.content.includes(reklam))) {
        newMsg.channel.send(`Hey ${newMsg.author}, sunucuda reklam yapamazsın!`).then(ozixd => ozixd.delete({ timeout: 3000 }));
        if (newMsg.deletable) newMsg.delete({
          timeout: 200
        }).catch(err => {});
      }
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.guild) return
    if (message.member.hasPermission("ADMINISTRATOR")) return;
    if (message.member.roles.cache.get(conf.chatMute)) return;
      if (map.has(message.author.id)) {
        const userData = map.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;

        if (difference > DIFF) {
            clearTimeout(timer);
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                map.delete(message.author.id);
            }, TIME);
            map.set(message.author.id, userData)
        }
        else {
            msgCount++;
            if (parseInt(msgCount) === lımıt) {
          let messages = await message.channel.messages.fetch({ limit: 100 });
          let filtered = messages.filter((x) => x.author.id === message.author.id).array().splice(0, 7);
          message.channel.bulkDelete(filtered);
                message.member.roles.add(conf.chatMute);
                message.channel.send(`${Mute2} Sohbet kanallarını kirletme sebebiyle \`3 dakika\` süresince susturuldunuz, mesajlar temizlendi. Lütfen yavaşlayın. ${message.author}`).then(ozixd => ozixd.delete({ timeout: 5000 }))

                setTimeout(() => {
                   if (!conf.chatMute.some(x => message.member.roles.cache.has(x))) return
                    message.member.roles.remove(conf.chatMute);
                    message.channel.send(`${Unmute} Sohbet kanallarını kirletme sebebiyle 3 dakika süresince susturmanız bitti. Lütfen tekrarlamayınız. ${message.author}`).then(ozixd => ozixd.delete({ timeout: 5000 }))
                }, 180000);//9000000
            } else {
                userData.msgCount = msgCount;
                map.set(message.author.id, userData)
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            map.delete(message.author.id)
        }, TIME);
        map.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
            timer: fn
        })
    }
});
  
const mentionRegex = /<@!?&?\d+>/g;

client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return
    if (message.member.hasPermission('ADMINISTRATOR')) return;

 if (mentionRegex.test(message.content) && message.content.match(mentionRegex).length >= 4) {
        message.member.roles.add(conf.chatMute);
        message.channel.send(`${Mute2} Birden çok kişiyi etiketlediğin için \`15 dakika\` boyunca susturuldun. ${message.author}`);
        setTimeout(() => {
            message.member.roles.remove(conf.chatMute);
       message.channel.send(`${Unmute} Birden çok kişiyi etiketleme sebebiyle olan, Muten açıldı lütfen tekrar insanları etiketleme. ${message.author}`)
        }, 900000);//9000000
        if (message.deletable) message.delete({ timeout: 5000 }).catch(console.error);
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////   tag rol   //////////////////////////////////////

client.on("userUpdate", async function(eskiii, yeniii) {
  const guildID = "952566896941731891"
  const roleID = "952566897055002686"//taglı_rol
  const tag = "Verâ"
  const log2 = '952566900213305437'

  const guildd22 = client.guilds.cache.get(guildID)
  const role = guildd22.roles.cache.find(roleInfo => roleInfo.id === roleID)
  const member = guildd22.members.cache.get(yeniii.id)
  if (yeniii.username !== eskiii.username) {
    
      if (eskiii.username.includes(tag) && !yeniii.username.includes(tag)) {
        if (yeniii.discriminator === "1421") return client.channels.cache.get(log2).send(`${yeniii} İsim tagımızı bıraktı ama hala üzerinde etiket olduğu için \`Tagges\` rolünü almadım`);
    
          member.roles.remove(roleID)
          client.channels.cache.get(log2).send(`${yeniii} isminden tagımızı çıkartarak ailemizden ayrıldı`)
      } else if (!eskiii.username.includes(tag) && yeniii.username.includes(tag)) {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(` ${yeniii} ismine tagımızı alarak ailemize katıldı`)
      }
  }

 if (yeniii.discriminator !== eskiii.discriminator) {
      if (eskiii.discriminator == "1421" && yeniii.discriminator !== "1421") {
        if (yeniii.username.includes(tag)) return client.channels.cache.get(log2).send(`${yeniii} Etiketimizi tagımızı bıraktı ama hala üzerinde isim tagımızı olduğu için \`Tagges\` rolünü almadım`);
          member.roles.remove(roleID)
         client.channels.cache.get(log2).send(`${yeniii} etiketimizi çıkartarak ailemizden ayrıldı!`)
      } else if (eskiii.discriminator !== "1421" && yeniii.discriminator == "1421") {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(`${yeniii} etiketimizi alarak ailemize katıldı`)
      }
  }

})

client.on("guildMemberAdd", member => {
  const guildID = "952566896941731891"
  const roleID = "952566897055002686"//taglı_rol
  const tag = "verâ"
  const Disc = "1421"
  const log2 = '952566900213305437'
  const guildd22 = client.guilds.cache.get(guildID)
  const role = guildd22.roles.cache.find(roleInfo => roleInfo.id === roleID)
if(member.user.username.includes(tag)){
  setTimeout(function(){  
  client.channels.cache.get(log2).send(`Sunucumuza katıldı. ${member} isminde tagımız olduğu için \`tagges\` rolü verdim`)
}, 2000);
  setTimeout(function(){  
  member.roles.add(role)
}, 5000);

}
})


client.on("guildMemberAdd", member => {
  const guildID = "952566896941731891"
  const roleID = "952566897055002686"//taglı_rol
  const tag = "Verâ"
  const Disc = "1421"
  const log2 = '952566900213305437'
  const guildd22 = client.guilds.cache.get(guildID)
  const role = guildd22.roles.cache.find(roleInfo => roleInfo.id === roleID)


  if (member.user.discriminator === "1421") {
    setTimeout(function(){  
   client.channels.cache.get(log2).send(`${member} sunucuya \`1421\` etiketiyle geldiği için \`tagges\` rolünü verdim.`)
  }, 2000);
  setTimeout(function(){  
   member.roles.add(role)
  }, 5000);
  }
})

/////////////////////////////////////   tag rol   //////////////////////////////////////