const Discord = require('discord.js');
const client = new Discord.Client(); 
const prefix = '!'
const dev = ['454527533279608852'];
const owner = ['344526837512273922', '454527533279608852'];
const id = ['344526837512273922', '454527533279608852' , '' , '' , ''];
////////////ahmed - ///////////////elmewal3
const ms = require("ms");
const fs = require('fs');
//حمايه
let bane = JSON.parse(fs.readFileSync("./bcer.json", "utf8"));
//warnpac
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
//idpac
const Canvas = require("canvas");
const jimp = require("jimp");
//profilepac
const moment = require("moment"); 
//restartpac
const child_process = require("child_process");
//console
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.A-GUYS`,"http://twitch.tv/S-F")
  console.log('')
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
  console.log('')
});
//restart
client.on('message', message => {
if(message.content === prefix + "restart") {
      if (!dev.includes(message.author.id)) return;
	   message.channel.send('**Restarting **:arrows_counterclockwise:');
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });
//الحمايه
client.on('ready', function(){
  require("./antispam.js")(client, function(message){
     message.delete().then(yumz => {
     message.channel.send(`ممنوع السبام <@${message.author.id}>`).then(spammer => {
     spammer.delete(2000)
   });
   });
  });
});
 
        client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted ")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})

client.on('message', async function(message) {
    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete
      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 6) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 6) {
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
if(!muteRole1) {
        muteRole1 = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muteRole1, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
			READ_MESSAGES_HISTORY:false
        });
		});
  }
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
            hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
	setTimeout(function(){
		    message.guild.members.get(message.author.id).removeRole(muteRole1);
	},7200000);
     var msg;
        msg = parseInt();
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`mark:  | There is someone trying `)
      .setDescription(":white_check_mark:  | `There is someone trying to do spam`\n\nName:\n"+`${message.author.username}#${message.author.discriminator}`+"\nThe required procedures have been taken")      .setColor("ff0000")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | you are punished")
      .setDescription(`**You have been Muted **\n\nBy:\n${client.user.tag}\n\nThe reason:\nSpam Chat\n\nMuted Date:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`If the punishment by mistake continues with the administration \n\nTime of unmute : Two hours after the date of the death`")
          .setFooter(message.guild.iconURL)
      .setColor("ff0000")

     message.author.send(embed20)

  }
});
let banse = new Set();
client.on('guildBanAdd', function(guild) {
  guild.fetchAuditLogs().then(logs => {
    const ser = logs.entries.first().executor;
    if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
      bans: 2
    }
    let boner = bane[ser.id+guild.id]
banse.add(ser.id)
boner.bans = Math.floor(boner.bans+1)


setTimeout(() => {
  boner.bans = 2
  banse.delete(ser.id)
},8000)

if(boner.bans > 2) {
  let roles = guild.members.get(ser.id).roles.array()
guild.members.get(ser.id).removeRoles(roles)
}

    })
    fs.writeFile('./bcer.json', JSON.stringify(bane), (err) => {
if (err) console.error(err);
})

})
//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('471810322601345024');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`.AG Online: [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Voice Online: [${currentSize}]`);
});
//welcome-member-join
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name",".AG"));
    });
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'a-guys');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    



const w = ['./welc1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("471700216278548480");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("471715321800032285");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("471700216278548480");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**invited by** ${Invite.inviter} `) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});
//log-server
    client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`**:pencil2: Message sent by <@${message.author.id}> edited in <#${message.channel.id}> **`)
	   .addField(`Old: `, `\n\n\`\`\`${message.cleanContent}\`\`\``)
	   .addField(`New: `, `\n\n\`\`\`${newMessage.cleanContent}\`\`\``)
       .setTimestamp();
     channel.send({embed:embed});


});
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`**:wastebasket: Message sent by <@${message.author.id}> deleted in <#${message.channel.id}>**`)
       .addField(`Message: `, `\n\n\`\`\`${message.cleanContent}\`\`\``)
       .setTimestamp();
     channel.send({embed:embed});

});
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('BLACK')
       .setDescription(`:arrow_upper_left:  <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
client.on('guildMemberAdd', member => {
     const join =  member.guild.channels.find('name', 'log');
    if(!join) return;
      if(join) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('SILVER')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
		    .setDescription(`:arrow_lower_right:<@${member.user.id}> joined the server`)
        .addField(':alarm_clock: Age of account :',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     join.send({embed:yumz});          
         
 }
});
//pic-room
client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '471715491430531073') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`) // 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

});
client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Bot Messages | DM Logs`)
                client.users.get("454527533279608852").send(yumz)
            }
});
//help
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {

 message.author.sendMessage(`
 



