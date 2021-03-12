var currentSite = window.location.href;
if (currentSite.includes("guvi.in") || currentSite.includes("guvi.io") || currentSite.includes("guvi.com")) {
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5WRCCN9');
}
var url = window.location.href,
    n = url.search(/guvi/i),
    demo = url.search("/demo"); - 1 !== n && -1 === demo && (! function(e, a, n, t, o, c, r) {
    e.GoogleAnalyticsObject = o, e[o] = e[o] || function() {
        (e[o].q = e[o].q || []).push(arguments)
    }, e[o].l = 1 * new Date, c = a.createElement(n), r = a.getElementsByTagName(n)[0], c.async = 1, c.src = t, r.parentNode.insertBefore(c, r)
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-53114947-1", "auto"), ga("send", "pageview"));
if ($("main").attr("id") == "bundle-pages") {
    var d_time = localStorage.getItem("d_time");
    d_time = d_time == 1 ? 0 : 15000;
    localStorage.setItem("d_time", 1);
} else {
    var d_time = 1;
    localStorage.setItem("d_time", 1);
}
if (!$("main").hasClass("no-tawk")) {
    if ($("main").hasClass("delay-tawk")) {
        d_time = 30000;
    }
    setTimeout(function() {
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();
        (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5e776e7d8d24fc22658943ad/default';
            s1.rel = 'noopener noreferrer';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, d_time);
}
if (!$("main").hasClass("no-affiliate")) {
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://script.tapfiliate.com/tapfiliate.js';
        s1.rel = 'noopener noreferrer';
        s1.charset = 'UTF-8';
        s0.parentNode.insertBefore(s1, s0);
    })();
    (function(t, a, p) {
        t.TapfiliateObject = a;
        t[a] = t[a] || function() {
            (t[a].q = t[a].q || []).push(arguments)
        }
    })(window, 'tap');
    tap('create', '20527-acde4b', {
        integration: "javascript"
    });
    tap('detect');
}
(function(i, s, o, g, r, a, m, n) {
    i.moengage_object = r;
    t = {};
    q = function(f) {
        return function() {
            (i.moengage_q = i.moengage_q || []).push({
                f: f,
                a: arguments
            })
        }
    };
    f = ['track_event', 'add_user_attribute', 'add_first_name', 'add_last_name', 'add_email', 'add_mobile', 'add_user_name', 'add_gender', 'add_birthday', 'destroy_session', 'add_unique_user_id', 'moe_events', 'call_web_push', 'track', 'location_type_attribute'], h = {
        onsite: ["getData", "registerCallback"]
    };
    for (k in f) {
        t[f[k]] = q(f[k])
    }
    for (k in h)
        for (l in h[k]) {
            null == t[k] && (t[k] = {}), t[k][h[k][l]] = q(k + "." + h[k][l])
        }
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
    i.moe = i.moe || function() {
        n = arguments[0];
        return t
    };
    a.onload = function() {
        if (n) {
            i[r] = moe(n)
        }
    }
})(window, document, 'script', 'https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js', 'Moengage')
Moengage = moe({
    app_id: "1I9TF4Z06LQBS7769B6SJ2LU",
    debug_logs: 0
});