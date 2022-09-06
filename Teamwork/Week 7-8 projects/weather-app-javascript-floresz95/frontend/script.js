const cityArray = ["Budapest", "Miskolc", "Sopron", "Debrecen", "Győr"];
let favouritedCities = ['Favourite list'];

const datalistComponent = function (value) {
    return `
    <label for="cities"></label>
    <input list="city-selector" id="datalist01" name="citySelector" data-cities=01 value="City Selector!"/>

    <datalist id="city-selector">
        ${value}
    </datalist>
    
    <datalist id="favourites">
        <option value="Favourite list" disabled></option>
    </datalist>
    `
};

const buttonComponent = function () {
    return `
        <button class="getCard" data-id=01>
            Click for a weather report!
        </button>
        <div class="loading hidden"></div>

    `
};

const favButton = () => {
    return `
        <button class="favourite" data-num=01>
            Add/or remove favourites!
        </button>
    `
};


const addedFav = () => {
    return `
        <p class="added_to_fav hidden">
            Added to favourites!
        </p>
    `
};

const alreadyFav = () => {
    return `
        <p class="alreadyFav hidden">
            Your input value isn't in our database
        </p>
    `
};

const removeFav = () => {
    return `
        <p class="removeFav hidden">
            The selected city is removed from your favourites.
        </p>
    `
};


const dayCardComponent = (cityName, currentTemp, feelsLike, icon, lastUpd, humidity, pressure, windDir, windSpeed, uv) => {
    return `
        <section class="dayCard">
        <div id="first-block">
        <div class="weather">
                    <h2>${cityName}</h2>
                    <img src="https://${icon}" />
                    </div>
                <div>
                <span><h3>${currentTemp}&#8451 <br>feels like ${feelsLike}&#8451</h3></span>
                </div>
            </div>
            <h5 class="update-time">Last Updated: ${lastUpd}</h5>
            <div id="inliner">
                <div id="second-block">
                    <h5>Humidity: ${humidity}% </h5>
                    <h5>Pressure: ${pressure} hPa</h5>
                    <h5>UV-index: ${uv}</h5>
                    </div>
                    <div id="third-block">
                    <h5>Wind direction: ${windDir}</h5>
                    <h5>Wind speed: ${windSpeed} km/h</h5>
                    </div>
            </div>
         </section>
    `
};

const errorComponent = () => {
    return `
        <div class="error">
            Please select or type-in city's name - without it, we can't create your weather report!
        </div>
    `
};

const createHtmlObj = (pos, comp) => {
    rootEl = document.querySelector('#root');
    return rootEl.insertAdjacentHTML(pos, comp)
};

const datalistOptionValues = function (city) {
    let options = "";

    for (let i = 0; i < city.length; i++) {
        options += `
        <option value="${city[i]}"></option>
        `
    };

    return options;
};

const removeElement = (elementNumber) => {
    const favDataList = document.querySelector("#favourites")

    const removeable = favouritedCities.splice(0, elementNumber + 1);
    removeable.pop();
    favouritedCities = removeable.concat(favouritedCities);

    favDataList.children[elementNumber].remove();
};

const addToFav = (event) => {
    const target = event.target;
    const dataNum = target.getAttribute('data-num');
    const inputField = document.querySelector(`[data-cities="${dataNum}"]`);

    const favouriteDatalist = document.querySelector('#favourites');
    const messageFavAl = document.querySelector('.alreadyFav');

    let favOptions = "";

    const favToggle = () => {
        const addMess = document.querySelector(".added_to_fav")
        addMess.classList.toggle("hidden");
    };

    const removalToggle = () => {
        const removeMess = document.querySelector(".removeFav")
        removeMess.classList.toggle("hidden");
    };

    if (inputField.value.length === 0 || cityArray.indexOf(inputField.value) === -1) {
        messageFavAl.classList.remove("hidden");
        console.log("Invalid value - the item is already added or it isn't in our database!");
        setTimeout(() => { messageFavAl.classList.add("hidden") }, 2000);
    };

    if (favouritedCities.indexOf(inputField.value) !== -1) {
        removalToggle()
        setTimeout(() => { removeElement(favouritedCities.indexOf(inputField.value)) }, 200);
        setTimeout(() => { removalToggle() }, 2000);
        ;
    };

    cityArray.forEach(element => favouritedCities.forEach(favCit => {
        if (element !== favCit && inputField.value !== favCit && favouritedCities.indexOf(inputField.value) === -1 && cityArray.indexOf(inputField.value) !== -1) {
            favToggle();
            messageFavAl.classList.add("hidden");
            favOptions += `<option value = "${inputField.value}"></option>`;
            favouritedCities.push(inputField.value);
            setTimeout(() => { favToggle() }, 2000);
        };
    }));

    console.log(favOptions);
    favouriteDatalist.insertAdjacentHTML('beforeend', favOptions);
    console.log(favouritedCities);
    console.log(cityArray);

};

