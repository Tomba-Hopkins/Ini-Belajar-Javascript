function getTimeUntilBirthday(birthday, hour = 0, minute = 0) {
    const now = new Date();
    const currentYear = now.getFullYear();

    let nextBirthday = new Date(`${currentYear}-${birthday}`);
    nextBirthday.setHours(hour, minute, 0, 0);

    const isBirthdayPassed = now > nextBirthday;
    if (isBirthdayPassed) {
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
        seconds,
        dahLewat: isBirthdayPassed
    };
}

function updateCountdown() {
    const birthday = "07-04"; 
    const targetHour = 18; 
    const targetMinute = 56; 

    const timeUntilBirthday = getTimeUntilBirthday(birthday, targetHour, targetMinute);

    if (timeUntilBirthday.dahLewat) {
        const main = document.querySelector('main')
        const header = document.querySelector('header')
        main.style.display = 'none'
        header.style.display = 'flex'

        clearInterval(interValid);
        return;
    }

    document.querySelector('.month').textContent = timeUntilBirthday.months;
    document.querySelector('.day').textContent = timeUntilBirthday.days;
    document.querySelector('.hour').textContent = timeUntilBirthday.hours;
    document.querySelector('.minute').textContent = timeUntilBirthday.minutes;
    document.querySelector('.second').textContent = timeUntilBirthday.seconds;
}

const interValid = setInterval(updateCountdown, 1000);
updateCountdown();
