# Pokemon Cards
- API : fetch, data handling
- Async & Await


## Need to know
> async & await
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- Instead of waiting for all data loaded(sync), show one by one already loaded (async)
```JavaScript
const fetchPokemons = async () => {
    for (let i=1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}
```

> map()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- Array.map(callbackFn, thisArg-optinonal)
- Loop thru & returns array
`const poke_types = pokemon.types.map(type => type.type.name); `


> find()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- find(callbackFn, thisArg-optinonal)
- Loop thru & returns the first element
`const poke_type = main_types.find(type => poke_types.indexOf(type) > -1);`


> indexOf()c
- indexOf(searchElement, fromIndex-optinonal)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
- returns the first index at which a given element can be found in the array
- -1 means not exist


> Object.keys()
- Object.keys(obj)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- returns an array of a given object's own enumerable string-keyed property names.\
`const main_types = Object.keys(colors);`