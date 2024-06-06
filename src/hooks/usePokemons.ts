import { useCallback, useRef, useState } from 'react';
import { searchPokemons } from '../services/pokemons';
import { Pokemon } from '../types';

type HookProps = {
    search: string;
};

export const usePokemons = ({ search }: HookProps) => {
    const [pokemon, setPokemon] = useState<null | Pokemon>(null);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const previousSearch = useRef(search);

    const getPokemon = useCallback(async (search: string) => {
        if (search === previousSearch.current) return;
        try {
            setLoading(true);
            setNotFound(false);
            previousSearch.current = search;
            const newPokemon = await searchPokemons(search);
            setPokemon(newPokemon);
        } catch (error) {
            setNotFound(true);
            throw new Error('Failed to get pokemon details');
        } finally {
            setLoading(false);
        }
    }, []);

    return { getPokemon, pokemon, loading, notFound };
};
