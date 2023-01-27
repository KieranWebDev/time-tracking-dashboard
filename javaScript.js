'use strict';
const activities = document.querySelectorAll('.activity-title');
const timeAmount = document.querySelectorAll('.time-amount');
const timeLastWeek = document.querySelectorAll('.previous-time-amount');
const timeBtns = document.querySelectorAll('.time-button');
console.log(activities);
// Buttons
const btnDaily = document.querySelector('.daily');
const btnWeekly = document.querySelector('.weekly');
const btnMonthly = document.querySelector('.monthly');

async function getData() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
const userData = await getData();
console.log(userData);

function btnColor(timeframe) {
  timeBtns.forEach((btn) => {
    if (btn.classList.contains(timeframe)) {
      btn.style.color = 'white';
    } else {
      btn.style.color = '#7078c9';
    }
  });
}

function displayHours(timeframe) {
  btnColor(timeframe);
  activities.forEach((activity, index) => {
    activity.textContent = userData[index].title;
  });
  timeAmount.forEach((time, index) => {
    time.textContent = `${userData[index].timeframes[timeframe].current}hrs`;
  });
  timeLastWeek.forEach((time, index) => {
    time.textContent = `Last Week - ${userData[index].timeframes[timeframe].previous}hrs`;
  });
}
displayHours('daily');

// Event Listeners

btnDaily.addEventListener('click', () => displayHours('daily'));
btnWeekly.addEventListener('click', () => displayHours('weekly'));
btnMonthly.addEventListener('click', () => displayHours('monthly'));
