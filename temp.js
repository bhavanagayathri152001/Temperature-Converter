let degreeElememt = document.getElementById("degree");
let typeElememt = document.getElementById("type");

let convertBtn = document.getElementById("convertButton");
let resetBtn = document.getElementById("resetButton");

let resultsElememt = document.getElementById("result");
let result = "";

convertBtn.onclick = function() {
    let inputValue = degreeElememt.value;
    let inputType = typeElememt.value;

    if (inputType === "celcius") {
        result = inputValue * 1;
        resultsElememt.textContent = result.toFixed(3) + "C";
    } else if (inputType === "kelvin") {
        result = inputValue * 273.35;
        resultsElememt.textContent = result.toFixed(3) + "K";
    } else if (inputType === "fahrenheit") {
        result = inputValue * (9 / 5) + 491.67;
        resultsElememt.textContent = result.toFixed(3) + "F";
    } else if (inputType === "rankine") {
        result = inputValue * (9 / 5) + 32;
        resultsElememt.textContent = result.toFixed(3) + "R";
    }
}



resetBtn.onclick = function() {
    degreeElememt.value = "";
    typeElememt.value = "celcius";
    resultsElememt.textContent = "";

}