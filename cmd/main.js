
const commandPing = require("./ping.js")
const commandDeclineBots = require("./declinebots.js")
const sendEmbed = require("./sendembed.js")
const commandModerators = require("./moderators.js")
const commandHelp = require("./help.js")
const commandChangelog = require("./changelog.js")

module.exports = {
    main: function (msg, botsettings, mysql, mysqlcon, client) {

        const fs = require("fs")

        var translationsDB = "./translations.json"

        var translations = JSON.parse(fs.readFileSync(translationsDB, "utf8"))

        var randomEasteregg = Math.random()

        console.log(randomEasteregg)
        if(randomEasteregg > 0.95){
          var language = "tr"
        }
        else{
          var language = "en"
        }


        if (msg.content === botsettings.prefix + "ping") { commandPing.main(msg, botsettings, language, translations) }
        if (msg.content.startsWith(botsettings.prefix + "verify")) { commandDeclineBots.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed, language, translations, "decline") }
        if (msg.content.startsWith(botsettings.prefix + "mute")) { commandDeclineBots.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed, language, translations, "mute") }
        if (msg.content.startsWith(botsettings.prefix + "ban")) { commandDeclineBots.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed, language, translations, "ban") }
        if (msg.content === botsettings.prefix + "moderators") { commandModerators.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed, language, translations) }
        if (msg.content === botsettings.prefix + "help") { commandHelp.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed, language, translations) }
        if (msg.content === botsettings.prefix + "changelog") { commandChangelog.main(msg, botsettings, sendEmbed, language, translations) }
    }
}