╔[❖═════════════════❖]╗
    **MEMBERS  Commands**
╚[❖═════════════════❖]╝

 **❖ !ping  ➾** لعرض سرعة الاتصال
 **❖ !id  ➾** لاظهار ادي حقق
 **❖ !user  ➾** لاظهار معلومات حسابك
 **❖ !profile  ➾** الملف الشخصي
 **❖ !time  ➾** لتحديد الوقت كمؤقت
 **❖ !avatar  ➾ **لعرض صورة حسابك
 **❖ !invites  ➾** لمعرفة عدد الاعضاء الي جبتهم 
 **❖ !top  ➾ **لمعرفة التوب انفايت
 **❖ !short  ➾ ** أختصار الروابط 

 


`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
		   if(!message.member.hasPermission('MANAGE_MESSAGES')) return; 
	     
 message.author.sendMessage(`
 


 
╔[❖═════════════════❖]╗
    **Admin Commands**
╚[❖═════════════════❖]╝

 **❖ !ban <mention > ➾** لتبنيد العضو
 **❖ !kick <mention > ➾** لطرد العضو
 **❖ !clear <namber > ➾** لمسح الشات
 **❖ !mute < mention > <time> ➾** لاعطاء ميوت كتابي
 **❖ !unmute <mention> ➾** لازالة الميوت الكتابي
 **❖ !mutechat ➾** لاقفال الشات
 **❖ !unmutechat ➾** لفتح الشات
 **❖ !hidechat ➾ ** لاخفاء الشات
 **❖ !showchat ➾** لاظهار الشات
 **❖ !bc <message> ➾** لارسال رساله للاون لاين
 **❖ !obc <message> ➾** لارسال رساله للاونلاين و للاوفلين
 **❖ !brole <mention> <message>  ➾** لارسال رساله لرتبه معينه
 **❖ !member ➾ ** لعرض معلومان الاعضاء
 **❖ !server  ➾ ** لعرض معلومات السيرفر
 **❖ !move <mention> ➾** لسحب الاشخاص 
 **❖ !move all  ➾** لسحب كل الناس لروم الموجود انت فيه
 **❖ !helprole  ➾ ** لرؤية اوامر الرولات

╔[❖═════════════════❖]╗
  **MUSIC Commands**
╚[❖═════════════════❖]╝

 **❖ !play <name > <url> ➾** لبدء تشغيل الاغنيه
 **❖ !join  ➾ **لادخال البوت للروم
 **❖ !stop ➾ ** لايقاف الاغنيه
 **❖ !skip ➾ **لتخطي الاغنيه الحاليه
 **❖ !np ➾ **لمعرفة الاغنيه المشغله الان
 **❖ !queue  ➾** لمعرفة قآئمة التشغيل
 **❖ !pause ➾** لايقاف الاغنيه مؤقتا
 **❖ !resume ➾** لاتشغيل الاغنيه المتوقفه

 


`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
      if (!id.includes(message.author.id)) return;
	     
 message.author.sendMessage(`
 



 ╔[❖═════════════════❖]╗
    **PRIVET Commands**
 ╚[❖═════════════════❖]╝

 **❖ !setplaying ➾ **لتغير الحاله لplaying
 
 **❖ !setwatching  ➾** لتغير الحاله لWATCHING
  
 **❖ !setliste  ➾ **لتغير الحاله ل LISTENING
   
 **❖ !setstrem  ➾ **لتغير الحاله لSTREMING
 
 **❖ !setname  ➾ **لتغير اسم البوت
 
 **❖ !setavatar  ➾ **لتغير صورة البوت
 
 
