const container = document.querySelector(".container");

for (let i = 0; i <= 1000; i++) {
  const pixelBox = document.createElement("div");
  pixelBox.classList.add("pixel-box");
  container.appendChild(pixelBox);
}
