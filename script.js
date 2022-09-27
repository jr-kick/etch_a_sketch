const container = document.getElementById('container');
const slider = document.getElementById('slider');
const squareText = document.getElementById('square_text');
const gapBtn = document.getElementById('button_1');
const colorPicker = document.getElementById('color_picker');
const rainbowBtn = document.getElementById('button_2')

let colorMode = 'default';

let currentColor = 'rgb(255, 0, 0)';

colorPicker.oninput = (e) => setColor(e.target.value);

gapBtn.addEventListener('click', toggleGap);

slider.addEventListener('click', resize);

slider.addEventListener('input', updateSquares);

rainbowBtn.onclick = (e) => chooseColorMode('rainbow');

function fadeAway() {
    if (focus = true) {
        this.style.backgroundColor = 'black';
        this.style.transition = 'background-color 2s';
    };
};

function changeColor() {
    if (focus = true) {
        this.style.backgroundColor = currentColor;
        this.style.transition = 'background-color 0s';
    };
};

function rainbowColorMode() {
    if (focus = true) {
        this.style.backgroundColor = rainbowColor();
        this.style.transition = 'background-color 0s';
    };
};

function setColor(e) {
    resize();
    currentColor = e;
};

function setDefaultState() {

    const squares = slider.value;

    for (let i = 0; i < squares * squares; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mouseout', fadeAway);
    };
    
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    
    squareText.textContent = `${squares} x ${squares}`
};

setDefaultState();

function toggleGap() {
    if (container.style.gap) {
        container.style.removeProperty('gap');
    } else container.style.gap = '1px';
};


function updateSquares() {
    const squares = slider.value;
    squareText.textContent = `${squares} x ${squares}`
};

function resize(e) {
    if (colorMode == 'rainbow') {
        clearContainer();
        setUpContainer('rainbow');
    } else {
        clearContainer();
        setUpContainer(e);
    }
};

function clearContainer() {
    container.innerHTML = '';
};

function setUpContainer(e) {

    const squares = slider.value;

    if (e == 'rainbow') {
        for (let i = 0; i < squares * squares; i++) {
            const div = document.createElement('div');
            container.appendChild(div);
            div.addEventListener('mouseover', rainbowColorMode);
            div.addEventListener('mouseout', fadeAway);
        };
    } else {

    for (let i = 0; i < squares * squares; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mouseout', fadeAway);
    }};

    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
};

function rainbowColor(r, g, b) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    currentColor = `rgb(${r}, ${g}, ${b})`;
    return currentColor;
};

function chooseColorMode(e) {
    if (e == 'rainbow') {
        resize('rainbow');
        colorMode = 'rainbow';
    };
};