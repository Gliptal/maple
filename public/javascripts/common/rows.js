var Rows = function()
  {
  this.__fadeOnScroll()
  this.__showInViewport()
  }

Rows.prototype.__fadeOnScroll = function()
  {
  $(window).scroll(function()
    {
    $("row").each(function()
      {
      var viewportBottom = $(window).scrollTop() + $(window).height()
      var threshold = $(this).height()/2

      if (viewportBottom >= $(this).position().top + threshold)
        $(this).children(":not(#player)").removeClass("hidden")
      })
    })
  }

Rows.prototype.__showInViewport = function()
  {
  $("row:in-viewport > :not(#player)").removeClass("hidden")
  }
