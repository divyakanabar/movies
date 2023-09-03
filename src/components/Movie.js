import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass= (vote) =>{
    if(vote>= 8){
        return "green"
    }
    else if(vote>=6){
        return "orange"
    }
    else return "red"
}

export default function Movie({ title, poster_path, overview, vote_average }) {
    return (
        <div className="movie">
            <img src={poster_path? (IMG_API + poster_path) : "https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className=
                    {`tag ${setVoteClass(vote_average)}`
                    }>
                    {vote_average}
                </span>
            </div>

            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
