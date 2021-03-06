// ==UserScript==
// @name         Search with Duden
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      *
// @grant        GM_openInTab
// @run-at       context-menu
// @updateURL    https://github.com/Zhgong/tampermonkey-scripts/raw/master/search-with-duden.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let text = window.getSelection().toString().trim();
    let url = `https://www.duden.de/suchen/dudenonline/${text}`;
    console.log(url);
    GM_openInTab(url);

})();
