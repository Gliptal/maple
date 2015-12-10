var colors = require("colors")
var fs = require("fs-extra")
var jade = require("jade")
var merge = require("object-merge")

// -----------------------------------------

var fail = "[   FAIL   ]".red+"    "
var success = "[    OK    ]".green+"    "

function filterJs(value)
    {
    return value.indexOf(".js") > -1
    }

// -----------------------------------------

fs.copy("public/images", "STATIC/images", function(error)
    {
    if (error)
        return console.log(fail+"copy images\n"+error)
    else
        console.log(success+"copy images")
    })

fs.copy("public/javascripts", "STATIC/javascripts", function(error)
    {
    if (error)
        return console.log(fail+"copy javascripts\n"+error)
    else
        console.log(success+"copy javascripts")
    })

fs.copy("public/style", "STATIC/style", function(error)
    {
    if (error)
        return console.log(fail+"copy stylesheets\n"+error)
    else
        console.log(success+"copy stylesheets")
    })

fs.copy("public", "STATIC", /.txt$/i, function(error)
    {
    if (error)
        return console.log(fail+"copy .txt pages\n"+error)
    else
        console.log(success+"copy .txt pages")
    })

fs.readdir("locales/en/", function(error, files)
    {
    files = files.filter(filterJs)

    files.forEach(function(page)
        {
        page = page.slice(0, -3)

        var meta = require("../locales/en/common/meta")
        var header = require("../locales/en/common/header")
        var footer = require("../locales/en/common/footer")
        var locale = require("../locales/en/"+page)
        var content = merge(meta, header, footer, locale)

        var render = jade.compileFile("./views/"+page+".jade", {basedir: "./", pretty: true})
        html = render(content)

        fs.writeFile("./STATIC/"+page+".html", html, function(error)
            {
            if (error)
                return console.log(fail+"compile "+page+".html page\n"+error)
            else
                console.log(success+"compile "+page+".html page")
            })
        })
    })


