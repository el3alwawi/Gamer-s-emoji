const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { Client, Util } = require('discord.js');  
const getYoutubeID = require('get-youtube-id'); 
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const request = require('request');
const queue = new Map(); 
const client = new Discord.Client(); 
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api');   
const fs = require("fs"); 
const moment = require("moment");
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const zalgo = require('zalgolize');   
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 

client.on('ready', function(){
    var ms = 15000 ;
    var setGame = [`${client.guilds.size} Server`,'-invite bot | for add this bot👾 in your server',`${client.users.size} Members`,'اوامر البوت 📌 GE-help | GE-مساعدة','Bot By: DEX Gamer'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i]);
    }, ms);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});


// كود دعوة بواسطة
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "general");
    welcome.send(` ${member.user.tag} تم دعوته بواسطة : ||${inviter.tag}|| عدد الدعوات = ${invite.uses} `)
  });
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// البوت
client.on('guildCreate', guild => {
client.channels.get("558736018434687006").send(`✅ **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("558736018434687006").send(`❎ **${client.user.tag} خرج من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});//Codes
//////////////////////////////////////////////////////////////////////////////////////////////////////// لما تجي رسالة للبوت في الخاص
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("558736018434687006").send({embed:Dark});
    }
});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك وهذا أمر المساعدة | GE-help او GE-مساعدة**`)
        guild.owner.send(embed)
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// انفايت رابط
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)
  message.author.send(`**هـذَآ هـوُ رٍآبَطُ سيرٍفُرٍنآ آذَآ حٍآبَبَ تجٍيبَ آصدِقٌآء وُترٍبَح رٍتبَ زْيآدِة معٍنآ
