var aspan = document.querySelectorAll("#new1 .newA");
var atab = document.querySelectorAll("#new1 .new1bot");

for (var i = 0; i < aspan.length; i++) {
    aspan[i].index = i;
    aspan[i].onmouseover = function () {
        for (var j = 0; j < aspan.length; j++) {
            aspan[j].className = "";
            atab[j].style.display = "none";
        }
        this.className = "active";
        atab[this.index].style.display = "block";
    }
}


var ospan = document.querySelectorAll("#new3 .newB");
var otab = document.querySelectorAll("#new3 .new3bot");

for (var i = 0; i < aspan.length; i++) {
    ospan[i].index = i;
    ospan[i].onmouseover = function () {
        for (var j = 0; j < aspan.length; j++) {
            ospan[j].className = "";
            otab[j].style.display = "none";
        }
        this.className = "active";
        otab[this.index].style.display = "block";
    }
}

var ispan = document.querySelectorAll("#new4 .newC");
var itab = document.querySelectorAll("#new4 .new4bot");

for (var i = 0; i < ispan.length; i++) {
    ispan[i].index = i;
    ispan[i].onmouseover = function () {
        for (var j = 0; j < ispan.length; j++) {
            ispan[j].className = "";
            itab[j].style.display = "none";
        }
        this.className = "active";
        itab[this.index].style.display = "block";
    }
}

var mspan = document.querySelectorAll("#new6 .newD");
var mtab = document.querySelectorAll("#new6 .new6bot");

for (var i = 0; i < mspan.length; i++) {
    mspan[i].index = i;
    mspan[i].onmouseover = function () {
        for (var j = 0; j < mspan.length; j++) {
            mspan[j].className = "";
            mtab[j].style.display = "none";
        }
        this.className = "active";
        mtab[this.index].style.display = "block";
    }
}