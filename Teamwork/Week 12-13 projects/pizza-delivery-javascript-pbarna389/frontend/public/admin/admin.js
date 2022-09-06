console.log('Hello World!');

const addNewPizzaComponent = () => {
    return `
        <section class="new-pizza">
            <h2>Add new pizza</h2>
            <form>
                <label for="pizzaPicture"> Upload a picture:</label>
                <input type="file" name="pizzaPicture"></input>

                <label for="pizzaName">New name:</label>
                <input type="text" name="pizzaName"></input>

                <label for="pizzaIngredients">Ingredients:(separate with ",")</label>
                <input type="text" name="pizzaIngredients"></input>

                <label for="pizzaPrice">Price:</label>
                <input type="number" name="pizzaPrice" min="1"></input>

                <label for="pizzaCategory">Categories:</label>
                <input type="text" name="pizzaCategory"></input>

                <label for="pizzaCategory">Hide the pizza?</label>
                <input type="checkbox" name="pizzaHidden"></input>

                <button type="submit">Add to the list</button>
            </form>
        </section>
    `
};

const removePizzaSectionComponent = pizza => {
    return `
    <section class="remove-pizza">
        <h2>Remove a pizza</h2>
        ${pizza}
    </section>
    `
};

const modifyPizzaComponent = pizza => {
    return `
        <section class="modify-pizza">
            <h2>Modify a pizza</h2>
            <section class="modify-pizza-cards">
                ${pizza}
            </section>
        </section>
    `
};

const modifyPizzaForm = data => {
    return `
            <form data-form-id="${data.id}">
                <label for="pizzaId" class="hidden">ID:</label>
                <input class="hidden modPizzaId" type="text" name="modify pizzaId" value="${data.id}"></input>

                <label for="pizzaPicture"> Change your picture:</label>
                <input type="file" name="modify pizzaUploadPicture"></input>

                <label for="pizzaName">Name:</label>
                <input type="text" name="modify pizzaName" value="${data.pizza_name}"></input>

                <label for="pizzaIngredients">Ingredients:</label>
                <input type="text" name="modify pizzaIngredients" value="${data.ingredients.join(", ")}"></input>

                <label for="pizzaPrice">Price:</label>
                <input type="number" name="modify pizzaPrice" min="1" value="${data.price}"></input>
                
                
                <label for="pizzaCategory">Categories:</label>
                <input type="text" name="modify pizzaCategory" value="${data.category}"></input>
                
                <label for="pizzaCategory">Is hidden...</label>
                <input type="checkbox" name="modify pizzaHidden" ${data.is_hidden === true && "checked"}></input>

                <label for="pizzaPicture" class="hidden modPizzaPicture">Picture:</label>
                <input type="text" name="modify pizzaPicture" class="hidden modPizzaPicture" value="${data.image_url}"></input>
                
                <button class="modifyButton" data-modify-button=${data.id}>Modify the pizza</button>
                <button class="removeButton" data-remove-button=${data.id}>Remove</button>
            </form>
    `
    /*<label for="pizzaPrice">Change tha available sizes</label>
    <input type="number" name="modify pizzaSize" value="${data.size}" disabled></input>*/
}

const pizzaDetailsComponent = pizza => {
    console.log(pizza.pizza_name)
    return `
    <div class="pizza ${pizza.pizza_name}" data-id=${pizza.id}>
        <p>${pizza.pizza_name}</p>
        <button class="removeButton" data-remove-button=${pizza.id}>Remove</button>
    </div>
    `
};

const pizzaComponent = (data, pizzaDetails) => {
    let result = "";

    data.forEach(element => result += pizzaDetails(element));

    return result;
};

const fetchPostFormComponent = async object => {
    const fetchData = await fetch('/admin', {
        method: "POST",
        body: object
    })

    return fetchData;
};

const fetchPostRemovePizza = async object => {
    const fetchData = await fetch('/pizza', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })

    return fetchData;
};

const fetchDeletePicture = async imgName => {
    console.log(imgName);
    const fetchData = await fetch(`/public/img/pizzaImgs/${imgName}`, {
        method: "DELETE",
        body: null
    })

    return fetchData;
}

const fetchPostModifyPizza = async object => {
    console.log(object)
    const fetchData = await fetch('/pizzaModify', {
        method: "POST",
        body: object
    })

    return fetchData;
};

const getNewPizzaDetails = async event => {
    event.preventDefault();

    const target = event.target;
    // const removePizza = document.querySelector('.removePizza');

    console.log(target.querySelector('input[name="pizzaHidden"]').checked)

    const dataUpload = new FormData();

    dataUpload.append('image_url', target.querySelector('input[name="pizzaPicture"]').files[0].name)
    dataUpload.append('pizza_name', target.querySelector('input[name="pizzaName"]').value)
    dataUpload.append('ingredients', target.querySelector('input[name="pizzaIngredients"]').value)
    dataUpload.append('price', target.querySelector('input[name="pizzaPrice"]').value)
    dataUpload.append('category', target.querySelector('input[name="pizzaCategory"]').value);
    dataUpload.append('hidden', Boolean(target.querySelector('input[name="pizzaHidden"]').checked));
    dataUpload.append('picture', target.querySelector('input[name="pizzaPicture"]').files[0]);

    fetchPostFormComponent(dataUpload);

    const loading = document.querySelector('.loading');
    const addMessage = document.querySelector('.added');
    const main = document.querySelector('#main');

    loading.classList.remove('hidden')

    removeAllElements();

    setTimeout(async () => {
        await loadEvent(),
            loading.classList.add('hidden'),
            addMessage.classList.toggle('hidden')
    }, 2000);

    setTimeout(() => { main.classList.toggle('add'); }, 2500);

    setTimeout(() => { main.classList.toggle('add'); }, 5000);
    setTimeout(() => { addMessage.classList.toggle('hidden'); }, 6000);
};

