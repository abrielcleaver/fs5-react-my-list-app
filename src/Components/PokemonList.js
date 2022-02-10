import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ poke }) {
  return (
    <div className='poke'>
      {poke.map((pokemon, i) => 
        <Pokemon key={`${poke} - ${i}`} pokemon={pokemon} />
      )}
    </div>
  );
}
