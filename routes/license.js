var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var license = require(rootDir + "locales/" + config.lang + "/license")
var content = merge(meta, header, footer, license)

// -----------------------------------------

var router = express.Router()

router.get("/license", function(req, res, next)
    {
    config.debug.routing("GET request -> /license")

    res.render("license", content)
    })

// -----------------------------------------

module.exports = router