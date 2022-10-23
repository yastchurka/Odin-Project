// DEFAULT VALUES
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'white';
let prevButton = null;

//ELEMENTS 
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById("grid"); 
const value = document.getElementById('sizeSlider').innerHTML;
const colorPicker = document.getElementById('color-picker');
//const btnContainer = document.getElementById("wrapper");
//const btns = btnContainer.getElementsByClassName("btn");

//BUTTONS
const colorFillButton = document.getElementById('color-fill');
const clearCanvasButton = document.getElementById('clear-canvas');
const rainbowButton = document.getElementById('rainbow');
const eraserButton = document.getElementById('eraser');
const toggleGridButton = document.getElementById('grid-lines');


//EVENTS
sizeSlider.onchange = (e) => updateSizeValue(e.target.value);
sizeSlider.onmousemove = (e) => changeSizeText(e.target.value);
clearCanvasButton.onclick = () => clearCanvas();
rainbowButton.onclick = () => paint('rainbow');
eraserButton.onclick = () => paint('eraser');
toggleGridButton.onclick = () => toggleGrid();
colorPicker.onchange = () => paint(colorPicker.value);


//FUNCTIONS

//toggle active buttons
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//   });
// }  

function clearCanvas() { 
    const gridElement = document.getElementsByClassName('grid-item');
    for (let i = 0;  i < gridElement.length; i++) { 
        gridElement[i].style.backgroundColor = 'white';
    }
}

function toggleGrid(){
    const gridElement = document.getElementsByClassName('grid-item');
    for (let i = 0;  i < gridElement.length; i++) { 
        gridElement[i].classList.toggle('grid-item-off');
    }
}

function updateSizeValue(value) {
    grid.innerHTML = '';
    createGrid(value);
    paint(colorPicker.value);
}

function changeSizeText(newValue) {
    let text = document.getElementById("sizeValue");
    text.textContent = newValue + " x " + newValue;
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let myGrid = document.createElement("div");
        myGrid.classList.add('grid-item');
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        grid.appendChild(myGrid);
    }
    paint();
}

function paint(paint_mode) {
    const gridItems = document.querySelectorAll('#grid > div');
    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            if (paint_mode == 'rainbow') {
                    e.target.style.backgroundColor = rainbow_color();
            } else if (paint_mode == 'eraser') {
                    e.target.style.backgroundColor = 'white';
            }
            else {
                    e.target.style.backgroundColor = `${paint_mode}`;
            }
        });
    });
}

function rainbow_color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    paint(colorPicker.value);
}


// style the design
    // style the color square
// DONE fix the painting problem
// DONE fix the eraser changing border thickness problem 
// DONE change the grid color
// add shading function
// add lighten function
// DONE add toggle gridlines function
// build a color picker
// fix the slider - it doesnt get updated on the page refresh
// dont reaload the whole page after CLEAR CANVAS and don't change the grid size, but simply remove all its content
