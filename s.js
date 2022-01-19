
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    
    let url = `https://api.qrserver.com/v1/create-qr-code/?data=${tabs[0].url}&amp;size=50x50`;
    document.getElementById("qr").src = url;
})

chrome.tabs.captureVisibleTab(null, {}, function (image) {
    // You can add that image HTML5 canvas, or Element.
    
 });