chrome.commands.onCommand.addListener(function(command) {
  if (command == "toggle-pinned-tabs") {
    var matchUrl = '*://www.youtube.com/watch?v*';
    var queryInfo = {
      url: matchUrl,
      pinned: true
    };
    chrome.tabs.query(queryInfo, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, {
          message: 'toggle_video_state',
          tabId: tab.id
        }, function(response) {});
      })
    })
  }
});
