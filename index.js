const container = document.querySelector(".container")
let gridItems = ""

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
    gridItems = document.querySelectorAll(".grid-item")
};


makeRows(16, 16);
// add event listener for hover over grid items

gridItems.forEach(item => {
    item.addEventListener("mouseover", function (e) {
        item.classList.add("draw")
    })

});

// query buttons for clear and color
const clearBtn = document.querySelector("#clear")
// clear sketch field 
function clear() {
    console.log("click")
    gridItems.forEach(item => {
        item.classList.remove("draw")
    })
}

clearBtn.addEventListener("click", clear)

//get solution and apply
const solutions = document.querySelectorAll("option")
