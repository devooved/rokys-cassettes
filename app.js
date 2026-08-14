// ==============================
// ALBUM DATA
// ==============================

const albums = [
    {
        number: "001",
        artist: "Artist One",
        title: "Album One",
        image: "images/001.webp",
        youtube: "#",
        spotify: "#"
    },
    {
        number: "002",
        artist: "Artist Two",
        title: "Album Two",
        image: "images/002.webp",
        youtube: "#",
        spotify: "#"
    },
    {
        number: "003",
        artist: "Artist Three",
        title: "Album Three",
        image: "images/003.webp",
        youtube: "#",
        spotify: "#"
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