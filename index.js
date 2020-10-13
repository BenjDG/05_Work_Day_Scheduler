$(document).ready(function () {

    var calendarData = {
        date: "",
        time: [],
        data: []

    }

    //'t8am'= 0,'t9am' = 1,'t10am' 2,'t11am' 3 ,'t12am' 4,'t1pm'5,'t2pm'6,'t3pm'7,'t4pm'8

    var DateTime = luxon.DateTime;
    //console.log(DateTime.local().toLocaleString(DateTime.DATE_FULL));
    //console.log(monthDayYear);
    var todaysDate = DateTime.local(2019, 12, 09, 12, 00);


    var selectedDay = todaysDate;
    var selectedDayShort = selectedDay.toLocaleString(DateTime.DATE_SHORT);
    var selectedDayLong = selectedDay.toLocaleString(DateTime.DATE_HUGE);
    var currentHour = todaysDate.c.hour;
    console.log('The current hour is: ' + currentHour);

    //console.log(selectedDayLong);
    //console.log(selectedDayShort);

    $('#currentDay').text(selectedDayLong);

    var $saveBtn = $('.saveBtn');

    //load Data for selected day
    loadData();

    //button listener
    $saveBtn.on('click', function (event) {
        var time = event.currentTarget.previousElementSibling.name;
        var value = event.currentTarget.previousElementSibling.value;
        calendarData.date = selectedDayShort;
        saveData(time, value);

        //console.log(calendarData);
        saveToLocalStorage(selectedDayShort);
    });

    function saveData(time, value) {
        if (time === 't8') {
            calendarData.time[0] = time;
            calendarData.data[0] = value;
        }
        if (time === 't9') {
            calendarData.time[1] = time;
            calendarData.data[1] = value;
        }
        if (time === 't10') {
            calendarData.time[2] = time;
            calendarData.data[2] = value;
        }
        if (time === 't11') {
            calendarData.time[3] = time;
            calendarData.data[3] = value;
        }
        if (time === 't12') {
            calendarData.time[4] = time;
            calendarData.data[4] = value;
        }
        if (time === 't13') {
            calendarData.time[5] = time;
            calendarData.data[5] = value;
        }
        if (time === 't14') {
            calendarData.time[6] = time;
            calendarData.data[6] = value;
        }
        if (time === 't15') {
            calendarData.time[7] = time;
            calendarData.data[7] = value;
        }
        if (time === 't16') {
            calendarData.time[8] = time;
            calendarData.data[8] = value;
        }
    }

    function saveToLocalStorage() {

        localStorage.setItem(selectedDayShort, JSON.stringify(calendarData));
    }
    function loadData() {

        localCalendarData = JSON.parse(localStorage.getItem(selectedDayShort));

        if (localCalendarData !== null) {
            calendarData = localCalendarData;
        }
        renderData();
    }
    //console.log($('textarea'));
    //console.log(calendarData.data[0]);
    //renderData();
    function renderData() {
        var $textarea = $('textarea');
        $.each($textarea, function (i) {

            if (calendarData.data[i] !== undefined && calendarData.data[i] !== null) {
                $('textarea')[i].value = calendarData.data[i];
            }

            $textareaName = $('textarea')[i].name;
                var row = $textareaName.substring(1,3);
                console.log(+row);
                console.log(currentHour);


            //console.log(i);
            if (+row < currentHour) {
                //$('textarea')[i].addClass('past');
                $('textarea').eq(i).attr('class', 'past');
            }
            if (+row === currentHour) {
                $('textarea').eq(i).attr('class', 'present');
            }
            if (+row > currentHour) {
                //$('textarea')[i].addClass('past');
                $('textarea').eq(i).attr('class', 'future');
            }

            //t8  0
            //t9  1
            //t10  2
            //t11  3
            //t12  4
            //t13  5
            //t14  6
            //t15  7
            //t16  8



        });

    };


    //     function colorChangeByHour(hour) {
    //     if (hour === )
    //  }

});