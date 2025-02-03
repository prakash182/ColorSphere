let btn1 = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let colorDisplay = document.getElementById("colorDisplay");
let color1 = "#004773"; // Default initial color1
let color2 = "#54d542"; // Default initial color2

const Hexvalues = () => {
  let myHexadecimal = "0123456789abcdef";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += myHexadecimal[Math.floor(Math.random() * 16)];
  }
  return color;
};

const updateBackground = () => {
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  colorDisplay.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
};

const handleButton1 = () => {
  color1 = Hexvalues();
  console.log("Color 1:", color1);
  updateBackground();
  btn1.innerText = color1;
};

const handleButton2 = () => {
  color2 = Hexvalues();
  console.log("Color 2:", color2);
  btn2.innerText = color2;
  updateBackground();
};

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);

colorDisplay.addEventListener('click', () => {
  navigator.clipboard.writeText(colorDisplay.innerText);
});
