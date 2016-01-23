var Missions = function()
    {
    var self = this

    this.__stickSidebarOnScroll()
    this.__highlightVisibleSidebar()

    $(window).load(function()
      {
      self.__closeGroups()
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

Missions.prototype.__closeGroups = function()
  {
  $("group").each(function()
    {
    var self = $(this)

    $(this).children(".group_content").addClass("notransition")
    setTimeout(function()
      {
      self.children(".group_content").css("height", "0px")
      setTimeout(function()
        {
        self.children(".group_content").removeClass("notransition")
        }, Options.timeSlow)

      $(window).scroll()
      }, Options.timeDelay)
    })
  }

Missions.prototype.__highlightVisibleSidebar = function()
  {
  $(window).scroll(function()
    {
    $("group:in-viewport").each(function()
      {
      aircraft = $(this).attr("id")
      $("a[href=\"#"+aircraft+"\"").parent().addClass("selected")
      })

    $("group:not(:in-viewport)").each(function()
      {
      aircraft = $(this).attr("id")
      $("a[href=\"#"+aircraft+"\"").parent().removeClass("selected")
      })
    })
  }

new Header("missions", true)
new Footer()
new Missions()
new Groups()