const panels = document.querySelectorAll('.panel');

function tgOpen () {
    this.classList.toggle('open');
}

function tgActive (e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', tgOpen));
panels.forEach(panel => panel.addEventListener('transitionend', tgActive));