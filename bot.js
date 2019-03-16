const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"


client.on('ready', ready => {
  console.log('ready')
  client.user.setStatus('dnd', 'Abot')
  client.user.setGame('#تقديم')
})

client.on('message',async message => {
    if(message.content.startsWith(prefix + "تقديم")) {
  if(!message.channel.guild) return message.reply(' ');
    let acapply = message.guild.channels.find(`name`, "التقديمات");
    if(!acapply) return message.channel.send(":x: لم اجد روم التقديمات");
      let filter = m => m.author.id === message.author.id;
      let botname;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب اسمك وعمرك وبلدك... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        botname = collected.first().content;
        let id;
        msg.edit(':scroll: **|كم ساعة تتفاعل في اليوم ؟... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              id = collected.first().content;




              let prefix;
        msg.edit(`:scroll: **| ماذا تعرف عن ادارة سيرفرات البوتات  :pencil2:**`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              prefix = collected.first().content;

   

        msg.edit(`:scroll: **| تحس نفسك قد الادارة ؟ :pencil2:
مثال :**
\`5 servers | 100 users\``).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              sucount = collected.first().content;



              let website;
        msg.edit(`:scroll: **| تكلم عن نفسك برطيقة حلوة واذكر صفاتك المميزة ** :pencil2:`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              website = collected.first().content;


              let shortdesc;
              msg.edit(':man_in_tuxedo: **|  :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                shortdesc = collected.first().content;




                let longdesc;
        msg.edit(`:scroll: **|لو صرت ستاف بل سيرفر بتغدر او تساعد اخوياك برشاوي ؟ :pencil2:**`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              longdesc = collected.first().content;


        msg.edit(':shield: **| [ اذا موافق على التقديم اكتب[ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          } // ${id} for bot id // ${mwa9fat} for bot features // ${count} for server and member count
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':white_check_mark: | **تم التقديم بنجاح**.');
            collected.first().delete();
           let embed = new Discord.RichEmbed()
        .setColor('#4CE782')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTitle('تقديم جديد :')
        .setDescription(`
**# - اسم الشخص والعمر والبلد** : 
\`${botname}\`
**# - ساعات التفاعل** :
\`${id}\`
**# - معلومات عن ستاف سيرفرات البوتات** :
\`${prefix}\`
**# - تحس نفسك قد الادارة؟** :
\`${shortdesc}\`
**# - C.V** :
\`${website}\`
**# - لو صرات ستاف بتغدر وتساعد اخوياك بل رشاوي ؟** :
\`${sucount}\`
`)
.addField('مواصفات البوت :', longdesc)
.setFooter(message.author.username, message.author.avatarURL)
.setTimestamp()     
acapply.send(embed)
    );
});
      });
      );
    });
);
})
      )
      )
    }
})

client.login(process.env.BOT_TOKEN);
