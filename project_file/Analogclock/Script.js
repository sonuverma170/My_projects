// let hr = document.getElementById('hour');
// let min=document.getElementById('min');
// let sec = document.getElementById('sec');

// function displayTime(){

// let date = new Date();

// let hh = date.getHours();
// let mm =date.getMinutes();
// let ss= date.getSeconds();

// let hRotation=30*hh + mm/2;
// let mRotation=6*mm;
// let sRotation=6*ss; 

// hr.style.transform='rotate(${hRotation}deg)';
// min.style.transform='rotate(${mRotation}deg)';
// sec.style.transform='rotate(${sRotation}deg)';

// }
// setInterval(displayTime, 1000);
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

// Function to rotate clock hands
function rotateClockHands() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Calculate the rotation angle for each hand
  const hourRotation = (hours * 30) + (minutes / 2);
  const minuteRotation = (minutes * 6) + (seconds / 10);
  const secondRotation = seconds * 6;

  // Apply rotation to each hand
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update clock hands every second
setInterval(rotateClockHands, 1000);