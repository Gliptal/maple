var Missions = function()
    {
    var self = this

    this.__stickSidebarOnScroll()

    $(window).load(function()
        {
        subscribeGroups()

        self.__closeGroups()
        setTimeout(function()
          {
          self.__highlightVisibleSidebar()
          }, Options.delay)
        })
    }

Missions.prototype.__stickSidebarOnScroll = function()
  {
  $(window).scroll(function()
    {
    if ($(this).scrollTop() > 96)
      $("sidebar").addClass("sticked")
    else
      $("sidebar").removeClass("sticked")
    })
  }

Missions.prototype.__highlightVisibleSidebar = function()
  {
  $(window).scroll(function()
    {
    $("group:in-viewport").each(function()
      {
      aircraft = $(this).attr("id")
      $(".sidebar_section-aircraft a[href=\"#"+aircraft+"\"").parent().addClass("selected")
      })

    $("group:not(:in-viewport)").each(function()
      {
      aircraft = $(this).attr("id")
      $(".sidebar_section-aircraft a[href=\"#"+aircraft+"\"").parent().removeClass("selected")
      })
    })

  window.scroll(0, 1)
  window.scroll(0, 0)
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