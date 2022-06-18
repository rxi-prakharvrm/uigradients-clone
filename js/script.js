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
    name: "Evening Sunshine",
    color: ["#b92b27", "#1565C0", "#7293ee", "#e873ee"],
  },
];

// Actual Code
const gradientCtr = document.querySelector(".gradient-ctr");
const gradientName = document.querySelector(".gradient-name");
const colorCodesCtr = document.querySelector(".color-codes-ctr");
const colorPreview = document.querySelectorAll(".color-preview");
const colorCode = document.querySelectorAll(".color-code");
const gradientNextBtn = document.querySelector(".gradient-next-btn");
const gradientPreviousBtn = document.querySelector(".gradient-previous-btn");

var counter = 0;
var gradientsLength = gradients.length - 1;

// Default Gradient
const defaultColor = [];

gradientName.innerHTML = gradients[0].name;

for (let i = 0; i < 3; i++) {
  colorPreview[i].style.backgroundColor = gradients[0].color[i];
  colorCode[i].innerHTML = gradients[0].color[i];
  defaultColor.push(gradients[0].color[i]);
}

gradientCtr.style.backgroundImage = `linear-gradient(to bottom right, ${defaultColor[0]}, ${defaultColor[1]}, ${defaultColor[2]}`;

// Changing gradient, color preview, color code
function changeColors() {
  const colorArr = [];
  const selectedGradient = gradients.find((gradient) => {
    return gradient.id === counter;
  });
  gradientName.innerHTML = selectedGradient.name;
  for (let i = 0; i < selectedGradient.color.length; i++) {
    colorPreview[i].style.backgroundColor = selectedGradient.color[i];
    colorCode[i].innerHTML = selectedGradient.color[i];
    colorArr.push(selectedGradient.color[i]);
  }
  if (colorArr.length === 2) {
    gradientCtr.style.backgroundImage = `linear-gradient(to bottom right, ${colorArr[0]}, ${colorArr[1]}`;
  } else if (colorArr.length === 3) {
    gradientCtr.style.backgroundImage = `linear-gradient(to bottom right, ${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}`;
  } else if (colorArr.length === 4) {
    gradientCtr.style.backgroundImage = `linear-gradient(to bottom right, ${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}, ${colorArr[3]}`;
  }
}

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

// Copy color codes
// const copyCode = () => {
//   navigator.clipboard.writeText(this.textContent);
//   console.log(this.innerHTML);
// };
