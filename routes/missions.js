var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var missions = require(rootDir + "locales/" + config.lang + "/missions")
var content = merge(meta, header, footer, missions)

// -----------------------------------------

var router = express.Router()

router.get("/missions", function(req, res, next)
    {
    config.debug.routing("GET request -> /missions")

    res.render("missions", content)
    })

// -----------------------------------------

module.exports = router