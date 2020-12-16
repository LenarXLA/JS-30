/* Get Our Elements */
let player = document.querySelector(".player");
let video = player.querySelector(".viewer");
let progress = player.querySelector(".progress");
let progressBar = player.querySelector(".progress__filled");
let toggle = player.querySelector(".toggle");
let skipButtons = player.querySelectorAll("[data-skip]");
let ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
function togglePlay() {
    let method = video.paused ? "play" : "pause";
    video[method]();
}

function updateButton() {
    let icon = this.paused ? "►" : "❚❚";
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up the event listners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);