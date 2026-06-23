let holdTimer = null;
let active = false;

function getVideo() {
    return document.querySelector("video");
}

document.addEventListener("mousedown", (e) => {
    const video = getVideo();

    if (!video || e.target !== video) return;

    holdTimer = setTimeout(() => {
        if (video.playbackRate === 2) {
            video.playbackRate = 1;
            active = true;
        }
    }, 300);
});

document.addEventListener("mouseup", () => {
    clearTimeout(holdTimer);

    const video = getVideo();

    if (!video) return;

    if (active) {
        video.playbackRate = 2;
        active = false;
    }
});

document.addEventListener("mouseleave", () => {
    clearTimeout(holdTimer);
});