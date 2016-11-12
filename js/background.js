chrome.contextMenus.create({
    id: "snpedia",
    title: "Search on SNPedia: %s",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "snpedia") {
        var q = info.selectionText;

        chrome.tabs.create({
            url: "https://www.snpedia.com/index.php?title=Special%3ASearch&profile=default&fulltext=Search&search=" + q
        });
    }
});
