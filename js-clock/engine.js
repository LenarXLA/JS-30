const secArrow = document.querySelector('.second_arrow');
const minArrow = document.querySelector('.minute_arrow');
const hourArrow = document.querySelector('.hour_arrow');

const clockGo = () => {
    let time = new Date();
    let second = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();

    let secDeg = ((second / 60) * 360) - 90;
    secArrow.style.transform = `rotate(${secDeg}deg)`;

    let minDeg = ((minute / 60) * 360) - 90;
    minArrow.style.transform = `rotate(${minDeg}deg)`;

    let hourDeg = ((hour / 60) * 360) - 90;
    hourArrow.style.transform = `rotate(${hourDeg}deg)`;

    setTimeout(clockGo, 1000);
};

const init = () => {
    clockGo();
};

init();
