import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export let itemContext = createContext(0);

function ItemContextProvider(props) {
    // 
    let params = useParams();
    const [getPlatform, setgetPlatform] = useState([]);
    
    async function getGamesByPlatform() {
        let response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
            {
                headers: {
                    'X-RapidAPI-Key':
                        'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }, params: {
                    platform: params.platform
                }
            });
        const list = response.data;
        console.log(list);
        setgetPlatform(list);

    }
    useEffect(() => {
        getGamesByPlatform();
    }, []);
    // 
    return <itemContext.Provider value={{ getPlatform }}>
        {props.children}
    </itemContext.Provider>;
}

export default ItemContextProvider;
