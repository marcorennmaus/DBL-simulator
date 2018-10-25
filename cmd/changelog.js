module.exports = {
    main: function(msg, botsettings, sendembed){

      const fs = require("fs");
      const changelogdb = "./changelog.txt"
      var actuallog = fs.readFileSync(changelogdb, "utf8")

      var embed_args = {
        "design": "fancy_af",
        "status": "info",
        "description": "Changelog",
        "image_url": botsettings.changelog_image,
        "fields": [
          {
          "name": "Version",
          "value": botsettings.vnum,
          "inline": true
        },
          {
            "name": "Title",
            "value": botsettings.update_name,
            "inline": true
          },
          {
          "name": "Changes",
          "value": actuallog,
          }
        ]
      }
      sendembed.main(msg, botsettings, embed_args)
    }
  }
