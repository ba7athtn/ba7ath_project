const partners = [
  { src: "assets/logo1.png", alt: "Logo Partenaire 1" },
  { src: "assets/logo2.png", alt: "Logo Partenaire 2" },
  { src: "assets/logo3.png", alt: "Logo Partenaire 3" },
  { src: "assets/logo4.png", alt: "Logo Partenaire 4" },
  { src: "assets/logo5.png", alt: "Logo Partenaire 5" },
  { src: "assets/logo6.png", alt: "Logo Partenaire 6" }
];

const container = document.getElementById("partners-logos");

partners.forEach((partner, index) => {
  const img = document.createElement("img");
  img.src = partner.src;
  img.alt = partner.alt;
  img.classList.add("partner-logo", "fade-in-up");
  img.style.animationDelay = `${index * 150}ms`;
  container.appendChild(img);
});