$(".banner1").banner({
    items: $(".banner1").find("img"),
    left: $(".banner1").find("#left"),
    right: $(".banner1").find("#right"),
    list: false,
    autoPlay: true,
    delayTime: 3000,
    moveTime: 1000,
    index: 0,
})

$(".banner2").banner({
    items: $(".banner2").find("img"),
    left: $(".banner2").find("#left"),
    right: $(".banner2").find("#right"),
    list: true,
    autoPlay: true,
    delayTime: 3000,
    moveTime: 1000,
    index: 0,
})
