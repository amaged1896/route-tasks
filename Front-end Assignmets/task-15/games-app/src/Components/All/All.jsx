import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GameItem from '../GameItem/GameItem';

export default function All() {
  const [allGames, setAllGames] = useState([]);

  async function displayAllGames() {
    let response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
      {
        headers: {
          'X-RapidAPI-Key':
            'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      });
    const list = response.data.slice(0, 40);
    setAllGames(list);
    // console.log(list);
  }


  useEffect(() => {
    displayAllGames();
  }, []);



  return (
    <>
      <section className='content'>
        <div className="container">
          <div className="row">
            <GameItem allGames={allGames} />
          </div>
        </div>

      </section>
    </>
  );
}
