import React, {useEffect, useState} from 'react';
import Tmdb from '../../Tmdb';

const Home = ( ) => {

    useEffect(() => {
        const loadAll = async () => {
          //pegando a lista total
          let list = await Tmdb.getHomeList();
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
