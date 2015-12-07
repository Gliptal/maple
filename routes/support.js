var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var support = require(rootDir + "locales/" + config.lang + "/support")
var content = merge(meta, header, footer, support)

// -----------------------------------------

var router = express.Router()

router.get("/support", function(req, res, next)
    {
    config.debug.routing("GET request -> /support")

    res.render("support", content)
    })

// -----------------------------------------

module.exports = router