// ==UserScript==
// @name         YouTube - Ad Skip
// @version      0.1
// @description  Skips and removes ads on YouTube automatically
// @author       Bobocato
// @match        https://www.youtube.com/*
// @grant        none
// @namespace https://greasyfork.org/users/167089
// @updateURL    https://github.com/Zhgong/tampermonkey-scripts/raw/master/youtube-skip-ads.user.js
// @downloadURL  https://github.com/Zhgong/tampermonkey-scripts/raw/master/youtube-skip-ads.user.js
// ==/UserScript==

const equalText1 = "Skip Ads";
const equalText2 = "Skip Ad";
const equalText3 = "跳过广告";

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

function skipAd(){
    console.log("Tried to skip a ad");
    if(document.getElementsByClassName("ytp-ad-skip-button").length > 0){
        let text = document.getElementsByClassName("ytp-ad-skip-button")[0].childNodes[0].textContent;
        if(text === equalText1 || text=== equalText2 || text=== equalText3){
            document.getElementsByClassName("ytp-ad-skip-button")[0].click();
        } else {
            setTimeout(skipAd(), 1000);
        }
    }
}

(function() {
    'use strict';
    addNewStyle('.ytp-ad-overlay-slot {display:none !important;}');
    setInterval(function (){
        if(window.location.href.substring(0,30) == "https://www.youtube.com/watch?"){
            skipAd();
        }
    }, 2500);
})();