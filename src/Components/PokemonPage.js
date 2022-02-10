import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from '../services/fetch-utils';

export default function PokemonPage() {
  const [poke, setPoke] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 21;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const poke = await getPokemon(from, to);

      setPoke(poke);
    }
    fetch();
    // what can you do with this array to trigger a fetch every time the page changes?
  }, [page]);

  return <div>
    <header>
      hello, welcome to the pokemon page!
    </header>
    <div className='buttons' >
      {/* on click, this button should decrement the page in state  */}
      {/* also, disable this button when you are on the first page */}
      <button 
        onClick={() => setPage(page - 1)} 
        disabled={page === 1}>
        Previous Deck
      </button>

      {/* on click, this button should increment the page in state  */}
      <button 
        onClick={() => setPage(page + 1)} 
        disabled={poke.length < perPage}>
        Next Deck
      </button>

      {/* pass the pokemon (poke) into the PokemonList component */}
      <PokemonList poke={poke} />
    </div>
  </div>;
}

