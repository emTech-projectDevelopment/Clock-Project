setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const dateTimeNow = new Date()
    const secondMvmt = dateTimeNow.getSeconds() / 60
    const minuteMvmt = (secondMvmt + dateTimeNow.getMinutes()) / 60
    const hourMvmt = (minuteMvmt + dateTimeNow.getHours()) / 12
    setRotation(secondHand, secondMvmt)
    setRotation(minuteHand, minuteMvmt)
    setRotation(hourHand, hourMvmt)
};

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
};

setClock();