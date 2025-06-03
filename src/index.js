"use strict";

let currentTemp = 65;
let currentCity = "Seattle";

const tempValueElement = document.getElementById("tempValue");
const increaseTempButton = document.getElementById("increaseTempControl");
const decreaseTempButton = document.getElementById("decreaseTempControl");
const landscapeElement = document.getElementById("landscape");
const cityNameInput = document.getElementById("cityNameInput");
const headerCityName = document.getElementById("headerCityName");
const cityNameReset = document.getElementById("cityNameReset");
const currentTempButton = document.getElementById("currentTempButton");

const getTemperatureColor = (temp) => {
    if (temp >= 80) return "red";
    if (temp >= 70) return "orange";
    if (temp >= 60) return "yellow";
    if (temp >= 50) return "green";
    return "teal";
};

const getLandscape = (temp) => {
    if (temp >= 80) return "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    if (temp >= 70) return "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    if (temp >= 60) return "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    return "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
};

const updateTemperatureDisplay = () => {
    tempValueElement.textContent = currentTemp;
    tempValueElement.classList.remove("red", "orange", "yellow", "green", "teal");
    const colorClass = getTemperatureColor(currentTemp);
    tempValueElement.classList.add(colorClass);
    landscapeElement.textContent = getLandscape(currentTemp);
};

const updateCityDisplay = () => {
    headerCityName.textContent = currentCity;
    cityNameInput.value = currentCity;
};

increaseTempButton.addEventListener("click", () => {
    currentTemp++;
    updateTemperatureDisplay();
});

decreaseTempButton.addEventListener("click", () => {
    currentTemp--;
    updateTemperatureDisplay();
});

cityNameInput.addEventListener("input", (event) => {
    currentCity = event.target.value;
    headerCityName.textContent = currentCity;
});

cityNameReset.addEventListener("click", () => {
    currentCity = "Seattle";
    updateCityDisplay();
});

updateTemperatureDisplay();
updateCityDisplay();



currentTempButton.addEventListener("click", () => {
    const cityName = headerCityName.textContent;

axios
    .get('some URL')
    .then((response) => {
    // Code that executes with a successful response goes here
        updateTemperatureDisplay();
    })
    .catch((error) => {
        console.error("Error fetching temperature:", error);
    });
