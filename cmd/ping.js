﻿module.exports = {
    main: function (msg, botsettings, language, translations) {
        msg.channel.send(translations[language].ping.pong)
    }
}
