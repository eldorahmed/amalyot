const insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="key" >${e.key == " " ? "Space" : e.key}
     <small>key</small>
    </div>
    <div class="key">${e.code}
     <small>code</small>
    </div>
    <div class="key">${e.which}
     <small>which</small>
    </div>
    `;
});

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const textColor = document.querySelector(".text-color");
let colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * colors.length);
    randomColor += colors[randomNum];
  }
  return randomColor;
}
btn.addEventListener("click", () => {
  let randomDeg = Math.floor(Math.random() * 360);
  let color1 = getGradient();
  let color2 = getGradient();
  let bgColor = `linear-gradient(${randomDeg}deg,${color1},${color2})`;
  body.style.background = bgColor;
  textColor.textContent = bgColor;
});
