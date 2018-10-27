﻿module.exports = {
    main: function (msg, botsettings, mysql, mysqlcon, client, language, translations) {
        msg.channel.send(translations[language].ping.ping)
    }
}
