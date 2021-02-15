// start Timer
function startTimer(){
    $("#time").show()
    $("#show-time-out").hide();
    $(".outer-container").css({"background-color": "aqua"});  
    $(".input-fields").hide();
    $("#start-btn").hide();
    $("#stop-btn").show();
    timerInterval = getTimerInterval();
    timerID = setInterval(UpdateTimerInterval, 1000);  
    console.log("startTimer")
}
// stop timer
function stopTimer(){
    clearInterval(timerID);
    $("#stop-btn").hide();
    $(".input-fields").show();
    $("#start-btn").show();
    console.log("stopTimer")
}
// get time hear
function getTimerInterval(){
    let hours = document.getElementById("Hours").value;
    let minutes = document.getElementById("Minutes").value;
    let seconds = document.getElementById("Seconds").value;
    console.log((hours * 60 * 60 ) , (minutes * 60) ,seconds*1)
    return (hours * 60 * 60 ) + (minutes * 60) + seconds*1;
}
// update timer hear
function UpdateTimerInterval(){
    if(timerInterval){
        $("#inner-container").css({boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
        setTimeout(function(){
            $("#inner-container").css({boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
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
        console.log("no Time out",remain_hours,remain_miniuts,remain_second,remendar)

    }else{
        console.log("Time out")
        $("#time").hide()
        $("#show-time-out").show();
        $(".outer-container").css({"background-color": "red"});  
        stopTimer();      
    }
}