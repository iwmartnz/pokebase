import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Searchbar from './components/Searchbar';
import { usePokemons } from './hooks/usePokemons';
import Loading from './components/Loading';
import PokemonDetails from './components/PokemonDetails';

function App() {
    const [search, setSearch] = useState('');
    const { getPokemon, pokemon, loading, notFound } = usePokemons({ search });

    return (
        <>
            <Logo />
            <Searchbar
                query={search}
                setQuery={setSearch}
                getPokemon={getPokemon}
            />
            {loading ? (
                <Loading />
            ) : notFound ? (
                <p className='error-message'>
                    Found no results matching the name or id provided.
                </p>
            ) : pokemon ? (
                <PokemonDetails pokemon={pokemon} />
            ) : (
                <div className='welcome-message'>
                    <h1>Welcome to the pokemon finder app</h1>
                    <h2>
                        Please type the name or id of your favorite pokemon.
                    </h2>
                </div>
            )}
        </>
    );
}

export default App;
