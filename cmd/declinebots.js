module.exports = {
     main: function (msg, botsettings, mysql, mysqlcon, client, sendembed, language, translations, type) {

         const fs = require("fs")
         var reasons = JSON.parse(fs.readFileSync("./reasons.json", "utf8"))

         var randomNumber2 = Math.floor(Math.random() * botsettings.mod_names.length)
         var d = new Date();

         let person = msg.mentions.members.first() ? msg.mentions.members.first().user.tag : msg.author.tag

         if(type == "decline"){
           var randomNumber = Math.floor(Math.random() * reasons.decline.length)
           var args = {
               "design": "luca_decline",
               "title": translations[language].declinebots.title,
               "timestamp": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds() + ".000Z",
               "fields": [
                   {
                       "name": translations[language].declinebots.bot,
                       "value": person,
                       "inline": true
                   },
                   {
                       "name": translations[language].declinebots.mod,
                       "value": botsettings.mod_names[randomNumber2],
                       "inline": true
                   },
                   {
                       "name": translations[language].declinebots.reason,
                       "value": reasons.decline[randomNumber]
                   }
               ]
           }
         }
         else if (type == "mute"){
           var randomNumber = Math.floor(Math.random() * reasons.mute.length)
           var args = {
               "design": "luca_mute",
               "title": translations[language].declinebots.title_mute,
               "timestamp": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds() + ".000Z",
               "fields": [
                   {
                       "name": translations[language].declinebots.user,
                       "value": person,
                       "inline": true
                   },
                   {
                       "name": translations[language].declinebots.mod,
                       "value": botsettings.mod_names[randomNumber2],
                       "inline": true
                   },
                   {
                       "name": translations[language].declinebots.reason,
                       "value": reasons.mute[randomNumber]
                   }
               ]
           }
         }
         else if (type == "ban"){
           var randomNumber = Math.floor(Math.random() * reasons.ban.length)
           var args = {
               "design": "luca_ban",
               "title": translations[language].declinebots.title_ban,
               "timestamp": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds() + ".000Z",
               "fields": [
                   {
                       "name": translations[language].declinebots.user,
                       "value": person,
                       "inline": true
                   },
                   {
                       "name": translations[language].declinebots.mod,
                       "value": botsettings.mod_names[randomNumber2],
                       "inline": true
                   },
                   {
                       "name": translations[language].declinebots.reason,
                       "value": reasons.ban[randomNumber]
                   }
               ]
           }
         }



         console.log(args)

         sendembed.main(msg, botsettings, args)
     }
}
