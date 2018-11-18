﻿module.exports = {
     main: function (msg, botsettings, mysql, mysqlcon, client, sendembed, language, translations) {

         var d = new Date();

         var args = {
            "design": "luca_decline",
            "title": translations[language].help.title,
            "timestamp": d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds() + ".000Z",
            "fields": [
                {
                    "name": "dbl!moderators",
                    "value": translations[language].help.moderators_desc,
                    "inline": true
                },
                {
                    "name": "dbl!verify",
                    "value": translations[language].help.verify_desc,
                    "inline": true
                },
                {
                    "name": "dbl!changelog",
                    "value": translations[language].help.changelog_desc,
                    "inline": true
                },
                {
                    "name": "dbl!mute",
                    "value": translations[language].help.mute_desc,
                    "inline": true
                },
                {
                    "name": "dbl!ban",
                    "value": translations[language].help.ban_desc,
                    "inline": true
                },
                {
                    "name": translations[language].help.better_bot_title,
                    "value": translations[language].help.better_bot_value,
                    "inline": true
                }]
         }

         sendembed.main(msg, botsettings, args)
    }
}
