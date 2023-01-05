import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemContext } from './../ItemStore/ItemStore';
import { useContext } from 'react';


export default function Platforms() {
    let { getPlatform } = useContext(itemContext);

    // let params = useParams();
    // console.log(params);
    // const [getPlatform, setgetPlatform] = useState([]);
    // async function getGamesByPlatform() {
    //     let response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
    //         {
    //             headers: {
    //                 'X-RapidAPI-Key':
    //                     'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    //                 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    //             }, params: {
    //                 platform: params.platform
    //             }
    //         });
    //     const list = response.data;
    //     console.log(list);
    //     setgetPlatform(list);

    // }
    // useEffect(() => {
    //     getGamesByPlatform();
    // }, []);


    return (
        <>
            <section className='content'>
                <div className="container">
                    <div className="row">
                        {getPlatform.slice(0, 10).map((game, key) =>
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
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
