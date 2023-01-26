const activities = document.querySelectorAll('.activity-title');
const timeAmount = document.querySelectorAll('.time-amount');
const timeLastWeek = document.querySelectorAll('.previous-time-amount');
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

// Daily

function displayHours(timeamount) {
  timeAmount.forEach((time, index) => {
    time.textContent = `${userData[index].timeframes[timeamount].current}hrs`;
  });
  timeLastWeek.forEach((time, index) => {
    time.textContent = `Last Week - ${userData[index].timeframes[timeamount].previous}hrs`;
  });
}

// Event Listeners

btnDaily.addEventListener('click', () => displayHours('daily'));
btnWeekly.addEventListener('click', () => displayHours('weekly'));
btnMonthly.addEventListener('click', () => displayHours('monthly'));
