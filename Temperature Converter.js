function convertTemperatureRange(startValue,endValue, scale) {
    for (let temp=startValue; temp<=endValue;temp++) {
        if (scale==="C") {
            const fahnrenheit = (temp * 9/5) +32;//convert celsius to Fahrenheit
            console.log(`${temp}°C=${fahnrenheit.toFixed(2)}°F`);
        } else if (scale==="F") {
            const celsius = (temp-32) *5/9;//convert Fahrenheit to celsius
            console.log(`${temp}° F = ${ celsius.toFixed(2)}°C`);
        }else{
            console.log("Invalid scale. Please use 'C' for celsius of 'F' for Fahrenheit.");
            break;
        }
    }
}