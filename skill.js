////////////////pirveli davaleba///////////////////

// const H2 = document.createElement("h2");
// const text = document.createTextNode("SkillWill Modal");
// H2.appendChild(text);
// document.body.appendChild(H2);
// ////////////////////////////////////////////////
// const btn = document.createElement("button");
// const text_3 = document.createTextNode("Click Me");
// btn.appendChild(text_3);
// document.body.appendChild(btn);
// btn.setAttribute("id", "Modbtn");
// ////////////////////////////////////////////
// const Divs = document.createElement("div");
// document.body.appendChild(Divs);
// Divs.setAttribute("id", "SkilModal");
// Divs.setAttribute("class", "modal");
// ///////////////////////////////////////////////
// const Div_s = document.createElement("div");
// Divs.appendChild(Div_s);
// Div_s.setAttribute("class", "modal-content");
// ///////////////////////////////////////////////
// const Spans = document.createElement("span");
// Div_s.appendChild(Spans);
// const text_1 = document.createTextNode("X");
// Spans.appendChild(text_1);
// ///////////////////////////////////
// Spans.setAttribute("class", "close");
// //////////////////////////////////////
// const Ps = document.createElement("p");
// const text_2 = document.createTextNode("Hello There....");
// Ps.appendChild(text_2);
// Div_s.appendChild(Ps);
// /////////////////////////
// const modal_1 = document.getElementById("SkilModal");
// //////////////////////////////////////////////

// const btn_1 = document.getElementById("Modbtn");

// /////////////////////////////

// const span_1 = document.getElementsByClassName("close")[0];

// ////////////////////////

// btn_1.onclick = function () {
//   modal_1.style.display = "block";
// };

// span_1.onclick = function () {
//   modal_1.style.display = "none";
// };

// ///////////////////////

// window.onclick = function (event) {
//   if (event.target == modal_1) {
//     modal_1.style.display = "none";
//   }
// };

//////////////// zemot pirveli davaleba///////////////////

/////////////Meore Davaleba//////////////////
// const Input = document.createElement("input");
// document.body.appendChild(Input);
// Input.setAttribute("id", "inp_ut");
// Input.setAttribute("placeholder", "Please enter");
// const Button = document.createElement("button");
// document.body.appendChild(Button);
// Button.setAttribute("id", "btn");
// const Text = document.createTextNode("Click Me");
// Button.appendChild(Text);

// Button.addEventListener("click", function () {
//   if (Input.value === "red") {
//     document.body.style.backgroundColor = "red";
//   } else if (Input.value === "blue") {
//     document.body.style.backgroundColor = "blue";
//   } else if (Input.value === "green") {
//     document.body.style.backgroundColor = "green";
//   } else if (Input.value === "black") {
//     document.body.style.backgroundColor = "black";
//   } else if (Input.value === "white") {
//     document.body.style.backgroundColor = "white";
//   } else {
//     alert("Wrong Color");
//   }
// });

///////////////////mesame davaleba///////////////////

function Avg_Calc() {
  const string_Inp = document.getElementById("Num_Input").value;
  const Numbers = string_Inp.split(":").map(Number);

  const Num_Sum = Numbers.reduce((a, b) => a + b, 0);
  const Num_Avg = Num_Sum / Numbers.length;

  document.getElementById("result").innerText = "The average is " + Num_Avg;
}

// function calculateAverage() {
//   // Get the input value and split it into an array of numbers
//   const inputString = document.getElementById("numbersInput").value;
//   const numbers = inputString.split(":").map(Number);

//   // Calculate the average of the numbers
//   const sum = numbers.reduce((a, b) => a + b, 0);
//   const average = sum / numbers.length;

//   // Display the result
//   document.getElementById("result").innerText = "The average is " + average;
// }
