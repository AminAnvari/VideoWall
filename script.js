const startTime = new Date('2024-10-21T23:54:00');
const finishTime = new Date('2024-10-21T23:54:20');

const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');

const message = document.getElementById('message');

message.textContent = "";

countdownInterval = setInterval(() => {
    var now = new Date();
    var show = 0;

    if (now < startTime) {
        message.textContent = "مسابق هنوز شروع نشده است.";
        show = finishTime - startTime;
     
    }
    else if (now > finishTime) {
        message.textContent = "مسابقه به پایان رسیده است.";
        show = 0;
    }
    else {
        message.textContent = "مسابقه در حال برگزاری است.";
        show = finishTime - now;
    }

    const hours = Math.floor((show / 1000) / 3600);
    const minutes = Math.floor((show / 1000) / 60) % 60;
    const seconds = Math.floor(show / 1000) % 60;

    hoursBox.textContent = hours < 10 ? "0" + hours : hours;
    minutesBox.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsBox.textContent = seconds < 10 ? "0" + seconds : seconds;

}, 1000);