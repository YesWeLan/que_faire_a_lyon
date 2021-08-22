let icon;
let city;
let temperature;
let description;

// code icone
const iconWeatherId = ['01d','02d','03d','04d','09d','10d','11d','13d','50d','01n','02n','03n','04n','09n','10n','11n','13n','50n'];

// icones
const iconDayNight = [  // day
                'assets/img/weather/clear_sky/clear_sky_day.svg',
                'assets/img/weather/few_clouds/few_clouds_day.svg',
                'assets/img/weather/scattered_clouds/scattered_clouds.svg',
                'assets/img/weather/broken_clouds/broken_clouds.svg',
                'assets/img/weather/shower_rain/shower_rain.svg',
                'assets/img/weather/rain/rain_day.svg',
                'assets/img/weather/thunderstorm/thunderstom_day.svg',
                'assets/img/weather/snow/snow.svg',
                'assets/img/weather/atmosphere/mist.png',
                
                // night
                'assets/img/weather/clear_sky/clear_sky_night.svg',
                'assets/img/weather/few_clouds/few_clouds_night.svg',
                'assets/img/weather/scattered_clouds/scattered_clouds.svg',
                'assets/img/weather/broken_clouds/broken_clouds.svg',
                'assets/img/weather/shower_rain/shower_rain.svg',
                'assets/img/weather/rain/rain_night.svg',
                'assets/img/weather/thunderstorm/thunderstom_night.svg',
                'assets/img/weather/snow/snow.svg',
                'assets/img/weather/atmosphere/mist.png'
            ];

///////////////////
//    WEATHER    //

function weather()
{
    const iconW = document.getElementsByClassName('icon_w');
    const descriptionW = document.getElementsByClassName('description_w');
    const cityW = document.getElementsByClassName('city_w');
    const temperatureW = document.getElementsByClassName('temperature_w'); 

    //https://api.openweathermap.org/data/2.5/weather?q=Lyon,FR,name="Lyon, FR"&units=metric&lang=fr&appid=e8d87fb91a59d19630ce7d1e053cc9d4
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Lyon,FR,name="Lyon, FR"&units=metric&lang=fr&appid=e8d87fb91a59d19630ce7d1e053cc9d4')
    .then(res => 
        {
            if (res.ok)
            {
                res.json().then(resJson => 
                {
                    //console.log(resJson);

                    // get code icon
                    const iconCode = resJson.weather[0].icon;
                    
                    // ville
                    cityW[0].innerText = resJson.name;
                    
                    // température
                    temperatureW[0].innerHTML = `${parseInt(resJson.main.temp)}<sup>°c</sup>`;
        
                    // description temps
                    descriptionW[0].innerText = resJson.weather[0].description;

                    // fonction qui va générer l'icon selon valeur de iconCode
                    // paramètre iconCode, et iconW pour pouvoir implater icon dans DOM
                    weatherIcon(iconCode, iconW);

                    city = cityW[0].innerText;
                    temperature = temperatureW[0].innerHTML;
                    description = descriptionW[0].innerText;

                    // stock toutes les données weather
                    weatherSessionStorage();
                });
            }
        }
    );
}

////////////////////
//  WEATHER ICON  //

function weatherIcon(iconCode, iconW)
{
    // parcours le tableau iconWeatherId pour obtenir l'url de l'icone selon le code
    for (let i = 0; i < iconWeatherId.length; i++)
    {
        if (iconCode === iconWeatherId[i])
        {
            icon = iconDayNight[i]
        }
    }

    iconW[0].setAttribute('src', icon);
}

/////////////////////////////
// WEATHER SESSION STORAGE //

function weatherSessionStorage()
{
    sessionStorage.setItem('icon', icon);
    sessionStorage.setItem('description', description);
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('temperature', temperature);
}