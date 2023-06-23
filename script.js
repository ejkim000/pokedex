const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

// get the types array
const main_types = Object.keys(colors); // gives us back an array 

const fetchPokemons = async () => {
    for (let i=1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url); // fetch : HTTP call
    const data = await res.json(); // js object notation

    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const poke_number = pokemon.id;
    // make the first letter upper case
    const poke_name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    // map(): loop thru & returns array
    const poke_types = pokemon.types.map(type => type.type.name); 
    // find(): loop thru & returns the first element
    const poke_type = main_types.find(type => poke_types.indexOf(type) > -1); // -1 means not exist
    // set background color by the type
    pokemonEl.style.backgroundColor = colors[poke_type];

    // pokemon card
    pokemonEl.innerHTML = `
    <div class="image-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke_number}.png" alt="${poke_name}-img">
    </div>
    <div class="info">
        <span class="number">#${poke_number}</span>
        <h3 class="name">${poke_name}</h3>
        <small class="type">Type <span>${poke_type}</span></small>
    </div>
    `;

    poke_container.appendChild(pokemonEl);
}

fetchPokemons();