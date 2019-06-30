/*
  Name: app.js
  Date: 6.29.19
  Author: Yael Brown
  Desc: JS form validation information
*/

// Verify app.js file loaded
console.log("App.js loaded");

// Validate First Name
function validateFname() {
  if (document.regForm.fname.value = null) {
    alert("Please Enter your first name.");
    document.regForm.fname.focus();
    return false;
  }
  return true;
}


// Validate form
function validateForm() {
  validateFname();
}

// Submit button function
function submitBtn() {
  console.log("submit button pressed");
  validateForm();
};