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
    var selectedDay = todaysDate;


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


    //load localstorage data into main array
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

        //loop textarea and add data
        $.each($textarea, function (i) {
            if (calendarData.data[i] !== undefined && calendarData.data[i] !== null) {
                $('textarea')[i].value = calendarData.data[i];
            }

            //substring date of each text area
            $textareaName = $('textarea')[i].name;
            var row = $textareaName.substring(1, 3);

            //color rows based on hour of day
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


    var $button = $('#selectedDaySubmit');
    //console.log($button);
    $button.on('click', function (event) {
        event.preventDefault();
        
        //clearText();
        var newDate = $('#selectedDayID').val();
        //console.log(newDate);
        //DateTime.fromSQL(newDate);
        //console.log(DateTime());
        //console.log(DateTime.fromSQL(newDate));
        todaysDate = DateTime.fromSQL(newDate);
        //selectedDay = todaysDate;


        selectedDay = todaysDate;
        // console.log(selectedDay);
        // console.log(todaysDate);

        selectedDayShort = selectedDay.toLocaleString(DateTime.DATE_SHORT);
        selectedDayLong = selectedDay.toLocaleString(DateTime.DATE_HUGE);


        $('#currentDay').text(selectedDayLong);

        //load data from local storage
        clearText();
        loadData();


    });

    function clearText() {
        $('textarea').each(function (i, v) {
            //console.log(i);
            //console.log(v);
            console.log(v.value);
            v.value = "";
            calendarData.data[i] = '';
            
        });
    }
});