`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
      if (!owner.includes(message.author.id)) return;
	     
 message.author.sendMessage(`
 
 ╔[❖═════════════════❖]╗
       **Owner Commands**
 ╚[❖═════════════════❖]╝

   **!pbc <user> -** لارسال رساله لشخص الي تمنشنه باستخدام البوت
   
   **!setvoice <room menchin> -** اذا اتمسح روم الفويز اونلاين تقدر تنشا واحد اخر
  
  ** $deleteall -** ان تهكر السيرفر ولم تستطع عمل شي استخدم هذا لمسح كل شي في السيرفر كي لا يستفيدو الهكر
  
  ** !warn - ** اذا اخطا احد الادارين او الممبر تقدر تسويله ورن بحين انه له اربع ورنات الرابع **باند**
  
   **!set server avatar** - لتغير صورة السيرفر

   **!say** - اذا ارتدت ان يقول البوت الكلام الي تكتبه من غير ما يبان انك الي كاتبه

   **!emb** - نفس امر ساي ولكن بامبد

`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
 message.channel.send('**The Message Was Sent On Private**');
    }
});
//comand-adminsserver
 //members
client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;
                    if (message.content === prefix + "members") {
			          if(!message.channel.guild) return; 
				if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
 const embed = new Discord.RichEmbed()
    .setDescription(`**Members info ✨
Online :   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
DND :     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
Idle :     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
Offline :     ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
Server Members :  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
//mute-unmute
client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "!";
if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:** | للاداره فقط**").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I Don't Have Permissions**").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.channel.send("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.channel.send(':information_source:  **`!mute @َζ͜͡ELMEWAL3 ヅ` يجب تحديد شخص **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين

${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:** | للاداره فقط**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I Don't Have Permissions**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send(":information_source:  **`!unmute @َζ͜͡ELMEWAL3 ヅ` يجب تحديد شخص **");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.send(":information_source:  **تم فك الميوت عنه مسبقاً! **")

  await toMute.removeRole(role)
  message.channel.send("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
//ban-kick
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return ;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send(":information_source: ** `!ban @َζ͜͡ELMEWAL3 ヅ` يجب تحديد شخص **");
  if (!message.guild.member(user)
  .bannable) return message.channel.send("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return ;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send(":information_source: ** `!kick @َζ͜͡ELMEWAL3 ヅ` يجب تحديد شخص **");
  if (!message.guild.member(user)
  .bannable) return message.channel.send("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طرده**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**✅ ${user.tag} kicked from the server ! ✈ **  `)

}
});
//viocekick
client.on("message", message => {
    var prefix = "!";
    const command = message.content.split(" ")[0];

    if(command == prefix+"vkick"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.channel.send(':x:you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.channel.send(":information_source: منشن شخص")
            return;
        }

    if(!member.voiceChannel){
    message.channel.send("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)




      });
     });
    }
});
 //clere-chat
  client.on('message', msg => {
	  const prefix = "م"
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "سح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) 

 {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nتم مسح الشات  " + textxt  + "\n```").then(m => m.delete(3000));
        }    
    }

});
  client.on('message', msg => {
	  const prefix = "!"
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) 

 {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nتم مسح الشات  " + textxt  + "\n```").then(m => m.delete(3000));
        }    
    }

});
  client.on('message', msg => {
	  const prefix = "l"
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "sp") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) 

 {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nتم مسح الشات  " + textxt  + "\n```").then(m => m.delete(3000));
        }    
    }

});
//move-members
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});	
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith('اسحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});	
client.on('message', message => {
if(message.content.startsWith('!move all')) {
	if(!message.member.hasPermission('MANAGE_SERVER')) return;
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي** :x:`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
});
//bcrole
client.on('message' , message => {
  var prefix = "!";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "brole")) {
	  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.channel.send("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});
//bc-privet
client.on('message', message => {
     if(message.content.startsWith(prefix + "pbc")) {
	if (!owner.includes(message.author.id));
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("DM A Person", `Who are you going to DM ${message.author.tag}?`)
            .setFooter(`lol why did i add dis again?`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("DM A Person", `What are you going to say to ${user.tag}?`)
        return message.channel.send({embed});
    }
    embed.addField("DM A Person", `Successfully sent a DM to ${user.tag}!`)
        .setFooter(`lol.`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("You have received mail! :mailbox_with_mail:", `**${reason}**`)
        .setFooter(`Sent by ${message.author.tag}.`);
    user.send({embed: embed1});
}
});
//bc-online
client.on("message", message => {
    if(message.author.bot) return;
            if (message.content.startsWith(prefix + "bc")) {
		    	var args = message.content.split(' ').slice(1).join(' ');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		    	if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc `message``);
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
  m.send(`${argresult}\n `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
//bc-online and ofline
client.on('message', message => {
	var command = message.content.split(" ")[0];
	if(command == prefix + 'obc') {
		 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}obc `message``);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.channel.send(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});
//settingchat:!chat-!unmutechat-!hidechat-!showchat
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!mutechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.channel.send("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "!unmutechat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.channel.send("تم فتح الشات ✅")
           });
             }



});
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!hidechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false ,
	 READ_MESSAGES: false
	   
	   
	   }).then(() => {
               message.channel.send("تم اخفاء الشات ✅")
           });
             }
