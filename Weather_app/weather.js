//API_key : 3f63c26d4747d517213a3503b0d9bcdd
//API-link : https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}

const api_key = `3f63c26d4747d517213a3503b0d9bcdd`;

const form = document.querySelector("form")
const search = document.querySelector("#search");
const weather = document.querySelector("#weather")

const getWeather = async(city) => {
    weather.innerHTML = `<h2>Loading.....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}
const showWeather = (data) => {
    if(data.cod == "404")  {
        weather.innerHTML = `<h2>City Not Found</h2>`
        return;
    }
    weather.innerHTML = ` 
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4>${data.weather[0].main}</h4>
            </div>`
}
form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value);
        event.preventDefault();
    }
)
