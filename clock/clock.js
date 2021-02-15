var region = "india";
setInterval(setDateTime, 1000);
//Sets date and time -Clock
function setDateTime(){
    let dateTime = getDateTime();
    document.getElementById("time").innerHTML = dateTime.time;
    document.getElementById("am-pm").innerHTML = dateTime.am_pm;
    document.getElementById("date").innerHTML = dateTime.date;
    document.getElementById("day").innerHTML = dateTime.day;
};

//Gets date and time values - Clock
function getDateTime() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //setting time variables
    let seconds = date.getSeconds();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    let minutes = date.getMinutes();
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    let hours = date.getHours();
    let am_pm = 'AM'
    if(hours > 12){
        hours  = hours-12;
        am_pm = 'PM';
    }
    if(hours < 10){
        hours = "0"+ hours;
    }
    let current_time = `${hours}:${minutes}:${seconds}  `;
    //Setting Date variables
    let current_date = '';
    let new_date = date.getDate();
    let new_month = date.getMonth() + 1;
    let new_year = date.getFullYear();
    if (region === "india") {
        current_date = `${new_date}/${new_month}/${new_year},`;   
    }
    else if (region === "newyork") {
        current_date = `${new_year}-${new_month}-${new_date},`;
    }
    else if (region === "us") {
        current_date = `${new_month}-${new_date}-${new_year},`;
    }
    else if (region === "uk") {
        current_date = `${new_year}-${new_month}-${new_date},`;
    }else{
        current_date = `${new_date}/${new_month}/${new_year},`;
    }
    //Selecting day
    let current_day = days[date.getDay()];
    return {
        time: current_time,
        am_pm: am_pm,
        date: current_date,
        day: current_day
    }
};
//Changing date format for clock
function changeDateFormat(New_region){
    region = New_region;
};