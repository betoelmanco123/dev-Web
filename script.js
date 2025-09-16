const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  const colors = [
    "antiquewhite",
    "lightblue",
    "lightgreen",
    "pink",
    "lavender",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
