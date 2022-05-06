const conf = require("../configs/sunucuayar.json")
module.exports = async (menu) => {

    await menu.clicker.fetch();
    menu.reply.think(true)

    if (menu.values[0] === "invite") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .invite (stat [user])
- .topdavet (topdavet)
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "genel") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .afk (afk [sebep])
- .avatar (avatar [UserID/@User])
- .banner (banner [UserID/@User])
- .booster (boost [nick])
- .profil (profil / [@üye])
- .tag (tag)
- .yardım (yardım)
- .çek (çek [@üye])
- .git (git [@üye])
- .market (coinmarket) 
- .satınal (satınal) 
- .görev (görev [user])
- .coin [ekle/sil/gönder] [kullanıcı] [sayı]
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "kayıt") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .taglı-alım [aç/kapat]
- .kayıt (kayıt [user] İsim Yaş)
- .bağlantı-kes ([user])
- .isim (isim [user] [name | age])
- .isimler (isimler [user])
- .top-teyit (top-teyit)
- .unregister (unregister [user])
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "kurucu") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .kilit ([aç/kapat])
- .tagsay (tagsay)
- .banliste (banlist)
- .rolbilgi (@role)
- .cezapuansil ([user])
- .isimsil ([user])
- .sicilsil ([user])
- .yasaklı-tag (ekle/sil/liste [yasaklıtag])
- .ekip ([ekle-sil-liste-kontrol-bilgi])
- .ekip-ses ([@ekiprol])
- .yetkilises (yetkilises)
- .yoklama (toplantı)
- .allmute (allmute [kanal])
- .allunmute (allunmute [kanal])
- .toplutaşı (toplutaşı [kanal])
\`\`\`
`)
     },750) 
    }
    if (menu.values[0] === "moderasyon") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .yargı (yargı [user] [reason])
- .jail (jail [user] [reason])
- .vmute (vmute [user] [time] [reason])
- .mute (mute [user] [time] [reason])
- .jail (jail [user] [reason])
- .unban (unban [userID])
- .unmute (unmute [user] / [userID])
- .unvmute (unvmute [user] / [userID])
- .unjail (unjail [user] / [userID])
- .sicil (sicil [user])
- .topceza (topceza)
- .cezapuan (cezapuan [user])
- .cezasorgu (cezasorgu [Ceza ID])
- .yargılist (yargıliste)
- .allmute (allmute [kanal])
- .allunmute (allunmute [kanal])
- .toplutaşı (toplutaşı [kanal])
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "stat") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .stat (stat [user])
- .top (top)
- .nerede (sesbilgi)
- .topcoin (topcoin)
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "yetkili") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .ystat (yetkim [user])
- .cezapuan (cezapuan [user])
- .kes (kes [user])
- .rolsüz (rolsüz)
- .say (say)
- .snipe (snipe)
- .sesli (sesli)
- .sicil (sicil [user])
- .yetkili (yetkili [user])
- .taglı (taglı [user])
- .rol (r [al/ver] [user] [@role])
- .rollog (rollog [user])
- .seslisay (sesli)
- .sil (sil [miktar])
\`\`\`
`)
     },750) 
    }
}
module.exports.conf = {
    name: "clickMenu",
  };

