const container = document.querySelector(".container")
let gridItems = ""

// initialize 16px x 16px grid
makeRows(16, 16);

//start button
const startBtn = document.querySelector("#start").addEventListener("click", hover)


// creates grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
    gridItems = document.querySelectorAll(".grid-item")
};

// query button for clear
const clearBtn = document.querySelector("#clear").addEventListener("click", clear)

// clear function
function clear() {
    gridItems.forEach(item => {
        item.classList.remove("draw")
    })
}

//get solution select
const solution = document.querySelector("#solution")
// listen to change events and apply
solution.addEventListener("change", (e) => {
    removeGrid()
    makeRows(e.target.value, e.target.value)
    hover()
})

// remove grid function
function removeGrid() {
    for (const grid of gridItems) {
        grid.remove()
    }
}
// start drawing function
function hover() {
    gridItems.forEach(item => {
        item.addEventListener("mouseover", function (e) {
            item.classList.add("draw")
        })

    });

}