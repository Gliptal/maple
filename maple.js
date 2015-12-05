var express = require("express")
var favicon = require("serve-favicon")
var logger = require("morgan")
var stylus = require("stylus")
var config = require(rootDir + "bin/config")

var home = require(rootDir + "routes/home")
var faq = require(rootDir + "routes/faq")
var hardware = require(rootDir + "routes/hardware")
var about = require(rootDir + "routes/about")

// -----------------------------------------

var configurator =
    {
    site: express(),

    configureLogger: function()
        {
        this.site.use(logger("dev"))
        },

    configureEngines: function()
        {
        this.site.set("view engine", config.engines.view)
        this.site.locals.basedir = rootDir;
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
        this.site.use("/", faq)
        this.site.use("/", hardware)
        this.site.use("/", about)
        }
    }

// -----------------------------------------

configurator.configureLogger()
configurator.configureEngines()
configurator.configurePaths()
configurator.configureRoutes()

// -----------------------------------------

module.exports = configurator.site;
