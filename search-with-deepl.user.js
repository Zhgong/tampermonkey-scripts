// ==UserScript==
// @name         Search with Deepl
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duden.de/rechtschreibung/selbststaendig
// @grant        GM_openInTab
// @run-at       context-menu
// @updateURL    
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let text = window.getSelection().toString().trim();
    let url = `https://www.deepl.com/translator#de/zh/${text}`;
    console.log(url);
    GM_openInTab(url);

})();