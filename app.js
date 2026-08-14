// ==============================
// ALBUM DATA
// ==============================

const albums = [
    {
        number: "001",
        artist: "Τερμίτες / Αρλετα",
        title: "Τσαι Γιασεμιου / Η Αμαρτωλή Μαρία",
        image: "images/001.webp",
        youtube: "https://music.youtube.com/playlist?list=PLMUwsVAm8oVQ&si=iBqj9Ve_a3-9-frA",
        spotify: "https://open.spotify.com/playlist/3OhdpVcjGyaB2HYckW5nZy?si=9_sAvJhuTpyJDT_fQ0p3gQ"
    },
    {
        number: "002",
        artist: "Iggy Pop",
        title: "Brick by Brick",
        image: "images/002.webp",
        youtube: "https://music.youtube.com/playlist?list=PLZgOZEuYOqlo&si=G0v2FpCKuSeZgyix",
        spotify: "https://open.spotify.com/playlist/7yCVVekzvWkTtpHcdDca77?si=j5da_TJcRoGkuEIiolgzTA"
    },
    {
        number: "003",
        artist: "Eric Burdon and The Animals",
        title: "House Of The Rising Sun",
        image: "images/003.webp",
        youtube: "https://music.youtube.com/playlist?list=PLe_tymhD-nsc&si=82lpoi_5RwJ66WqG",
        spotify: "https://open.spotify.com/playlist/3dk7OjsUoybL7ElebhhUEy?si=5c19b4877d914e17"
    }
];


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