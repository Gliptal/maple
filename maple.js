var express = require("express")
var favicon = require("serve-favicon")
var logger  = require("morgan")
var stylus  = require("stylus")
var config  = require(rootDir + "bin/config")

var home     = require(rootDir + "routes/home")
var missions = require(rootDir + "routes/missions")
var faq      = require(rootDir + "routes/faq")
var help     = require(rootDir + "routes/help")
var license  = require(rootDir + "routes/license")
var support  = require(rootDir + "routes/support")
var hardware = require(rootDir + "routes/hardware")
var store    = require(rootDir + "routes/store")
var about    = require(rootDir + "routes/about")

// // //

var configurator =
    {
    site: express(),

    configureLogger: function()
        {
        this.site.use(logger("dev"))
        },

    configureEngines: function()
        {
        this.site.locals.basedir = rootDir
        this.site.set("view engine", config.engines.view)
        this.site.use(stylus.middleware(config.options.stylus))
        },

    configurePaths: function()
        {
        this.site.set("views", config.paths.views)
        this.site.use(express.static(config.paths.static, config.options.static))
        this.site.use(favicon(config.paths.images + "favicon.ico"))
        },

    configureRoutes: function()
        {
        this.site.use("/", home)
        this.site.use("/", missions)
        this.site.use("/", faq)
        this.site.use("/", help)
        this.site.use("/", license)
        this.site.use("/", support)
        this.site.use("/", hardware)
        this.site.use("/", store)
        this.site.use("/", about)
        }
    }

// // //

configurator.configureLogger()
configurator.configureEngines()
configurator.configurePaths()
configurator.configureRoutes()

// // //

module.exports = configurator.site;
