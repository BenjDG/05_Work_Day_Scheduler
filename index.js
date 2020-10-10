$(document).ready(function () {


    var DateTime = luxon.DateTime;
    var localDateTime = DateTime.local();
    $('#currentDay').text(localDateTime);





});