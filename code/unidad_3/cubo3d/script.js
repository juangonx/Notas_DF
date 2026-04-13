const cube = document.getElementById("cube");

let rotateX = 0;
let rotateY = 0;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      rotateX -= 90;
      break;
    case "ArrowDown":
      rotateX += 90;
      break;
    case "ArrowLeft":
      rotateY -= 90;
      break;
    case "ArrowRight":
      rotateY += 90;
      break;
  }

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
