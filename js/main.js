var gg = document.getElementById("gg");
var fg = document.getElementById("fg");
var e = document.querySelector(".home");
var r = document.querySelector(".Projects");
var t = document.querySelector(".experiences");
var y = document.querySelector(".Connect");
var u = document.querySelector(".language");
var dds = document.getElementById("dds");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var contrr = document.querySelector(".contrr");
var iframe = document.getElementById("iframe");
gg.onclick = function () {
    if (gg.classList.contains('ri-close-fill')) {
        gg.classList.remove('ri-close-fill');
        gg.style.cssText = " left: 26px;"
        gg.classList.toggle('ri-bar-chart-horizontal-line');
        p1.style.cssText = "display:none ;";
        p2.style.cssText = "display:none ;";
        p3.style.cssText = "display:none ;";
        p4.style.cssText = "display:none ;";
        p5.style.cssText = "display:none ;";
        dds.style.cssText = "flex-basis: 7%;";
        contrr.style.cssText = "flex-basis: 93%;";
        e.style.cssText = "margin-top: 68px;";
        r.style.cssText = "margin-top: 20px;";
        t.style.cssText = "margin-top: 20px;";
        y.style.cssText = "margin-top: 20px;";
        u.style.cssText = "margin-top: 20px;";
        e.classList.toggle('pp');
        r.classList.toggle('pp');
        t.classList.toggle('pp');
        y.classList.toggle('pp');
        u.classList.toggle('pp');
    }
    else {
        gg.classList.remove('ri-bar-chart-horizontal-line');
        gg.style.cssText = " left : 160px;"
        gg.classList.toggle('ri-close-fill');
        p1.style.cssText = "display:block ;";
        p2.style.cssText = "display:block ;";
        p3.style.cssText = "display:block ;";
        p4.style.cssText = "display:block ;";
        p5.style.cssText = "display:block ;";
        dds.style.cssText = "flex-basis: 15%;";
        contrr.style.cssText = "flex-basis: 85%;";
        e.classList.remove('pp');
        r.classList.remove('pp');
        t.classList.remove('pp');
        y.classList.remove('pp');
        u.classList.remove('pp');
        e.style.cssText = "margin-top: 0px;";
        r.style.cssText = "margin-top: 10px;";
        t.style.cssText = "margin-top: 10px;";
        y.style.cssText = "margin-top: 10px;";
        u.style.cssText = "margin-top: 10px;";
    }
}

fg.onclick = function () {
    if (fg.classList.contains('ri-bar-chart-horizontal-line')) {
        fg.classList.remove('ri-bar-chart-horizontal-line');
        fg.classList.toggle('ri-close-fill');
        dds.style.cssText = "left: 0px;";
    }
    else {
        fg.classList.remove('ri-close-fill');
        fg.classList.toggle('ri-bar-chart-horizontal-line');
        dds.style.cssText = "left: -300px;";
    }
}

// ......................
h = "html/home.html";
// p="../HOB/index.html";
// ex="../Klinder/index.html";
// c="../clock/index.html";
e.onclick = function () {
    if (iframe.src = p) {
        r.classList.remove('active');
        i2.classList.remove('active');
        p2.classList.remove('active');
    }
    if (iframe.src = ex) {
        t.classList.remove('active');
        i3.classList.remove('active');
        p3.classList.remove('active');
    }
    if (iframe.src = c) {
        y.classList.remove('active');
        i4.classList.remove('active');
        p4.classList.remove('active');
    }
    iframe.src = h;
    e.classList.toggle('active');
    i1.classList.toggle('active');
    p1.classList.toggle('active');

}
r.onclick = function () {
    if (iframe.src = h) {
        e.classList.remove('active');
        i1.classList.remove('active');
        p1.classList.remove('active');
    }
    if (iframe.src = ex) {
        t.classList.remove('active');
        i3.classList.remove('active');
        p3.classList.remove('active');
    }
    if (iframe.src = c) {
        y.classList.remove('active');
        i4.classList.remove('active');
        p4.classList.remove('active');
    }
    iframe.src = p;
    r.classList.toggle('active');
    i2.classList.toggle('active');
    p2.classList.toggle('active');
}
t.onclick = function () {
    if (iframe.src = p) {
        r.classList.remove('active');
        i2.classList.remove('active');
        p2.classList.remove('active');
    }
    if (iframe.src = h) {
        e.classList.remove('active');
        i1.classList.remove('active');
        p1.classList.remove('active');
    }
    if (iframe.src = c) {
        y.classList.remove('active');
        i4.classList.remove('active');
        p4.classList.remove('active');
    }
    iframe.src = ex;
    t.classList.toggle('active');
    i3.classList.toggle('active');
    p3.classList.toggle('active');
}
y.onclick = function () {
    if (iframe.src = p) {
        r.classList.remove('active');
        i2.classList.remove('active');
        p2.classList.remove('active');
    }
    if (iframe.src = ex) {
        t.classList.remove('active');
        i3.classList.remove('active');
        p3.classList.remove('active');
    }
    if (iframe.src = h) {
        e.classList.remove('active');
        i1.classList.remove('active');
        p1.classList.remove('active');
    }
    iframe.src = c;
    y.classList.toggle('active');
    i4.classList.toggle('active');
    p4.classList.toggle('active');
}
