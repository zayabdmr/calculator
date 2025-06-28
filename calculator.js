const body = document.querySelector("body");

const array = [
  "(",
  ")",
  "❤️",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

const container = document.createElement("div");
const input = document.createElement("input");
input.setAttribute("readonly", true);
input.className = "input";

body.appendChild(input);
body.appendChild(container);
container.className = "container";

function createElement(tag, appendTo, className, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  element.className = className;

  if (text === "❤️") {
    element.classList.add("heart-btn");
  }

  element.onclick = () => {
    if (text === "AC") {
      input.value = "";
    } else if (text === "=") {
      try {
        input.value = eval(input.value);
      } catch (e) {
        input.value = "Error";
      }
    } else if (text === "❤️") {
      return;
    } else {
      input.value += text;
    }
  };

  appendTo.appendChild(element);
}

for (let i = 0; i < array.length; i++) {
  createElement("button", container, "btn", array[i]);
}
