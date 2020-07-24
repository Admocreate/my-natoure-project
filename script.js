
// hambunger

$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});


// particles

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.js loaded...');
});


// scroll button

mybutton = document.getElementById("myBtn");

window.onscroll = function () { 
    scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFuction() {
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
}

// form

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// livechat

"use strict";

!function () {
    var t = window.driftt = window.drift = window.driftt || [];
    if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
            t.factory = function (e) {
                return function () {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                };
            }, t.methods.forEach(function (e) {
                t[e] = t.factory(e);
            }), t.load = function (t) {
                var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(o, i);
            };
    }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('scpfit69xurk');