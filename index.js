/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const insertion = document.getElementById("insertion");
const convertBtn = document.getElementById("convert");
const lengthEl = document.getElementById("len");
const volumeEl = document.getElementById("vol");
const massEl   = document.getElementById("kgP");

convertBtn.addEventListener("click", function () {
  const value = Number(insertion.value);

  if (insertion.value === "" || isNaN(value)) {
    lengthEl.textContent = "Please enter a number";
    volumeEl.textContent = "";
    massEl.textContent = "";
    return;
  }

  lengthEl.textContent =
    `${value} meters = ${(value * 3.281).toFixed(3)} feet | ` +
    `${value} feet = ${(value / 3.281).toFixed(3)} meters`;

  volumeEl.textContent =
    `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ` +
    `${value} gallons = ${(value / 0.264).toFixed(3)} liters`;

  massEl.textContent =
    `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ` +
    `${value} pounds = ${(value / 2.204).toFixed(3)} kilos`;
});