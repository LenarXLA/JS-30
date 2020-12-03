const regulator = document.querySelectorAll('.range-change input');

function updateRegulators() {
    const size = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + size);
}

regulator.forEach(el => el.addEventListener('change', updateRegulators));
regulator.forEach(el => el.addEventListener('mousemove', updateRegulators));