const mainComponent = (date, datePick, vidOrImg, title) => {
    return `
        <section class="main">
            ${date}
            ${datePick}
            ${vidOrImg}
            ${title}
        </section>
    `
};

const introComponent = date => {
    return `
        <section class="intro">
            <h1>Astronomy Picture of the Day</h1>
            <p><a href="https://apod.nasa.gov/apod/archivepix.html">Discover the Cosmos!</a> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <p>${date}</p>
        </section>
    `
};

const datePicker = () => {
    return `
        <input id="date" type="date" data-type=date></input> 
        <button data-id=date>After you selected a date above, click me to get that day's post!</button>
    `
};

const imgComponent = imageSrc => {
    return `
        <section class="image">
            <img src="${imageSrc}" alt="daily pic of the SKY"> 
        </section>
    `
};

const videoComponent = video => {
    return `
        <section class="video">
            <iframe src=${video}" width="650" height="400"></iframe>
        </section>
    `
};

const titleAndCopyrightComponent = (title, copyright) => {
    return `
        <section class="copyright">
            <h4>
                ${title}<br>
                Image Credit & Copyright: ${copyright}
            </h4>
        </section>
    `
};

const explanationComponent = innerContent => {
    return `
        <section>
            ${innerContent}
        </section>
    `
};

const init = () => {
    const rootEl = document.querySelector('#root');

    rootEl.insertAdjacentHTML('beforeend', datePicker());

    const datePickerEl = document.querySelector('button');

    const url = "https://api.nasa.gov/planetary/apod?api_key=GJndehRG8xcpkPG7C5hhLK1iBuZ2tFq9legqIlFw";

    let inputDate = "";

    const dateSet = event => {
        let target = event.target;
        let dataType = target.getAttribute('data-id');
        console.log(dataType)
        let dateSet = document.querySelector(`[data-type="${dataType}"]`);
        console.log(dateSet.value)
        inputDate = dateSet.value;
        console.log(inputDate)
    };

    const fullRange = async () => {
        console.log("Fetching...")
        await fetch("https://api.nasa.gov/planetary/apod?api_key=GJndehRG8xcpkPG7C5hhLK1iBuZ2tFq9legqIlFw&start_date=2021-01-01&end_date=2021-02-04")
            .then(response => {
                console.log(response)
                return response.json();

            })
            .then(data => {
                console.log(data)
                console.log("Fetch done")
            })
    }

    datePickerEl.addEventListener('click', dateSet);

    async function askNasa() {
        const main = document.querySelector('.main');

        if (main !== null) main.parentNode.removeChild(main);

        await fetch(`${url}&date=${inputDate}`)
            .then(response => {

                return response.json();

            })
            .then(data => {
                console.log(data)
                const mainComponentDec = (vidOrImg) => {
                    let main = rootEl.insertAdjacentHTML('beforeend', mainComponent(introComponent(data.date), vidOrImg, titleAndCopyrightComponent(data.title, data.copyright), explanationComponent(data.explanation)));

                    return main
                };

                if (data.media_type === "video") {
                    return mainComponentDec(videoComponent(data.url))
                } else {
                    return mainComponentDec(imgComponent(data.url))
                }

            })
            .catch(error => {
                console.log(`error ${error}`);
            })
    };

    datePickerEl.addEventListener('click', askNasa);
    datePickerEl.addEventListener('click', fullRange);
};

window.addEventListener('load', init);