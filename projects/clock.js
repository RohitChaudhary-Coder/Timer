var region = "india";
var timerInterval = 0;
var timerID = null;
setInterval(setDateTime, 1000);

//Sets date and time -Clock
function setDateTime(){
    let dateTime = getDateTime();
    document.getElementById("time").innerHTML = dateTime.time;
    document.getElementById("am-pm").innerHTML = dateTime.new_am_pm;
    document.getElementById("date").innerHTML = dateTime.date;
    document.getElementById("day").innerHTML = dateTime.day;
    document.getElementById("digital_clock_timer").innerHTML = dateTime.time;

    
    // $("#clock_time").css({boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
    // setTimeout(function(){
    //     $("#clock_time").css({boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
    // }, 100)

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

// start Timer
function startTimer(){
    $("#new_timer_time").show(500)
    $("#showing_time_out").hide(1000);
    $("#main_contener_id").css({"background-color": "aqua"});  
    $(".timer_input_fildes").hide(1000);
    $("#start_btn").hide(1000);
    $("#stop_btn").show(1000);
    timerInterval = getTimerInterval();
    timerID = setInterval(UpdateTimerInterval, 1000);  
}
// stop timer
function stopTimer(){
    clearInterval(timerID);
    $("#stop_btn").hide();
    $(".timer_input_fildes").show();
    $("#start_btn").show();
}
// get time hear
function getTimerInterval(){
    let hours = document.getElementById("Hours").value;
    let minutes = document.getElementById("Minutes").value;
    let seconds = document.getElementById("Seconds").value;
    return (hours * 60 * 60 ) + (minutes * 60) + seconds;
}
// update timer hear
// setInterval(UpdateTimerInterval,1000);
function UpdateTimerInterval(){
    // if(hours < 9 )
    // timerstring = ``;
    // $("#timer").html(timestring);
    if(timerInterval){
        $("#main_contener_id").css({boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
        setTimeout(function(){
            $("#main_contener_id").css({boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
        }, 100)
        timerInterval = timerInterval-1;
        
        remain_hours=parseInt(timerInterval / 3600)
        remendar =parseInt(timerInterval % 3600)
        remain_miniuts=parseInt(remendar / 60)
        remain_second=parseInt(timerInterval % 60)

        if(remain_hours < 10){
            remain_hours = "0" + remain_hours;
        }
        if(remain_miniuts < 10){
            remain_miniuts = "0" + remain_miniuts;
        }
        if(remain_second < 10){
            remain_second = "0" + remain_second;
        }

        document.getElementById("hour").innerHTML = remain_hours;
        document.getElementById("second").innerHTML = remain_second;
        document.getElementById("minute").innerHTML = remain_miniuts;
        // console.log(timerInterval ,'timerInterval');
        // console.log(timerID,'id')
    }else{
        // $("#haveing_time_time").hide(1000)
        // $("#showing_time_out").show(2000);
        // console.log("elses")

        $("#main_contener_id").css({"background-color": "red"});  
        stopTimer();      
    }
}
// function set_timer_time(work){
//     if (work === "start"){
//         $("#start_btn").hide(1000);
//         $(".timer_input_fildes").hide(1000);
//         $("#stop_btn").show(1000);
//         $("#p1").show(1000);
//         set_setInterval=setInterval(UpdateTimerInterval, 1000)
//         let time =return_given_time();
//         total_time = time.total_time_in_seconds    
//     }
//     else{
//         $("#stop_btn").hide(1000);
//         $(".timer_input_fildes").show(1000);
//         $("#start_btn").show(1000);
//         clearInterval(set_setInterval);
//     }

// }
