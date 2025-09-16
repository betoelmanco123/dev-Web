const button1 = document.getElementById("colorButton");
const button2 = document.getElementById("language");
const name1 = document.getElementById("name")
const ocuppation = document.getElementById("ocuppation")
const freetime = document.getElementById("freetime")
const hobbies = document.getElementById("hobbies")
const chess = document.getElementById("chess")
const code = document.getElementById("code")
const otaku = document.getElementById("otaku")

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
    ocuppation.textContent = "I'm a cs student";
    freetime.textContent = "I'm learning HTML";
    hobbies.textContent = "My hobbies are:";
    chess.textContent = "Play chess";
    code.textContent = "Learn how to code";
    otaku.textContent = "Watch anime";
    
}
)
