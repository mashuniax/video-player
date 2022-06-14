let player;
const playBtn= document.getElementById("play_button_lg");
const play= document.getElementById("play_button");
const pause= document.getElementById("pause_button");
const vol= document.getElementById("vol_img");
const mute= document.getElementById("mute_img");
const rangeVol = document.getElementById("change_vol")



const video = document.getElementById("video_player")
const progress = document.getElementById("progress");

document.addEventListener("DOMContentLoaded", function() {
        startplayer(); 
    }, false);

function startplayer() {
    player = document.getElementById('video_player');
    player.controls = false;
}
function play_vid_btn() {
    player.play();
    
    if (playBtn.style.display === "none") {

        playBtn.style.display = "block";
        play.style.display = "block";
        pause.style.display = "none";
    } else {
        playBtn.style.display = "none";
        play.style.display = "none";
        pause.style.display = "block";

    }
}
function play_vid() {
    player.play();
    
    if (play.style.display === "none") {
        play.style.display = "block";
        playBtn.style.display = "block";
        pause.style.display = "none";

    } else {
        play.style.display = "none";
        playBtn.style.display = "none";
        pause.style.display = "block";
    }
}
function pause_vid() {
    player.pause();
    if (pause.style.display === "none") {
        pause.style.display = "block";
        playBtn.style.display = "none";
        play.style.display = "none";
    } else {
        pause.style.display = "none";
        playBtn.style.display = "block";
        play.style.display = "block";
    }
}

function change_vol() {
    player.volume = rangeVol.value;
    if (rangeVol.value == 0) {
        mute.style.display = "block";
        vol.style.display = "none";
        player.muted = false;
    } else {
        mute.style.display = "none";
        vol.style.display = "block";
        player.muted = false;
        player.vol = rangeVol.value;
    }
}

function volume_btn() {
    if (vol.style.display === "none") {
        vol.style.display = "block";
        mute.style.display = "none";
        player.muted = false;
        player.vol = rangeVol.value;
    } else {
        vol.style.display = "none";
        mute.style.display = "block";
        player.muted = true;
    }
}
function mute_btn() {
    if (mute.style.display === "none") {
        mute.style.display = "block";
        vol.style.display = "none";
        player.muted = true;
    } else {
        mute.style.display = "none";
        vol.style.display = "block";
        player.muted = false;
        player.vol = rangeVol.value;
    }
}


function progressFunc() {
  setInterval(function () {
    progress.value = Math.round((video.currentTime / video.duration) * 100);
    if (progress.value == 100) {
        play.style.display = "block";
        playBtn.style.display = "block";
        pause.style.display = "none";
    }
  });
  

}

progressFunc();
