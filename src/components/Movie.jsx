import React from 'react';

function Movie(params) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster

    } = params;
    return (
        <div className="card movie" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ? <img className="activator" src='images/na_poster.png' alt={title} /> : <img className="activator" src={poster} alt={title} />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 ">{title}<i
                    className="material-icons right">{type}</i></span>
                <p>{year}</p>
            </div>
        </div>

    );
}

export {Movie}