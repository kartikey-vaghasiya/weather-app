// FORM
const form = document.getElementById("search");
// CURRENT TEMPERATURE
const cityTXT = document.getElementById("cityTXT"); 
const cityTemp = document.getElementsByClassName("citytemp"); 
// 4 ADDITIONAL VALUES
const realfeel = document.getElementById("realfeel"); 
const humidity = document.getElementById("humidity"); 
const pressure = document.getElementById("pressure");  
const windspeed = document.getElementById("windspeed"); 
//IMAGE ICON
const imageicon = document.getElementsByClassName("weathericon"); 

// VALUE OF GENRATING URL 
const key = "a06018b83fa34901cd66ff717b0f5cc9"; 
const city = document.getElementById("city"); 

// EVENT LISTNER FOR BUTTON
form.addEventListener("submit", async function fetchWeather(e) {

    e.preventDefault(); 
    console.log(city.value);

    try {

        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + key + "&units=metric"; // URL FOR API CALL
        let response = await fetch(url); // FETCHING WEATHER DATA 

        if (response.ok) {
            // CONVERTING INTO JSON
            const data = await response.json(); 
            console.log(data);
            console.log(data.main.temp);

            // UPDATE DOM
            cityTXT.innerText = city.value;
            cityTemp[0].innerText = data.main.temp;

            realfeel.innerText = data.main.feels_like;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
            windspeed.innerText = data.wind.speed;

            imageicon[0].src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        }

        // ERROR ACCURES
        else {
            throw new Error("");
        }

    // ERROR HANDLING
    } catch (error) {
        cityTXT.innerText = "Error";
    }

});