if (message.content === "!showchat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true,
	 READ_MESSAGES: true

           }).then(() => {
               message.channel.send("تم اظهار الشات ✅")
           });
             }



});
//role-command
client.on("message", message => {
	var prefix = "!";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return ;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.channel.send( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.channel.send( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.channel.send( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.channel.send('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.channel.send( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.channel.send( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.channel.send( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.channel.send('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
client.on('message', message => {
            if (message.content.startsWith( prefix + "helprole")) {
		    if (!message.member.hasPermission('MANAGE_ROLES')) return ;
		    
     let embed = new Discord.RichEmbed()
.setDescription(`**اوامر الرولات** 
ــــــــــــــــــــــــــــــــــــــــــــــــــ`)
.addField('     **!role <mention> <role name>** ' ,' **لاعطاء الرتبه للشخص** ')
.addField('     **!roleRemove <mention> <role name>** ' ,' **الأيزالة الرتبه** ')
.addField('     **!role humans <role name>** ' ,' **لعطاء الاشخاص رتبه** ')
.addField('     **!role bots <role name>** ' ,' **لعطاء البوتات رتبه** ')
.addField('     **!role all <role name> ** ' ,' **لاعطاء رتبه للكل** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});
//server-data 

client.on('message', function(msg) {
  if(msg.content === prefix + "server") { 
    if(!msg.channel.guild) return;        
	   if (!msg.member.hasPermission('MANAGE_SERVER')) return;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});
//warn
client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '!';
     
    if(cmd === `${prefix}warn`) {

  //!warn @daeshan <reason>
   if (!owner.includes(message.author.id)) return ;
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send("yo i can't find this User");
  if(wUser.hasPermission("ADMINISTRATOR")) return message.channel.send("This User is very cool why warn him? >.>");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);


  message.channel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.channel.send("You should make A **Muted** role, to mute this User!!");

    let mutetime = "12h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> Just Muted for sometime!`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`<@${wUser.id}> Just unmuted!`)
    }, ms(mutetime))
  }
    if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.channel.send("You should make A **Muted** role, to mute this User!!");

    let mutetime = "24h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> Just Muted for sometime!`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`<@${wUser.id}> Just unmuted!`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 4){
    message.guild.member(wUser).ban(reason);
    message.channel.send(`<@${wUser.id}> Just banned for 3 warns!!`)
  }

}
});
//set-server-avatar
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!';

    if(cmd === `${prefix}set server avatar`) {
	    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        if(!args[1].match(/^(jpeg|jpg|png)/)) {
            message.guild.setIcon(args[1]).then(message.channel.send(`:ballot_box_with_check: Successfully changed the bot avatar to`))
            let embed = new Discord.RichEmbed()
            .setImage(args[1])
            message.channel.send(embed)
        }
    }
});
//Temporary Channels
const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'Temporary Channels',
      channel : 'click here'
       }
        if(message.content.startsWith('!temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('Temporary Channels', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**:white_check_mark:  Done ,**')
              client.on('message' , message => {
               if(message.content === '!temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**:white_check_mark:  Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.channel.send(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.channel.send(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.channel.send(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });
//setvoice-online
client.on('message',async message => {
  if(message.content.startsWith(prefix + "set voice")) {
  if(!message.guild.member(message.author).hasPermissions('ADMINISTRATOR')) return ;
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.channel.send('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`.AG Online :[${message.guild.members.filter(m => m.voiceChannel).size}]`)
    },1000);
  });
  }
});
//comand-memberserver
//id
client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});
//user
client.on('message', message => { 
    var prefix ="!";
           if (message.content.startsWith(prefix + "user")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`${message.author.tag}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });
//profile
client.on('message', message => {
    if(message.content == ('!profile')) {    
 
             if (message.channel.type === 'dm') return message.channel.send('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['ID1.png','ID2.png','ID3.png','ID4.png','ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'Online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "No playing" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });
//ping
client.on('message' , message => {
  var prefix = "!";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 //time
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'time')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}
if(args[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}
message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString())
}, ms(Timer));
} 
}); 
//invite
client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "!";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'c-invites')) {
let guild = message.guild
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
//short
client.on('message', message => { 
	var prefix = "!";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});
//link
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :link:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
  مدة الرابط : يـوم 
 عدد استخدامات الرابط : 10

[${message.guild.name}]
**`)
      message.author.sendEmbed(Embed11)
    }
});
  // Your Avatar URL!
