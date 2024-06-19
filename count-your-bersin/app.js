function getTimeUntilBirthday(birthday) {
    const now = new Date();
    const currentYear = now.getFullYear();

    let nextBirthday = new Date(`${currentYear}-${birthday}`);

    if (now > nextBirthday) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    const timeDifference = nextBirthday - now;

    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
        months,
        days,
        hours,
        minutes,
        seconds
    };
}

function updateCountdown() {
    const birthday = "7-04"; 
    const timeUntilBirthday = getTimeUntilBirthday(birthday);

    document.querySelector('.month').textContent = timeUntilBirthday.months;
    document.querySelector('.day').textContent = timeUntilBirthday.days;
    document.querySelector('.hour').textContent = timeUntilBirthday.hours;
    document.querySelector('.minute').textContent = timeUntilBirthday.minutes;
    document.querySelector('.second').textContent = timeUntilBirthday.seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();
