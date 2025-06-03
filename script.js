const startTime = new Date('2025-06-03T16:35:00');
const finishTime = new Date('2025-06-03T16:35:30');

const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');
const messageBox = document.getElementById('status-message');
ش
const updateCountdown = () => {
  const now = new Date();
  let timeRemaining;

  if (now < startTime) {
    messageBox.textContent = "مسابقه هنوز شروع نشده است.";
    timeRemaining = finishTime - startTime;
  } else if (now > finishTime) {
    messageBox.textContent = "مسابقه به پایان رسیده است.";
    timeRemaining = 0;
  } else {
    messageBox.textContent = "مسابقه در حال برگزاری است.";
    timeRemaining = finishTime - now;
  }

  const totalSeconds = Math.floor(timeRemaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursBox.textContent = hours.toString().padStart(2, '0');
  minutesBox.textContent = minutes.toString().padStart(2, '0');
  secondsBox.textContent = seconds.toString().padStart(2, '0');
};

updateCountdown();
setInterval(updateCountdown, 1000);
