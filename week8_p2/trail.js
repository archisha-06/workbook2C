const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let trail = [];

window.addEventListener("mousemove", (e) => {
  trail.push({ x: e.clientX, y: e.clientY, alpha: 1 });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < trail.length; i++) {
    const t = trail[i];
    ctx.beginPath();
    ctx.arc(t.x, t.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 255, ${t.alpha})`;
    ctx.shadowColor = "cyan";
    ctx.shadowBlur = 20;
    ctx.fill();
    t.alpha -= 0.02;
    if (t.alpha <= 0) {
      trail.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();


