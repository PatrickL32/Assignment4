function convertTemperatureRange() {
    let startValue=document.getElementById("startValue").value;
    let endValue=document.getElementById("endValue").value;
    let scale=document.getElementById("scale").value;

    for (let temp = startValue; temp <= endValue; temp++) {//loop from 0 to 5
        if (scale === "C") {
            const fahrenheit = (temp * 9 / 5) + 32; // Convert Celsius to Fahrenheit
            console.log(`${temp}°C = ${fahrenheit.toFixed(2)}°F`);
            document.getElementById("output").innerHTML += `<li> ${temp}°C = ${fahrenheit.toFixed(2)}°F <li>`;
        } else if (scale === "F") {
            const celsius = (temp - 32) * 5 / 9; // Convert Fahrenheit to Celsius
            console.log(`${temp}°F = ${celsius.toFixed(2)}°C`);
            document.getElementById("output").innerHTML += `<li> ${temp}°F = ${celsius.toFixed(2)}°C <li>`
        } else {
            console.log("Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.");
            document.getElementById("output").innerHTML += `<li> Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit. </li>`
            break;
        }
    }
}

//call the function for celsius to fahrenheit
//convertTemperatureRange(0, 7, "C"); // Converts 0°C to 5°C to Fahrenheit

//call the function for Fahrenheit to Celsius
//convertTemperatureRange(32, 36, "F"); // Converts 32°F to 36°F to Celsius