var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var about = require(rootDir + "locales/" + config.lang + "/about")
var content = merge(meta, header, footer, about)

// -----------------------------------------

var router = express.Router()

router.get("/about", function(req, res, next)
    {
    config.debug.routing("GET request -> /about")

    res.render("about", content)
    })

// -----------------------------------------

module.exports = router