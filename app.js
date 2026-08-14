// ==============================
// ALBUM DATA
// ==============================

let albums = [];

fetch("albums.json")

    .then(response => response.json())

    .then(data => {

        albums = data;

    })

    .catch(error => {

        console.error("Error loading albums:", error);

    });


// ==============================
// ELEMENTS
// ==============================

const homeScreen = document.getElementById("home-screen");
const albumScreen = document.getElementById("album-screen");

const discoverButton = document.getElementById("discover-button");
const homeButton = document.getElementById("home-button");

const albumNumber = document.getElementById("album-number");
const albumPhoto = document.getElementById("album-photo");
const albumArtist = document.getElementById("album-artist");
const albumTitle = document.getElementById("album-title");

const youtubeLink = document.getElementById("youtube-link");
const spotifyLink = document.getElementById("spotify-link");


// ==============================
// RANDOM ALBUM
// ==============================

function showRandomAlbum() {

    const randomIndex = Math.floor(Math.random() * albums.length);
    const album = albums[randomIndex];

    albumNumber.textContent = album.number;
    albumPhoto.src = album.image;
    albumPhoto.alt = `${album.artist} - ${album.title}`;

    albumArtist.textContent = album.artist;
    albumTitle.textContent = album.title;

    youtubeLink.href = album.youtube;
    spotifyLink.href = album.spotify;

    homeScreen.classList.add("hidden");
    albumScreen.classList.remove("hidden");
}

function showHome() {

    albumScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

}

// ==============================
// BUTTONS
// ==============================

discoverButton.addEventListener("click", showRandomAlbum);

homeButton.addEventListener("click", showHome);