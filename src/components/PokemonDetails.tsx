import { Pokemon } from '../types';

type PokemonDetailsProps = {
    pokemon: Pokemon | null;
};

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
    return (
        <div className='pokemon'>
            <figure className='sprite-container'>
                <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            </figure>
            <div className='pokemon-data-container'>
                <h2 className='list-heading'>Name:</h2>
                <p className='pokemon-name'>{pokemon?.name}</p>
                <div className='pokemon-metadata'>
                    <div>
                        <h2 className='list-heading'>Abilities</h2>
                        <ul className='list-container'>
                            {pokemon?.abilities.map((ability) => (
                                <li>- {ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className='list-heading'>Types</h2>
                        <ul className='list-container'>
                            {pokemon?.types.map((type) => (
                                <li>- {type.type.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
