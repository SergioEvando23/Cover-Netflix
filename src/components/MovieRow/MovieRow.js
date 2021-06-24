import React from 'react';
import './MovieRow.css';

const MovieRow = ({items, title}) => {
    return (
        <div>
            <h2 className="movieRow-title">{title}</h2>
            <div className="movieRow--listArea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                       <div key={key} className="movieRow--item">
                           <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow
