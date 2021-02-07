function is_even() {
    is_odd =true
    values = document.getElementById("number").value;
    new_value=parseInt(values)
    if (new_value === 0) {
        alert("zero is not a odd or even")
    }
    else if (new_value%2===0) {
        is_odd=false
    }
    if (is_odd === false) {
        alert("this number is a even number")
    }
    else {
        alert("this number is a odd number")
    }
}
// <!-- ===================================================================== -->
function is_prime() {
    is_prime_ = true
    _values = document.getElementById("prime").value;
    new_values=parseInt(_values)
    if (new_values === 0) {
        alert("zero or one is not a Prime or composite")
    }
	else{
		for (var i = 2; i < new_values ; i++) {
			if (new_values % i === 0) {
				is_prime_ = false
				console.log(i)
				break
			}
			console.log(i)
		}
		console.log()
		if (is_prime_ === true) {
			alert("this number is a prime number")
		}
		else {
			alert("this number is a composite number")
		}
	}
}