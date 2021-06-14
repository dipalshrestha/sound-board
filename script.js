const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach( sound => {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    button= document.getElementById("buttons");
    button.appendChild(btn);

    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
    })
})

function stopSongs() {
    sounds.forEach( sound => {
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime = 0;
    })
}