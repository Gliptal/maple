var Home = function()
  {
  fadeParagraphs()
  this.__loadVideo()
  }

Home.prototype.__loadVideo = function()
  {
  var player;

  window.onYouTubeIframeAPIReady = function()
    {
    player = new YT.Player("player",
      {
      height    : "720",
      width     : "1280",
      playerVars:
        {
        "origin"        : "http://localhost:443",
        "listType"      : "playlist",
        "list"          : "PLOS_9ARrkqWdPkRenGLEMMTb497_pUZpr",
        "vq"            : "hd720",
        "autohide"      : "1",
        "controls"      : "1",
        "fs"            : "1",
        "modestbranding": "1"
        },
      events    :
        {
        "onReady": onPlayerReady
        }
      });
    }

  function onPlayerReady(event)
    {
    $("#player").toggleClass("hidden")
    }
  }

var header = new Header("home")
var home = new Home()