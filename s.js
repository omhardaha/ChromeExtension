// this save url for all parts 
let urlForShor;

// PART - 1 GENERATING QR CODE 🧨
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

    let url = `https://api.qrserver.com/v1/create-qr-code/?data=${tabs[0].url}&amp;size=100x100`;
    urlForShor = tabs[0].url
    document.getElementById("qr").src = url;
})

// PART - 2 LINK SHORTNING🧨
var link = document.getElementById('linkshort');
link.addEventListener('click', async function () {
    link.innerText = "loding.."
    const data = await (await fetch(` https://tinyurl.com/api-create.php?url=${urlForShor}`)).text();

    await navigator.clipboard.writeText(data);
     link.innerText = await"Copied To ClipBoard";
});

// PART - 3 FULL SCREEN SCREENSHOT🧨

var screenButton = document.getElementById('ScreenShot');
screenButton.addEventListener('click', async function () {
    // console.log("clicked");
    screenButton.innerText = "loding.."

    await chrome.downloads.download({ url: `https://screenshot.abstractapi.com/v1/?api_key=95533e4b0c394bb0b3b2ee7032e3f03c&url=${urlForShor}`, filename: "fullScreenshot.png", saveAs: true });

    screenButton.innerText = await"Saving";

    console.log("hi data");
});

