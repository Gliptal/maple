var Header = function(section)
  {
  this.__stickOnScroll()

  $("#header_tabs-"+section).addClass("selected")
  }

Header.prototype.__stickOnScroll = function()
  {
  $(window).scroll(function()
    {
    if ($(this).scrollTop() > 96)
      $("#header_tabs").addClass("sticked")
    else
      $("#header_tabs").removeClass("sticked")
    })
  }
