const data = [
  {
    image: "/src/designs/active-states.jpg",
    title: "order summary component",
    url: "/order-summary-component/index.html",
  },
  {
    image: "/src/designs/desktop-design.jpg",
    title: "profile card component",
    url: "/profile-card-component/index.html",
  },
  {
    image: "/src/designs/active-states2.jpg",
    title: "Sunnyside agency landing page",
    url: "/sunnyside-agency-landing-page/index.html",
  }
];

document.addEventListener("DOMContentLoaded", function () {
  fillCards();
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  next.addEventListener("click", function () {
    const currCard = document.querySelector(".card.view");
    const nextCard = currCard.nextElementSibling
      ? currCard.nextElementSibling
      : document.querySelector(".card-container").firstElementChild;
    currCard.classList.remove("view");
    nextCard.classList.add("view");
  });

  prev.addEventListener("click", function () {
    const currCard = document.querySelector(".card.view");
    const prevCard = currCard.previousElementSibling
      ? currCard.previousElementSibling
      : document.querySelector(".card-container").lastElementChild;
    currCard.classList.remove("view");
    prevCard.classList.add("view");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prev.click();
    else if (e.key === "ArrowRight") next.click();
    else return false;
  });

  document.querySelector(".btn").addEventListener("click", function () {
    const img = this.children[0];
    document.querySelector(".about").classList.toggle("view");
    
  });
});

function fillCards() {
  const container = document.querySelector(".card-container");
  data.forEach((data) => {
    const card = document.createElement("div"),
      cardImage = document.createElement("div"),
      img = document.createElement("img"),
      url = document.createElement("a");
    img.setAttribute("src", data.image);
    img.setAttribute("alt", data.title);
    url.textContent = data.title;
    url.setAttribute("href", data.url);
    url.setAttribute("target", "_blank");
    card.classList.add("card");
    cardImage.classList.add("card-image");
    if (data.title === "order summary component") {
      card.classList.add("view");
    }
    cardImage.appendChild(img);
    card.appendChild(cardImage);
    card.appendChild(url);
    container.appendChild(card);
  });
}
