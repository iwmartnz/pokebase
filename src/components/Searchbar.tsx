import React from 'react';
import searchIcon from '../assets/search.svg';

type SearchbarProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    getPokemon: (search: string) => void;
};

function Searchbar({ query, setQuery, getPokemon }: SearchbarProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setQuery(value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        getPokemon(query);
    }

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <input
                type='text'
                name=''
                id=''
                placeholder='e.g Charizard'
                value={query}
                onChange={handleChange}
            />
            <button>
                <img src={searchIcon} alt='' />
            </button>
        </form>
    );
}

export default Searchbar;
