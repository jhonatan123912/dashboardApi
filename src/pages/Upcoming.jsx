import React from "react";
import { fw } from "../utils/fw";
import { useEffect, useState } from 'react';
// import { getMovieList } from "../api";

const Upcoming = () => {
  const [npMovies, setNpMovies] = useState([]);

  const fetchUpcoming = async () => {
    try {
      const response = await fw
      ({
        url:  "https://api.themoviedb.org/3/movie/", 
        endpoint:"upcoming"
      })
      console.log(response)

      const{results} = response

      setNpMovies(results)     
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUpcoming()
  }, []);

    
    return (
      <div>
        <h1 className="h1">Upcoming</h1>
        <div className="movieContainer">
        {
          npMovies.map((movie, index) => 
            
            <div className="movie-wrapper" key={index}>
              <div className="movie-title">{movie.title}</div>
              <img className="movie-image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title}/>
              <div className="movie-date">{movie.release_date}</div>
              <div className="movie-rate">{movie.vote_average}</div>
            </div>
             
          )
        }
      </div>
      </div>
    )

};

export default Upcoming;
