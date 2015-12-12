var Missions = function()
    {
    var self = this

    $(window).load(function()
        {
        subscribeGroups()

        self.__closeGroups()
        })
    }

Missions.prototype.__closeGroups = function()
    {
    $("group").each(function()
        {
        var self = $(this)

        $(this).children(".group_content").addClass("no-transition")
        setTimeout(function()
            {
            self.children(".group_content").css("height", "0px")
            setTimeout(function()
                {
                self.children(".group_content").removeClass("no-transition")
                }, 900)
            }, 1)
        })
    }

var header = new Header("missions")
var missions = new Missions()