/*-----------------------------
This javascript file contains all the logic of password generator
along with some minor animations for the generator
 */
/********** DISPLAY PASSWORD FORM ONLY ***********/
function showPassForm() {
  var intro = document.getElementById("intro");
  var dateForm = document.getElementById("date-form");
  var dayForm = document.getElementById("day-form");
  var passForm = document.getElementById("password-form");

  passForm.style.display = "block";
  dayForm.style.display = "none";
  dateForm.style.display = "none";

  intro.style.display = "none";
}

/********** PASSWORD GENERATOR LOGIC ***********/
const passwordButton = document.querySelector(".generate-button"); //get the button
const outputPass = document.querySelector(".result-password"); // place to output result

const upperChar = document.getElementById("upperChar"); // upper char checkbox
const lowerChar = document.getElementById("lowerChar"); // lower char checkbox
const specialChar = document.getElementById("specialChar"); // special char checkbox
const passwordLength = document.getElementById("pass-length"); // total length of password

// default length of password for this program
const defaultLength_min = 6;
const defaultLength_max = 20;

// all alphabet chars and special chars for password
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const specialSet = "`,.;[]-=*+?~!@#%";

// result of the generated password
var passwordResult = "";

//animation effect
var resultRotated = false;

/********** ALL RANDOM FUNCTIONS ***********/
// return a random char from either one of the three created characters sets above
function randomUpper() {
  return upperSet[Math.floor(Math.random() * Math.floor(upperSet.length - 1))];
}
function randomLower() {
  return lowerSet[Math.floor(Math.random() * Math.floor(upperSet.length - 1))];
}
function randomSpecial() {
  return specialSet[
    Math.floor(Math.random() * Math.floor(specialSet.length - 1))
  ];
}

/********** ONE CONDITION ***********/
// generate password base on requirement(s) and length
function generatePasswordOneCondition(charType) {
  var counter = 1;
  while (counter <= passwordLength.value) {
    //upper chars only
    if (charType === 0) {
      passwordResult += randomUpper();
    }
    //lower chars only
    else if (charType === 1) {
      passwordResult += randomLower();
    }
    //special chars only
    else if (charType === 2) {
      passwordResult += randomSpecial();
    }
    counter++;
  } // end of while loop
}

/********** ALL REQUIREMENTS ***********/
function generateAllConditions() {
  // random select lower (0), upper(1), or special(2)
  var randomCharType = 0;
  var lowerCreated = false;
  var upperCreated = false;
  var specialCreated = false;

  var counter = 1;

  while (counter <= passwordLength.value) {
    randomCharType = Math.floor(Math.random() * Math.floor(3));
    // reset if missing a condition when almost done
    if (
      counter == passwordLength.value &&
      !(lowerCreated && upperCreated && specialCreated)
    ) {
      counter = 1;
      lowerCreated = false;
      upperCreated = false;
      specialCreated = false;
      passwordResult = "";
    }
    //randomly generate password
    if (randomCharType === 0) {
      passwordResult += randomLower();
      lowerCreated = true;
    } else if (randomCharType === 1) {
      passwordResult += randomUpper();
      upperCreated = true;
    } else if (randomCharType === 2) {
      passwordResult += randomSpecial();
      specialCreated = true;
    }
    counter++;
  } // end of while loop
}

/********** TWO SELECTED REQUIREMENTS ***********/
/*----------------------- 
    generate password with 2 or more requirements
*/
function generateUpperLower() {
  // random select upper (0) or lower(1)
  var randomCharType = 0;
  var upperCreated = false;
  var lowerCreated = false;

  var counter = 1;
  while (counter <= passwordLength.value) {
    randomCharType = Math.floor(Math.random() * Math.floor(2));
    // reset if missing a condition when almost done
    if (counter == passwordLength.value && !(upperCreated && lowerCreated)) {
      counter = 1;
      upperCreated = false;
      lowerCreated = false;
      passwordResult = "";
    }
    //randomly generate password
    if (randomCharType === 0) {
      passwordResult += randomUpper();
      upperCreated = true;
    } else if (randomCharType === 1) {
      passwordResult += randomLower();
      lowerCreated = true;
    }
    counter++;
  } // end of while loop
}

