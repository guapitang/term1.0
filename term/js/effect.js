

$('.createbox').click(function () {

    if ($(this).find('img').attr('src') == '../../images/chose.png') {
        $(this).find('img').attr('src', '../../images/chosed.png');
    } else {
        $(this).find('img').attr('src', '../../images/chose.png');
    }


});
