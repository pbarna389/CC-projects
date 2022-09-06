// THE MOVIE

const apocalypseNow = {
    title: "Apocalypse Now",
    length: 240,
    director: "Francis Ford Coppola",
    kidFriendlyness: false
};

const protagonist = {
    characterName: "Colonel Walter E. Kurtz",
    actorName: "Marlon Brando",
    hairStyle: "bald",
    fitness: "fit",
};

const antagonist = {
    characterName: "The System",
    actorName: "The System",
    fitness: "overweight"
};

const myFavouriteMovie = {
    apocalypseNow,
    actors: [protagonist, antagonist]
};

// console.log(Object.values(apocalypseNow));
// console.log(Object.keys(apocalypseNow));
// console.log(Object.entries(apocalypseNow));

console.log(myFavouriteMovie);
// console.log(Object.values(myFavouriteMovie));
// console.log(Object.keys(myFavouriteMovie));
// console.log(Object.entries(myFavouriteMovie))

// FACEBOOK

const friend01 = {
    realName: "Zoli",
    job: "programmer",
}

const friend02 = {
    realName: "Krisz",
    job: "forklifter"
}

const drStrangelove = {
    title: "Dr. Strangelove",
    length: 144,
    director: "Kubric, Stanley"
}

const duneMessiah = {
    author: "Frank Herbert",
    length: 220,
}

const catsCradle = {
    author: "Kurt Vonnegut",
    length: 190,
}

const myProfile = {
    userName: "pbarna389",
    friends: [friend01, friend02],
    likes: [myFavouriteMovie, drStrangelove],
    emailAddress: "placeholder@wheresmyjob.com",
    likes: {
        books: [
            { duneMessiah }, { catsCradle }
        ],
        albums: [{
            "albumName": "10.000 days",
            "bandName": "Tool",
            "trackNum": 11
        },
        {
            "albumName": "Tekeli-li",
            "bandName": "The Great Old Ones",
            "trackNum": 7
        },
        {
            "albumName": "Exmilitary",
            "bandName": "Death Grips",
            "trackNum": 10
        }
        ],
    },
    pictures: 20,
    birthPlace:
    {
        "country": "Hungary",
        "city": "Budapest"
    }
};

console.log(myProfile.books)

// THE THING

const myGuitar = {
    manufacturer: "Jackson",
    modellName: "ICJ1961060",
    color: "Black",
    countryFrom: "Indonesia",
    pickUpChanger: "3way",
    stringNumber: 7,
    stringType: {
        "manufacturer": "Ernie Ball",
        "series": "Cobalt",
        "stringE": 0.01,
        "stringB": 0.013,
        "stringG": 0.017,
        "stringD": 0.026,
        "stringA": 0.036,
        "stringLowE": 0.046,
        "stringLowB": 0.056
    },
    top: "Mahagony",
    neck: "Rosewood",
    bridge: {
        "name": "Jackson tailbridge",
        "type": "Body-thru"
    },
    pickUps: [
        {
            "part": "neck",
            "name": "Sentinel",
            "manufacturer": "Seymour Duncan",
            "type": "Passive",
            "output": "high",
        },
        {
            "part": "bridge",
            "name": "Nazgul",
            "manufacturer": "Seymour Duncan",
            "type": "Passive",
            "output": "high",
        }
    ],
    tuners:
    {
        "manufacturer": "Jackson",
        "type": "Locking tuners"
    },
    potMeters: [
        {
            "brand": "Jackson",
            "type": "Volume",
            "pushPull": false,
        },
        {
            "brand": "Jackson",
            "type": "Volume",
            "pushPull": false,
        },
        {
            "brand": "Jackson",
            "type": "Tone",
            "pushPull": false,
        },
    ],
    strapHolder: "Typical"
};

myGuitar.pickUps.forEach(element => {
    console.log(element)
});

// console.log(myGuitar);
// console.log(myGuitar);
// console.log(Object.values(myGuitar));
// console.log(Object.entries(myGuitar));