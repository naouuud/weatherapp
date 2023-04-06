export async function fetchData(city, days) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=16a5ed2391264204a69182936230104&q=${city}&days=${days}&aqi=no&alerts=no`,
        { mode: "cors" });
    return response.json();
}

export async function relevantData(city, days) {
    let data = await fetchData(city, days);
    return {
        city: data.location.name,
        country: data.location.country,
        current: {
            temp_c: data.current.temp_c,
            temp_f: data.current.temp_f,
            condition: data.current.condition.text,
            condition_code: data.current.condition.code,
            humidity: data.current.humidity,
            windspeed: data.current.wind_kph,
            winddirection: data.current.wind_dir,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
        }
    }
}