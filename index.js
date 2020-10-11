$(document).ready(function () {

    var calendarData = {
        date : "",
        time : []
   
    }
//'t8am'= 0,'t9am' = 1,'t10am' 2,'t11am' 3 ,'t12am' 4,'t1pm'5,'t2pm'6,'t3pm'7,'t4pm'8

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
        //console.log(event.currentTarget.previousElementSibling.name);
        //console.log(event.currentTarget.previousElementSibling.value);

        var time = event.currentTarget.previousElementSibling.name;
        var value = event.currentTarget.previousElementSibling.value;

        console.log(time);
        console.log(value);
        //get date also
        console.log(calendarData);

        




    });

function saveData(time, value, date) {
    if (time === 't8am') {
        
    }
    if (time === 't9am') {
        
    }
    if (time === 't10am') {
        
    }
    if (time === 't11am') {
        
    }
    if (time === 't12pm') {
        
    }
    if (time === 't1pm') {
        
    }
    if (time === 't2pm') {
        
    }
    if (time === 't3pm') {
        
    }
    if (time === 't4pm') {
        
    }
    else {
        alert('error');
    }
    

    
}





});