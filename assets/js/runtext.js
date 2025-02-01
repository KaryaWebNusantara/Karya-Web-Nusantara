document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: [
      "Raih kesuksesan digital dengan website profesional yang dirancang khusus untuk kebutuhan Anda",
    ],
    typeSpeed: 35,
    backSpeed: 15,
    startDelay: 500,
    fadeOut: true,
    fadeOutDelay: 300,
    smartBackspace: true,
    showCursor: false,
    loop: false,
  });

  const heroImg = document.querySelector(".hero-img");
  heroImg.classList.add("animate-down");
});
