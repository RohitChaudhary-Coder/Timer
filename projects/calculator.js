function sow_in_screen(parameter) {
    values = document.getElementById("screen").value;
    if (parameter === "CE") {
        document.getElementById("screen").value = '';
    }
    else if (parameter === "C") {
        values.pop(-1);
    }
    else {
        new_valuess = values + parameter;
        document.getElementById("screen").value = new_valuess;
    }
}

function return_value() {
    value_id = document.getElementById("screen").value;
    solve_value = eval(value_id);
    document.getElementById("screen").value = solve_value;
}