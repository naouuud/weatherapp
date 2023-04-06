import { newElement } from "./dom-creation";
import { relevantData } from "./fetch";

newElement({ type: 'h1', parent: 'body', text: 'WeatherApp' });
const form = newElement({ type: 'form', parent: 'body' });
newElement({ type: 'label', for: 'city', parent: form, text: 'Check the weather in:' });
const city = newElement({ type: 'input', id: 'city', parent: form });
const submit = newElement({ type: 'button', text: 'Submit', parent: form });
submit.addEventListener('click', function (e) {
    e.preventDefault();
    renderWeather();
});

async function renderWeather() {
    const data = await relevantData(city.value, 1);
    newElement({ type: 'div', parent: 'body', text: `${data.city}, ${data.country}:` });
    newElement({ type: 'div', parent: 'body', text: `Temperature: ${data.current.temp_c}\u00B0C / ${data.current.temp_f}\u00B0F` });
    newElement({ type: 'div', parent: 'body', text: `Humidity: ${data.current.humidity}%` });
}