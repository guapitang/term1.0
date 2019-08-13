$().ready(function () {
    $(".tab-menu li").mouseover(function () {
        var _index = $(this).index();
        $(".tab-box>div").eq(_index).show().siblings().hide();
        $(this).addClass("change").siblings().removeClass("change");
    });
    $(".tab").on("mouseleave", function () {
        $(".tab-box div").css({
            "display": "none",
        })
    })
});


var msg = localStorage.getItem("loginUser");
if (msg) {
    $(".p1").hide();
    $(".p2").show();
    $(".p2").find("span").html(JSON.parse(msg).user);
} else {
    $(".p1").show();
    $(".p2").hide();
}

$(".p2").find("a").click(function () {
    localStorage.removeItem("loginUser");
    $(".p1").show();
    $(".p2").hide();
})




var aimg = document.querySelectorAll("img");
var arr = Array.from(aimg);
var t;

onload = onscroll = function () {
    clearTimeout(t);
    t = setTimeout(function () {
        fn();
    }, 100)
}

function fn() {
    var scrollT = document.documentElement.scrollTop;
    var clientH = document.documentElement.clientHeight;

    for (var i = 0; i < arr.length; i++) {
        console.log(`i:${i}`);
        if (arr[i].offsetTop - scrollT < clientH) {
            arr[i].src = arr[i].getAttribute("ljz");
            // arr.splice(i, 1)
        }
    }
}




