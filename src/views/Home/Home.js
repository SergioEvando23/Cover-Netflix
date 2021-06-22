import React, {useEffect, useState} from 'react';
import Tmdb from '../../Tmdb';
import './Home.css';
import MovieRow from '../../components/MovieRow/MovieRow';

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

    return (
        <div className="home">
          <section className="lists">
              {movieList.map((item) =>(
                  <div key={item.id}>
                      <MovieRow key={item.id} title={item.title} items={item.items} />
                  </div>
              ))}
          </section>
        </div>
    )
}

export default Home
