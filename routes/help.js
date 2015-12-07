var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var help = require(rootDir + "locales/" + config.lang + "/help")
var content = merge(meta, header, footer, help)

// -----------------------------------------

var router = express.Router()

router.get("/help", function(req, res, next)
    {
    config.debug.routing("GET request -> /help")

    res.render("help", content)
    })

// -----------------------------------------

module.exports = router