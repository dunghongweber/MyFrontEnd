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
