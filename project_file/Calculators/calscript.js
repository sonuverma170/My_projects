// let input= document.getElementById("inputBox");
// let buttons= document.querySelectorAll("button");
// let string="";
// let arr =Array.from(button);
// arr.forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
// string=eval(string);
// input.value=string;
//         }
//         else if(e.target.innerHTML=='AC')
//         {
//             string="";
//             input.value=string;

//         }
//         else if(e.target.innerHTML=='DEL'){
//             string=string.substring(0,string.length-1);
//             input.value=string;
//         }
//         else{
//             string+=e.target.innerHTML;
//             input.value=string;
//         }

//         })
//     })
const inputBox = document.getElementById('inputBox');

// Function to handle button clicks
function buttonClick(value) {
  if (value === '=') {
    // Evaluate the expression and set the result in the input box
    try {
      const result = eval(inputBox.value);
      inputBox.value = result;
    } catch (error) {
      inputBox.value = 'Error';
    }
  } else if (value === 'AC') {
    // Clear the input box
    inputBox.value = '';
  } else if (value === 'DEL') {
    // Delete the last character from the input box
    inputBox.value = inputBox.value.slice(0, -1);
  } else {
    // Append the clicked button value to the input box
    inputBox.value += value;
  }
}

// Add event listeners to the buttons
const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    buttonClick(this.textContent);
  });
}
