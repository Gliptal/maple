function fadeParagraphs()
  {
  $(window).scroll(function()
    {
    $("row").each(function()
      {
      if ($(window).scrollTop() + $(window).height() >= $(this).position().top + $(this).height()/2)
        $(this).children("div:not(#player), p").removeClass("hidden")
      })
    })

  if ($(document).height() > $(window).height())
    {
    window.scroll(0, 1)
    window.scroll(0, 0)
    }
  else
    $("row p, row div:not(#player)").removeClass("hidden")
  }

function subscribeGroups()
    {
    $("group").each(function()
        {
        var content = $(this).children(".group_content")
        var height = content.height()

        content.css("height", height)

        $(this).children(".group_title").click(function()
            {
            if (content.css("height") == "0px")
              content.css("height", height)
            else
              content.css("height", "0px")
            })
        })
    }
