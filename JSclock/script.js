function startTime() {
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var date = currentTime.getDate();
    var day = currentTime.getDay() + 1; 
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();
    month = checkMonth(month);
    day = checkDay(day);
    m = timeChecker(m);
    s = timeChecker(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("day-month-year").innerHTML = day+", "+date + " " + month + " " + year;
    setTimeout( startTime, 500);
}
function timeChecker(time) {
    if(time < 10){
        return "0" + time;
    } 
    return time;
}
function checkMonth(month) {
    switch(month){
        case 1: return "January";
            break;
        case 2: return "February";
            break;
        case 3: return "March";
            break;
        case 4: return "April";
            break;
        case 5: return "May";
            break;
        case 6: return "June";
            break;
        case 7: return "July";
            break;
        case 8: return "August";
            break;
        case 9: return "September";
            break;
        case 10: return "October";
            break;
        case 11: return "November";
            break;
        default: return "December";
    }
}
function checkDay(day) {
    switch(day) {
        case 1: return "Sunday";
            break;
        case 2: return "Monday";
            break;
        case 3: return "Tuesday";
            break;
        case 4: return "Wednesday";
            break;
        case 5: return "Thursday";
            break;
        case 6: return "Friday";
            break;
        default: return "Saturday";
    }
}