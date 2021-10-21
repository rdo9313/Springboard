// 1
document.getElementById("section");
// 2
document.querySelector("section");
// 3
document.querySelectorAll(".second");
// 4
document.querySelector("ol .third");
// 5
// const section = document.querySelector("#container");
// section.textContent = "Hello!";
// 6
const footer = document.querySelector(".footer");
footer.classList.add("main");
// 7
footer.classList.remove("main");
// 8
const newElement = document.createElement("li");
// 9
newElement.textContent = "four";
// 10
const ul = document.querySelector("ul");
ul.append(newElement);
// 11
const ol = document.querySelectorAll("ol li");
for (let li of ol) {
  li.style.backgroundColor = "green";
}
// 12
footer.remove();