import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const [allGames, setAllGames] = useState([]);
  async function getAllGames() {
    let response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
      {
        headers: {
          'X-RapidAPI-Key':
            'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      });
    const list = response.data.slice(0, 3);
    setAllGames(list);
    // console.log(response);
  }

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <>
      <section className='head-content' >
        <div className="container">
          <div className="row ">
            <div className="col-md-12  ">
              <div className="heading py-5 d-flex  justify-content-center align-items-center text-center">
                <div className='p-4'>
                  <h1>Find & track the best <span className='text-info'>free-to-play</span> games!</h1>
                  <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
                  <Link to='/all'><button className='btn btn-outline-secondary btn-md ml-0'>Browse Games</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='content'>
        <div className="container">
          <div className="row pb-5">
            <h3 className='text-muted py-4'> <i className='fas fa-robot mr-2'></i> Personalized Recommendations</h3>


            {allGames.map((game, key) => (
              <div className="col-md-4 game-scale shadow" key={key}>
                <div className="game bg-game">
                  <div className="img">
                    <img className='w-100' src={game.thumbnail} alt="" />
                  </div>
                  <div className="game-name d-flex justify-content-between p-4">
                    <h3 className='h6'>{game.title}</h3>
                    <span className='bg-info text-white rounded px-2'>Free</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
