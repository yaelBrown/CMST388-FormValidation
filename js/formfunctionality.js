/*
  Name: formfunctionality.js
  Date: 6.29.19
  Author: Yael Brown
  Desc: This file is used for front-end functionality of form
*/

// Log that this code has been loaded
console.log("Form functionality has been loaded");

// Declare Variables
var inputfade = document.querySelectorAll('.fi input,.fi select,.fi textarea');
var ifln = inputfade.length;

// Input Fade function
function input_fade(elem, on) {
  var span_elem = elem.parentNode.getElementsByTagName('span')[0];

  if (span_elem) {
    span_elem.style.color = on ? 'rgb(0, 188, 215)' : '#000';
  }

  if (is_text_input(elem)) {
    if (on) {
      elem.setAttribute('placeholder', '');
      span_elem.style.opacity = '100';
    } else {
      if (!elem.value) {
        elem.setAttribute('placeholder', span_elem.innerHTML);
        span_elem.style.opacity = '0';
      }
    }
  }
}

for (var i = 0; i < ifln; i++) {
  var elem = inputfade[i];
  var span_elem = elem.parentNode.getElementsByTagName('span')[0];

  if (is_text_input(elem)) {
    //elem.setAttribute('placeholder', span_elem.innerHTML);
    if (!elem.value) {
      span_elem.style.opacity = '0';
    }
  }

  inputfade[i].onfocus = function() {
    input_fade(this, true);
  }

  inputfade[i].onblur = function() {
    input_fade(this, false);
  }
}

// Text input
function is_text_input(elem) {
  el_name = elem.nodeName.toLowerCase();
  el_type = elem.getAttribute('type');

  if ((el_name == 'input' && el_type != 'checkbox' && el_type != 'radio' && el_type != 'submit') || el_name == 'textarea') {
    return true;
  }

  return false;
}