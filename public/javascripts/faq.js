var Faq = function(section)
  {
  this.__subscribeRows()
  }

Faq.prototype.__subscribeRows = function()
  {
  $(".faq_question").click(function()
    {
    $(this).siblings(".faq_answer").toggleClass("removed")
    })
  }

var header = new Header("faq")
var faq = new Faq()