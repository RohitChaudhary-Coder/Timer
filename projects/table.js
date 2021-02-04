var list=[{ "name":"rohan","age":12,
"school":"R.B.I.C","class":"vii"}
,{"name":"rohit","age":13,
"school":"H.V.N","class":"viii"},
{"name":"sohan","age":11,
"school":"G.D","class":"v"},
{"name":"Mohan","age":15,
"school":"N.C.C","class":"x"},
{"name":"jatin","age":14,
"school":"H.V.N","class":"ix"}]

for(var i=0; i < list.length;i++){
       console.log("1123")
        $(`<tr>
                <td>${list[i].name}</td>
                <td>${list[i].class}</td>
                <td>${list[i].age}</td>
                <td>${list[i].school}</td>
        </tr>
        `).appendTo ('#table_body')
        }
 
 
 
 
 
 
 
 
 
 
 
 
 
        // console.log(i)
        // (table_body)
        // console.log(list[i].age)

        // for (var a=0;a<=list[i].length;a++ ) {
                //         console.log("a")
                //         console.log(list[i])
                
                // }
// document.write("<tr>");
// 
// document.write("</tr>");
// }
//     for(var b=0; b<10; b++) {
//     document.createAttribute(<tr></tr>)
// document.createAttribute(<td></td>)
// document.write("<td>",a*b,"</td>")