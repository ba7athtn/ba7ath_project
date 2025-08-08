// Particules animées en arrière-plan sur canvas

const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

let particlesArray;
let width, height;

function initCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener('resize', () => {
  initCanvas();
  initParticles();
});

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0 || this.x > width) this.speedX *= -1;
    if(this.y < 0 || this.y > height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 221, 85, 0.8)';
    ctx.shadowColor = 'rgba(255, 221, 85, 0.6)';
    ctx.shadowBlur = 10;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const count = Math.floor((width * height) / 8000);
  for(let i = 0; i < count; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

initCanvas();
initParticles();
animate();

document.getElementById('exploreBtn').addEventListener('click', () => {
  alert("Bienvenue sur Ba7ath ! Bientôt plus de contenu dynamique ici.");
});