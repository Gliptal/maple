var Header = function(tab, scroll)
  {
  this.__stickOnScroll()
  this.__selectTab(tab)
  if (scroll)
    this.__scroll()
  }

Header.prototype.__stickOnScroll = function()
  {
  $(window).scroll(function()
    {
    if ($(this).scrollTop() >= 96)
      $("header nav").addClass("sticked")
    else
      $("header nav").removeClass("sticked")
    })
  }

Header.prototype.__selectTab = function(tab)
  {
  $("#header_nav-"+tab).addClass("selected")
  }

Header.prototype.__scroll = function()
  {
  var headerHeight = $("header h1").height()

  $(window).scrollTop(headerHeight)
  }
