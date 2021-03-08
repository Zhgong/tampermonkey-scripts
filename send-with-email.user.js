// ==UserScript==
// @name         Send with Email
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *
// @grant        GM_openInTab
// @run-at       context-menu
// @updateURL    https://github.com/Zhgong/tampermonkey-scripts/raw/master/send-with-email.user.js
// @downloadURL  https://github.com/Zhgong/tampermonkey-scripts/raw/master/send-with-email.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let selectedText = window.getSelection().toString().trim();
    let address = window.location;
    let text = `${selectedText} \n
               ${address}`
    let url = `mailto:?body=${text}`;
    console.log(url);
    // GM_openInTab(url);
    var link=document.createElement("a");
    link.id = 'fa3jfkgdfnfu3'; //give it an ID!
    link.href = url;

    document.body.appendChild(link);
    var tempDom = document.getElementById('fa3jfkgdfnfu3');
    tempDom.click();
    document.body.removeChild(link);

})();