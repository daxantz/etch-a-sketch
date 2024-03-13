const container = document.querySelector(".container");
const gridChangeBtn = document.querySelector("#gridSize");
const colorPicker = document.querySelector("#colorPicker");
const colorMode = document.querySelector("#color");
const rainbowMode = document.querySelector("#rainbow");
const eraser = document.querySelector("#erase");
const clear = document.querySelector("#clear");


const createCells = (cells) => {
    container.innerHTML= "";

    container.style.setProperty("--rows", cells);
    container.style.setProperty("--columns", cells);
    for(let i = 0; i < cells * cells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
        rainbowMode.addEventListener("click", () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = randomizeColors();
            });
        })
        colorMode.addEventListener("click", () =>{
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = selectColor();
            });
        })
        eraser.addEventListener("click", () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "white";
            });
        })  
    }
}

const randomizeColors = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g}, ${b})`;
}
randomizeColors();

const selectColor = () => {
    let selectedColor = colorPicker.value;
    return selectedColor;
    
}


const getDimensions = () => {
    const dimensionsInput = parseInt(prompt("Enter the dimensions for the grid"))
    if(isNaN(dimensionsInput)){
        alert("invlaid input, must be a number")
    } else if(dimensionsInput > 100) {
        alert("invalid input, dimensions cannot exceed 100")
    } else{
        createCells(dimensionsInput);
    }

    
}



gridChangeBtn.addEventListener("click", () => {
    
    getDimensions();
    
})

clear.addEventListener("click", () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});





