module.exports = {
    main: function(msg, botsettings, sendembed, language, translations){

      const fs = require("fs");
      const changelogdb = "./changelog.txt"
      var actuallog = fs.readFileSync(changelogdb, "utf8")

      var embed_args = {
        "design": "fancy_af",
        "status": "info",
        "description": translations[language].changelog.name,
        "image_url": botsettings.changelog_image,
        "fields": [
          {
          "name": translations[language].changelog.version,
          "value": botsettings.vnum,
          "inline": true
        },
          {
            "name": translations[language].changelog.title,
            "value": botsettings.update_name,
            "inline": true
          },
          {
          "name": translations[language].changelog.changes,
          "value": actuallog,
          }
        ]
      }
      sendembed.main(msg, botsettings, embed_args)
    }
  }