function generateUpperSpecial() {
  // random select upper (0) or special(1)
  var randomCharType = 0;
  var upperCreated = false;
  var specialCreated = false;

  var counter = 1;
  while (counter <= passwordLength.value) {
    randomCharType = Math.floor(Math.random() * Math.floor(2));
    // reset if missing a condition when almost done
    if (counter == passwordLength.value && !(upperCreated && specialCreated)) {
      counter = 1;
      upperCreated = false;
      specialCreated = false;
      passwordResult = "";
    }
    //randomly generate password
    if (randomCharType === 0) {
      passwordResult += randomUpper();
      upperCreated = true;
    } else if (randomCharType === 1) {
      passwordResult += randomSpecial();
      specialCreated = true;
    }
    counter++;
  } // end of while loop
}

function generateLowerSpecial() {
  // random select lower (0) or special(1)
  var randomCharType = 0;
  var lowerCreated = false;
  var specialCreated = false;

  var counter = 1;
  while (counter <= passwordLength.value) {
    randomCharType = Math.floor(Math.random() * Math.floor(2));
    // reset if missing a condition when almost done
    if (counter == passwordLength.value && !(lowerCreated && specialCreated)) {
      counter = 1;
      lowerCreated = false;
      specialCreated = false;
      passwordResult = "";
    }
    //randomly generate password
    if (randomCharType === 0) {
      passwordResult += randomLower();
      lowerCreated = true;
    } else if (randomCharType === 1) {
      passwordResult += randomSpecial();
      specialCreated = true;
    }
    counter++;
  } // end of while loop
}

/********** ANIMATION WHEN GENERATE PASSWORD ***********/
function animationPassword() {
  // 3D animation
  if (!resultRotated) {
    outputPass.classList.add("rotate3d-1");
    outputPass.classList.remove("rotate3d-2");
    resultRotated = true;
  } else if (resultRotated) {
    outputPass.classList.add("rotate3d-2");
    outputPass.classList.remove("rotate3d-1");
    resultRotated = false;
  }
}

/********** DISPLAY PASSWORD RESULT ***********/
function showPasswordResult(outputPassword) {
  if (outputPassword === "") {
    outputPass.innerHTML = '<p class="white-text">Oops! Try again, please</p>';
  } else {
    animationPassword();
    outputPass.innerHTML = '<p class="white-text">' + outputPassword + "</p>";
  }
}

/********** FUNCTION TRIGGER WHEN GENERATE BUTTON IS CLICKED ***********/
passwordButton.onclick = function (event) {
  passwordResult = "";

  event.preventDefault(); //prevent the form to refresh the page

  if (passwordLength.value < defaultLength_min) {
    alert("your password length is too short");
    passwordLength.value = 6;
    passwordLength.focus();
  } else if (passwordLength.value > defaultLength_max) {
    alert("your password length is too long");
    passwordLength.value = 6;
    passwordLength.focus();
  }
  //only uppers
  else if (upperChar.checked && !specialChar.checked && !lowerChar.checked) {
    generatePasswordOneCondition(0);
  }
  // only lowers
  else if (!upperChar.checked && !specialChar.checked && lowerChar.checked) {
    generatePasswordOneCondition(1);
  }
  // only specials
  else if (!upperChar.checked && specialChar.checked && !lowerChar.checked) {
    generatePasswordOneCondition(2);
  }
  // uppers and lowers
  else if (upperChar.checked && !specialChar.checked && lowerChar.checked) {
    generateUpperLower();
  }
  // uppers and specials
  else if (upperChar.checked && specialChar.checked && !lowerChar.checked) {
    generateUpperSpecial();
  }
  // lowers and specials
  else if (!upperChar.checked && specialChar.checked && lowerChar.checked) {
    generateLowerSpecial();
  }
  // everything
  else if (upperChar.checked && specialChar.checked && lowerChar.checked) {
    generateAllConditions();
  } else {
    alert("Please select at least one requirement");
    passwordLength.value = 6;
    passwordLength.focus();
  }

  showPasswordResult(passwordResult);
};

/********** HELPER ***********/
/* How to select a random char from the set using random
    and make sure it is within the range of the set
 */
// var randomChar = Math.floor(Math.random() * Math.floor(upperSet.length - 1));
// var randomSpecialEx = Math.floor(
//   Math.random() * Math.floor(specialSet.length - 1)
// );
// random select upper (0), lower(1), or special(2)
/* How to select a random type of character to pick and generate
    random select upper (0), lower(1), or special(2)
    can change the range (a,b) for the need 
 */
