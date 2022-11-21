// ==UserScript==
// @name     UserscriptLogin by DaExplorerCode
// @version  0.1.2
// @grant    none
// @description Make simple 2FA using this very simple script
// ==/UserScript==
var tabtittle = document.title;
var loginsuccessfultick = 0;
var savedkeyforthiscript = "Edit this text to set the password";
var thekey = null;
gotothemainlogin()
function gotothemainlogin(){
while (loginsuccessfultick = 0) {
while(thekey !== savedkeyforthiscript){
if (thekey !== "/about") {
document.title = "⚠ Login Required!";
var thekey = prompt("Password:");
}

if (thekey == "/about") {
document.title = "About UserscriptLogin";
alert("UserscriptLogin 0.1.2 | Updates : Simplifying the script using non-stored variables (May decrease the security level on this script, BEWARE)");
var thekey = null;
gotothemainlogin();
}
}
while (thekey == savedkeyforthiscript) {
document.title ("✅ Login Successful!");
var loginsuccessfultick = 1;
setTimeout(ReviveTheDocumentTitle, 5000);
}
}
}
function ReviveTheDocumentTitle() {
document.title = tabtittle;
}
