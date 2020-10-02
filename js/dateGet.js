function showDateForm() {
  var intro = document.getElementById("intro");
  var dateForm = document.getElementById("date-form");
  var dayForm = document.getElementById("day-form");
  var passForm = document.getElementById("password-form");

  passForm.style.display = "none";
  dayForm.style.display = "none";
  dateForm.style.display = "block";

  intro.style.display = "none";
}

const dateButton = document.querySelector(".date-button"); //get the button
const outputDate = document.querySelector(".result-date"); // place to output result

dateRotate = false;

function animationDate() {
  // 2D animation
  if (!dateRotate) {
    outputDate.classList.add("rotate-date-1");
    outputDate.classList.remove("rotate-date-2");
    dateRotate = true;
  } else if (dateRotate) {
    outputDate.classList.add("rotate-date-2");
    outputDate.classList.remove("rotate-date-1");
    dateRotate = false;
  }
}

dateButton.onclick = function getDateData(event) {
  event.preventDefault(); //prevent the form to refresh the page

  const startingDate = document.getElementById("start-date-d");
  const numOfDays = parseInt(document.getElementById("day_d").value);
  const numOfWeeks = parseInt(document.getElementById("week_d").value);
  const numOfMonths = parseInt(document.getElementById("month_d").value);
  const numOfYears = parseInt(document.getElementById("year_d").value);

  if (startingDate.value === "") {
    alert("Please provide a starting date!");
    outputDate.innerHTML = '<p class="white-text">Oops! Try again, please</p>';
    startingDate.focus();
  } else if (
    Number.isNaN(numOfDays) ||
    Number.isNaN(numOfWeeks) ||
    Number.isNaN(numOfMonths) ||
    Number.isNaN(numOfYears)
  ) {
    outputDate.innerHTML = '<p class="white-text">Oops! Try again, please</p>';
    alert("Some inputs are blank or empty!");
  } else {
    let d = new Date(startingDate.value);

    let totalDays = numOfDays + numOfWeeks * 7;

    d.setDate(d.getDate() + totalDays);
    d.setMonth(d.getMonth() + numOfMonths);
    d.setFullYear(d.getFullYear() + numOfYears);

    animationDate();
    outputDate.innerHTML = '<p class="white-text">' + d.toDateString() + "</p>";
  }
};
