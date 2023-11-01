

const gridCont = document.querySelector(".grid-container")

const sizeBtn = document.querySelector(".sizeBtn")
sizeBtn.addEventListener("click", () => {
    getNewSize(document.querySelector(".new-size-input").value)
})

getNewSize(16)

// function colorChange(x=255) {
//     blackRGB = `rgb(${x}, ${x}, ${x})`
//     // box.style.backgroundColor = (`${blackRGB}`)
//     return blackRGB
// }
// function addMouseover (x) {
//     box.addEventListener("mouseover", () => {
//         let blackGradientNum = x - (255*.1)
//         colorChange(blackGradientNum)
//         box.style.backgroundColor = (`${blackRGB}`)
//         console.log(blackGradientNum)
//     })
// }

function getNewSize(input) {
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
                box.addEventListener("mouseover", colorSquare);

                    // let blackGradientNum = 255 - (255*.1)
                    // colorChange(blackGradientNum)
                    // box.style.backgroundColor = ("pink")
                    // addMouseover(blackGradientNum)
                    
            
                gridCont.appendChild(box)
            }
        }else {
            pReturn()
        }
    }else {
        pReturn()   
    }
}
const para = document.querySelector("#log")
function pReturn() {
    para.textContent = "Sorry, try again. 16-100"
}
function colorSquare() {
    this.style.backgroundColor = "pink";
}
    




