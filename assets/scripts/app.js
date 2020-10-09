const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // destructure properties
    const {
        cityDetails,
        weather
    } = data;


    // update detail template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
    `;

    // update night/day & icon images
    const iconSrc = `/assets/img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);


    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = '/assets/img/day.svg';
    } else {
        timeSrc = '/assets/img/night.svg';
    }
    time.setAttribute('src', timeSrc);


    // remove the d-none class from card
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }



};

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails,
        weather
    };

};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city 
    updateCity(city)
        .then(data => updateUI(data))

});