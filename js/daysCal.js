function showDaysForm() {
  var intro = document.getElementById("intro");
  var dateForm = document.getElementById("date-form");
  var dayForm = document.getElementById("day-form");
  var passForm = document.getElementById("password-form");

  passForm.style.display = "none";
  dayForm.style.display = "block";
  dateForm.style.display = "none";

  intro.style.display = "none";
}

//getting all button and output area of Days Calculator
const dayButton = document.querySelector(".day-button");
const dayResult = document.querySelector(".result-day");

//animation
dayRotate = false;

function animationDay() {
  // 2D animation
  if (!dayRotate) {
    dayResult.classList.add("rotate-date-1");
    dayResult.classList.remove("rotate-date-2");
    dayRotate = true;
  } else if (dayRotate) {
    dayResult.classList.add("rotate-date-2");
    dayResult.classList.remove("rotate-date-1");
    dayRotate = false;
  }
}

//calculate months difference
function monthDiff(d1, d2) {
  var mdiff = (d2.getTime() - d1.getTime()) / 1000;
  mdiff /= 60 * 60 * 24 * 7 * 4;
  return Math.round(mdiff);
}

dayButton.onclick = function getDays(event) {
  event.preventDefault(); //prevent the form to refresh the page

  //all checkboxes
  const dayCheck = document.getElementById("day");
  const weekCheck = document.getElementById("week");
  const monthCheck = document.getElementById("month");
  const yearCheck = document.getElementById("year");
  //starting date and ending date
  const startDate = document.getElementById("start-date");
  const endDate = document.getElementById("end-date");

  let result = "";
  let sd = new Date(startDate.value);
  let ed = new Date(endDate.value);

  let time_difference = ed.getTime() - sd.getTime();
  let days_difference = Math.ceil(time_difference / (1000 * 24 * 3600));

  if (startDate.value === "" || endDate.value === "") {
    alert("Please provide starting date and ending date!");

    dayResult.innerHTML = '<p class="red-text">Oops! Try again, please</p>';
  } else if (
    !dayCheck.checked &&
    !weekCheck.checked &&
    !monthCheck.checked &&
    !yearCheck.checked
  ) {
    alert("Select one of the options below!");

    dayResult.innerHTML =
      '<p class="red-text">Please select one of the options!</p>';
  } else {
    if (dayCheck.checked) {
      result += `There are ${days_difference} days`;
    }
    if (weekCheck.checked) {
      result += `<br/>There are ${Math.round(days_difference / 7)} weeks`;
    }
    if (monthCheck.checked) {
      result += `<br/>There are ${monthDiff(sd, ed)} months`;
    }
    if (yearCheck.checked) {
      result += `<br/>There are ${ed.getFullYear() - sd.getFullYear()} year`;
    }
  }
  //display result if no error
  if (result !== "") {
    dayResult.innerHTML =
      '<p class="white-text">' +
      result +
      "<br/>from the selected starting date to the selected ending date </p>";
    animationDay();
  }
};
