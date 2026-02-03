const inputElem = document.querySelector("input");
const buttonElem = document.querySelector("#search");

const tempElem = document.querySelector(".temperature");
const locationElem = document.querySelector(".location");
const timeElem = document.querySelector(".time");
const dayElem = document.querySelector(".day");
const dateElem = document.querySelector(".date");
const conditionElem = document.querySelector(".condition");
const iconElem = document.querySelector(".icon img");

buttonElem.addEventListener("click", async () => {
    const city = inputElem.value;
    if (!city) return alert("Please enter a city name");

    await fetchWeather(city);
});
async function fetchWeather(city) {
    const apiKey = "0166abf3dd3341e1be542105260302"; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        updateUI(data);
    } catch (error) {
        alert(error.message);
    }
}
function updateUI(data) {
     
    const temp = data.current.temp_c;
    const city = data.location.name;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;
    
    
    const localTime = data.location.localtime; // "2026-01-30 22:26"
    const [datePart, timePart] = localTime.split(" ");
    const dateObj = new Date(datePart);
    
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    const formattedDate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    
    tempElem.innerText = `${temp} °C`;
    locationElem.innerText = city;
    timeElem.innerText = timePart;
    dayElem.innerText = dayName;
    dateElem.innerText = formattedDate;
    conditionElem.innerText = condition;
    iconElem.src = `https:${icon}`;
}