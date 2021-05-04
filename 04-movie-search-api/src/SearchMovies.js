import React, { useState} from "react";
import MovieCard from './MovieCard';

export default function SearchMovies(){
    
    //state for input query
    const [query, setQuery] = useState('');

      //create the state for movies, and update that state appropriate
      const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {

        e.preventDefault();
        console.log("submitting");
        
        // const query = "Jurassic Park";
        const apiKey = ''; //Use your own API key and dont Share.
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" value={query}
                    placeholder="i.e. Jurassic Park" onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                   {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                   ))}
            </div>
        </>
    )
}