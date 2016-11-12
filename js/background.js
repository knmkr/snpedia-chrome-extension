chrome.contextMenus.create({
    id: "snpedia",
    title: "Search on SNPedia",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "snpedia") {
        var q = 'aldh2+rs671';

        chrome.tabs.create({
            url: "https://www.snpedia.com/index.php?title=Special%3ASearch&profile=default&fulltext=Search&search=" + q
        });
    }
});
