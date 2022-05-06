const client = global.client;
const { Collection } = require("discord.js");
const inviterSchema = require("../schemas/inviter");
const inviteMemberSchema = require("../schemas/inviteMember");
const coin = require("../schemas/coin");
const gorev = require("../schemas/invite");
const otokayit = require("../schemas/otokayit");
const bannedTag = require("../schemas/bannedTag");
const regstats = require("../schemas/registerStats");
const conf = require("../configs/sunucuayar.json");
const ayar = require("../configs/sunucuayar.json")
const settings = require("../configs/settings.json")
const moment = require("moment");
const { star, green, red } = require("../configs/emojis.json")


module.exports = async (member) => {
  let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
  if (guvenilirlik) {
  if(ayar.fakeAccRole) member.roles.add(ayar.fakeAccRole).catch();
  } else if(ayar.unregRoles) member.roles.add(ayar.unregRoles).catch();
  if (member.user.username.includes(ayar.tag)) { member.setNickname(`${ayar.tag} İsim | Yaş`).catch(); }
  else { member.setNickname(`${ayar.ikinciTag} İsim | Yaş`).catch();}
  
  if (member.user.username.includes(ayar.tag)) {
    await member.roles.add(ayar.ekipRolu)
    await member.roles.add(ayar.unregRoles)
  client.channels.cache.get(ayar.ekipLogChannel).send(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, isminde ${ayar.tag} sembolü bulunuyor.`)
 
  }

    let otoreg = await otokayit.findOne({
      userID: member.id
    })

   const tagModedata = await regstats.findOne({ guildID: settings.guildID })
    if (tagModedata && tagModedata.tagMode === false) {
      if (otoreg) {
        if (member.manageable) await member.roles.set(otoreg.roleID)
        member.setNickname(`${ayar.tag} ${otoreg.name}`);
       if(ayar.chatChannel && client.channels.cache.has(ayar.chatChannel)) client.channels.cache.get(ayar.chatChannel).send(`Aramıza hoşgeldin **${member}**! Sunucumuzda daha önceden kayıtın bulunduğu için direkt içeriye alındınız. Kuralları okumayı unutma!`).then(x => x.delete({timeout: 10000})) 
      }
}

  let memberGün = moment(member.user.createdAt).format("DD");
  let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
  let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");

  var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
        var üs = üyesayısı.match(/([0-9])/g)
        üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
        if(üs) {
          üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
            return {
              '0': `0`,
              '1': `1`,
              '2': `2`,
              '3': `3`,
              '4': `4`,
              '5': `5`,
              '6': `6`,
              '7': `7`,
              '8': `8`,
              '9': `9`}[d];
            })
          }  

  const channel = member.guild.channels.cache.get(ayar.invLogChannel);
  const kayitchannel = member.guild.channels.cache.get(ayar.teyitKanali);
  const kurallar = member.guild.channels.cache.get(ayar.kurallar);
  if (!channel) return;
  if (member.user.bot) return;

  const gi = client.invites.get(member.guild.id).clone() || new Collection().clone();
  const invites = await member.guild.fetchInvites();
  const invite = invites.find((x) => gi.has(x.code) && gi.get(x.code).uses < x.uses) || gi.find((x) => !invites.has(x.code)) || member.guild.vanityURLCode;
  client.invites.set(member.guild.id, invites);

await bannedTag.findOne({ guildID: settings.guildID }, async ( err, res) => {

  res.taglar.forEach(async x => {

  if(res.taglar.some(x => member.user.username.includes(x))) { 
    await member.roles.set(ayar.jailRole)
    await member.setNickname("Yasaklı Tag")
    if (settings.dmMessages) member.send(`${member.guild.name} adlı sunucumuza olan erişiminiz engellendi! Sunucumuzda yasaklı olan bir simgeyi (${x}) isminizde taşımanızdan dolayıdır. Sunucuya erişim sağlamak için simgeyi (${x}) isminizden çıkartmanız gerekmektedir.\n\nSimgeyi (${x}) isminizden kaldırmanıza rağmen üstünüzde halen Yasaklı Tag rolü varsa sunucudan gir çık yapabilirsiniz veya sağ tarafta bulunan yetkililer ile iletişim kurabilirsiniz. **-Yönetim**\n\n__Sunucu Tagımız__\n**${conf.tag}**`).catch(() => {});
}
})
})

if (invite === member.guild.vanityURLCode) {
kayitchannel.wsend(`
**Verâ #1421** ya hoş geldin  ${member} biz de seni bekliyorduk, hesabın \`${memberGün} ${memberAylar} ${memberTarih} tarihinde \`` + moment(member.user.createdTimestamp).fromNow() + `\` oluşturulmuş ${guvenilirlik ? `Hesabınız Şüpheli ${red}` : `Hesabınız Güvenli ${green}` }\n
Sunucumuzun kurallarımız ${kurallar} kanalında belirtilmiştir. Unutma sunucu içerisinde ki **ceza işlemi** kuralları okuduğunu varsayarak uyğulanacak.
Sunucu seninle birlikte ailemiz **${üyesayısı}**  :tada: :tada: :tada:`);
channel.wsend(`${member}, sunucuya katıldı! Davet Eden: **Sunucu Özel URL** :tada:`)
return }
if (!invite.inviter) return;
await inviteMemberSchema.findOneAndUpdate({ guildID: member.guild.id, userID: member.user.id }, { $set: { inviter: invite.inviter.id, date: Date.now() } }, { upsert: true });
if (Date.now() - member.user.createdTimestamp <= 1000 * 60 * 60 * 24 * 7) {
await inviterSchema.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { total: 1, fake: 1 } }, { upsert: true });
const inviterData = await inviterSchema.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
const total = inviterData ? inviterData.total : 0;
kayitchannel.wsend(`${member} isimli üye sunucuya katıldı fakat hesabı \`` + moment(member.user.createdTimestamp).fromNow() + `\` açıldığı için şüpheli olarak işaretlendi.`);
channel.wsend(`:tada: ${member}, ${invite.inviter.tag} davetiyle katıldı! (**${total}**)`)
member.roles.set(ayar.fakeAccRole)
} else {
await inviterSchema.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { total: 1, regular: 1 } }, { upsert: true });
const inviterData = await inviterSchema.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
const total = inviterData ? inviterData.total : 0;
kayitchannel.wsend(`
**Verâ #1421** ya hoş geldin  ${member} biz de seni bekliyorduk, hesabın ${memberGün} ${memberAylar} ${memberTarih} tarihinde \`` + moment(member.user.createdTimestamp).fromNow() + `\` oluşturulmuş ${guvenilirlik ? `Hesabınız Şüpheli ${red}` : `Hesabınız Güvenli ${green}` }\n
Sunucumuzun kurallarımız ${kurallar} kanalında belirtilmiştir. Unutma sunucu içerisinde ki **ceza işlemi** kuralları okuduğunu varsayarak uyğulanacak.
Sunucu seninle birlikte ailemiz **${üyesayısı}**  :tada: :tada: :tada:`);
channel.wsend(`${member}, ${invite.inviter.tag} davetiyle katıldı! (**${total}**)`)
}
await coin.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { coin: 1 } }, { upsert: true });
const gorevData = await gorev.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
if (gorevData)
{
await gorev.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { invite: 1 } }, { upsert: true });
}
};

module.exports.conf = {
  name: "guildMemberAdd",
};
