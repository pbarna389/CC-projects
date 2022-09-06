let fullOrder = [];

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

const mainSectionComponent = () => {
    return `
        <nav class="cartMenu"> 
            <button class="cartMenuButton"> </button>
            <button class="removeItems">Clean your cart</button>
            <p class="cartPrice hidden">Your total Price: <span class="fullpriceCart">0</span> $</p>
            <div class="cartOrder"></div> 
        </nav>
        <section class="menu menu-item-wrapper">
        <div class="menu-wrapper">
        <h2>Menu</h2>
        <div id="filter-container">
          <button class="btn active" onclick="filterSelection('all')"> Show all</button>
          <button class="btn" onclick="filterSelection('meat')"> Meat</button>
          <button class="btn" onclick="filterSelection('cheese')"> Cheese</button>
          <button class="btn" onclick="filterSelection('mushroom')"> Mushrooms</button>
          <button class="btn" onclick="filterSelection('vegetarian')"> Vegetarian</button>
        </div>

        </div>
        </section>
    `
};

const ingredientsComponent = (ingredient, id) => {
    return `
            <div>
                Filling: <span data-ing=${id}>${ingredient}</span>
            </div>
    `
};

const checkBoxComponent = (item, index) => {
    return `
            <button class="size">${item}</button>
    `
};

const amountAndPriceComponent = (price, id) => {
    return `
     <div class="price">
        <p data-price=${id}>${price} $</p>
        <div class="amountChange">
        <button class="amount minus" data-minus=${id}>-</button>
            <p data-value=${id}>1</p>
        <button class="amount plus" data-plus=${id}>+</button>
        </div>
     </div>
    `
};

const pizzaCardComponentShow = (id, name, listItems, sizes, price, category, imgUrl) => {
    console.log(imgUrl)
    return `<div class="container menu-items filterDiv show ${category}">
                <div class="pizza" data-id=${id}>
                <img src="./public/img/pizzaImgs/${imgUrl}" class="pizza-image" alt="" data-pic=${id}>
                    <h3 data-name-id=${id}>${name}</h3>
                        ${listItems}
                    <div class="sizes">
                        ${sizes}
                    </div>
                    ${price}
                    <button class="order" data-button=${id}>Add to cart</button>
                </div>
            </div>
    `
};

const pizzaCardComponentHidden = (id, name, listItems, sizes, price, category) => {
    return `<div class="container menu-items filterDiv hidden ${category}">
                <div class="pizza" data-id=${id}>
                <img src="./public/img/pizzaImgs/pizza${id}.png" class="pizza-image" alt="" data-pic=${id}>
                    <h3 data-name-id=${id}>${name}</h3>
                        ${listItems}
                    <div class="sizes">
                        ${sizes}
                    </div>
                    ${price}
                    <button class="order" data-button=${id}>Add to cart</button>
                </div>
            </div>
    `
};

const sendOrderButtonComponent = () => {
    return `
    <button class="all">Start your order!</button>
    `
};

const loadFilterJs = () => {
    return `
    <script href="./public/filter.js" defer></script>
    `
}

const cartComponent = (orderedItems, form) => {
    return `
        <section class="cartModal">
            <div class="orderElements">
            <div class="totalPrice hidden">
                <p>Your total Price: <span class="fullprice">0</span> $</p>
            </div>
                <div class="items">
                </div>
            </div>
            </div>
            
            <button class="startOrdering">BUY</button> 

            <button class="cartClose"></button>
            
        </section>
        <div class="blur hidden"></div>
        <div class="success hidden">
            <div>Congratulations! We started to prepare your order. Estimated delivery time: ?</div>
        </div>
    `
};

const cardComponentOrder = orderedItems => {
    return `
    <div class="orderedItems">
        <img src="${orderedItems.picture}" class="cart-pizza-img">
        <p>${orderedItems.pizzaName}</p>
        <p>Amount: ${orderedItems.pizzaAmount}</p>
        <p>Price = ${orderedItems.price}</p>
    </div>
    `
};

