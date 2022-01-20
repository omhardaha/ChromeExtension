// this save url for all parts 
let urlForShor;

// PART - 1 GENERATING QR CODE 🧨
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

    let url = `https://api.qrserver.com/v1/create-qr-code/?data=${tabs[0].url}&amp;size=50x50`;
    urlForShor = tabs[0].url
    document.getElementById("qr").src = url;
})

// PART - 2 LINK SHORTNING🧨
var link = document.getElementById('linkshort');
link.addEventListener('click',async function(){
    console.log( encodeURIComponent(urlForShor) );
    const data = await fetch(` https://tinyurl.com/api-create.php?url=${ urlForShor }`);

    let finalData = await data.text();
    await console.log(finalData);
    await navigator.clipboard.writeText(finalData);
    console.log("hi data");
});
