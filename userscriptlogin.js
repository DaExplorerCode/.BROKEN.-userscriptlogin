// ==UserScript==
// @name     UserscriptLogin by DaExplorerCode
// @version  0.1.2
// @grant    none
// @description Make simple 2FA using this very simple script
// ==/UserScript==


var savedkeyforthiscript = "replace this text with your password that you wanna like to use it";
var thekey = null;
gotothemainlogin()
function gotothemainlogin(){
while(thekey !== savedkeyforthiscript){
if (thekey !== "/about") {
var thekey = prompt("Password:");
}

if (thekey == "/about") {
alert("UserscriptLogin 0.1.2 | Updates : Simplifying the script using non-stored variables (May decrease the security level on this script, BEWARE)");
var thekey = null;
gotothemainlogin();
}
}
