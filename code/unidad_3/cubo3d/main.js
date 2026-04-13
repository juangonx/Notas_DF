const cube = document.getElementById("cube");

let rotateX = 0;
let rotateY = 0;

// Para arrastre
let isDragging = false;
let lastX = 0;
let lastY = 0;

// Velocidad (inercia)
let velocityX = 0;
let velocityY = 0;

// 🎮 TECLADO
document.addEventListener("keydown", (e) => {
  const step = 15;

  if (e.key === "ArrowUp") rotateX -= step;
  if (e.key === "ArrowDown") rotateX += step;
  if (e.key === "ArrowLeft") rotateY -= step;
  if (e.key === "ArrowRight") rotateY += step;
});

// 🖱️ MOUSE
document.addEventListener("mousedown", (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let dx = e.clientX - lastX;
  let dy = e.clientY - lastY;

  rotateY += dx * 0.5;
  rotateX -= dy * 0.5;

  velocityX = dy * 0.1;
  velocityY = dx * 0.1;

  lastX = e.clientX;
  lastY = e.clientY;
});

// 📱 TOUCH (celular)
document.addEventListener("touchstart", (e) => {
  isDragging = true;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  let dx = e.touches[0].clientX - lastX;
  let dy = e.touches[0].clientY - lastY;

  rotateY += dx * 0.5;
  rotateX -= dy * 0.5;

  velocityX = dy * 0.1;
  velocityY = dx * 0.1;

  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
});

// 🎬 ANIMACIÓN CON INERCIA
function animate() {
  rotateX -= velocityX;
  rotateY += velocityY;

  velocityX *= 0.95;
  velocityY *= 0.95;

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  requestAnimationFrame(animate);
}

animate();
