const secondElement = document.querySelector('.second');
const minuteElement = document.querySelector('.minute');
const hourElement = document.querySelector('.hour');
const dayElement = document.querySelector('.day');
const monthElement = document.querySelector('.month');
const yearElement = document.querySelector('.year');


const formatNumber = (num) => num.toString()

let startTime = localStorage.getItem('startTime');

if (!startTime) {
    startTime = Date.now();
    localStorage.setItem('startTime', startTime);
} else {
    startTime = parseInt(startTime);
}

const updateTimer = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;


    const totalSeconds = Math.floor(elapsedTime / 1000);
    const years = Math.floor(totalSeconds / (3600 * 24 * 365));
    const months = Math.floor((totalSeconds % (3600 * 24 * 365)) / (3600 * 24 * 30));
    const days = Math.floor((totalSeconds % (3600 * 24 * 30)) / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    yearElement.textContent = formatNumber(years);
    monthElement.textContent = formatNumber(months);
    dayElement.textContent = formatNumber(days);
    hourElement.textContent = formatNumber(hours);
    minuteElement.textContent = formatNumber(minutes);
    secondElement.textContent = formatNumber(seconds);
};

setInterval(updateTimer, 1000);


updateTimer();
