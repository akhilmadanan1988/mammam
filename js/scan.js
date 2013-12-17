var scanner;

// If you want to prevent dragging, uncomment this section
/*
function preventBehavior(e)
{
e.preventDefault();
};
document.addEventListener("touchmove", preventBehavior, false);
*/

/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
for more details -jm */
/*
function handleOpenURL(url)
{
// TODO: do something with the url passed in.
}
*/

function onBodyLoad()
{
document.addEventListener("deviceready", onDeviceReady, false);
scanButton = document.getElementById("scan-button");
resultSpan = document.getElementById("scan-result");
}

/* When this function is called, PhoneGap has been initialized and is ready to roll */
/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
for more details -jm */
function onDeviceReady()
{
// do your thing!
//navigator.notification.alert("PhoneGap is working");

/* Phonegap BarcodeScanner Plugin */
try {
scanner = cordova.require("cordova/plugin/BarcodeScanner");
alert('scanner loaded');
}
catch(e) {
alert('scanner could not be loaded');
}

//scanButton.addEventListener("click", clickScan, false);
//createButton.addEventListener("click", clickCreate, false);

}

function clickScan() {

   
try{
scanner.scan(scannerSuccess, scannerFailure);
}catch(e){
alert(e.message);
}

}

//------------------------------------------------------------------------------
function scannerSuccess(result) {
//navigator.notification.alert("Scan Success");
//console.log("scannerSuccess: result: " + result)
resultSpan.innerText = "success: " + result.text;
}

//------------------------------------------------------------------------------
function scannerFailure(message) {
navigator.notification.alert("Scan Fail");
console.log("scannerFailure: message: " + message)
resultSpan.innerText = "failure: " + JSON.stringify(message)
}