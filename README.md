# Pokemon Cards
- API


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
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

> find()

> indexOf()