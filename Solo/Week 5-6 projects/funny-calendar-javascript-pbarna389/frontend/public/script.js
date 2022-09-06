const monthSectionComponent = function (inner, id, year, month) {
    return `
    <section id=${id}>
        <time datetime="${year}">${year}</time>
        <time datetime="${month}">${month}</time>
        <div>
            ${inner}
        </div>
    </section>`
};

const dayCardComponent = function (evenOrOdd, id, day, dayName) {
    return `
    <div class="cards number0${id}">
        <div class="cards-inner ${dayName}" data-title=${evenOrOdd} id=day-0${id}>
            <div class="cards-front">
                <time datetime="${day}">${day}</time>
            </div>
            <div class="cards-back">
                <time datetime>${dayName}</time>
            </div>
        </div>
    </div>`
};

const loadEvent = function () {
    const rootElement = document.querySelector('#root');

    year.forEach((element, index) => {
        let sectionInner = "";
        const month = element.month;

        for (let i = 1; i <= element.days; i++) {
            let dayCard = evenOrOdd => dayCardComponent(evenOrOdd, i, i, `${dayName}`);

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let date = new Date(2022, index, i);
            let dayName = days[date.getDay()];

            i % 2 === 0 ? sectionInner += dayCard("even") : sectionInner += dayCard("odd");
        };
        rootElement.insertAdjacentHTML('beforeend', monthSectionComponent(sectionInner, month, 2022, month));
    });

    const saturdayAndSunday = [...document.querySelectorAll('.Saturday'), ...document.querySelectorAll('.Sunday')];

    saturdayAndSunday.forEach(day => {
        const weekends = [...document.querySelectorAll('.weekends')];

        day !== weekends && day.classList.add('weekends');
    });

    const clickEvent = event => {
        const target = event.currentTarget;
        const flippedCard = document.querySelector('.flipped');
        const targetTitle = target.getAttribute('data-title');
        console.log(targetTitle, flippedCard);
        target.classList.add('flipped');
        targetTitle !== flippedCard && flippedCard?.classList.toggle('flipped');
    };

    const cardsAll = [...document.querySelectorAll('.cards-inner')];
    cardsAll.map(element => element.addEventListener('click', clickEvent));
};

window.addEventListener('load', loadEvent);


// console.log(cardsAll);
// const clickForBorder = event => {
    //     const target = event.target;
    //     const dataId = target.getAttribute('data-id');
    //     const targetData = document.querySelector(`[data-id="${dataId}"]`);
//     console.log(targetData, dataId);
//     cardsAll.map((card, index) => index % 2 === 0 && card === targetData ? card.classList.toggle('flipCardX')
//         : index % 2 !== 0 && card === targetData ? card.classList.toggle('flipCardY')
//             : index % 2 !== 0 && card !== targetData ? card.classList.remove('flipCardY')
//                 : card.classList.remove('flipCardX'));
// };