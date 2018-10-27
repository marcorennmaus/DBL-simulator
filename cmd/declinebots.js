﻿module.exports = {
     main: function (msg, botsettings, mysql, mysqlcon, client, sendembed, language, translations) {

         const fs = require("fs")
         var declinereasons = JSON.parse(fs.readFileSync("./declinereasons.json", "utf8"))
         var randomNumber = Math.floor(Math.random() * declinereasons.reasons.length)
         var randomNumber2 = Math.floor(Math.random() * botsettings.mod_names.length)
         var d = new Date();

         var args = {
             "design": "luca_decline",
             "title": translations[language].declinebots.title,
             "timestamp": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds() + ".000Z",
             "fields": [
                 {
                     "name": translations[language].declinebots.bot,
                     "value": msg.author.username + "#" + msg.author.discriminator,
                     "inline": true
                 },
                 {
                     "name": translations[language].declinebots.mod,
                     "value": botsettings.mod_names[randomNumber2],
                     "inline": true
                 },
                 {
                     "name": translations[language].declinebots.reason,
                     "value": declinereasons.reasons[randomNumber]
                 }
             ]
         }

         console.log(args)

         sendembed.main(msg, botsettings, args)
     }
}
