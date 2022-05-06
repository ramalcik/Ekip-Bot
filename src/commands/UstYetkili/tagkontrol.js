const { green, red } = require("../../configs/emojis.json")
const conf = require("../../configs/sunucuayar.json")
module.exports = {
    conf: {
      aliases: ["kontrol","check"],
      name: "kontrol",
      help: "kontrol"
    },
  
    run: async (client, message, args, embed) => {
      let tag = ""
      let tag2 = ""
      let etiket = ""
      let rol = ""
      let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(rol))
      let taglilar2 = message.guild.members.cache.filter(s => s.user.username.includes(tag2) && !s.roles.cache.has(rol))
      let etiketliler = message.guild.members.cache.filter(s => s.user.discriminator.includes(etiket) && !s.roles.cache.has(rol))
      taglilar.array().forEach(async(member, index) => {
      setTimeout(async() => {
      if(member.user.bot) return
      await member.roles.add(rol)
      }, index * 1000)
      })
      taglilar2.array().forEach(async(member, index) => {
      setTimeout(async() => {
      if(member.user.bot) return
      await member.roles.add(rol)
      }, index * 1000)
      })
      etiketliler.array().forEach(async(member, index) => {
      setTimeout(async() => {
      if(member.user.bot) return
      await member.roles.add(rol)
      }, index * 1000)
      })
      let toplam = taglilar.size + etiketliler.size + taglilar2.size
      if(toplam === 0) {
      message.lineReply(` Hata : Herkesin rolleri dağıtılmış!`).sil(20)
      } else {
      embed.setDescription(`
      ${green} Başarılı! **${toplam}** Adet kullanıcıya taglı rolü verilecek!
      `)
      message.lineReply(embed) 
    }
          },
    };
