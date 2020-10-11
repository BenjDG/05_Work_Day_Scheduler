$(document).ready(function () {


    var DateTime = luxon.DateTime;
    //console.log(DateTime.local().toLocaleString(DateTime.DATE_FULL));
    //console.log(monthDayYear);
    $('#currentDay').text(DateTime.local().toLocaleString(DateTime.DATE_HUGE));

    var $saveBtn = $('.saveBtn');

    //button listener
    $saveBtn.on('click', function(event) {
        //alert('click');
        //console.log(event);
        //console.log(event.currentTarget);
        console.log(event.currentTarget.previousElementSibling.name);
        console.log(event.currentTarget.previousElementSibling.value);

    });






});