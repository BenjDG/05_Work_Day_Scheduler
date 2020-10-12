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
    var todaysDate = DateTime.local();
    var selectedDay = todaysDate;
    var selectedDayShort = selectedDay.toLocaleString(DateTime.DATE_SHORT);
    var selectedDayLong = selectedDay.toLocaleString(DateTime.DATE_HUGE);

    //console.log(selectedDayLong);
    //console.log(selectedDayShort);

    $('#currentDay').text(selectedDayLong);

    var $saveBtn = $('.saveBtn');

    //load Data for selected day
    loadData();

    //button listener
    $saveBtn.on('click', function (event) {
        //alert('click');
        //console.log(event);
        //console.log(event.currentTarget);        
        //console.log(event.currentTarget.previousElementSibling.value);

        var time = event.currentTarget.previousElementSibling.name;
        var value = event.currentTarget.previousElementSibling.value;

        //console.log(time);
        //console.log(value);
        //console.log(selectedDayShort);

        //console.log(calendarData.date);
        calendarData.date = selectedDayShort;
        saveData(time, value);

        //console.log(calendarData);
        saveToLocalStorage(selectedDayShort);
    });

    function saveData(time, value) {
        if (time === 't8am') {
            calendarData.time[0] = time;
            calendarData.data[0] = value;
        }
        if (time === 't9am') {
            calendarData.time[1] = time;
            calendarData.data[1] = value;
        }
        if (time === 't10am') {
            calendarData.time[2] = time;
            calendarData.data[2] = value;
        }
        if (time === 't11am') {
            calendarData.time[3] = time;
            calendarData.data[3] = value;
        }
        if (time === 't12pm') {
            calendarData.time[4] = time;
            calendarData.data[4] = value;
        }
        if (time === 't1pm') {
            calendarData.time[5] = time;
            calendarData.data[5] = value;
        }
        if (time === 't2pm') {
            calendarData.time[6] = time;
            calendarData.data[6] = value;
        }
        if (time === 't3pm') {
            calendarData.time[7] = time;
            calendarData.data[7] = value;
        }
        if (time === 't4pm') {
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
            //console.log(i);

            //console.log(calendarData.data[index]);
            //console.log(value);
            if (calendarData.data[i] !== undefined && calendarData.data[i] !== null) {
                $('textarea')[i].value = calendarData.data[i];
            }
            //console.log(value);
        });

    };






});