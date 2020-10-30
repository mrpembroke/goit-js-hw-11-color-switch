const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
]

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
}

let timerId = null;
const SWITCH_BODYCOLOR_DELAY = 1000;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchBodyColor() {
    return refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStartBtn() {
    timerId = setInterval(() => switchBodyColor(), SWITCH_BODYCOLOR_DELAY);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}
function onStopBtn() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}


