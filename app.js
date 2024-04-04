// let button = document.querySelector("#btn");
// let button2 = document.querySelector("#btn2");
// let section = document.querySelector("#section");

// function btnClick() {
//     let h2 = button.nextElementSibling;
//     if (+h2.textContent == 20) {
//         alert("Limit!");
//     } else {
//         h2.textContent++;
//     }
// }


// let colorButton = document.getElementById("colorButton");
// let colorButton2 = document.getElementById("colorButton");

// function generateRandomColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     return `rgb(${red}, ${green}, ${blue})`;
// }

// function displayColor() {
//     let randomColor = generateRandomColor();
//     colorButton2.style.backgroundColor = randomColor;
//     colorButton2.textContent = randomColor;
// }

// colorButton.addEventListener("click", displayColor);

// ------------------------VAZIFA-------------------

let button = document.querySelector("#button");
function randomColors() {
  let randomColor1 = getChangeColors();
  let randomColor2 = getChangeColors();
  let gradient =
    "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  document.body.style.background = gradient;
}

function getChangeColors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}



function randomColors() {
  let randomColor = getChangeColors();
  document.body.style.backgroundColor = randomColor;
}

function getChangeColors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256); 
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
