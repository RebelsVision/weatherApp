console.log("Linked")

// const apiKey = "cb4208a5668d112b0021b2a90453e600"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//     if (response.status == 404) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     } else {
        
//         var data = await response.json();
//         console.log(data);
    
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F"
//         //Figuring out "feels like" implementation
//         document.querySelector(".feelsLike").innerHTML = data.main.feels_Like + "°F";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + "mph";
        
//         if(data.weather[0].main == "Clouds") {
//             weatherIcon.src = "assets/images/clouds.png";
//         } else if (data.weather[0].main == "Clear") {
//             weatherIcon.src = "assets/images/clear.png";
//         } else if (data.weather[0].main == "Rain") {
//             weatherIcon.src = "assets/images/rain.png";
//         } else if (data.weather[0].main == "Drizzle") {
//             weatherIcon.src = "assets/images/drizzle.png";
//         } else if (data.weather[0].main == "Snow") {
//             weatherIcon.src = "assets/images/snow.png";
//         } else if (data.weather[0].main == "Mist") {
//             weatherIcon.src = "assets/images/mist.png";}
//     }
    
    
//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";
//     }

// //Add music player for each weather using if else statemnt//

// // if (data.weather[0].main == "Clouds") {
// //     weatherIcon.src = ".images/clouds.png";
// // } else if(data.weather[0].main == "Clear") {
// //     weatherIcon.src = ".images/clear.png";
// // } else if(data.weather[0].main == "Rain") {
// //     weatherIcon.src = ".images/rain.png";
// // } else if(data.weather[0].main == "Drizzle") {
// //     weatherIcon.src = ".images/drizzle.png";
// // } else if(data.weather[0].main == "Snow") {
// //     weatherIcon.src = ".images/snow.png";
// // } else if(data.weather[0].main == "Mist") {
// //     weatherIcon.src = ".images/mist.png";
// // };

// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// reset.form;
// });
    
// checkWeather();

