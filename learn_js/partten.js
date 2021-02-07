// for (var i =0;i<6;i++){
//     console.log("*".repeat(i))
// }
// <!-- ===================================================================== -->
list = [1, 2, 23, 23, 13, 13, 24, 24, 54, 54, 33, 33, 432, 33, 4, 3, 43, 43, 56, 56, 55, 55, , 989, 989, 77, 77, 67, 67];
new_list = [];
for (var i in list) {
    if (list[i] !== list[i + 1]) {
        new_list.push(list[i]);
        console.log(list[i]);
    }
} console.log(new_list)
// <!-- ===================================================================== -->
// list = [1, 2, 23, 23, 13, 13, 24, 24, 54, 54, 33, 33, 432, 33, 4, 3, 43, 43, 56, 56, 55, 55, , 989, 989, 77, 77, 67, 67]
// new_list = []
// for (var j in list) {
//     if (!(list[j] in new_list)) {
//         new_list.push(list[j])
//         console.log(list[j])
//     }
// }
// console.log(new_list)
