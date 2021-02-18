// ==UserScript==
// @name         YouTube - Ad Skip
// @version      0.1
// @description  Skips and removes ads on YouTube automatically
// @author       zhou
// @match        https://www.youtube.com/*
// @grant        none
// @namespace    http://tampermonkey.net/
// @updateURL    https://github.com/Zhgong/tampermonkey-scripts/raw/master/youtube-skip-ads.user.js
// @downloadURL  https://github.com/Zhgong/tampermonkey-scripts/raw/master/youtube-skip-ads.user.js
// ==/UserScript==

const labels = ["Skip Ads", "Skip Ad", "跳过广告"]


function skipAd() {
    console.log("Tried to skip a ad");
    if (document.getElementsByClassName("ytp-ad-skip-button").length > 0) {
        let text = document.getElementsByClassName("ytp-ad-skip-button")[0].childNodes[0].textContent;
        if (labels.includes(text)) {
            document.getElementsByClassName("ytp-ad-skip-button")[0].click();
        } else {
            setTimeout(skipAd(), 1000);
        }
    }
}

(function () {
    'use strict';
    setInterval(function () {
        if (window.location.href.substring(0, 30) == "https://www.youtube.com/watch?") {
            skipAd();
        }
    }, 2500);
})();