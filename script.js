// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// AOS
AOS.init({
  duration: 1200,
});

// TYPING EFFECT
const typing = document.querySelector(".typing");

const texts = [
  "Industrial Engineering Student",
  "Quality Control Enthusiast",
  "Accounting Administration",
  "Creative & Discipline Person"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

function typeWriter() {

  if(charIndex < texts[textIndex].length){

    typing.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  }else{

    setTimeout(eraseText, 1500);

  }

}

function eraseText(){

  if(typing.textContent.length > 0){

    typing.textContent =
      typing.textContent.slice(0, -1);

    setTimeout(eraseText, 50);

  }else{

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter, 500);

  }

}

document.addEventListener("DOMContentLoaded", () => {

  if(texts.length){
    setTimeout(typeWriter, 1000);
  }

});

// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// SCROLL EFFECT NAVBAR
window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 50);

});

// INTERACTIVE PARTICLE
document.addEventListener("mousemove", (e) => {

  const particles = document.getElementById("particles");

  particles.style.background = `
    radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(255,0,76,0.15),
    transparent 15%),
    radial-gradient(circle at top left,#ff004c33,transparent 20%),
    radial-gradient(circle at bottom right,#00f0ff22,transparent 20%),
    #050816
  `;

});