import React from 'react';
import {Movie} from "./Movie";

function Movies(props) {
    const {movies =[]} = props
    return <div className='movies'>
        {
            movies.length ? movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                )
            ) : (<div className='not-found'>
                <div className="message">
                    <div className="row"><h4>Movie not found, please, search again...</h4></div>
                    <div className="row"><h3>let you be lucky ;)</h3></div>
                </div>
            </div>)
        }
    </div>
}

export {Movies}