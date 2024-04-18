import fetch from "node-fetch"

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => response.json())
.then((pokemonObject) => {
  console.log(pokemonObject);
});