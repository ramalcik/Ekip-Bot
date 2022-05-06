const Discord = require("discord.js");
const conf = require("../../configs/sunucuayar.json");
const { ozinitro, ozinetflix, ozispotify, oziexxen, oziblutv} = require("../../configs/emojis.json")

module.exports = {
  conf: {
    aliases: [],
    name: "ecrolalma",
    owner: true,
  },

  run: async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`Merhaba **${message.guild.name}** üyeleri,\nÇekiliş katılımcısı alarak \`Nitro\` , \`Spotify\` , \`Netflix\` , \`Exxen\` , \`Blutv\` gibi çeşitli ödüllerin sahibi olabilirsiniz.\nEtkinlik katılımcısı alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.\n\nAşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz.`,"components":[{"type":1,"components":[

        {"type":2,"style":3,"custom_id":"buttoncekilis","label":"🎁 Çekiliş Katılımcısı"},
        {"type":2,"style":4,"custom_id":"buttonetkinlik","label":"🎉 Etkinlik Katılımcısı"}
        
        ]}]} })
  },
};

  
