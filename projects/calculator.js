// function myfunction_CE(parameter){
//     //get screen value
//   // var abc =   document.getElementsByTagN("screen").value

// //if param = " =" (){
//     // result = calculate(abc)
//     document.getElementsByTagN("screen").value = result
// // }el(c) //{
//     document.getElementsByTagN("screen").value = 0
// // }else() newvalue = abc + parameter
// document.getElementsByTagN("screen").value = newvalue
// }
// function calculate(expresssion){
// //evaluate expression

// return value
// }
function sow_in_screen(parameter){
    var values= document.getElementById("screen").value 
    // if(parameter==="="){
    //     return_value(values);
    //     console.log(parameter);
    // }
    console.log(values)
    console.log(typeof(values))
    
    if(parameter==="CE"){
        document.getElementById("screen").value= 0;
    }
    else if (parameter==="C"){
        values.pop(-1) ;
    }
    else{
        new_valuess=values+parameter
        document.getElementById("screen").value=new_valuess
        ;
    }
}
function return_value(){
    value_id=document.getElementById("screen").value;
    solve_value=eval(value_id);
    document.getElementById("screen").value=solve_value
}
