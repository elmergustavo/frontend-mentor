console.log('Hola mundo');

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    const ramdom = getRandomInt(1, 151);
    fetchData(ramdom);
});

const fetchData = async (id) => {
    try {
      console.log(id);
  
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      pintarCard(data);
    } catch (error) {
        console.log(error);
    }
};

const pintarCard = (pokemon) => {
    console.log(pokemon);
    const flex = document.querySelector(".flex");
    const template = document.getElementById("card").content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
  
    clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg);
    // clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgJuego)
    clone.querySelector(
      ".card-body-title"
    ).innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`;
    clone.querySelector(".card-body-text").textContent =
      pokemon.experiencia + " exp";
    clone.querySelectorAll(".card-footer-social h3")[0].textContent =
      pokemon.ataque + "K";
    clone.querySelectorAll(".card-footer-social h3")[1].textContent =
      pokemon.especial + "K";
    clone.querySelectorAll(".card-footer-social h3")[2].textContent =
      pokemon.defensa + "K";
  
    fragment.appendChild(clone);
    flex.appendChild(fragment);
};
  