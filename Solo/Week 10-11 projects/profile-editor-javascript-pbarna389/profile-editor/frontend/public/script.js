const navbarComponent = profile => {
    return `
    <nav>
        <div class="navbar-home"></div>
        <div class="navbar-link-cont">
            <div>Dashboard</div>
            <div>Account</div>
            <div>Reports</div>
            <div class="active">Settings</div>
            <div>Help & Support</div>
        </div>
        <div class="navbar-profile">
            <p>${profile.firstName} ${profile.surname}</p>
            <img src="/profilepic">
        </div>
    </nav>
    `
}

const formComponent = profile => {
    return `
    <section>
        <div class="img-container">
                <h4>Profile</h4>
                <div class="gradient-box">
                    <img src="/profilepic">
                </div>
                <p class="name">${profile.firstName} ${profile.surname}</p>
                <div class="gradient-box">
                <img class="preview" src="/placeholder" class="picture-preview hidden">
                </div>
                <h4>Your new image preview</h4>
            <div class="buttons">
                <button onclick="document.getElementById('picture').click(); return false">UPLOAD NEW AVATAR</button>
                <input type="file" id="picture" name="picture" style="visibility:hidden; width: 0; height:0" required />
                <button class="input delete">DELETE</button>
            </div>
            <div>
                <h2>Biography</h2>
                <p>${profile.introduction}</p>
            </div>
        </div>
        <div class="form-cont">
            <form action="/" method="post" enctype="multipart/form-data">
                <div class="basic-info">
                    <h4>Basic info</h4>
                </div>
                <div class="form-names">
                    <div class="fullname">
                        <label for="firstName">First name</label>
                        <input type="text" name="firstName" id="" value=${profile.firstName} />
                    </div>
                    <div class="fullname">
                        <label for="surname">last name</label>
                        <input type="text" name="surname" id="" value=${profile.surname} />
                    </div>
                </div>
                
                <label for="country">Country</label>
                <input type="text" name="country" id="" value=${profile.country} />
                
                <label for="zip">ZIP code</label>
                <input type="text" name="zip" id="" value=${profile.zip} />

                <label for="street">Street</label>
                <input type="text" name="street" id="" value=${profile.street} />

                <label for="houseNumber">House Number</label>
                <input type="text" name="houseNumber" id="" value=${profile.houseNumber} />

                <label for="introduction">Biography</label>
                <textarea name="introduction" id="" value=>${profile.introduction}</textarea>
            </form>
            <button class="input save" type="submit">SAVE</button>
                

        </div>
    </section>
    `
};

const fetchDataPost = async data => {
    const fetchData = await fetch('/', {
        method: 'POST',
        body: data
    });

    return fetchData;
}

const fetchPicturePost = async data => {
    const fetchData = await fetch('/profilepic', {
        method: 'POST',
        body: data
    });

    return fetchData;
}

const reload = () => {
    const rootEl = document.querySelector('#root')
    const navBar = document.querySelector('nav')
    const section = document.querySelector('section');

    if (rootEl !== null) {
        navBar.parentNode.removeChild(navBar)
        section.parentNode.removeChild(section)
    }
}

const handleSave = async e => {
    e.preventDefault();

    const inputs = [...document.querySelectorAll("input")];

    // let obj = {}
    // inputs.forEach(element => element.getAttribute('type') !== "submit" ? obj[element.getAttribute('name')] = element.value : element = element);
    const formData = new FormData();
    const pictureData = new FormData();

    formData.append('firstName', document.querySelector('input[name="firstName"]').value);
    formData.append('surname', document.querySelector('input[name="surname"]').value)
    formData.append('country', document.querySelector('input[name="country"]').value)
    formData.append('zip', document.querySelector('input[name="zip"]').value)
    formData.append('street', document.querySelector('input[name="street"]').value)
    formData.append('houseNumber', document.querySelector('input[name="houseNumber"]').value)
    formData.append('introduction', document.querySelector('textarea[name="introduction"]').value)
    formData.append('picture', "profile.jpg")
    if (document.querySelector('input[name="picture"]').files[0] !== undefined)
        pictureData.append('picture', document.querySelector('input[name="picture"]').files[0])

    fetchDataPost(formData)
    fetchPicturePost(pictureData)
    reload();
    init();
};

const fetchDeleteData = async () => {
    const fetchData = await fetch('/', {
        method: "DELETE"
    })

    console.log(fetchData);
    return fetchData
}

const fetchDeletePicture = async () => {
    const fetchData = await fetch('/profilepic', {
        method: "DELETE"
    })

    console.log(fetchData);
    return fetchData
}

const handleDeleteClick = () => {
    fetchDeleteData();
    fetchDeletePicture()
    reload();
    setTimeout(() => {
        init();
    }, 1000)
}

const imgUpload = async () => {
    const imgInput = document.querySelector(`input[name="picture"]`);
    imgInput.addEventListener('change', event => {

        let selectedIMG = event.target.files[0];
        // console.log(selectedIMG);

        const reader = new FileReader();

        reader.addEventListener("load", () => {
            document.querySelector('.preview').src = reader.result;
        });

        const imgData = reader.readAsDataURL(selectedIMG);
    })
}

const init = async () => {
    const rootEl = document.querySelector('#root');


    setTimeout(async () => {
        const baseState = await fetch('/profile');
        const profileData = await baseState.json();
        rootEl.insertAdjacentHTML("beforeend", navbarComponent(profileData));
        rootEl.insertAdjacentHTML("beforeend", formComponent(profileData));

        const saveButton = document.querySelector('.save');
        const deleteButton = document.querySelector('.delete')

        imgUpload();

        saveButton.addEventListener('click', handleSave);
        deleteButton.addEventListener('click', handleDeleteClick);

    }, 300)

};

window.addEventListener('load', init);