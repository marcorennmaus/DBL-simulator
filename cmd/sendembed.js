﻿module.exports = {
    main: function (msg, botsettings, args) {

        if (args.status === "info") {
            var embed_colour = botsettings.colour_embed_info
        }
        else if (args.status === "success") {
            var embed_colour = botsettings.colour_embed_success
        }
        else if (args.status === "error") {
            var embed_colour = botsettings.colour_embed_error
        }
        else {
            var embed_colour = botsettings.colour_embed_nostatus
        }

        if (args.design === "minimal") {
            msg.channel.send({
                embed: {
                    color: embed_colour,
                    description: args.description
                }
            });
        }
        else if (args.design === "fancy") {
            msg.channel.send({
                embed: {
                    "author": {
                        "text": "DBL Simulator",
                        "url": botsettings.embed_url,
                        "icon_url": botsettings.embed_icon
                    },
                    "description": args.description,
                    "color": embed_colour,
                    "footer": {
                        "icon_url": botsettings.embed_icon,
                        "text": botsettings.vnum
                    },
                    "fields": args.fields
                }
            });
        }
        else if (args.design === "luca_decline") {
            msg.channel.send({
                embed: {
                    "title": args.title,
                    "color": botsettings.colour_luca_deletion,
                    "timestamp": args.timestamp,
                    "fields": args.fields
                }
            });
        }
        else if (args.design === "fancy_artist") {
            msg.channel.send({
                embed: {
                    "title": args.title,
                    "description": args.description,
                    "url": args.url,
                    "color": embed_colour,
                    "footer": {
                        "icon_url": botsettings.embed_icon,
                        "text": "DBL Simulator"
                    },
                    "thumbnail": {
                        "url": args.thumbnail
                    },
                    "author": {
                        "name": "music.marcorennmaus.tk",
                        "url": "http://music.marcorennmaus.tk",
                        "icon_url": botsettings.embed_icon
                    },
                    "fields": args.fields
                }
            });
        }
        else if (args.design === "fancy_af") {
            msg.channel.send({
                embed: {
                    "author": {
                        "name": "DBL Simulator",
                        "url": botsettings.embed_url,
                        "icon_url": botsettings.embed_icon
                    },
                    "description": args.description,
                    "color": embed_colour,
                    "footer": {
                        "icon_url": botsettings.embed_icon,
                        "text": botsettings.vnum
                    },
                    "fields": args.fields,
                    "image": {
                        "url": args.image_url
                    }
                }
            });
        }
        else if (args.design === "detailed_thumb") {
            msg.channel.send({
                embed: {
                    "author": {
                        "name": "DBL Simulator",
                        "url": botsettings.embed_url,
                        "icon_url": botsettings.embed_icon
                    },
                    "description": args.description,
                    "color": embed_colour,
                    "thumbnail": {
                        "url": args.thumbnail
                    },
                    "footer": {
                        "icon_url": botsettings.embed_icon,
                        "text": botsettings.vnum
                    }
                }
            });
        }
        else if (args.design === "detailed") {
            msg.channel.send({
                embed: {
                    "author": {
                        "name": "DBL Simulator",
                        "url": botsettings.embed_url,
                        "icon_url": botsettings.embed_icon
                    },
                    "description": args.description,
                    "color": embed_colour,
                    "footer": {
                        "icon_url": botsettings.embed_icon,
                        "text": botsettings.vnum
                    }
                }
            });
        }
        else if (args.design === "error_display") {
            args.error = JSON.stringify(args.error)
            console.log(args.error)
            msg.channel.send({
                embed: {
                    "author": {
                        "name": "DBL Simulator",
                        "url": botsettings.embed_url,
                        "icon_url": botsettings.embed_icon
                    },
                    "description": "An error occured while executing the command.\nPlease report this error to the bot developer if it keeps reoccuring.",
                    "color": embed_colour,
                    "footer": {
                        "icon_url": botsettings.embed_icon,
                        "text": botsettings.vnum
                    },
                    "fields": [
                        {
                            "name": "Error",
                            "value": args.error
                        },
                        {
                            "name": "Where",
                            "value": args.error_where
                        }
                    ]
                }
            });
        }
        else {
            msg.channel.send({
                embed: {
                    "content": "⚠ The embed design wasnt specified. Defaulting to fancy design.",
                    "author": {
                        "name": "DBL Simulator",
                        "url": botsettings.embed_url,
                        "icon_url": botsettings.embed_icon
                    },
                    "description": args.description,
                    "color": embed_colour,
                    "footer": {
                        "icon_url": botsettings.embed_icon,
                        "text": botsettings.vnum
                    }
                }
            });
        }
    }
}
