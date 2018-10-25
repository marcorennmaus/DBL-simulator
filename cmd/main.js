
const commandPing = require("./ping.js")
const commandDeclineBots = require("./declinebots.js")
const sendEmbed = require("./sendembed.js")
const commandModerators = require("./moderators.js")
const commandHelp = require("./help.js")
const commandChangelog = require("./changelog.js")

module.exports = {
    main: function (msg, botsettings, mysql, mysqlcon, client) {
        if (msg.content === botsettings.prefix + "ping") { commandPing.main(msg, botsettings) }
        if (msg.content === botsettings.prefix + "verify") { commandDeclineBots.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed) }
        if (msg.content === botsettings.prefix + "moderators") { commandModerators.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed) }
        if (msg.content === botsettings.prefix + "help") { commandHelp.main(msg, botsettings, mysql, mysqlcon, client, sendEmbed) }
        if (msg.content === botsettings.prefix + "changelog") { commandChangelog.main(msg, botsettings, sendEmbed) }
    }
}
