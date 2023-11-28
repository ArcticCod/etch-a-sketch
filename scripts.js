const gridCont = document.querySelector(".grid-container");

const parent = document.querySelector("#parent");
const picker = new Picker(parent);
const eraserButton = document.querySelector(".eraser");

let eraser = false;

const sizeBtn = document.querySelector(".sizeBtn");
const form = document.querySelector(".js-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getNewSize(document.querySelector(".new-size-input").value);
});

eraserButton.addEventListener("click", () => {
  eraser = eraser ? false : true;
  if (eraser) {
    eraserButton.style.backgroundColor = "#9aba83ff";
  } else {
    eraserButton.style.backgroundColor = "#f7f2d5";
  }
  console.log(eraser);
});

const para = document.querySelector("#log");
getNewSize(24);

picker.onChange = function getColor(color) {
  let selectedColor = color;
  return selectedColor;
};

function getNewSize(input) {
  if ((para.style.display = "block")) {
    para.style.display = "none";
  }
  let inputNum = parseInt(input);
  if (inputNum) {
    if (inputNum >= 16 && inputNum <= 100) {
      const boxArr = document.querySelectorAll(".box");
      for (box of boxArr) {
        box.remove();
      }
      for (i = 1; i <= inputNum ** 2; i++) {
        let box = document.createElement("div");
        let boxSize = 690 / inputNum;
        box.classList.add("box");
        // box.style.height = `${boxSize}px`;
        box.style.width = `${boxSize}px`;
        box.addEventListener("mouseenter", colorSquare);
        box.addEventListener("touchmove", (e) => {
          e.preventDefault();
          colorSquare(e);
        });
        gridCont.appendChild(box);
      }
    } else {
      para.style.display = "block";
      pReturn();
    }
  } else {
    para.style.display = "block";
    pReturn();
  }
}

function pReturn() {
  para.textContent = "Sorry, try again. 16-100";
}
let myColor = "black";
picker.onChange = function getColor(color) {
  myColor = color.rgbaString;
  parent.style.backgroundColor = myColor;
};

function colorSquare(e) {
  if (eraser) {
    e.target.style.opacity = "0.122";
    this.style.backgroundColor = "rgb(184, 162, 129)";
  } else {
    e.target.style.opacity -= "-0.2";
    this.style.backgroundColor = myColor;
  }
}
