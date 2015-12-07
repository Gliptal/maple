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
