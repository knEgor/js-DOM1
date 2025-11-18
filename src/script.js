    function calc() {
        let buttons = document.querySelectorAll('.buttons');
        let display = document.querySelector('#display');
        let result = document.querySelector('.result');
        let del = document.querySelector('.delete');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = () => {
                display.value += buttons[i].dataset.num;
            }

        }

        result.onclick = () => {
            try {
                display.value = eval(display.value);
            }
            catch (error) {
                display.value = "Error";
            }
        } 

        del.onclick = () => {
            display.value = "";
        }
    }
    calc();
