var region = "india";
setInterval(setDateTime, 1000);

//Sets date and time -Clock
function setDateTime(){
    let dateTime = getDateTime();
    document.getElementById("time").innerHTML = dateTime.time;
    document.getElementById("am-pm").innerHTML = dateTime.new_am_pm;
    document.getElementById("date").innerHTML = dateTime.date;
    document.getElementById("day").innerHTML = dateTime.day;
    $("#clock_time").css({boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
    setTimeout(function(){
        $("#clock_time").css({boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
    }, 100)

}

//Gets date and time values - Clock
function getDateTime() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let months = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
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
    let current_am_pm =`${am_pm} `

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
        new_am_pm:current_am_pm,
        date: current_date,
        day: current_day
    }
};

//Changing date format for clock
function changeDateFormat(New_region){
    region = New_region;
}



// timer============timer============timer============timer============timer============timer============timer============
function set_timer_time(){
    let time =return_given_time();
    total_time = time.total_time_in_seconds
    setInterval(change_time,1000)
function change_time(){
    if (total_time >0){
        total_time =total_time -1
        document.getElementById("timer_").innerHTML=total_time 
        $("#clock_time").css({boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
        setTimeout(function(){
            $("#clock_time").css({boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
        }, 100)
    }
    else{
        $("#main_contener_id").css({"background-color": "red"});
        $("#timer_").hide(1000);
        $("#p1").show(2000);
    }
}
}

function return_given_time(){
    get_hours = document.getElementById("Hours").value
    get_minutes = document.getElementById("Minutes").value
    get_seconds = document.getElementById("Seconds").value
    total_seconds = `${(get_hours * 60 * 60 ) + (get_minutes * 60) + get_seconds}`
    return{
        seconds:get_seconds,
        minutes:get_minutes,
        hours:get_hours,
        total_time_in_seconds: `${total_seconds}`
    }
}

function start_stop_time(){
    make_milliseconds = (1000 * get_seconds) + (1000 * 60 * get_minutes) + (1000 * 60 * 60 * get_hours);
}

function change_theme(parameter) {
    if (parameter === "Black_White") {
        red__blue.style.display = "block";
        black_white.style.display = "none";
    }
    else if (parameter === "red_blue") {
        black_white.style.display = "block";
        red__blue.style.display = "none";
    }
}