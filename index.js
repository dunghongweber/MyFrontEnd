/*-----------------------------
This is the main JS file for index.html
it has general javascript for the main elements of page
along with the javascript for Materialize CSS
 */
/********** DROPDOWN MENU ***********/
// materialize css for dropdown
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, {
    constrainWidth: false,
  });
});

/********** DATE PICKER ***********/
//materialize css for date picker
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, {
    autoClose: false,
  });
});

/********** PICTURE CHANGER ***********/
const picChanger = document.getElementById("pic-changer");
//list of images
var images = [
  ".//Pic/summer.jpg",
  ".//Pic/fall.jpg",
  ".//Pic/winter.jpg",
  ".//Pic/spring.jpg",
];
var currentImg = 0;
// auto change images from the list
function autoChange() {
  if (currentImg >= images.length) {
    currentImg = 0;
  }
  picChanger.src = images[currentImg];

  currentImg++;
}
setInterval(autoChange, 6000);
