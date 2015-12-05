var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var hardware = require(rootDir + "locales/" + config.lang + "/hardware")
var content = merge(meta, header, footer, hardware)

// -----------------------------------------

var router = express.Router()

router.get("/hardware", function(req, res, next)
    {
    config.debug.routing("GET request -> /hardware")

    res.render("hardware", content)
    })

// -----------------------------------------

module.exports = router