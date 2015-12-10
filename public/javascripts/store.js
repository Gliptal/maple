var Store = function()
    {
    this.__subscribeGroups()
    }

Store.prototype.__subscribeGroups = function()
    {
    $("group").each(function()
        {
        var content = $(this).children(".group_content")
        $(this).children(".group_title").click(function()
            {
            content.toggleClass("group_closed")
            })
        })
    }

var header = new Header("store")
var store = new Store()