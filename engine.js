const inputsCheck = document.querySelectorAll('.check-box');

let lastChecked;

function checkItem (e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        inputsCheck.forEach(elem => {
            if (elem === this || elem === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                elem.checked = true;
            }
        });
    }
    lastChecked = this;
}

inputsCheck.forEach(elem => elem.addEventListener('click', checkItem));