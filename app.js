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
        randomIndex = Math.floor(Math.random() * albums.length);
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
        console.error("Error loading albums:", error);
    });


// ==============================
// ELEMENTS
// ==============================

const homeScreen = document.getElementById("home-screen");
const aboutScreen = document.getElementById("about-screen");
const albumScreen = document.getElementById("album-screen");

const discoverButton = document.getElementById("discover-button");
const homeButton = document.getElementById("home-button");

const aboutButton = document.getElementById("about-button");
const aboutHomeButton = document.getElementById("about-home-button");

const contactLinkEn = document.getElementById("contact-link-en");
const contactLinkEl = document.getElementById("contact-link-el");

const englishButton = document.getElementById("english-button");
const greekButton = document.getElementById("greek-button");

const aboutEnglishButton = document.getElementById("about-english-button");
const aboutGreekButton = document.getElementById("about-greek-button");

const homeText = document.getElementById("home-text");

const aboutEnglishText = document.getElementById("about-english-text");
const aboutGreekText = document.getElementById("about-greek-text");

const albumNumber = document.getElementById("album-number");
const albumPhoto = document.getElementById("album-photo");
const albumArtist = document.getElementById("album-artist");
const albumTitle = document.getElementById("album-title");

const youtubeLink = document.getElementById("youtube-link");
const spotifyLink = document.getElementById("spotify-link");


// ==============================
// LANGUAGE
// ==============================

let currentLanguage = "en";

function setLanguage(language) {

    currentLanguage = language;

    if (language === "en") {

        document.documentElement.lang = "en";

        homeText.innerHTML = `
            <span>Roky was a photographer who lived in Dikaia (Greece).</span>
            <span>During an artistic residence in the village, I had access to his collection of cassette tapes. I photographed them to keep his music archive alive.</span>
            <span>I created this site so you can get a random recommendation from Roky.</span>
        `;

        discoverButton.textContent =
            "DISCOVER ROKY'S RECOMMENDATION";

        aboutEnglishText.classList.remove("hidden");
        aboutGreekText.classList.add("hidden");

        englishButton.style.textDecoration = "none";
        greekButton.style.textDecoration = "underline";

        aboutEnglishButton.style.textDecoration = "none";
        aboutGreekButton.style.textDecoration = "underline";

    } else {

        document.documentElement.lang = "el";

        homeText.innerHTML = `
            <span>Ο Roky ήταν φωτογράφος και ζούσε στη Δίκαια (Έβρος).</span>
            <span>Κατά τη διάρκεια μιας καλλιτεχνικής διαμονής στο χωριό, είχα πρόσβαση στη συλλογή κασετών του. Τις φωτογράφισα για να κρατήσω ζωντανό το μουσικό του αρχείο.</span>
            <span>Δημιούργησα αυτόν τον ιστότοπο ώστε να μπορείς να λάβεις μια τυχαία μουσική πρόταση από τον Roky.</span>
        `;

        discoverButton.textContent =
            "ΑΝΑΚΑΛΥΨΕ ΤΗΝ ΠΡΟΤΑΣΗ ΤΟΥ ROKY";

        aboutEnglishText.classList.add("hidden");
        aboutGreekText.classList.remove("hidden");

        englishButton.style.textDecoration = "underline";
        greekButton.style.textDecoration = "none";

        aboutEnglishButton.style.textDecoration = "underline";
        aboutGreekButton.style.textDecoration = "none";
    }
}


// ==============================
// SHOW HOME
// ==============================

function showHome() {

    aboutScreen.classList.add("hidden");
    albumScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

    prepareNextAlbum();
}


// ==============================
// SHOW ABOUT
// ==============================

function showAbout() {

    homeScreen.classList.add("hidden");
    albumScreen.classList.add("hidden");

    aboutScreen.classList.remove("hidden");
}


// ==============================
// RANDOM ALBUM
// ==============================

function showRandomAlbum() {

    if (!nextAlbum) return;

    const album = nextAlbum;

    currentAlbum = album;

    albumNumber.textContent = album.number;

    albumPhoto.src = album.image;

    albumPhoto.alt =
        `${album.artist} - ${album.title}`;

    albumArtist.textContent = album.artist;

    albumTitle.textContent = album.title;

    if (album.youtube) {

        youtubeLink.href = album.youtube;
        youtubeLink.style.display = "";

    } else {

        youtubeLink.href = "#";
        youtubeLink.style.display = "none";
    }

    if (album.spotify) {

        spotifyLink.href = album.spotify;
        spotifyLink.style.display = "";

    } else {

        spotifyLink.href = "#";
        spotifyLink.style.display = "none";
    }

    homeScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");

    albumScreen.classList.remove("hidden");

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

aboutButton.addEventListener(
    "click",
    showAbout
);

aboutHomeButton.addEventListener(
    "click",
    showHome
);

contactLinkEn.addEventListener(
    "click",
    () => {
        // Contact page will be added next.
        console.log("Contact page coming next.");
    }
);

contactLinkEl.addEventListener(
    "click",
    () => {
        // Contact page will be added next.
        console.log("Contact page coming next.");
    }
);

englishButton.addEventListener(
    "click",
    () => setLanguage("en")
);

greekButton.addEventListener(
    "click",
    () => setLanguage("el")
);

aboutEnglishButton.addEventListener(
    "click",
    () => setLanguage("en")
);

aboutGreekButton.addEventListener(
    "click",
    () => setLanguage("el")
);


// ==============================
// INITIAL LANGUAGE
// ==============================

setLanguage("en");