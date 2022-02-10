import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div>
        <h2>{pokemon.pokemon}</h2>
        <img src={pokemon.url_image} className='pokemon-img'/>
      </div>
    </Link>
  );
}
