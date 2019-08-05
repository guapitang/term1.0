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
