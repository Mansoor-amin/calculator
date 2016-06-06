var display = document.getElementById('screen');
var onPress = function (val) {
    var value = display.innerText;
    if (value === "00") {
        value = "";
    }
    value += val;
    display.innerText = value;
};
var onEqualsPress = function () {
    var value = display.innerText;
    if (value === "00") {
        alert('write expression first.');
    }
    else {
        // converting input in expression
        var operators = ['*', '/', '-', '+'];
        var newEqua = [];
        if (value.indexOf('+') === -1 && value.indexOf('-') === -1 && value.indexOf('*') === -1 && value.indexOf('/') === -1) {
            alert('no Operator found. invalid expression');
        }
        else {
            var val = "";
            var con = true;
            for (var i = 0; i < value.length; i++) {
                val += value[i];
                if (value[i] == "+" || value[i] == "-" || value[i] == "*" || value[i] == "/") {
                    val = val.split('');
                    val.pop();
                    val = val.join("");
                    newEqua.push(val);
                    newEqua.push(value[i]);
                    val = "";
                }
                else {
                    if (value.length === i + 1) {
                        newEqua.push(val);
                    }
                }
            }
            // calculation starts here 
            var num = void 0;
            // division
            for (var i = 0; i < newEqua.length; i++) {
                if (newEqua[i] == '/') {
                    num = parseFloat(newEqua[i - 1]) / parseFloat(newEqua[i + 1]);
                    newEqua.splice(i - 1, 3, num);
                }
            }
            //multiplaction
            for (var i = 0; i < newEqua.length; i++) {
                if (newEqua[i] == '*') {
                    num = parseFloat(newEqua[i - 1]) * parseFloat(newEqua[i + 1]);
                    newEqua.splice(i - 1, 3, num);
                }
            }
            //substraction 
            for (var i = 0; i < newEqua.length; i++) {
                if (newEqua[i] == '-') {
                    num = parseFloat(newEqua[i - 1]) - parseFloat(newEqua[i + 1]);
                    newEqua.splice(i - 1, 3, num);
                }
            }
            //addition
            for (var i = 0; i < newEqua.length; i++) {
                if (newEqua[i] == '+') {
                    num = parseFloat(newEqua[i - 1]) + parseFloat(newEqua[i + 1]);
                    newEqua.splice(i - 1, 3, num);
                }
            }
            var ans = newEqua.join("");
            display.innerText = ans;
        }
    }
};
var onClear = function () {
    display.innerText = "00";
};
