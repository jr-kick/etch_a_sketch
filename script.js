const container = document.getElementById('container');
const slider = document.getElementById('slider');

slider.addEventListener('click', resize);

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
    };

    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
};