const cardComponentForm = () => {
    return `
    <form action="/" method="post">
        <label for="name">Type in your name</label>
        <input type="text" name="name" id="" />

        <label for="city">The city where you live</label>
        <input type="text" name="city" id="" />

        <label for="zip">Your ZIP code...</label>
        <input type="text" name="zip" id="" />

        <label for="street">The street where you live</label>
        <input type="text" name="street" id="" />

        <label for="houseNum">Your house number</label>
        <input type="text" name="houseNum" id="" />

        <label for="phone">Your phone number!</label>
        <input type="tel" name="phone" id="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />

        <label for="email">Your e-mail address</label>
        <input type="email" name="email" id="" value="example@example.org" />
    </form>`
};

const pizzaComponent = (data, section) => {
    data.forEach(element => {
        const pizzaSize = element.size;

        let sizes = "";

        pizzaSize.forEach((size, index) => sizes += checkBoxComponent(`${size}`, `${index + 1}`));

        console.log(element.image_url)
        element.is_hidden ? section.insertAdjacentHTML('beforeend', pizzaCardComponentHidden(`${element.id}`, `${element.pizza_name}`, ingredientsComponent(`${element.ingredients.join(", ")}`, `${element.id}`), sizes, amountAndPriceComponent(element.price, element.id), element.category, element.img_url))
            : section.insertAdjacentHTML('beforeend', pizzaCardComponentShow(`${element.id}`, `${element.pizza_name}`, ingredientsComponent(`${element.ingredients.join(", ")}`, `${element.id}`), sizes, amountAndPriceComponent(element.price, element.id), element.category, element.image_url))

    });
};

const handleClickPlus = (event) => {
    const target = event.target;
    const dataId = target.getAttribute('data-plus');
    const amountValue = document.querySelector(`[data-value="${dataId}"]`);
    Number(amountValue.innerHTML) >= 10 ? amountValue.textContent = 10
        : amountValue.textContent = Number(amountValue.innerHTML) + 1;
};

const handleClickMinus = (event) => {
    const target = event.target;
    const dataId = target.getAttribute('data-minus');
    const amountValue = document.querySelector(`[data-value="${dataId}"]`);
    Number(amountValue.innerHTML) <= 1 ? amountValue.textContent = 1
        : amountValue.textContent = Number(amountValue.innerHTML) - 1;
};

const handleOrderClick = event => {
    event.preventDefault();

    const target = event.target;
    const dataId = target.getAttribute('data-button');

    const objectDataName = document.querySelector(`[data-name-id="${dataId}"]`);
    const objectDataIngredients = document.querySelector(`[data-ing="${dataId}"]`);
    const objectDataPrice = document.querySelector(`[data-price="${dataId}"]`);
    const objectDataAmount = document.querySelector(`[data-value="${dataId}"]`);
    const objectPicture = document.querySelector(`[data-pic="${dataId}"]`);

    console.log(Number(objectDataPrice.innerHTML.split("$").join(" ")) * Number(objectDataAmount.innerHTML));

    const orderItem = {
        pizzaName: objectDataName.innerHTML,
        pizzaIngr: objectDataIngredients.innerHTML,
        pizzaAmount: objectDataAmount.innerHTML,
        price: `${Number(objectDataPrice.innerHTML.split("$").join(" ")) * Number(objectDataAmount.innerHTML)} $`,
        picture: objectPicture.src
    };

    console.log(orderItem.price);

    fullOrder.length >= 8 ? console.log("Too many items!")
        : fullOrder.push(orderItem);

    console.log(fullOrder);
};

const orderClick = () => {
    const orderElements = document.querySelector('.orderElements')
    const items = document.querySelector('.items');
    const price = document.querySelector('.fullprice');

    orderElements.insertAdjacentHTML('afterbegin', cardComponentForm());
    fullOrder.forEach(element => items.insertAdjacentHTML('afterbegin', cardComponentOrder(element)));
    fullOrder.forEach(element => price.innerHTML = Number(price.innerHTML) + Number(element.price.split("$").join(" ")));

    const body = document.querySelector('body');
    body.classList.toggle('overflown');
};

const closeOrder = () => {
    const modal = document.querySelector('form');
    const body = document.querySelector('body');
    const orderedItems = document.querySelectorAll('.orderedItems')

    if (modal !== null) modal.parentNode.removeChild(modal);
    if (orderedItems !== null) orderedItems.forEach(element => element.parentNode.removeChild(element));

    body.classList.toggle('overflown')
};

