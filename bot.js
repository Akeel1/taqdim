const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"


client.on('ready', ready => {
  console.log('ready')
  client.user.setStatus('dnd', 'Abot ')
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
        msg.edit(':scroll: **|من فضلك اكتب كم خبرتك في الديسكورد... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              id = collected.first().content;




              let prefix;
        msg.edit(`:scroll: **| ماذا تعرف عن ادارة سيرفرات البوتات ؟:pencil2:**`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              prefix = collected.first().content;



        let lib;
        msg.edit(`:scroll: **| تعرف الاوامر الادارية ؟؟ اذا تعرفها عددها :pencil2:
مثال :**
\`الباند | ميوت\`
\`الكيك \`
\`بلاك ليست\``).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              lib = collected.first().content;
              let sucount;
        msg.edit(`:scroll: **| لو احد طلب بريموم وش تقوله ؟:pencil2:
مثال :**
   
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              sucount = collected.first().content;



              let website;
        msg.edit(`:scroll: **|لو صرت ادارة بتغدر وتساعد اخوياك بل رشاوي ؟** :pencil2:`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              website = collected.first().content;


              let shortdesc;
              msg.edit(':man_in_tuxedo: **| هل انت متاكد من تقديمك ؟... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                shortdesc = collected.first().content;




                let longdesc;
        msg.edit(`:scroll: **|تكلم عن نفسك بطريقة مطولة :pencil2:**`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              longdesc = collected.first().content;


        msg.edit(':shield: **| [ هل متأكد من تقديمك ؟ للموافقة على التقديم اكتب [ نعم ] او [ لا**');
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
**# - المعلومات العامة** : 
\`${botname}\`
**# -الخبرة** :
\`${id}\`
**# -معلومات عن الادارة ** :
\`${prefix}\`
**# -معلومات عن اوامر الادارة** : 
\`${lib}\`
**# - لو احد طلب بريموم ** :
\`${shortdesc}\`
**# - الغدر** :
\`${website}\`
**# - التاكد من التقديم** :
\`${sucount}\`
`)
.addField('C.V :', longdesc)
.setFooter(message.author.username, message.author.avatarURL)
.setTimestamp()     
acapply.send(embed)
          }
        }
    );
});
      });
    }
      );
    });
}
);
})
}
      )
      }
      )
    }
)}
      )}
      )}
      )}
      )}
      )}
      )}
      )}
})

client.login(process.env.BOT_TOKEN);
