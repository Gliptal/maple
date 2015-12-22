var Faq = function()
  {
  this.__subscribeEntries()
  }

Faq.prototype.__subscribeEntries = function()
  {
  $(".faq_question").click(function()
    {
    $(this).siblings(".faq_answer").toggleClass("closed")
    })
  }

new Header("faq", true)
new Faq()