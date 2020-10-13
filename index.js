$(document).ready(function () {
    //object for data storage
    var calendarData = {
        date: "",
        time: [],
        data: []
    }
    //get date and time
    var DateTime = luxon.DateTime;
    var todaysDate = DateTime.local();
    //2019, 5, 5, 12, 00
    var dt = DateTime.fromObject({hour: 12, day: 22, month:12 , year: 2015})
    var selectedDay = todaysDate;
    //var selectedDay = todaysDate;


    var selectedDayShort = selectedDay.toLocaleString(DateTime.DATE_SHORT);
    var selectedDayLong = selectedDay.toLocaleString(DateTime.DATE_HUGE);
    var currentHour = todaysDate.c.hour;

    $('#currentDay').text(selectedDayLong);
    var $saveBtn = $('.saveBtn');

    //load data from local storage
    loadData();

    //button listener
    $saveBtn.on('click', function (event) {
        var time = event.currentTarget.previousElementSibling.name;
        var value = event.currentTarget.previousElementSibling.value;
        calendarData.date = selectedDayShort;
        saveData(time, value);
        saveToLocalStorage(selectedDayShort);
    });
    //save data to local object
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
    //save local object to localstorage
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
    //render data on page and color textarea based on current hour
    function renderData() {
        var $textarea = $('textarea');
        $.each($textarea, function (i) {
            if (calendarData.data[i] !== undefined && calendarData.data[i] !== null) {
                $('textarea')[i].value = calendarData.data[i];
            }
            $textareaName = $('textarea')[i].name;
            var row = $textareaName.substring(1, 3);
            if (+row < currentHour) {
                $('textarea').eq(i).attr('class', 'past');
            }
            if (+row === currentHour) {
                $('textarea').eq(i).attr('class', 'present');
            }
            if (+row > currentHour) {
                $('textarea').eq(i).attr('class', 'future');
            }
        });
    };
});