const cartMenuClose = () => {
    const blurView = document.querySelector('.blur');
    const body = document.querySelector('body');

    const orderElements = document.querySelector('.cartOrder')
    const orderedItems = document.querySelectorAll('.orderedItems')
    blurView.classList.toggle('hidden');
    body.classList.toggle('menuOpen');

    if (orderElements !== null) orderedItems.forEach(element => element.parentNode.removeChild(element));
};

const cleanCart = () => {
    console.log("cleancart")
    const orderElements = document.querySelector('.cartOrder')
    const orderedItems = document.querySelectorAll('.orderedItems')

    fullOrder = [];
    if (orderElements !== null) orderedItems.forEach(element => element.parentNode.removeChild(element));
};

const postFetch = async object => {
    const fetchData = await fetch('/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    });

    const data = fetchData.json();
    console.log(data);
    return data;
};

const handleBuyClick = event => {
    console.log(event.target);

    const inputs = [...document.querySelectorAll('input')];
    const success = document.querySelector('.success');
    const blur = document.querySelector('.blur');

    const dataObj = {};

    inputs.forEach(element => element.getAttribute('name') !== "null" ? dataObj[element.getAttribute('name')] = element.value : element = element);

    dataObj["status"] = "New Order";

    console.log(inputs);
    console.log(dataObj);

    fullOrder.push(dataObj);
    postFetch(fullOrder);
    fullOrder = [];

    success.classList.toggle('hidden');
    blur.classList.toggle('hidden');

    setTimeout(() => {
        success.classList.toggle('hidden');
        blur.classList.toggle('hidden');
    }, 5000)

};

const cartMenuOpen = () => {
    const blurView = document.querySelector('.blur');
    const body = document.querySelector('body');
    const orderElements = document.querySelector('.cartOrder')
    const price = document.querySelector('.fullpriceCart');

    blurView.classList.toggle('hidden');
    body.classList.toggle('menuOpen');

    fullOrder.forEach(element => orderElements.insertAdjacentHTML('afterbegin', cardComponentOrder(element)));
    fullOrder.forEach(element => price.innerHTML = Number(price.innerHTML) + Number(element.price.split("$").join(" ")));

};

const filterButtonClick = event => {
    const target = event.target;
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(element => element === target ? element.classList.add('active') : element.classList.remove('active'));
};


const loadEvent = async () => {
    const rootEl = document.querySelector("#root");

    rootEl.insertAdjacentHTML('beforeend', mainSectionComponent());

    const mainSection = document.querySelector('.menu');

    const dataFetch = await fetch('/pizza');
    const pizzaData = await dataFetch.json();

    pizzaComponent(pizzaData, mainSection);

    mainSection.insertAdjacentHTML('beforeend', sendOrderButtonComponent());
    mainSection.insertAdjacentHTML('beforeend', cartComponent());

    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');

    const cartMenuLink = document.querySelectorAll('.cart');

    const cartMenuButton = document.querySelector('.cartMenuButton');

    cartMenuLink.forEach(element => element.addEventListener('click', cartMenuOpen))

    cartMenuButton.addEventListener('click', cartMenuClose);

    const orderButtons = document.querySelectorAll('.order');
    const addToCart = document.querySelector('.all');

    const buyButton = document.querySelector('.startOrdering');
    const formCloseButton = document.querySelector('.cartClose');

    const cartCleanButton = document.querySelector('.removeItems');

    const btnButtons = document.querySelectorAll('.btn');

    btnButtons.forEach(element => element.addEventListener('click', filterButtonClick))

    plusButtons.forEach(element => element.addEventListener('click', handleClickPlus));
    minusButtons.forEach(element => element.addEventListener('click', handleClickMinus));

    orderButtons.forEach(element => element.addEventListener('click', handleOrderClick));
    addToCart.addEventListener('click', orderClick);

    cartCleanButton.addEventListener('click', cleanCart);

    formCloseButton.addEventListener('click', closeOrder);
    buyButton.addEventListener('click', handleBuyClick);

    buyButton.addEventListener('click', closeOrder);
    document.querySelector("body").insertAdjacentHTML('beforeend', loadFilterJs());
};

window.addEventListener("load", loadEvent);