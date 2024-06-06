import type { Pokemon } from '../types';

export const searchPokemons = async (search: string) => {
    if (search === '') return null;

    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${search}`
        );
        const json = await response.json();
        const pokemon: Pokemon = {
            name: json.name,
            types: json.types,
            abilities: json.abilities,
            sprites: json.sprites,
        };
        return pokemon;
    } catch (error) {
        throw new Error('Oops, we encounter an error seaching for pokemons');
    }
};
