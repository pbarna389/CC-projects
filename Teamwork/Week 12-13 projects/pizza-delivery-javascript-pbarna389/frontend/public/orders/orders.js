console.log('Hello world!');

const orderComponent = customer => {
    return `
        <section class="orders">
        <h2>Order history</h2>
            <table class="orders-table">
            <thead>
                <tr class="table-headers">
                <th class="th-id" >id</th>
                <th class="th-name">Customer name</th>
                <th class="th-file">Filename</th>
                <th class="th-location">Location</th>
                <th class="th-price">price</th>
                <th class="th-OrderStatus">OrderStatus</th>
                <th class="th-details">Details</th>
            </thead>
            </tr>
                <tbody>
                ${customer}
                </tbody>
                <table>
        </section>
    `
};

const customerStructure = (customerName, fileName, customerZip, customerStreet, customerCity, index, fullPrice, orderStatus, orders) => {
    return `
        <tr>
            <td class="id" data-id="${index + 1}">#${index + 1}</td>
            <td class="name" data-name="${index + 1}">${customerName}</td>
            <td class="fileName" data-fileName="${index + 1}">${fileName}</td>
            <td class="location" data-location="${index + 1}">${customerZip} ${customerStreet} ${customerCity}</td>
            <td class="price" data-price="${index + 1}">$ ${fullPrice}</td>
            <td class="OrderStatus" data-orderStatus="${index + 1}">${orderStatus}</td>
            <td class="details">
                <button class="btn-details" data-button=${index + 1}>Details</button>
            </td>
        </tr>
        <section class="hidden order" data-id="${index + 1}">
            ${orders}
            <div class="statusReport">
                <div>
                    <h3>Status: ${orderStatus}</h3>
                </div>
                <div class="statusTypes" data-statuses="${index + 1}">
                    <button class="changeStatus">New Order</button>
                    <button class="changeStatus">On Delivery</button>
                    <button class="changeStatus">Delivered</button>
                    <button class="changeStatus">Cancelled</button>
                </div> 
            </div>
            <button class="orderButton" data-button-remove-id="${index + 1}"></button>
        </section>
    `
};

const orderedItems = (picture, name, amount, price, fileName) => {
    return `
            <div class="orderedItem">
                <img src="${picture}">
                <div class="orderItemInfo">
                    <p>Name: ${name}</p>
                    <p>Amount: ${amount}</p>
                    <p>Price: ${price}</p>
                </div>
            </div>
    `
};

const fetchUpdateOrder = async (status) => {
    console.log(status);
    const fetchData = await fetch('/ordersAdmin', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)
    })

    return fetchData
}

const customerComponent = (orderData, orderStructure, customerStructure) => {
    let fullPrice = 0;
    let result = "";
    orderData.forEach((element, index) => {
        const customer = element.slice(element.length - 1);
        const orderedItems = element.slice(0, element.length - 1);

        customer.forEach(customer => {
            let orders = "";

            orderedItems.forEach(order => {
                if (order.price) fullPrice += Number(order.price.split("$").join(""));

                orders += orderStructure(order.picture, order.pizzaName, order.pizzaAmount, order.price);
            });

            console.log(customer.fileName)
            result += customerStructure(customer.name, customer.fileName, customer.zip, customer.street, customer.city, index, fullPrice, customer.status, orders);
            fullPrice = 0;
        });
    });

    return result;
};

const showOrder = event => {
    const target = event.target;
    const dataId = target.getAttribute('data-button');
    const orderDetails = document.querySelector(`[data-id="${dataId}"]`);

    orderDetails.classList.toggle('hidden');
};

const closeOrder = event => {
    const target = event.target;
    const dataId = target.getAttribute('data-button-remove-id');
    const orderDetails = document.querySelector(`[data-id="${dataId}"]`);

    orderDetails.classList.toggle('hidden');
};

const changeOrderStatus = async event => {
    const target = event.target;
    const fileNameId = target.parentNode.getAttribute('data-statuses');
    const fileName = document.querySelector(`[data-fileName="${fileNameId}"]`);

    const rootEl = document.querySelector("#root");
    const ordersEl = document.querySelector(".orders");

    console.log(fileName.innerHTML, target.innerHTML);

    const updateStatus = {}

    updateStatus["status"] = target.innerHTML;
    updateStatus["fileName"] = fileName.innerHTML;

    console.log(updateStatus);

    fetchUpdateOrder(updateStatus);

    if (ordersEl !== null) ordersEl.parentNode.removeChild(ordersEl);

    loadEvent();

    const changeMessage = document.querySelector('.statusChange')
    const main = document.querySelector('#main');

    changeMessage.classList.toggle('hidden');

    main.classList.toggle('change')

    setTimeout(() => { main.classList.toggle('change'); }, 2000);
    setTimeout(() => { changeMessage.classList.toggle('hidden'); }, 3000);
}

const loadEvent = async () => {
    const rootEl = document.querySelector('#root');
    console.log(rootEl);

    // WTF
    const dataFetch = await fetch('/ordersAdmin');
    const orderData = await dataFetch.json();

    console.log(orderData);

    rootEl.insertAdjacentHTML('beforeend', orderComponent(customerComponent(orderData, orderedItems, customerStructure)));

    const detailsButtons = [...document.querySelectorAll('.btn-details')];
    const orderButtons = [...document.querySelectorAll('.orderButton')];
    const changeStatusButtons = [...document.querySelectorAll('.changeStatus')];
    detailsButtons.forEach(element => element.addEventListener('click', showOrder));
    orderButtons.forEach(element => element.addEventListener('click', closeOrder));
    changeStatusButtons.forEach(element => element.addEventListener('click', changeOrderStatus));

};

window.addEventListener('load', loadEvent);