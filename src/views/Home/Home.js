import React, {useEffect, useState} from 'react';
import Tmdb from '../../Tmdb';
import useStyles from './Home.style';

const Home = ( ) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
          //pegando a lista total
          let list = await Tmdb.getHomeList();
          setMovieList(list);
        }
        loadAll();
    }, []);

    const Styles = useStyles();

    return (
        <div style={Styles.Home}>
          home
        </div>
    )
}

export default Home
