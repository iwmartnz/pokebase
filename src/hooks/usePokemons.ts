import { useState } from 'react';
import { searchPokemons } from '../services/pokemons';
import { Pokemon } from '../types';

type HookProps = {
    search: string;
};

export const usePokemons = ({ search }: HookProps) => {
    const [pokemon, setPokemon] = useState<null | Pokemon>(null);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const getPokemon = async (search: string) => {
        try {
            setLoading(true);
            setNotFound(false);
            const newPokemon = await searchPokemons(search);
            setPokemon(newPokemon);
            console.log(newPokemon);
        } catch (error) {
            setNotFound(true);
            throw new Error('Failed to get pokemon details');
        } finally {
            setLoading(false);
        }
    };

    return { getPokemon, pokemon, loading, notFound };
};
