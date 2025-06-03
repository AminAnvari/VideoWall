const startTime = new Date('2025-06-04T03:03:00');
const finishTime = new Date('2025-06-04T03:03:20');
const engage = 10;

const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');
const messageBox = document.getElementById('status-message');

function interpolateColor(color1, color2, t) {
  const r = Math.round(color1.r * (1 - t) + color2.r * t);
  const g = Math.round(color1.g * (1 - t) + color2.g * t);
  const b = Math.round(color1.b * (1 - t) + color2.b * t);
  return `rgb(${r}, ${g}, ${b})`;
}

const updateCountdown = () => {
  const now = new Date();
  let timeRemaining;
  let current_color;
  const color_start = {r:0, g:255, b:0};
  const color_finish = {r: 255, g:0, b:0};

  if (now < startTime) {
    messageBox.textContent = "مسابقه هنوز شروع نشده است.";
    timeRemaining = startTime - now;
    current_color = interpolateColor(color_start, color_finish, 0);
  } else if (now > finishTime) {
    messageBox.textContent = "مسابقه به پایان رسیده است.";
    timeRemaining = 0;
    current_color = interpolateColor(color_start, color_finish, 1);
  } else {
    messageBox.textContent = "مسابقه در حال برگزاری است.";
    timeRemaining = finishTime - now;
    current_color = interpolateColor(color_start, color_finish, (now - startTime) / (finishTime - startTime));
  }

  const totalSeconds = Math.floor(timeRemaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursBox.textContent = hours.toString().padStart(2, '0');
  minutesBox.textContent = minutes.toString().padStart(2, '0');
  secondsBox.textContent = seconds.toString().padStart(2, '0');

  const elements = document.getElementsByClassName("time-unit");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = current_color;
  }

  const remainingToStart = (startTime - now) / 1000;
  const remainingToFinish = (finishTime - now) / 1000;

  const shouldPulse = (remainingToStart <= engage && remainingToStart > 0) ||
                    (remainingToFinish <= engage && remainingToFinish > 0);

  for (let i = 0; i < elements.length; i++) {
    if (shouldPulse) {
      elements[i].classList.add("pulsing");
    } else {
      elements[i].classList.remove("pulsing");
  }
}
};

updateCountdown();
setInterval(updateCountdown, 1000);
