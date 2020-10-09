let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('hi, what\'s your name?');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
}
  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName;
}

let myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('mmm, I\'m bad with names... so what\'s your name again?');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName;
  }
}

myButton.onclick = function() {
  setUserName();
}