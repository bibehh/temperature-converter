function updateUnits() {
    var conversionType = document.getElementById('select').value;
    if (conversionType == "c_to_f") {
        document.getElementById("question").value = "°C";
    } else if (conversionType == "f_to_c") {
        document.getElementById("question").value = "°F";
    } else if (conversionType == "c_to_k") {
        document.getElementById("question").value = "°C";
    } else if (conversionType == "k_to_c") {
        document.getElementById("question").value= "K";
    } else if (conversionType == "f_to_k") {
        document.getElementById("question").value= "°F";
    } else if (conversionType == "k_to_f") {
        document.getElementById("question").value = "K";
    }
}


function convert() {
    var conversionType = document.getElementById('select').value;

    if (conversionType == "c_to_f") {
        let celsius = parseFloat(document.getElementById("question").value);
        let answer = (celsius * (9/5)) + 32;
        document.getElementById("answer").value = `${answer.toFixed(3)} °F` ;
    } else if (conversionType == "f_to_c") {
        let fahrenheit = parseFloat(document.getElementById("question").value);
        let answer = (fahrenheit - 32) * (5/9);
        document.getElementById("answer").value = `${answer.toFixed(3)} °C`;
    } else if (conversionType == "c_to_k") {
        let celsius = parseFloat(document.getElementById("question").value);
        let answer = celsius + 273.15;
        document.getElementById("answer").value = `${answer.toFixed(3)} K`;
    } else if (conversionType == "k_to_c") {
        let kelvin = parseFloat(document.getElementById("question").value);
        let answer = kelvin - 273.15;
        document.getElementById("answer").value = `${answer.toFixed(3)} °C`;
    } else if (conversionType == "f_to_k") {
        let fahrenheit = parseFloat(document.getElementById("question").value);
        let answer = (fahrenheit - 32) * (5/9) + 273.15;
        document.getElementById("answer").value = `${answer.toFixed(3)} K`;
    } else if (conversionType == "k_to_f") {
        let kelvin = parseFloat(document.getElementById("question").value);
        let answer = (kelvin - 273.15) * (9/5) + 32;
        document.getElementById("answer").value = `${answer.toFixed(3)} °F`;
    }
}

var clear = document.getElementById("clear");

clear.onclick = function (){
    document.getElementById("question").value= " ";
    document.getElementById("answer").value = " ";
}
