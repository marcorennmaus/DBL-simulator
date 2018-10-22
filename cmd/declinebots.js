﻿module.exports = {
     main: function (msg, botsettings, mysql, mysqlcon, client, sendembed) {

         const fs = require("fs")

         console.log(botsettings)

         var declinereasons = JSON.parse(fs.readFileSync("./declinereasons.json", "utf8"))

         var randomNumber = Math.floor(Math.random() * declinereasons.reasons.length) + 1

         var randomNumber2 = Math.floor(Math.random() * botsettings.mod_names.length) + 1

         var d = new Date();

         var args = {
             "design": "luca_decline",
             "title": "Bot declined",
             "timestamp": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds() + ".000Z",
             "fields": [
                 {
                     "name": "Bot",
                     "value": msg.author.username + "#" + msg.author.discriminator,
                     "inline": true
                 },
                 {
                     "name": "Moderator",
                     "value": botsettings.mod_names[randomNumber2],
                     "inline": true
                 },
                 {
                     "name": "Reason",
                     "value": declinereasons.reasons[randomNumber]
                 }
             ]
         }

         console.log(args)

         sendembed.main(msg, botsettings, args)
     }
}
