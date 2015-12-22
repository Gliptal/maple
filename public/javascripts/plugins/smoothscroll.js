$(document).ready(function($)
  {
  $("a:not(nav a)").click(function(event)
    {
    event.preventDefault()

    var id = $(this).attr("href").slice(1)

    var threshold = 36
    var currentPosition = $(window).scrollTop()
    var finalPosition = $("[id=\""+id+"\"]").offset().top - threshold

    var factor = 50
    var time = Options.timeSlow - (factor*1000) / Math.abs(currentPosition - finalPosition)

    $("html, body").animate({scrollTop : finalPosition}, time)
    })
  })
