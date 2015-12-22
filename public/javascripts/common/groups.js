var Groups = function()
  {
  $("group").each(function()
    {
    var content = $(this).children(".group_content")
    var height = content.height()

    content.css("height", height)

    $(this).children(".group_title").click(function()
      {
      var self = $(this)

      if (content.css("height") == "0px")
        {
        content.css("height", height)
        $(this).addClass("hovered")
        $(this).children("p").addClass("hovered")
        }
      else
        {
        content.css("height", "0px")
        setTimeout(function()
          {
          self.removeClass("hovered")
          self.children("p").removeClass("hovered")
          }, Options.timeSlow)
        }

      setTimeout(function()
        {
        var currentScroll = $(window).scrollTop()

        $(window).scrollTop(currentScroll+1)
        $(window).scrollTop(currentScroll)
        }, Options.timeSlow)
      })
    })
  }
