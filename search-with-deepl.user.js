// ==UserScript==
// @name         Search with Deepl
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.duden.de/rechtschreibung/selbststaendig
// @grant        GM_openInTab
// @run-at       context-menu
// @updateURL    https://github.com/Zhgong/tampermonkey-scripts/raw/master/search-with-deepl.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let text = window.getSelection().toString().trim();
    let url = `https://www.deepl.com/translator#de/zh/${text}`;
    console.log(url);
    console.log("new version")
    GM_openInTab(url);

})();