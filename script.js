// Add JavaScript code to calculate the carbon footprint
const electricityInput = document.getElementById("electricity");
const gasInput = document.getElementById("gas");
const milesInput = document.getElementById("miles");
const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", () => {
  const electricity = electricityInput.value;
  const gas = gasInput.value;
  const miles = milesInput.value;

  const carbonFootprint = electricity * 0.5 + gas * 12 + miles * 0.404;
  resultDiv.textContent = `Your carbon footprint is ${carbonFootprint.toFixed(2)} metric tons of CO2 per year.`;
});