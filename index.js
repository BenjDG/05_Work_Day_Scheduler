$(document).ready(function () {


    var DateTime = luxon.DateTime;
    console.log(DateTime.local().toLocaleString(DateTime.DATE_FULL));
    //console.log(monthDayYear);
    $('#currentDay').text(DateTime.local().toLocaleString(DateTime.DATE_HUGE));

   





});