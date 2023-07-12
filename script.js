function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var sourceUnit = document.getElementById("sourceUnit").value;
    var targetUnit = document.getElementById("targetUnit").value;
    var resultElement = document.getElementById("result");
    
    var convertedValue, convertedUnit;
    
    if (sourceUnit === "celsius" && targetUnit === "fahrenheit") {
      convertedValue = celsiusToFahrenheit(temperature);
      convertedUnit = "°F";
    } else if (sourceUnit === "fahrenheit" && targetUnit === "celsius") {
      convertedValue = fahrenheitToCelsius(temperature);
      convertedUnit = "°C";
    } else if (sourceUnit === "celsius" && targetUnit === "kelvin") {
      convertedValue = celsiusToKelvin(temperature);
      convertedUnit = "K";
    } else if (sourceUnit === "kelvin" && targetUnit === "celsius") {
      convertedValue = kelvinToCelsius(temperature);
      convertedUnit = "°C";
    } else {
      convertedValue = temperature;
      convertedUnit = sourceUnit;
    }
    
    resultElement.textContent = "The converted temperature is: " + convertedValue + " " + convertedUnit;
  }
  