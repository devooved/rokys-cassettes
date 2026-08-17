// ==============================
// LANGUAGE
// ==============================

const translations = {
    en: {
        homeText: [
            "Roky was a photographer who lived in Dikaia (Greece).",
            "During an artistic residence in the village, I had access to his collection of cassette tapes. I photographed them to keep his music archive alive.",
            "I created this site so you can get a random recommendation from Roky."
        ],
        discover: "DISCOVER ROKY'S RECOMMENDATION",
        home: "← HOME",
        youtube: "YOUTUBE",
        spotify: "SPOTIFY"
    },

    el: {
        homeText: [
            "Ο Ρόκυ ήταν φωτογράφος που ζούσε στη Δίκαια (Έβρος).",
            "Κατά τη διάρκεια μιας καλλιτεχνικής διαμονής στο χωριό, είχα πρόσβαση στη συλλογή του από κασέτες. Τις φωτογράφισα για να κρατήσω ζωντανό το μουσικό του αρχείο.",
            "Δημιούργησα αυτή την ιστοσελίδα για να μπορείς να πάρεις μια τυχαία μουσική πρόταση από τον Ρόκυ."
        ],
        discover: "ΑΝΑΚΑΛΥΨΕ ΤΗΝ ΠΡΟΤΑΣΗ ΤΟΥ ΡΟΚΥ",
        home: "← ΑΡΧΙΚΗ",
        youtube: "YOUTUBE",
        spotify: "SPOTIFY"
    }
};

let currentLanguage =
    localStorage.getItem("rokys-language") || "en";


// ==============================
// LANGUAGE ELEMENTS
// ==============================

const englishButton =
    document.getElementById("english-button");

const greekButton =
    document.getElementById("greek-button");

const homeText =
    document.getElementById("home-text");


// ==============================
// APPLY LANGUAGE
// ==============================

function applyLanguage(language) {

    const translation = translations[language];

    if (!translation) return;

    currentLanguage = language;

    localStorage.setItem(
        "rokys-language",
        language
    );

    const textSpans =
        homeText.querySelectorAll("span");

    textSpans.forEach(
        (span, index) => {
            span.textContent =
                translation.homeText[index];
        }
    );

    discoverButton.textContent =
        translation.discover;

    homeButton.textContent =
        translation.home;

    youtubeLink.textContent =
        translation.youtube;

    spotifyLink.textContent =
        translation.spotify;

    englishButton.style.textDecoration =
        language === "en"
            ? "underline"
            : "none";

    greekButton.style.textDecoration =
        language === "el"
            ? "underline"
            : "none";
}


// ==============================
// ALBUM DATA
// ==============================

let albums = [];
let nextAlbum = null;
let currentAlbum = null;

function prepareNextAlbum() {

    if (albums.length === 0) return;

    let randomIndex;

    do {
        randomIndex =
            Math.floor(
                Math.random() * albums.length
            );

    } while (
        albums.length > 1 &&
        albums[randomIndex] === currentAlbum
    );

    nextAlbum = albums[randomIndex];

    const image = new Image();
    image.src = nextAlbum.image;
}

fetch("albums.json")
    .then(response => response.json())
    .then(data => {

        albums = data;

        prepareNextAlbum();
    })
    .catch(error => {

        console.error(
            "Error loading albums:",
            error
        );
    });


// ==============================
// ELEMENTS
// ==============================

const homeScreen =
    document.getElementById("home-screen");

const albumScreen =
    document.getElementById("album-screen");

const discoverButton =
    document.getElementById("discover-button");

const homeButton =
    document.getElementById("home-button");

const albumNumber =
    document.getElementById("album-number");

const albumPhoto =
    document.getElementById("album-photo");

const albumArtist =
    document.getElementById("album-artist");

const albumTitle =
    document.getElementById("album-title");

const youtubeLink =
    document.getElementById("youtube-link");

const spotifyLink =
    document.getElementById("spotify-link");


// ==============================
// RANDOM ALBUM
// ==============================

function showRandomAlbum() {

    if (!nextAlbum) return;

    const album = nextAlbum;

    currentAlbum = album;

    albumNumber.textContent =
        album.number;

    albumPhoto.src =
        album.image;

    albumPhoto.alt =
        `${album.artist} - ${album.title}`;

    albumArtist.textContent =
        album.artist;

    albumTitle.textContent =
        album.title;

    if (album.youtube) {

        youtubeLink.href =
            album.youtube;

        youtubeLink.style.display =
            "";

    } else {

        youtubeLink.href =
            "#";

        youtubeLink.style.display =
            "none";
    }

    if (album.spotify) {

        spotifyLink.href =
            album.spotify;

        spotifyLink.style.display =
            "";

    } else {

        spotifyLink.href =
            "#";

        spotifyLink.style.display =
            "none";
    }

    homeScreen.classList.add(
        "hidden"
    );

    albumScreen.classList.remove(
        "hidden"
    );
}


function showHome() {

    albumScreen.classList.add(
        "hidden"
    );

    homeScreen.classList.remove(
        "hidden"
    );

    prepareNextAlbum();
}


// ==============================
// BUTTONS
// ==============================

discoverButton.addEventListener(
    "click",
    showRandomAlbum
);

homeButton.addEventListener(
    "click",
    showHome
);

englishButton.addEventListener(
    "click",
    () => applyLanguage("en")
);

greekButton.addEventListener(
    "click",
    () => applyLanguage("el")
);


// ==============================
// INITIAL LANGUAGE
// ==============================

applyLanguage(
    currentLanguage
);