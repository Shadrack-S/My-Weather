const apiKey = '66821f4945d25c4a8df222d8fa7d5e14'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const weatherIcon = document.querySelector('.weather-icon')

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json();


        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = parseInt(data.main.temp) + "\xB0" + "c";
        document.querySelector('.humidity').innerHTML = parseInt(data.main.humidity) + " %";
        document.querySelector('.wind').innerHTML = parseFloat(data.wind.speed) + " km/hr";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png"
        }

        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/snow.png"
        }


        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none"

    }



}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

