setInterval(
  function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+randomColor;
  },1000);


// STEP 1: VARIABLES
const colors = ["#16232E", "#164C45", "#CC8D1A", "#E3C75F", "#BDA523"];

const newDate = new Date();
const currentDate = {
  year: newDate.getFullYear(),
  month: newDate.getMonth(),
  day: newDate.getDay(),
  hour: newDate.getHours(),
  minute: newDate.getMinutes(),
  seconds: newDate.getSeconds(),
};

const stepsArray = [
  currentDate.year,
  currentDate.month,
  currentDate.day,
  currentDate.hour,
  currentDate.minute,
  currentDate.seconds,
];

// STEP 2: DOM REFERENCES
const bodyElement = document.querySelector("div#app");

// STEP 3: FUNCTIONS
const createDivElement = () => {
  return document.createElement("div");
};

const createParagraphElement = () => {
  return document.createElement("p");
};

const generateGradient = (colorOne, colorTwo) => {
  return `linear-gradient(${colorOne}, ${colorTwo})`;
};

const generateRandomNumberBetweenValues = (valueOne, valueTwo) => {
  const randomNumber = Math.floor(Math.random() * valueTwo) + valueOne;
  return randomNumber;
};

// STEP 4: USING FUNCTIONS, VARIABLES, AND LOOPS
for (let step = 0; step <= 5; step++) {
  // 1. CREATE ELEMENTS
  // Create Div Element for Step
  const newDivElement = createDivElement();
  // Create Paragraph Element for Step
  const newParagraphElement = createParagraphElement();

  // 2. CONFIGURE ELEMENTS
  // A. CONFIGURE NEW DIV
  // Get Color for Div Element
  const colorIndex = stepsArray[step] % 4;
  const newColor = colors[colorIndex];
  // Set Div Element Styles
  newDivElement.style.backgroundColor = newColor;
  // Set Div Element Classes
  newDivElement.classList.add("step");
  // If Even Number, Add Gradient
  if (step % 2 === 0) {
    // Get Random Number between 0 and Length of Colors Array
    const randomNumber = generateRandomNumberBetweenValues(
      0,
      colors.length - 1
    );
    // Get Color from Colors Array
    const gradientColor = colors[randomNumber];
    // Set Inline Gradient
    newDivElement.style.background = generateGradient(newColor, gradientColor);
  }
  // B. CONFIGURE PARAGRAPH
  // Set Paragraph Element Content
  newParagraphElement.innerHTML = stepsArray[step];

  // 3. ADD ELEMENTS TO WEBSITE
  // Append Step Div to Body
  bodyElement.appendChild(newDivElement);
  // Append Paragraph to Step Div
  newDivElement.appendChild(newParagraphElement);
}