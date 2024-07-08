let string = "";
let buttons = document.querySelectorAll('.button');
let arr = Array.from(buttons);

arr.forEach(x => {
    x.addEventListener('click', event => {
        if (event.target.innerHTML === '=') {
            if (string === "") {
                document.querySelector('input').value = "0";
            } else {
                let lastChar = string[string.length - 1];
                if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                    string = string.slice(0, -1); 
                }

                try {
                    let result = eval(string);
                    string = result.toString();
                    document.querySelector('input').value = "= " + result;
                } catch(error) {
                    document.querySelector('input').value = "= " + string;
                }
            }
        } else if (event.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else if (event.target.innerHTML === 'C') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        } else {
            if (/[-+*/%]$/.test(string)) {
                // If the last character is an operator and the new character is also an operator,
                // replace the last operator without modifying the string
                if (/[-+*/%]$/.test(event.target.innerHTML)) {
                    string = string.slice(0, -1) + event.target.innerHTML;
                } else {
                    string += event.target.innerHTML;
                }
            } else {
                string += event.target.innerHTML;
            }
            document.querySelector('input').value = string;
        }
    })
})