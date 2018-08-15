document.addEventListener("DOMContentLoaded", function() {
const pokemonArray = pHash["pokemons"]
const searchField = document.getElementById("pokemon-search-input")
const pokemonContainer = document.getElementById("pokemon-container")
console.log(pokemonContainer)

  searchField.addEventListener('keyup', (event) =>{
    let textInput = event.target.value

    pokemonList =  findMatchingPokemon(textInput)

    pokemonList.forEach(poke => render(poke))

  })

  function findMatchingPokemon(input){
    pokemonContainer.innerHTML = ""
    if (input != ""){
    return pokemonArray.filter( pokemon => pokemon.name.includes(input))
  }
  }

  function render(p){
    let div = document.createElement("div")
    div.innerHTML = `<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${p.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img id= "${p.name}" src="${p.sprites["front"]}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${p.name}" data-action="flip-image">flip card</p>
        </div>
    `
    pokemonContainer.appendChild(div)
  }

})