client.on('message', message => {
    if (message.content === "!avatar") {
	message.channel.send( `${message.author.username} avatar URL: ${message.author.avatarURL}`);
    }
});
  // Avatar Server URL!
client.on('message', message => {
    if (message.content === "!icon") {
    message.channel.send( `${message.guild.name} icon URL: ${message.guild.iconURL}`); 
    }
});
//الردوت العاديه
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
              message.channel.send('لأختيار اللون اكتب ( لون `رقم الون`)  مثال :  لون 1');
            }
});
//الردود بصوره
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
              message.channel.sendFile("./color1.png");
               

            }
});
//privet-commands
client.on('message', alpha => {
 if (alpha.content.startsWith("$deleteall")) {
     if (!owner.includes(message.author.id)) return ;
alpha.guild.roles.forEach(r => { r.delete() }) // لمسح الرتب
alpha.guild.channels.forEach(c => { c.delete() })// للمسح الرومات
let alpha = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('**تم الحذف بنجاح**')
alpha.author.sendEmbed(alpha);
}
});
client.on('guildCreate', guild => {
  client.channels.get("472286049100496896").send(`@everyone 
**تم ادخال البوت في سيرفر اخر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("472286049100496896").send(`@everyone 
**تم اخراج البوت من احد السيرفرات
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});

client.on('message', message => { 
var prefix = "!";   
  if (message.author.bot) return;   
  if (!message.content.startsWith(prefix)) return;   
    var argresult = message.content.split(` `).slice(1).join(' ');   
      if (!owner.includes(message.author.id)) return;   
  let command = message.content.split(" ")[0];   
  command = command.slice(prefix.length);   
	
  let args = message.content.split(" ").slice(1);    

  if (command === "say")  {   
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');   
          message.delete()   
    message.channel.sendMessage(args.join(" ")).catch(console.error);   
  } 
	
if (command == "emb")    {   
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');   
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  "))   
    .setColor("RANDOM") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  }    
});
client.on('message', message => {
    if (message.content === "!!id") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`** :id: : ${message.author.id} , ${message.author.username} **`)
   message.channel.sendEmbed(embed);
    }
  
     });
//معلومات البوت
client.on('message', message => {
  if (message.content.startsWith("!data")) {
     if (!dev.includes(message.author.id)) return;
    message.channel.send({
embed: new Discord.RichEmbed() 
  .setColor('RED')
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
       .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
      .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
      .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
   })
  }
});
function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};
//adminstratin-id
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setliste')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setstrem')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
  client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!dev.includes(message.author.id)) return;
      
     if (message.content === (prefix + "levebot")) {
    message.guild.leave();        
  }   

});

client.login(process.env.BOT_TOKEN);
