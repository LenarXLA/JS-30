const inputValue = document.querySelector('#inputValue');
const reset = document.querySelector('#resetOfValue');
let valueOfPressed = '';

const pressed = [];
const secretCode = 'lool';

inputValue.addEventListener('input', () => {
    valueOfPressed = inputValue.value;
    if (valueOfPressed.length < 5) {
        if (valueOfPressed.includes(secretCode)) {
            cornify_add();
        }
    }
});

reset.addEventListener('click', () => {
    valueOfPressed = '';
    inputValue.value = '';
});