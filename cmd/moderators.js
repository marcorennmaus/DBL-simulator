﻿module.exports = {
    main: function (msg, botsettings, mysql, mysqlcon, client, sendembed) {

        const fs = require("fs")

        var randompings = JSON.parse(fs.readFileSync("./randompings.json", "utf8"))

        var randomNumber = Math.floor(Math.random() * randompings.pings.length) + 1

        var d = new Date();

        msg.channel.send(randompings.pings[randomNumber])
    }
}
