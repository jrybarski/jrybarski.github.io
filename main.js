const thumb = document.getElementById("slider-thumb");
const track = document.getElementById("slider-track");
const container = document.querySelector(".slider-container");
const charAmount = document.querySelector(".character--amount");
const password = document.querySelector(".password");
const radios = document.querySelectorAll(".radio--input");
const generateButton = document.querySelector(".button-generate");
const strengthLevel1 = document.querySelector("#str1");
const strengthLevel2 = document.querySelector("#str2");
const strengthLevel3 = document.querySelector("#str3");
const strengthLevel4 = document.querySelector("#str4");
const copyIcon = document.querySelector(".copy-icon");

const min = 4;
const max = 16;
const step = 1;
const range = max - min;

function updateSlider(value) {
  const percentage = ((value - min) / range) * 100;
  thumb.style.left = `${percentage}%`;
  track.style.width = `${percentage}%`;
  charAmount.textContent = value;
}

let currentValue = 10;
updateSlider(currentValue);

container.addEventListener("click", (e) => {
  const rect = container.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
  const newValue = Math.round((percentage * range) / step) * step + min;
  currentValue = Math.max(min, Math.min(max, newValue));
  updateSlider(currentValue);
});

thumb.addEventListener("mousedown", () => {
  const onMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
    const newValue = Math.round((percentage * range) / step) * step + min;
    currentValue = Math.max(min, Math.min(max, newValue));
    updateSlider(currentValue);
    checkingStrenght();
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

const checkGroups = [
  document.querySelectorAll(".icon-check-one"),
  document.querySelectorAll(".icon-check-two"),
  document.querySelectorAll(".icon-check-three"),
  document.querySelectorAll(".icon-check-four"),
];

let visibilityStates = [false, false, false, false];

radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    const checks = checkGroups[index];

    visibilityStates[index] = !visibilityStates[index];
    checkingStrenght();
    checks.forEach((check) => {
      check.style.visibility = visibilityStates[index] ? "visible" : "hidden";
    });
  });
});

function checkingStrenght() {
  const count = visibilityStates.filter((item) => item === true).length;

  strengthLevel1.style.backgroundColor = "black";
  strengthLevel2.style.backgroundColor = "black";
  strengthLevel3.style.backgroundColor = "black";
  strengthLevel4.style.backgroundColor = "black";

  if (count > 3 && currentValue > 12) {
    strengthLevel1.style.backgroundColor = "purple";
    strengthLevel2.style.backgroundColor = "purple";
    strengthLevel3.style.backgroundColor = "purple";
    strengthLevel4.style.backgroundColor = "purple";
  } else if (count > 2 && currentValue > 10) {
    strengthLevel1.style.backgroundColor = "red";
    strengthLevel2.style.backgroundColor = "red";
    strengthLevel3.style.backgroundColor = "red";
  } else if (count > 1 && currentValue > 8) {
    strengthLevel1.style.backgroundColor = "orange";
    strengthLevel2.style.backgroundColor = "orange";
  } else if (count >= 1 && currentValue > 6) {
    strengthLevel1.style.backgroundColor = "green";
  }
}

function generate(currentValue) {
  let possibleMarks = "";

  if (visibilityStates[0] === true) {
    possibleMarks += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (visibilityStates[1] === true) {
    possibleMarks += "abcdefghijklmnopqrstuvwxyz";
  }
  if (visibilityStates[2] === true) {
    possibleMarks += "0123456789";
  }
  if (visibilityStates[3] === true) {
    possibleMarks += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }

  let generatedPassword = "";
  const possibleMarksLength = possibleMarks.length;

  if (possibleMarks.length === 0) {
    alert("Please select at least one character group!");
    return;
  }
  let randomNumber;
  for (let i = 0; i < currentValue; i++) {
    randomNumber = Math.floor(Math.random() * possibleMarksLength);
    generatedPassword += possibleMarks[randomNumber];
  }
  password.innerHTML = generatedPassword;
}

generateButton.addEventListener("click", () => generate(currentValue));

copyIcon.addEventListener("click", () => {
  const textToCopy = password.textContent;
  if (textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy password: ", error);
        alert("Failed to copy password. Please try again.");
      });
  } else {
    alert("No password to copy!");
  }
});
