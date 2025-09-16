const button1 = document.getElementById("colorButton");
const button2 = document.getElementById("language");
const name1 = document.getElementById("name");
const ocuppation = document.getElementById("ocuppation");
const freetime = document.getElementById("freetime");
const hobbies = document.getElementById("hobbies");
const chess = document.getElementById("chess");
const code = document.getElementById("code");
const otaku = document.getElementById("otaku");
let english = false;
button1.addEventListener("click", () => {
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

button2.addEventListener("click", () => {

    language()
});

const language = () => {
    if (english){
    ocuppation.textContent = "Estudio CS";
    freetime.textContent = "Estoy aprendiendo HTML";
    hobbies.textContent = "Mis pasatiempos son";
    chess.textContent = "Jugar ajedrez";
    code.textContent = "Aprender a programar";
    otaku.textContent = "Ver anime";
    english = false
    }else {
    ocuppation.textContent = "I'm a cs student";
    freetime.textContent = "I'm learning HTML";
    hobbies.textContent = "My hobbies are:";
    chess.textContent = "Play chess";
    code.textContent = "Learn how to code";
    otaku.textContent = "Watch anime";
    english = true
    }

    }



