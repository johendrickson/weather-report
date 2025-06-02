"use strict";

const cityNameInput = document.getElementById("cityNameInput");
const headerCityName = document.getElementById("headerCityName");

cityNameInput.addEventListener("input", function(){
    const newCityName = cityNameInput.value;
    headerCityName.textContent = newCityName;
});