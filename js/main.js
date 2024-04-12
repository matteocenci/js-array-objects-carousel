const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// Milestone 1: Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.


const slidesContainer = document.querySelector(".my-carousel-images");

images.forEach((curImage, index) => {

  let isActive = index === 0 ? "active" : "";

  console.log(curImage);
  const slideElem = `
  <div class ="my-carousel-item ${isActive}" carousel-item="${index}">
    <img class="img-fluid" src="${curImage.image}">
    <div class="item-description px-3">
      <h2>${curImage.title}</h2>
      <p>${curImage.text}</p>
    </div>
  </div>
  `;
  slidesContainer.innerHTML += slideElem;
});

const slides = document.querySelectorAll(".my-carousel-item");
console.log(slides);
let activeIndex = 0;

// slides[activeIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", showNext);
document.querySelector(".prev").addEventListener("click", showPrev);

function showNext () {

  slides[activeIndex].classList.remove("active");

  if(activeIndex < images.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;
  }
  slides[activeIndex].classList.add("active");
}

function showPrev () {
  
  slides[activeIndex].classList.remove("active");

  if(activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = images.length - 1;
  }

  slides[activeIndex].classList.add("active");
}




