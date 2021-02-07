// var factor = function(number) {
//     var result = 1;
//     var count;
//     for (count = number; count > 1; count--) {
//       result *= count;
//     }
//     return result;
//   };
//   console.log(factor(6));
//   // 720
// <!-- ===================================================================== -->
// var counter = 10;
// while(counter > 0) {
//     console.log(counter--);
// }
// <!-- ===================================================================== -->

var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};
countdown(10);