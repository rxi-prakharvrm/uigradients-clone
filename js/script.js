const gradients = [
  {
    id: 0,
    name: "J Shine",
    color: ["#12c2e9", "#c471ed", "#f64f59"],
  },
  {
    id: 1,
    name: "summer",
    color: ["#2193b0", "#6dd5ed", "#6dd5ff"],
  },
  {
    id: 2,
    name: "Moonlit Asteroid",
    color: ["#0F2027", "#203A43", "#2C5364"],
  },
  {
    id: 3,
    name: "Evening Sunshine",
    color: ["#b92b27", "#1565C0"],
  },
  {
    id: 4,
    name: "Evening Star",
    color: ["#b92b27", "#1565C0", "#7293ee", "#e873ee"],
  },
  {
    id: 5,
    name: "Sherbert",
    color: ["#f79d00", "#64f38c"],
  },
  {
    id: 6,
    name: "Jupiter",
    color: ["#ffd89b", "#19547b"],
  },
  {
    id: 7,
    name: "FireWatch",
    color: ["#cb2d3e", "#ef473a"],
  },
  {
    id: 8,
    name: "Hydrogen",
    color: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
  },
  {
    id: 9,
    name: "Jodhpur",
    color: ["#9cecfb", "#65c7f7", "#0052D4", "#0052ee"],
  },
];

// Actual Code
const gradientCtr = document.querySelector(".gradient-ctr");
const gradientName = document.querySelector(".gradient-name");
const colorCodesCtr = document.querySelector(".color-codes-ctr");
const gradientNextBtn = document.querySelector(".gradient-next-btn");
const gradientPreviousBtn = document.querySelector(".gradient-previous-btn");
const rotateGradientBtn = document.querySelector(".rotate-gradient");

//creating elements
var colorCodes;
var colorPreview;
var colorCode;

function creatingColorCodeCtr() {
  colorCodeCtr = document.createElement("div");
  colorPreview = document.createElement("span");
  colorCode = document.createElement("span");

  colorCodeCtr.classList.add("color-code-ctr");
  colorPreview.classList.add("color-preview");
  colorCode.classList.add("color-code");

  colorCodesCtr.appendChild(colorCodeCtr);
  colorCodeCtr.appendChild(colorPreview);
  colorCodeCtr.appendChild(colorCode);
}

// Default Gradient
const defaultColor = [];
var vPosition = "bottom"; //top bottom
var hPosition = "right"; // right left
var gradientColor = `linear-gradient(to ${vPosition} ${hPosition}`;

gradientName.innerHTML = gradients[0].name;
for (let i = 0; i < 3; i++) {
  // Creating Color Code Container
  creatingColorCodeCtr();

  // Setting default Color Codes
  colorPreview.style.backgroundColor = gradients[0].color[i];
  colorCode.innerHTML = gradients[0].color[i];
  defaultColor.push(gradients[0].color[i]);

  // Copy Hex color code
  colorCode.addEventListener("click", function () {
    navigator.clipboard.writeText(this.innerHTML);
    alert(`${this.innerHTML} Copied!`);
  });

  gradientColor += `, ${defaultColor[i]}`;
  if (i == 2) {
    gradientColor += `)`;
  }
}

gradientCtr.style.backgroundImage = gradientColor;

// Changing gradient, color preview, color code
function changeColors() {
  const colorArr = [];
  var gradientColor = `linear-gradient(to bottom right`;
  const selectedGradient = gradients.find((gradient) => {
    return gradient.id === counter;
  });

  // Emptying colorCodesCtr Element
  colorCodesCtr.innerHTML = "";

  gradientName.innerHTML = selectedGradient.name;

  // Set colorPreview, colorCode and gradientColor
  for (let i = 0; i < selectedGradient.color.length; i++) {
    creatingColorCodeCtr();

    colorPreview.style.backgroundColor = selectedGradient.color[i];
    colorCode.innerHTML = selectedGradient.color[i];
    colorArr.push(selectedGradient.color[i]);

    // Copy Hex color code
    colorCode.addEventListener("click", function () {
      navigator.clipboard.writeText(this.innerHTML);
      alert(`${this.innerHTML} Copied!`);
    });

    // Generating Background Image linear gradient for gradient ctr through for loop
    gradientColor += `, ${colorArr[i]}`;
    if (i === selectedGradient.color.length - 1) {
      gradientColor += `)`;
    }
  }
  gradientCtr.style.backgroundImage = gradientColor;
}

var counter = 0;
var gradientsLength = gradients.length - 1;

// Next Gradient Button Functionality
gradientNextBtn.addEventListener("click", () => {
  if (counter++ === gradientsLength) {
    counter = 0;
  }
  changeColors();
});

// Previous Gradient Button functionality
gradientPreviousBtn.addEventListener("click", () => {
  // counter--;
  if (counter-- === 0) {
    counter = gradientsLength;
  }
  changeColors();
});
