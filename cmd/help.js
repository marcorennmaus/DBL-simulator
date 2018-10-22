﻿module.exports = {
     main: function (msg, botsettings, mysql, mysqlcon, client, sendembed) {

         var d = new Date();

         var args = {
            "design": "luca_decline",
            "title": "Here's some help for you i guess",
            "timestamp": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds() + ".000Z",
            "fields": [
                {
                    "name": "dbl!moderators",
                    "value": "Ping the moderators",
                    "inline": true
                },
                {
                    "name": "dbl!verify",
                    "value": "Can't wait for your bot to be verified? Use this command to verify it instantly!",
                    "inline": true
                },
                {
                    "name": "Make this bot better:",
                    "value": "Send text samples to marco_rennmaus | Rennmoose#4991",
                    "inline": true
                }]
         }

         sendembed.main(msg, botsettings, args)
    }
}
