
chrome.browserAction.onClicked.addListener(function(tab) {
    var reg = /(.*)([/])/
    var match = reg.exec(tab.url)
    chrome.tabs.update(tab.id, {
        url: match[0] + "?depth=1"
    })
});

