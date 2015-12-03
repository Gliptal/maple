var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/meta")
var header = require(rootDir + "locales/" + config.lang + "/header")
var footer = require(rootDir + "locales/" + config.lang + "/footer")
var faq = require(rootDir + "locales/" + config.lang + "/faq")
var content = merge(meta, header, footer, faq)

// -----------------------------------------

var router = express.Router()

router.get("/faq", function(req, res, next)
    {
    config.debug.routing("GET request -> /faq")

    res.render("faq", content)
    })

// -----------------------------------------

module.exports = router