document.addEventListener("DOMContentLoaded", function(event) {

    function twoNumbers(number) {
        return number < 10 ? "0"+ number : "" + number;
    }

    var date = document.getElementById("date");
    var time = document.getElementById("time");

    setInterval(setDate, 6000);

    function setDate() {
        var currentDate = new Date();
        var dayOfTheMonth = currentDate.getDate();
        var dayOfTheWeek;
        switch (currentDate.getDay()) {
            case 0:
                dayOfTheWeek = "Sunday";
                break;
            case 1:
                dayOfTheWeek = "Monday";
                break;
            case 2:
                dayOfTheWeek = "Tuesday";
                break;
            case 3:
                dayOfTheWeek = "Wednesday";
                break;
            case 4:
                dayOfTheWeek = "Thursday";
                break;
            case 5:
                dayOfTheWeek = "Friday";
                break;
            case 6:
                dayOfTheWeek = "Saturday";
                break;
        }

        var month;
        switch (currentDate.getMonth()) {
            case 0:
                month = "January";
                break;
            case 1:
                month = "February";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
        }

        var year = currentDate.getFullYear();
        date.innerHTML = dayOfTheWeek + " the " + dayOfTheMonth + " of " + month + " " + year;
    }

    setDate();

    setInterval(setTime , 1000);

    function setTime() {
        var currentDate = new Date();
        time.innerHTML = currentDate.getHours() + ":" + twoNumbers(currentDate.getMinutes()) + ":" + twoNumbers(currentDate.getSeconds());
    }

    setTime();
});