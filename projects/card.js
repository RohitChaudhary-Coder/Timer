// function set_name_etc(){
//     value=document.getElementsByClassName("name_etc").value;
//     document.write="my name is '${name}'"

// }
// <!-- ===================================================================== -->

// function change_text(value="not given"){
//     names=document.getElementById("name").value;
//     ages=document.getElementById("age").value;
//     school=document.getElementById("school").value;
//     classs=document.getElementById("classs").value;
    
//     console.log(names)
//     document.write(`my name is ${names} <br>
//     my age is ${age} <br>
//     my gender is ${gender} <br>
//     my school name is ${school} <br>
//     my classs is ${classs} <br>
//     `) 
// }

// <!-- ===================================================================== -->
function return_text(){
    names=document.getElementById("name").value;    
    ages=document.getElementById("ages").value;
    school=document.getElementById("school").value;
    classs=document.getElementById("cclass").value;
    gender=document.getElementById("genders").value;
    if(!names||!school||!classs||!ages||!gender){
        
    }
    document.getElementById("card_text").innerHTML=`my name is ${names} 
    my age is ${ages} 
    my gender is ${gender} 
    my school name is ${school} 
    in ${classs} class 
    `; 
}