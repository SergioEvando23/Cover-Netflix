import React, {useEffect, useState} from 'react';
import Tmdb from '../../Tmdb';
import './Home.css';
import MovieRow from '../../components/MovieRow/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';

const Home = ( ) => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);
    
    useEffect(() => {
        const loadAll = async () => {
          //pegando a lista total
          let list = await Tmdb.getHomeList();
          setMovieList(list);

          //pegando o fieature
          let originals =  list.filter(i=>i.slug === 'originals');
          let randomChonsen = Math.floor(Math.random() * (originals[0].items.results.length -1));
          let chosen = originals[0].items.results[randomChonsen];
          let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
          setFeatureData(chosenInfo);
        }
        loadAll();
    }, []);

    return (
        <div className="home">
            {featureData && 
                <FeaturedMovie item={featureData}/>
            }
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
