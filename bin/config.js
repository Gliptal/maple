var debugServer = require("debug")("maple:server")
var debugStylus = require("debug")("maple:stylus")
var debugRouting = require("debug")("maple:routing")
var nib = require("nib")
var pather = require("path")
var stylus = require("stylus")

// -----------------------------------------

global.rootDir = require("app-root-path") + "/"

var config =
    {
    port: 443,
    lang: "en",
    debug:
        {
        server: debugServer,
        routing: debugRouting,
        stylus: debugStylus
        },
    options:
        {
        static:
            {
            index: false
            },
        stylus:
            {
            src: rootDir + "resources",
            dest: rootDir + "public",
            debug: true,
            force: true,
            compile: compileStylus
            }
        },
    engines:
        {
        view: "jade"
        },
    paths:
        {
        css:
            {
            server: rootDir + "resources",
            client: rootDir + "public"
            },
        views: rootDir + "views",
        static: rootDir + "public",
        images: rootDir + "public/images/"
        }
    }

function compileStylus(str, path)
    {
    config.debug.stylus("compiling " + pather.basename(path))
    return stylus(str)
           .set("filename", path)
           .use(nib())
           .import("nib")
    }

// -----------------------------------------

module.exports = config