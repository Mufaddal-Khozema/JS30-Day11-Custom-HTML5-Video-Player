const viewer = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('input[type=range]');
const skipButtons = document.querySelectorAll('[data-skip]');
const progressBar = document.querySelector('.progress');
const progressBarSlider = document.querySelector('.progress__filled');


const togglePlay = () => viewer[(viewer.paused) ? 'play' : 'pause']()

const updateButton = () => toggle.textContent = viewer.paused ? '▶' : '||'; 
function skip() {
    viewer.currentTime += parseInt(this.dataset.skip);
}

function handleRanges() {
    viewer[this.name] = this.value;
}

const handleProgress = () => progressBarSlider.style.flexBasis = `${(viewer.currentTime/viewer.duration)*100}%`
function scrub(e) { 
    viewer.currentTime = viewer.duration*(e.offsetX / this.offsetWidth);
};


viewer.addEventListener('click', togglePlay);
viewer.addEventListener('play', updateButton);
viewer.addEventListener('pause', updateButton);
viewer.addEventListener('timeupdate', handleProgress);

progressBar.addEventListener('click', scrub);
ranges.forEach(range => range.addEventListener('change', handleRanges))
ranges.forEach(range => range.addEventListener('mousemove', handleRanges))
skipButtons.forEach(btn => btn.addEventListener('click', skip));
toggle.addEventListener('click', togglePlay);