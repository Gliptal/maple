var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var store = require(rootDir + "locales/" + config.lang + "/store")
var content = merge(meta, header, footer, store)

// -----------------------------------------

var router = express.Router()

router.get("/store", function(req, res, next)
    {
    config.debug.routing("GET request -> /store")

    res.render("store", content)
    })

// -----------------------------------------

module.exports = router