const removePizza = async event => {
    const target = event.target;
    const buttonId = target.getAttribute('data-remove-button');

    const dataFetch = await fetch('/pizza');
    const pizzaData = await dataFetch.json();

    let firstPartArr = "";
    pizzaData.forEach(element => Number(element.id) === Number(buttonId) ? firstPartArr = pizzaData.splice(0, pizzaData.indexOf(element) + 1) : element = element);

    const image_name = firstPartArr[firstPartArr.length - 1].image_url;

    fetchDeletePicture(image_name);

    firstPartArr.pop();

    const newData = firstPartArr.concat(pizzaData);

    fetchPostRemovePizza(newData);

    const loading = document.querySelector('.loading');

    loading.classList.remove('hidden')

    removeAllElements();

    const removeMessage = document.querySelector('.removed')
    const main = document.querySelector('#main');

    setTimeout(async () => {
        await loadEvent(),
            loading.classList.add('hidden'),
            removeMessage.classList.toggle('hidden')
    }, 2000);

    setTimeout(() => { main.classList.toggle('remove'); }, 2500);


    setTimeout(() => { main.classList.toggle('remove'); }, 5000);
    setTimeout(() => { removeMessage.classList.toggle('hidden'); }, 6000);
};

const modifyPizza = async event => {
    event.preventDefault();

    const target = event.target;
    const buttonId = target.getAttribute('data-modify-button');
    const selectedForm = document.querySelector(`[data-form-id="${buttonId}"]`);

    const formData = new FormData();
    console.log(selectedForm.querySelector('input[name="modify pizzaHidden"]').checked)
    if (selectedForm.querySelector('input[name="modify pizzaUploadPicture"]').files[0]) {
        formData.append('newPicture', selectedForm.querySelector('input[name="modify pizzaUploadPicture"]').files[0]);
    };

    formData.append('pizza_id', selectedForm.querySelector('input[name="modify pizzaId"]').value)
    formData.append('pizza_name', selectedForm.querySelector('input[name="modify pizzaName"]').value)
    formData.append('ingredients', selectedForm.querySelector('input[name="modify pizzaIngredients"]').value)
    /*formData.append('size', selectedForm.querySelector('input[name="modify pizzaSize"]').value)*/
    formData.append('price', selectedForm.querySelector('input[name="modify pizzaPrice"]').value)
    formData.append('hidden', selectedForm.querySelector('input[name="modify pizzaHidden"]').checked)
    formData.append('category', selectedForm.querySelector('input[name="modify pizzaCategory"]').value);
    formData.append('picture', selectedForm.querySelector('input[name="modify pizzaPicture"]').value);

    formData.forEach(element => console.log(element));

    fetchPostModifyPizza(formData);

    const loading = document.querySelector('.loading');

    loading.classList.remove('hidden')

    removeAllElements();

    setTimeout(async () => {
        await loadEvent(),
            loading.classList.add('hidden'),
            modifyMessage.classList.toggle('hidden')
    }, 2000);

    setTimeout(() => { main.classList.toggle('modify'); }, 2500);

    const modifyMessage = document.querySelector('.modified')
    const main = document.querySelector('#main');

    setTimeout(() => { main.classList.toggle('modify'); }, 5000);
    setTimeout(() => { modifyMessage.classList.toggle('hidden'); }, 6000);
};

const removeAllElements = () => {
    const newPizza = document.querySelector('.new-pizza');
    const modifyPizza = document.querySelector('.modify-pizza');

    newPizza.parentNode.removeChild(newPizza);
    modifyPizza.parentNode.removeChild(modifyPizza);
};

const loadEvent = async () => {

    const rootEl = document.querySelector('#root');

    const dataFetch = await fetch('/pizza');
    const pizzaData = await dataFetch.json();

    rootEl.insertAdjacentHTML('beforeend', addNewPizzaComponent());

    // rootEl.insertAdjacentHTML('beforeend', removePizzaSectionComponent(pizzaComponent(pizzaData, pizzaDetailsComponent)));

    rootEl.insertAdjacentHTML('beforeend', modifyPizzaComponent(pizzaComponent(pizzaData, modifyPizzaForm)));

    const formEl = document.querySelector('form');
    const removeButtons = [...document.querySelectorAll(".removeButton")];
    const modifyButtons = [...document.querySelectorAll(".modifyButton")];
    console.log(modifyButtons)

    formEl.addEventListener('submit', getNewPizzaDetails);

    removeButtons.forEach(element => element.addEventListener('click', removePizza));

    modifyButtons.forEach(element => element.addEventListener('click', modifyPizza));

};

window.addEventListener('load', loadEvent);