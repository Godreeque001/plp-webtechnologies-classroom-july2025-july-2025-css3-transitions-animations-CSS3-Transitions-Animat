// ------------------------------
// Part 2: Functions & Scope
// ------------------------------

// Global variable
let clickCount = 0;

// Function with parameter + return value
function addNumbers(a, b) {
  return a + b;
}

// Local scope demonstration
function incrementClick() {
  let localMessage = "Button clicked!";
  clickCount++;
  console.log(localMessage, "Total:", clickCount);
  return clickCount;
}

// ------------------------------
// Part 3: Combine CSS + JS
// ------------------------------

// Animate box on button click
const box = document.querySelector('.box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  box.classList.toggle('animate'); // trigger CSS transition
  console.log("Box animated! Sum example:", addNumbers(5, 10));
  incrementClick();
});

// Popup logic
const popup = document.getElementById('popup');
const showPopup = document.getElementById('showPopup');
const closePopup = document.getElementById('closePopup');

showPopup.addEventListener('click', () => {
  popup.classList.add('show');
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
});