مدة الرابط : يـوم
 عدد استخدامات الرابط : 10 **`)
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// كود انفايت البوت
client.on('message', message => {
  if (true) {
if (message.content === 'G-invite bot') {
      message.author.send('  **هذا هو رابط البوت وتستطيع اضافته الى سيرفرك بنجاع** |	  https://discordapp.com/oauth2/authorize?client_id=556967912104263686&permissions=8&scope=bot  ').catch(e => console.log(e.stack));
    }
   }
  }); 
client.on('message', message => {
     if (message.content === "G-invite bot") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("** Done | تــــم **" , "**تم ارسال رابط انفايت البوت في الخاص**")
  message.channel.sendEmbed(embed);
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////// السيرفرات التي فيها بوتنا
client.on('message', message => {
    if(message.content == 'G-bot GE') {
             if(!message.author.id === '556833562549026816') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('**عدد الأعضاء** ',gmemb = g.members.size)
    .setColor('RANDOM')
     message.channel.sendEmbed(serv);
    }) 
    }
    });
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "bot GE")) {
       message.channel.send(`**متواجد حاليا في : \`\`${client.guilds.size}\`\` سيرفرات مختلفة**`);
   } 
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// سيرفر الدعم
   client.on('message', message => {
     if (message.content === "G-support" || message.content === "G-دعم") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: سيرفر الدعم :gear: **" , "  **https://discord.gg/XQUZ6Xa**")
     
     
  message.channel.sendEmbed(embed);
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// امر help
   client.on("message", function(message) {
    var prefix = "GE-";
   if(message.content.startsWith(prefix + "help") || message.content.startsWith(prefix + "مساعدة")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setTitle('**تفضل أوامر البوتات حقنا وان شاء الله تعجبك **')
    .addField("Puplic | عامه","🗣",true)
    .addField("Admin | ادمنيه","🔴",true)
    .addField("Games | العاب","🕹",true)
    .addField("Orders | قانون السيرفر","🚧",true)
    .addField("Rainbow | الوان ريمبو","🌈",true)
     message.channel.send(RpsEmbed).then(msg => {
     msg.react('🗣')
     msg.react("🔴")
     msg.react("🕹")
     msg.react("🚧")
     msg.react('🌈')
.then(() => msg.react('🗣'))
.then(() => msg.react('🔴'))
.then(() => msg.react('🕹'))
.then(() => msg.react('🚧'))
.then(() => msg.react('🌈'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🗣' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🔴' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🕹' && user.id === message.author.id;
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🚧' && user.id === message.author.id;
let reaction5Filter = (reaction, user) => reaction.emoji.name === '🌈' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 17000 });
let reaction5 = msg.createReactionCollector(reaction5Filter, { time: 21000 });
reaction1.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`
**:small_orange_diamond: هذي قائمة المساعدة لبوت Gamer's Emoji وراح نضيف اشياء ثانية عن قريب ..**
:sparkles: **G-admin** :point_left: **لارسال رسالة الى ادمن البوت __اكتب الامر وبعده الرسالة__**
:sparkles: **-invite bot** :point_left: **إذا تبي تضيف البوت في سيرفرك راح يرسلك في الخاص**
:sparkles: **رابط** :point_left: **يرسل لك البوت رابط اينفايت بالخاص**
:sparkles: **G-support | G-دعم** :point_left: **سيرفر البوت والدعم**

**
__ملاحظة :__
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
G-admin ( اكتب الرسالة هنا ) | او ارسل رسالتك للبوت
مع تحيات : DEX Gamer
**
**شكرا لك**`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-1.discordapp.net/external/DbPeTYlfGrBFd0B-SDcdVZPbPJRE8xiNcH9sG2sC5sA/http/www.expertizacontabila.com/images/staffmap-icon.png')
      .setColor("#000000")
      .setDescription(`
:name_badge: __**هذه المعلومات للاداريين في السيرفر فقط**__ :name_badge:
:sparkles: **-invite bot** :point_left: **إذا تبي تضيف البوت في سيرفرك راح يرسلك في الخاص**

**
__ملاحظة :__
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
G-admin ( اكتب الرسالة هنا ) | او ارسل رسالتك للبوت
مع تحيات : DEX Gamer
**`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/4IGqoA1bqVqu_o2I-jY51fqJFy2S8f8NrzcnzxhFtVU/http/reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png')
      .setColor("#000000")
      .setDescription(`
═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
	  
**:joystick: استمتع بالالعاب الموجودة بالبوت :joystick:**
**
:game_die: -فري فاير 
أسئلة منوعة عن فري فاير وهي للمعلومات فقط
:game_die: -صراحة
لعبة الصراحة الجميلة باسئلة منوعة
:game_die: -تحدي
أنصحك اذا انت مش قد التحدي لاتشارك فيها ابدا ☺
:game_die: -فكك
كلمات يكتبها البوت وانت تفككها بس انتبه على الحروف جيدا
:game_die: -اسرع
لعبة اسرع واحد يكتب الكلمة او الجملة الي يكتبها البوت
:game_die: -لغز
لعبة ألغاز جميلة ولازم تجاوب على اللغز قبل الوقت
:game_die: -سؤال
أسئلة عن لعبة فري فاير وهي بالوقت بسرررعة اجب
:game_die: -لو خيروك
لعبة لو خيروك بس خيارين واختار واحد فيهم
:game_die: -rps
لعبة حجر ورقة مقص وتلعبها ضد البوت
:game_die: -رقم
اكتب الأمر وبعده الرقم والبوت يختار رقم عشوائي
:new: :game_die: -حظ
لعبة حظ عشوائية اذا جبت 3 نفس الشكل انت الفائز
-invite bot يرسلك رابط البوت في الخاص
__ملاحظة :__
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
G-admin ( اكتب الرسالة هنا )
مع تحيات : DEX Gamer
**═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
`)
   message.author.sendEmbed(embed)
   message.reply('**تم ارسالك بلخاص**')
})
reaction4.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`
**هلا وسهلا بك(ي) في سيرفرنا المتواضع
أرجوا ان تقضي وقتا ممتعا وان تستفيد(ي) معنا في اسرتنا المتواضعة التي هي اسرتك من الآن ان شاء الله
اسرتنا اسرة محترمة فيرجى منك التقيد بما هو مذكور في الأسفل فنحن نراعي ظروف ومشاعر الاخرين فكونك(ي) مميزا(ة) بأخلاقك لكي ترفع(ي) فوق رؤوسنا 
قوانيننا بسيطة وهي كالتالي :
:small_orange_diamond: : المحافظة على الاحترام المتبادل. 
:small_orange_diamond: : يمنع نشر صور لأعلام أو رايات أو أشخاص أو مقولات تحمل طابع طائفي . 
:small_orange_diamond: : يمنع نشر صور شخصية أو أرقام جوالات أو ايميلات او نشر روابط صفحات أو سيرفرات أخرى .
:small_orange_diamond: : سيتم حذف أي عضو صورته الشخصية غير لائقة او غير أخلاقية . 
:small_orange_diamond: : الأدمن هو اللي يقرر حذف المنشور وحظر الأعضاء ولا يحق لأي عضو يتدخل بهذا الشي مهما كانت رتبته .
:small_orange_diamond: : ممنوع أي شاب يطلب اضافه من بنت في السيرفر او يقول لها تعالي خاص اما خارج سيرفرنا انت حر . 
:small_orange_diamond: : يمنع نشر منشورات تسبب الفتنة بين الأعضاء او منشورات لا أخلاقية . 
:small_orange_diamond: : عليك التزام الأدب اثناء النقاشات واحترام أراء الأخرين ويمنع السب والشتم داخل السيرفر . 
:small_orange_diamond: : المسؤولون لهم الحق في حذف ما يرونه مسيئا دون الرجوع الى صاحب الرسالة . 
:small_orange_diamond: : ممنوع تعمل سبام في الشات او راح تاخذ ميوت شات . 
:small_orange_diamond: : لا ترسل اي رابط سيرفر في الشات او الخاص لأي عضو من الأعضاء . 
:small_orange_diamond: : أي عضو يتعرض للإهانة أو التجريح عليه أن يتوجه بالشكوى لإدارة المجموعة وسيتم حظر أي عضو يخالف القوانين .
**`)
   message.author.sendEmbed(embed)
   message.reply('**تم ارسالك بلخاص**')
})
reaction5.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`**
========🌈 Rainbow Bot. 🌈========
G-set 
لإنشاء رتبة الرينبو وبدا الرينبو
To create the role of the Rainbow & Start The Rainbow
خطوات لو الرتبة م أشتغلت .!!
1 ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه
2 ضع رتبة البوت __GO Bot__ فوق رتبة الرينبو
The steps of the role did not worked .!!
1 Place the role of the Rainbow above the colors or colored ranks if it
2 Put the bot role __GO Bot__ above the role of the Rainbow 
========🌈 Rainbow Bot. 🌈========
__ملاحظة :__
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
G-admin ( اكتب الرسالة هنا ) | او ارسل رسالتك للبوت
مع تحيات : DEX Gamer
**
**شكرا لك**`)
   message.author.sendEmbed(embed)
      message.reply('**تم ارسالك بلخاص**')
})
    })
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith("A-yes")) {
    let embed = new Discord.RichEmbed() 
    .setColor("#ffffff")
    .setTimestamp('**Clicl here to add ..**')
    .setURL(`https://discord.gg/yQgRBf2`)
    .setAuthor(message.author.username)
    .setImage('https://pic.chinesefontdesign.com/uploads/2018/01/chinesefontdesign.com-2018-01-04_11-06-17_375325.gif')
    .setTitle("**Gamer's Emoji**")
     message.channel.sendEmbed(embed) 
      }
    })
























client.login(process.env.BOT_TOKEN);
