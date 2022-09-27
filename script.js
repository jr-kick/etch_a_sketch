const container = document.getElementById('container');
const slider = document.getElementById('slider');
const squareText = document.getElementById('square_text');
const gapBtn = document.getElementById('button_1');
const colorPicker = document.getElementById('color_picker');

let currentColor = '#FF0000';

colorPicker.oninput = (e) => setColor(e.target.value);

gapBtn.addEventListener('click', toggleGap);

slider.addEventListener('click', resize);

slider.addEventListener('input', updateSquares);

function fadeAway() {
    if (focus = true) {
        this.style.backgroundColor = 'black';
        this.style.transition = 'background-color 2s'
    };
};

function changeColor() {
    if (focus = true) {
        this.style.backgroundColor = currentColor;
        this.style.transition = 'background-color 0s'
    };
};

function setColor(e) {
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

function resize() {
    clearContainer();
    setUpContainer();
};

function clearContainer() {
    container.innerHTML = '';
};

function setUpContainer() {

    const squares = slider.value;

    for (let i = 0; i < squares * squares; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mouseout', fadeAway);
    };

    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
};
