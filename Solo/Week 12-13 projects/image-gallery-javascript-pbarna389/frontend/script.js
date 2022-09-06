const formComponent = () => {
    return `
    <form>
        <input type="file" name="image">
        <input type="text" name="title" value="Title">
        <input type="text" name="author" value="Author">
        <input type="submit">   
    </form>
    `
};

const swiperCompontent = picture => {
    return `
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                ${picture}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    `
};

const swiperPictureComponent = data => {
    return `
        <div class="swiper-slide" >
            <img src="/upload/${data.fileName}" data-id=${data.id}>
            <button class="deletePicture" data-btn=${data.id}></button>
        </div>
    `
};

const generateSwiperSlides = (fetchData, swiperSlide) => {
    let result = "";

    fetchData.forEach(element => result += swiperSlide(element));
    return result
}

const reloadSite = () => {
    const rootEl = document.querySelector('#root');
    const form = document.querySelector('form');
    const swiper = document.querySelector('.swiper');

    if (rootEl !== null) {
        form.parentNode.removeChild(form);
        swiper.parentNode.removeChild(swiper)
    }
}

const handleUploadClick = event => {
    event.preventDefault();

    console.log(event.timeStamp)
    const target = event.target;
    console.log(target)
    console.log(target.querySelector('input[name="image"]').files[0].name)
    console.log(target.querySelector(`input[name="title"]`).value)

    const formData = new FormData();
    formData.append('image', target.querySelector('input[name="image"]').files[0]);
    formData.append('fileName', target.querySelector('input[name="image"]').files[0].name);
    formData.append('title', target.querySelector(`input[name="title"]`).value);
    formData.append('author', target.querySelector(`input[name="author"]`).value);
    formData.append('uploadDate', event.timeStamp);

    fetchText(formData);

    reloadSite();
    loadEvent();
};

const handleDeleteClick = event => {
    const target = event.target;
    const dataId = target.getAttribute('data-btn');
    const deletePicture = document.querySelector(`[data-id="${dataId}"]`)
    const arr = deletePicture.src.split("/");
    const data = { title: arr[arr.length - 1] }
    console.log(data);

    fetchDeletePic(data);
    reloadSite();
    loadEvent();
}

const fetchText = async object => {
    const fetchData = await fetch('/upload', {
        method: 'POST',
        body: object
    }).then((data) => {
        if (data.status === 200) {
            console.log("FUCK THIS GAY EARTH")
        }
    }).catch(error => {
        console.dir(error)
    })
};

const fetchDeletePic = async object => {
    console.log(object)
    const fetchData = await fetch('/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    });

    return fetchData

};

const loadEvent = async () => {
    const rootEl = document.querySelector('#root');

    setTimeout(async () => {
        const fetchData = await fetch('/data')
        const response = await fetchData.json();

        rootEl.insertAdjacentHTML('afterbegin', formComponent());
        rootEl.insertAdjacentHTML('beforeend', swiperCompontent(generateSwiperSlides(response, swiperPictureComponent)));


        const form = document.querySelector('form');

        const deleteBtns = [...document.querySelectorAll('.deletePicture')]

        const swiper = new Swiper('.mySwiper', {
            slidesPerView: 3,
            spaceBetween: 50,
            effect: "fade",
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true

            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        form.addEventListener('submit', handleUploadClick);

        deleteBtns.forEach(element => element.addEventListener('click', handleDeleteClick));
    }, 200)


};

window.addEventListener('load', loadEvent);