import React, {useEffect, useState} from 'react';
import Tmdb from '../../Tmdb';
import './Home.css';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from './../../components/Header';

const Home = ( ) => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);
     
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

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 150){
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <div className="home">
            <Header black={blackHeader} />
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
            <footer> 
                Feito como prova de conceito por Sérgio Costa.
                Direitos de imagem para <a href="https://www.netflix.com/browse">Netflix</a>. 
                Conteudo pego da API disponibilizada pelo site <a href="https://www.themoviedb.org/?language=pt-BR">Themoviedb.org</a>.
            </footer>
            { movieList.length <= 0 &&
                <div className="loading"> 
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" width="550" />
                </div>
            }
        </div>
    )
}

export default Home
