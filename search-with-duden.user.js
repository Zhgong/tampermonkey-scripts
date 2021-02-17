// ==UserScript==
// @name         Search with Duden
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duden.de/rechtschreibung/selbststaendig
// @grant        GM_openInTab
// @run-at       context-menu
// @updateURL    https://github.com/Zhgong/tampermonkey-scripts/raw/master/search-with-duden.user.js
// @downloadURL  https://github.com/Zhgong/tampermonkey-scripts/raw/master/search-with-duden.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let text = window.getSelection().toString().trim();
    let url = `https://www.duden.de/suchen/dudenonline/${text}`;
    console.log(url);
    GM_openInTab(url);

})();