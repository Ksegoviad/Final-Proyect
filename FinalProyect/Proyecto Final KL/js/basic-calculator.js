document.addEventListener("DOMContentLoaded", function() {
    const calculator = document.forms["calculator"];
    const textField = calculator.ans;

    const buttons = calculator.querySelectorAll("input[type='button']");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;

            if (value === "=") {
                try {
                    textField.value = eval(textField.value);
                } catch (e) {
                    textField.value = "Error";
                }
            } else if (value === "←") {
                textField.value = textField.value.slice(0, -1);
            } else {
                textField.value += value;
            }
        });
    });

    calculator.querySelector("input[type='reset']").addEventListener("click", function() {
        textField.value = "";
    });
});






