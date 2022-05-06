const conf = require("../configs/sunucuayar.json")
module.exports = async (menu) => {

    await menu.clicker.fetch();
    menu.reply.think(true)

    if (menu.values[0] === "couple") {
        menu.clicker.member.roles.cache.has(conf.sevgilimyok) &&
        menu.clicker.member.roles.cache.has(conf.lgbt)

       await menu.clicker.member.roles.add(conf.sevgilimvar)
       await menu.clicker.member.roles.remove(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.lgbt) 
     setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.sevgilimvar}> rolünü aldın!`)
     },750) 
    }
    if(menu.values[0] === "alone") {
        menu.clicker.member.roles.cache.has(conf.sevgilimvar) &&
        menu.clicker.member.roles.cache.has(conf.lgbt)

       await menu.clicker.member.roles.add(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.sevgilimvar)
       await menu.clicker.member.roles.remove(conf.lgbt)  
     setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.sevgilimyok}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "lgbt") {
        menu.clicker.member.roles.cache.has(conf.sevgilimyok) &&
        menu.clicker.member.roles.cache.has(conf.sevgilimvar)

       await menu.clicker.member.roles.add(conf.lgbt)
       await menu.clicker.member.roles.remove(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.sevgilimvar)       
     setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.lgbt}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "rolsuz") {
       await menu.clicker.member.roles.remove(conf.lgbt)
       await menu.clicker.member.roles.remove(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.sevgilimvar)     
     setTimeout(() => {   
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
 },750) 
    }
    if(menu.values[0] === "vk") {
        await menu.clicker.member.roles.add("901127903608209548") 
setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901127903608209548> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "dc") {
        await menu.clicker.member.roles.add("901127728076574830") 
setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901127728076574830> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "gif") {
        await menu.clicker.member.roles.add("901128021413593148") 
setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901128021413593148> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "rolsuzz") {
        await menu.clicker.member.roles.remove(["901127728076574830", "901127903608209548", "901128021413593148"])
setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
 },750) 
    }
    if (menu.values[0] === "kirmizi") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add("901104947813310554") 
        await menu.clicker.member.roles.remove(["901104952750010378", "901104957007224852", "901104964997378130", "901104971255263322"])
       setTimeout(() => { 
      menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901104947813310554> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "sari") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add("901104952750010378") 
        await menu.clicker.member.roles.remove(["901104947813310554", "901104957007224852", "901104964997378130", "901104971255263322"])
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901104952750010378> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "mavi") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add("901104957007224852") 
        await menu.clicker.member.roles.remove(["901104947813310554", "901104952750010378", "901104964997378130", "901104971255263322"])
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901104957007224852> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "mor") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add("901104964997378130") 
        await menu.clicker.member.roles.remove(["901104947813310554", "901104952750010378", "901104957007224852", "901104971255263322"])
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901104964997378130> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "pembe") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add("901104971255263322") 
        await menu.clicker.member.roles.remove(["901104947813310554", "901104952750010378", "901104957007224852", "901104964997378130"])
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&901104971255263322> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "rolsuzzz") {
        await menu.clicker.member.roles.remove(["901104947813310554", "901104952750010378", "901104957007224852", "901104964997378130", "901104971255263322"])
   setTimeout(() => {      
   menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
 },750) 
    }
/////////////////////////////////////////////////////////
    if (menu.values[0] === "ikizler") {
        await menu.clicker.member.roles.add("899273632499523592") 
        await menu.clicker.member.roles.remove(["899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
            ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////
   setTimeout(() => {     
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523592> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "yengeç") {
        await menu.clicker.member.roles.add("899273632499523591") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////
           setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523591> rolünü aldın!`)
 },750) 

    }
    if(menu.values[0] === "boğa") {
        await menu.clicker.member.roles.add("899273632499523590") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
        ////////////////////////////////////////////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////   
         setTimeout(() => {   
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523590> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "koç") {
        await menu.clicker.member.roles.add("899273632499523589") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////   
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523589> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "akrep") {
        await menu.clicker.member.roles.add("899273632499523588") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////          
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523588> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "terazi") {
        await menu.clicker.member.roles.add("899273632499523587") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523587> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "başak") {
        await menu.clicker.member.roles.add("899273632499523586") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523586> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "aslan") {
        await menu.clicker.member.roles.add("899273632499523585") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523584", "900073155111047228", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
           setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523585> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "balık") {
        await menu.clicker.member.roles.add("899273632499523584") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "900073155111047228", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
            setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&899273632499523584> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "kova") {
        await menu.clicker.member.roles.add("900073155111047228") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073145795485756","900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
       setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&900073155111047228> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "oğlak") {
        await menu.clicker.member.roles.add("900073145795485756") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073151042580531"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
       setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&900073145795485756> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "yay") {
        await menu.clicker.member.roles.add("900073151042580531") 
        await menu.clicker.member.roles.remove(["899273632499523592" , "899273632499523591", "899273632499523590", "899273632499523589", "899273632499523588", "899273632499523587", "899273632499523586", "899273632499523585", "899273632499523584", "900073155111047228", "900073145795485756"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
       setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&900073151042580531> rolünü aldın!`)
 },750) 
    }

}
module.exports.conf = {
    name: "clickMenu",
  };

