const monthEl = document.querySelector(".date h1");
const dateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const monthInx = new Date().getMonth();

const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
let firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
const thisDate = new Date().getDate();
if (firstDay === -1) {
  firstDay += 7;
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[monthInx];
dateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === thisDate) {
    days += `<div style="background-color: teal;">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
