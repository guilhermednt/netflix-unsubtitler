chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {
        urls: ["*://*.akam.nflximg.com/soa*"]
    },
    ["blocking"]
);
