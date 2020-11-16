function playKickDrum(){
    var kickDrum = new Audio();
    kickDrum.src="kick.wav";
    kickDrum.play();
}
document.getElementById("kickDrum").onclick = playKickDrum;

function playSnare(){
    var snare = new Audio();
    snare.src="snare.wav";
    snare.play();
}
document.getElementById("snare").onclick = playSnare;

function playSplash(){
    var splash = new Audio();
    splash.src="splash.wav";
    splash.play();
}
document.getElementById("splash").onclick = playSplash;