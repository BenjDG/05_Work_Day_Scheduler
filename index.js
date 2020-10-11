$(document).ready(function () {


    var DateTime = luxon.DateTime;
    console.log(DateTime.local().toLocaleString(DateTime.DATE_FULL));
    //console.log(monthDayYear);
    $('#currentDay').text(DateTime.local().toLocaleString(DateTime.DATE_HUGE));

    var $container = $('.container');




    // for (var i = 0; i < 9; i++) {
    //     console.log(i + 1);
        
    //     var $div1 = $('<textarea>').attr('class', 'row past').text(i);

        
    //     $container.append($div1);


    // }





});