

const gridCont = document.querySelector(".grid-container")

const sizeBtn = document.querySelector(".sizeBtn")
const form = document.querySelector(".js-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    getNewSize(document.querySelector(".new-size-input").value)
})

const para = document.querySelector("#log")
getNewSize(16)



function getNewSize(input) {
    if(para.style.display = "block") {
        para.style.display = "none";
    }
    let inputNum = parseInt(input)
    if (inputNum) {
        if (inputNum >= 16 && inputNum <= 100) {
            const boxArr = document.querySelectorAll(".box")
            for (box of boxArr) {
                box.remove()
            }
            for (i = 1; i <= (inputNum**2); i++) {
                let box = document.createElement("div")
                let boxSize = 960/inputNum
                box.classList.add("box")
                box.style.height = `${boxSize}px`
                box.style.width = `${boxSize}px`
                box.addEventListener("mouseenter", colorSquare);
                gridCont.appendChild(box)
               
            }
        }else {
            para.style.display = "block"    
            pReturn()
        }
    }else {
        para.style.display = "block"
        pReturn()   
    }
}

function pReturn() {
    para.textContent = "Sorry, try again. 16-100"
}
function colorSquare(e) {
    console.log(e.target.style.opacity)
    e.target.style.opacity -= '-0.1';
    this.style.backgroundColor = "black"
}
    




