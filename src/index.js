/**
 * Created by ProvokatorDark on 21.06.2018.
 */
require("./scss/foundation.min.scss");
require("./scss/main.scss");
var Amplitude = require('amplitudejs');
var playlist = [
    {
        "name": "Anvil",
        "artist": "Lorn",
        "album": "Anvil",
        "url": "https://521dimensions.com/songs/LORN - ANVIL.mp3",
        "cover_art_url": "album-art/anvil.jpg"
    },
    {
        "name": "I Came Running",
        "artist": "Ancient Astronauts",
        "album": "We Are to Answer",
        "url": "https://521dimensions.com/songs/ICameRunning-AncientAstronauts.mp3",
        "cover_art_url": "album-art/we-are-to-answer.jpg"
    },
    {
        "name": "First Snow",
        "artist": "Emancipator",
        "album": "Soon It Will Be Cold Enough",
        "url": "https://521dimensions.com/songs/FirstSnow-Emancipator.mp3",
        "cover_art_url": "album-art/soon-it-will-be-cold-enough.jpg"
    },

    {
        "name": "Offcut #6",
        "artist": "Little People",
        "album": "We Are But Hunks of Wood Remixes",
        "url": "https://521dimensions.com/songs/Offcut6-LittlePeople.mp3",
        "cover_art_url": "album-art/we-are-but-hunks-of-wood.jpg"
    },
    {
        "name": "Dusk To Dawn",
        "artist": "Emancipator",
        "album": "Dusk To Dawn",
        "url": "https://521dimensions.com/songs/DuskToDawn-Emancipator.mp3",
        "cover_art_url": "album-art/from-dusk-to-dawn.jpg"
    },
    {
        "name": "Anthem",
        "artist": "Emancipator",
        "album": "Soon It Will Be Cold Enough",
        "url": "https://521dimensions.com/songs/Anthem-Emancipator.mp3",
        "cover_art_url": "album-art/soon-it-will-be-cold-enough.jpg"
    },
    {
        "name": "Radio",
        "artist": "Sputnik",
        "url": "http://audio2.video.ria.ru/voicerushi",
        "cover_art_url": "//www.radioson.ru/saved/radio-sputnik-105-1-volgograd-slushat-online.jpg"
    }
];
var templateHtml =
    `<div class="song amplitude-song-container amplitude-play-pause amplitude-active-song-container amplitude-playing" amplitude-song-index="10">
                <div class="song-now-playing-icon-container">
                    <div class="play-button-container"></div>
                    <img class="now-playing" src="images/17da279de7aaa2bc7e0b6b76e879ab0e.svg">
                </div>
                <div class="song-meta-data">
                    <span class="song-title">Anthem</span>
                    <span class="song-artist">Emancipator</span>
                </div>
                <span class="song-duration">5:40</span>
            </div>`;

document.addEventListener('DOMContentLoaded', function () {
    // document.getElementById("amplitude-right").innerHTML = templateHtml;
    Amplitude.init({
        "songs": playlist
    });
});

exports.Amplitude = Amplitude;