const getCityName = event => {
    const target = event.target;
    const dataId = target.getAttribute('data-id');
    const inputCity = document.querySelector(`[data-cities="${dataId}"]`);

    const url = "http://api.weatherapi.com/v1/current.json?key=fd26c13d668b47fb80a232408221605&q=";
    const urlCity = `${inputCity.value}&aqi=yes`;

    dataPull(url, urlCity);
};

const dataPull = async function (urlFirst, urlCity) {
    const dayCardSec = document.querySelector('.dayCard');
    const error = document.querySelector('.error');
    if (dayCardSec !== null) dayCardSec.parentNode.removeChild(dayCardSec);
    if (error !== null) error.parentNode.removeChild(error);

    const loading = document.querySelector('.loading');
    const buttonEl = document.querySelector('button');
    const datalist = document.querySelector('#datalist01');
    let icon = "";

    loading.classList.toggle("hidden");
    buttonEl.setAttribute('hidden', '');
    datalist.setAttribute('hidden', '');

    const urlInfo = await fetch(urlFirst + urlCity);

    const urlInfoData = await urlInfo.json();


    if (cityArray.indexOf(datalist.value) !== -1) {
        icon = urlInfoData.current.condition.icon.slice(2);

        loading.classList.remove("hidden");
        buttonEl.removeAttribute("hidden");
        datalist.removeAttribute("hidden");

        createHtmlObj("afterbegin", dayCardComponent(urlInfoData.location.name, urlInfoData.current.temp_c, urlInfoData.current.feelslike_c, icon, urlInfoData.current.last_updated, urlInfoData.current.humidity, urlInfoData.current.pressure_mb, urlInfoData.current.wind_dir, urlInfoData.current.wind_kph, urlInfoData.current.uv))

        loading.classList.add("hidden");
        buttonEl.removeAttribute("hidden");
        datalist.removeAttribute("hidden");

    } else {
        console.log(datalist.value.length)

        loading.classList.remove("hidden");
        buttonEl.setAttribute('hidden', '');
        datalist.setAttribute('hidden', '');

        createHtmlObj("afterbegin", errorComponent());

        loading.classList.add("hidden");
        buttonEl.removeAttribute("hidden");
        datalist.removeAttribute("hidden");
    };
};

const autoComplete = () => {
    const inputEl = document.querySelector('input');

    inputEl.addEventListener('keyup', element => {
        if (element.target.value.length === 0) inputEl.setAttribute('list', 'favourites');
        if (element.target.value.length >= 1 && element.target.value.length < 3) inputEl.setAttribute("list", "");
        if (element.target.value.length >= 3) inputEl.setAttribute("list", "city-selector");
    });
};

const citiesData = async function (cityArray) {

    createHtmlObj('beforeend', buttonComponent());
    createHtmlObj('beforeend', favButton());

    const loading = document.querySelector('.loading');
    const buttonEl = document.querySelector('.getCard');
    const favButtonEl = document.querySelector('.favourite');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spott.p.rapidapi.com',
            'X-RapidAPI-Key': 'ca67b4d59amsh4d0feedc9639b8cp1ef72ajsn5b64d84d0c80'
        }
    };

    loading.classList.toggle("hidden");
    buttonEl.setAttribute('hidden', '');
    favButtonEl.setAttribute('hidden', '');

    const citiesFetch = await fetch('https://spott.p.rapidapi.com/places?type=CITY&skip=0&country=US%2CCA&limit=100&q=New%20York', options);

    const response = await citiesFetch.json();

    loading.classList.toggle("hidden");
    buttonEl.removeAttribute('hidden');
    favButtonEl.removeAttribute('hidden');

    console.log(response)

    response.forEach(element => cityArray.push(element.name));
    console.log(cityArray)

    createHtmlObj("beforeend", datalistComponent(datalistOptionValues(cityArray)));
    createHtmlObj('afterbegin', addedFav());
    createHtmlObj('afterbegin', alreadyFav());
    createHtmlObj('afterbegin', removeFav());

    autoComplete();
};

const loadEvent = function () {

    citiesData(cityArray);

    const buttonEl = document.querySelector('.getCard');
    const favButton = document.querySelector('.favourite');

    buttonEl.addEventListener('click', getCityName);
    favButton.addEventListener('click', addToFav);

};

window.addEventListener("load", loadEvent);