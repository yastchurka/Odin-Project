let value = document.getElementById('rangeValue').innerHTML;
let slider = document.getElementById('slider');

//console.log(value);
slider.addEventListener('click', event => {
    console.log(oninput.innerHTML);
});

//create a grid
function createGrid(size) {
    let grd = document.getElementById("grid"); 
    //loop over the given size and create divs respectively
    for (let i = 0; i < size * size; i++) {
        let myGrid = document.createElement("div");
        myGrid.classList.add('grid-item');
        //that's the heart of the program. Respectively create columns and rows in the grid
        grd.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grd.style.gridTemplateRows = `repeat(${size}, 1fr)`

        //create hover effect
        myGrid.addEventListener("mouseenter", event => {
            myGrid.style.backgroundColor = 'white';
        })
        grd.appendChild(myGrid);
    }
}

createGrid(value);



