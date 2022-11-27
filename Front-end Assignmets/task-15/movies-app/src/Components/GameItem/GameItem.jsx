import React from 'react';

export default function GameItem({ allGames }) {
    return (
        <>
            {allGames.map((game, key) => (
                <div className="col-md-4 game-scale shadow" key={key} >
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
        </>
    );
}
