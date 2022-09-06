const mainPageComponent = (charSheet, nameComp, raceComp, genderComp, classComp) => {
    return `
    ${charSheet}
    <div class="basics">
        ${nameComp}
    </div>
    <section class="basicSelectors">
        ${raceComp}
        ${genderComp}
        ${classComp}
    </section>
    `
};

const charcSheetCompontent = () => {
    return `
        <h2>Shadowrun Character Creator</h2>
    `
};

const statsComponent = (baseStat) => {
    return `
    <div class="statistics">
        <h2>Statistics</h2>
        <p>Agility: <span class="stats" dataVal="agility">${baseStat}</span></p>
        <p>Presence: <span class="stats" dataVal="presence">${baseStat}</span></p>
        <p>Strength: <span class="stats" dataVal="strength">${baseStat}</span></p>
        <p>Toughness: <span class="stats" dataVal="toughness">${baseStat}</span></p>
        <p>Knowledge: <span class="stats" dataVal="knowledge">${baseStat}</span></p>
    </div>
    `
}

const nameComponent = () => {
    return `
        <div class="name">
            <h2>Name</h2 y
            <label for="name"></label>
            <input type="text" class="nameChoice" id="name-choice" name="name" required minlength="4" maxlength= "16">
            <p>Name: <p class="charName">Type your name in and press Enter!</p></p>
        </div>
    `
};

const genderComponent = (genders) => {
    return `<div>
                <label for="gender-choice">Gender: </label>
                <input list="gender" class="text gender" id="gender-choice" name="gender-choice">

                <datalist id="gender" class="genderDat">
                    ${genders}
                </datalist>
                <p>Gender: <span class="select charGender">Select your gender</span></p>
                <img src="/frontend/images/male.png" class="image hidden" dataGender="Male">
                <img src="/frontend/images/female.jpg" class="image hidden" dataGender="Female">
            </div>
     `
};

const raceComponent = (races) => {
    return `
        <div>
            <label for="race">Race: </label>
            <input list="race" class="text race" id="race-choice" name="race"-choice>

            <datalist id="race" class="raceDat">
                ${races}
            </datalist>
            <p>Race: <span class="select charRace">Select your race</span></p>
            <img src="/frontend/images/human.jpg" class="image hidden" dataRace="Human">
            <img src="/frontend/images/troll.jpg" class="image hidden" dataRace="Troll">
            <img src="/frontend/images/half-elf.jpg" class="image hidden" dataRace="Half-elf">
            <img src="/frontend/images/elf.png" class="image hidden" dataRace="Elf">
            <img src="/frontend/images/halfling.jpg" class="image hidden" dataRace="Halfling">
            <img src="/frontend/images/ork.jpg" class="image hidden" dataRace="Ork">
            <img src="/frontend/images/dwarf.jpg" class="image hidden" dataRace="Dwarf">
        </div>
    `
};

const classesComponent = (classes) => {
    return `
        <div>
            <label for="classes">Class: </label>
            <input list="classes" class="text classes" id="class-choice" name="class-choice">

            <datalist id="classes" class="classDat">
                ${classes}
            </datalist>
            <p>Class: <span class="select charClass">Select your class</span></p>
            <img src="/frontend/images/streetsamurai.jpg" class="image hidden" dataClass="Street Samurai">
            <img src="/frontend/images/rigger.jpg" class="image hidden" dataClass="Rigger">
            <img src="/frontend/images/fixer.jpg" class="image hidden" dataClass="Fixer">
            <img src="/frontend/images/formercompanyman.jpg"class="image hidden" dataClass="Former Company Man">
            <img src="/frontend/images/mage.jpg" class="image hidden" dataClass="Mage">
            <img src="/frontend/images/adept.png" class="image hidden" dataClass="Adept">
            <img class="image hidden" dataClass="Shaman">
        </div>
    `
};

const insertOption = (obj) => {
    let data = "";
    obj.forEach((element) => {

        let optionVal = (race) => {
            return `
                <option value="${race}" data-id="${race}"></option>
            `
        };

        data += optionVal(element.name);
    });
    return data;
};

const contUpdate = (event, element) => {
    element.textContent = event.target.value;
    event.target.value = "";
};

const elementUpdate = (element, text, event, elementIndex, textIndex, image, dataVal) => {
    if (element === event.target.value) {
        if (elementIndex === textIndex) {
            contUpdate(event, text);
            image.forEach(element => element === dataVal ? dataVal.classList.remove("hidden") : element.classList.add("hidden"))
        };
    };
};

const init = () => {
    const rootEl = document.querySelector('#root');

    let genderElements = insertOption(gender);
    let raceElements = insertOption(races);
    let classElements = insertOption(classes);

    rootEl.insertAdjacentHTML('beforeend', mainPageComponent(charcSheetCompontent(), nameComponent(), genderComponent(genderElements), raceComponent(raceElements), classesComponent(classElements)));

    const inputs = [...document.querySelectorAll('.text')];
    const target = [...document.querySelectorAll('.select')];
    const inputName = document.querySelector('.nameChoice');
    const charName = document.querySelector('.charName');

    const usableRaces = [];
    const usableGenders = [];
    const usableClasses = [];
    races.forEach(race => usableRaces.push(race.name));
    gender.forEach(gender => usableGenders.push(gender.name));
    classes.forEach(classes => usableClasses.push(classes.name));

    inputName.addEventListener('keypress', key => {
        if (key.code === "Enter" || key.code === 'NumpadEnter') {
            contUpdate(key, charName);
            key.target.value = "";
        };
    });

    inputs.forEach((element, elIndex) => element.addEventListener("change", (event) => {
        target.forEach((text, textIndex) => {
            usableRaces.forEach(race => {
                const images = document.querySelectorAll("[dataRace]")
                const dataVal = document.querySelector(`[dataRace="${event.target.value}"]`);
                elementUpdate(race, text, event, elIndex, textIndex, images, dataVal);
            });

            usableGenders.forEach(gender => {
                const images = document.querySelectorAll("[dataGender]")
                const dataVal = document.querySelector(`[dataGender="${event.target.value}"]`);
                elementUpdate(gender, text, event, elIndex, textIndex, images, dataVal);
            });

            usableClasses.forEach(classes => {
                const images = document.querySelectorAll("[dataClass]")
                const dataVal = document.querySelector(`[dataClass="${event.target.value}"]`);
                elementUpdate(classes, text, event, elIndex, textIndex, images, dataVal);
            });
        });
    }));
};

window.addEventListener("load", init);