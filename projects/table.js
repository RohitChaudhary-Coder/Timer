var list = [{
        "name": "rohan",
        "age": 12,
        "school": "R.B.I.C",
        "class": "vii"
},
{
        "name": "rohit",
        "age": 13,
        "school": "H.V.N",
        "class": "viii"
},
{
        "name": "sohan",
        "age": 11,
        "school": "G.D",
        "class": "v"
},
{
        "name": "Mohan",
        "age": 15,
        "school": "N.C.C",
        "class": "x"
},
{
        "name": "jatin",
        "age": 14,
        "school": "H.V.N",
        "class": "ix"
},
{
        "name": "ravi",
        "age": 24,
        "school": "NMIMS",
        "class": "PGDM"
}
]

function abcd() {
        for (var i = 0; i < list.length; i++) {
                $(`<tr>
                        <td onclick="pqr('${list[i].name}')">${list[i].name}</td>
                        <td onclick="pqr('${list[i].class}')">${list[i].class}</td>
                        <td onclick="pqr('${list[i].age}')">${list[i].age}</td>
                        <td onclick="pqr('${list[i].school}')">${list[i].school}</td>
                </tr>`).appendTo('#table-body')
        }
}


// for (var i = 0; i < list.length; i++) {
//         // debugger;
//         var a = $('#newid')
//         console.log(a)
//         $(`<span>${list[i].name}</span>`).appendTo('#newid')
// }

function pqr(value){
        console.log(value)
}