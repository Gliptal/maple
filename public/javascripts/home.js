var Home = function()
  {
  this.__loadVideo()
  }

Home.prototype.__loadVideo = function()
  {
  var player

  window.onYouTubeIframeAPIReady = function()
    {
    player = new YT.Player("player",
      {
      "height"    : "720",
      "width"     : "1280",
      "playerVars":
        {
        "origin"         : "http://localhost:443",
        "listType"       : "playlist",
        "list"           : "PLOS_9ARrkqWdPkRenGLEMMTb497_pUZpr",
        "vq"             : "hd720",
        "autohide"       : "1",
        "controls"       : "1",
        "fs"             : "1",
        "modestbranding" : "1"
        },
      "events"    :
        {
        onReady : function(event)
          {
          $("#player").removeClass("hidden")
          }
        }
      })
    }
  }

new Header("home", false)
new Home()
new Rows()