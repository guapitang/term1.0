$(function () {

    var winHeight = $(window).height(), //获取浏览器可是窗口的盖度

        headerHeight = $('.header').height(),  //获取header的高度

        onOff = false;    //布尔值变量,通错这个变量可以防止快速连续点击的时候出现的连续滚动

    $(window).on('scroll', function () {

        var scTop = $(window).scrollTop();  //获取滚动条的滚动距离

        //当楼侧开始出现时显示楼层导航条

        if (scTop >= headerHeight - winHeight) {

            $('#lc').show(400);   //也可以不传参数，传参数表示运动时间

        } else {

            $('#lc').hide(400);

        }



        //滚动时切换显示楼层

        if (!onOff) {

            $('.floor').each(function (index, element) {

                var _top = $(this).offset().top;

                //当每层楼的最上面滚动到浏览器窗口的中间时切换导航条的显示

                if (scTop >= _top - winHeight / 2) {

                    //此处添加curr类样式并不是改变显示样式，而是为了标当前所在的楼层

                    $('#lc>li').eq(index).addClass('curr').children().show()

                        .end().siblings().removeClass('curr').children().hide();

                }

            });

        }

    })



    $('#lc>li').hover(function () {

        $(this).children().show();

    }, function () {

        //此处用到.not('.curr')来过滤当前楼层，鼠标移开时仍然保持当前的显示样式

        $(this).not('.curr').children().hide();

    }).on('click', function () {

        onOff = true;  //将开关变量onOff置为true

        var index = $(this).index(),  //获取当前电机的li的索引

            _top = $('.floor').eq(index).offset().top;//获取相对于的楼层到文档顶部的距离

        $(this).addClass('curr').children().show().end()

            .siblings().removeClass('curr').children().hide();



        $('html,body').animate({ 'scrollTop': _top }, 400, function () {

            onOff = false; //在运动执行完毕的毁掉函数中将onOff的值重置为false

        });



        //或者也可以用scrollIntoView()方法，只是该方法没有滚动的效果，而是直接跳到浏览器可是窗口的最上面.用法如下：

        /*var index = $(this).index();

        $('.floor').get(index).scrollIntoView();*/

    });

});
