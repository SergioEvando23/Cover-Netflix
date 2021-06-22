import React, {useEffect, useState} from 'react';
import Tmdb from '../../Tmdb';

const Home = ( ) => {
    const [moveList, setMoveList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
          //pegando a lista total
          let list = await Tmdb.getHomeList();
          console.log(list);
        }
        loadAll();
    }, [])

    return (
        <div>
            home page
        </div>
    )
}

export default Home
