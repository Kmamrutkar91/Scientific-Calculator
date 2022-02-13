let display = document.getElementById('input_number');
buttons = document.querySelectorAll('button');
let inputval = '';
for (iterator of buttons) {
    iterator.addEventListener('click', (element) => {
        buttonText = element.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            inputval += buttonText;
            display.value = inputval;
        }
        else if (buttonText == 'AC') {
            inputval = "";
            display.value = inputval;
        }
        else if (buttonText == 'CHECK') {
            display.value = inputval;
        }
        else if (buttonText == 'DEL') {
            display.value = display.value.substr(0, display.value.length - 1);
            let delete_value =inputval.slice(0,inputval.length-1)
            inputval=delete_value
            // console.log(inputval)
        }
        else if (buttonText == '=') {
            display.value = eval(inputval);
        }
        else if (buttonText == "sin") {
            display.value = Math.sin(display.value);
        }
        else if (buttonText == "cos") {
            display.value = Math.cos(display.value);
        }
        else if (buttonText == "tan") {
            display.value = Math.tan(display.value);
        }
        else if (buttonText == "x*2") {
            display.value = inputval * inputval
        }
        else if (buttonText == "x*3") {
            display.value = inputval * inputval * inputval
        }
        else if (buttonText == "√") {
            display.value = Math.sqrt(display.value);  
        }
        else if (buttonText == "∛") {
            display.value = Math.cbrt(display.value);  
        }
        else if (buttonText == "1/x") {
            const inverse = 1/display.value;
            display.value = inverse;  
        }
        else if (buttonText == "π") {
            buttonText = Math.PI;
            inputval += buttonText;
            display.value=inputval
        }
        else if (buttonText == "e") {
            buttonText = Math.E;
            inputval += buttonText;
            display.value = inputval;
        }
        else if (buttonText == "ln") {
            display.value=Math.log(display.value);
        }
        else if (buttonText == "log") {
            const log_value=Math.log(display.value)/2.303;
            display.value=log_value;
        }
        else {
            inputval += buttonText;
            display.value = inputval;           
        }

    })
}