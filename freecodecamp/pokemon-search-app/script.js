const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector(".search");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonID = document.querySelector("#pokemon-id");
const pokemonGambar = document.querySelector(".gambar");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const types = document.querySelector("#types");
const hp = document.querySelector("#hp");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const specialAttack = document.querySelector("#special-attack");
const specialDefense = document.querySelector("#special-defense");
const speed = document.querySelector("#speed");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const keyword = searchInput.value.toLowerCase();

  const response = await fetch(
    `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${keyword}`
  );
  if (!response.ok) {
    searchInput.value = "";
    return alert("Pokémon not found");
  }
  const data = await response.json();

  searchInput.value = "";

  pokemonName.textContent = data.name.toUpperCase();
  pokemonID.textContent = `#${data.id}`;

  pokemonGambar.setAttribute("id", "sprite");
  pokemonGambar.setAttribute("src", data.sprites.front_default);

  types.innerHTML = "";

  data.types.forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t.type.name.toUpperCase();
    types.appendChild(span);
  });

  height.textContent = data.height;
  weight.textContent = data.weight;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
});
