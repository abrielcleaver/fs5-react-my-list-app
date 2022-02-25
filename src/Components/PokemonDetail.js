import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from '../services/fetch-utils';

export default function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const data = await getSinglePokemon(params.id);

      setPokemon(data);
    }
    fetch();
  }, [params.id]);

  function handlePokemonDetail() {
    window.open(pokemon.pokedex);
  }
  return <div>
    <div>
      <Link to="/">Home Page</Link>
      <div onClick={handlePokemonDetail} className='pokemon-detail'>
        <h2>{pokemon.pokemon}</h2>
        <img src={pokemon.url_image} className='pokemon-img'/>
        <p>HP: {pokemon.hp}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Shape: {pokemon.shape}</p>
        <p>Height: {pokemon.height} / Weight: {pokemon.weight}</p>
        <p>Ability: {pokemon.ability_1}</p>
      </div>
    </div>
  </div>;
}
 

